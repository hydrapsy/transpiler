/* lexical grammar */
%lex
%%

\s+                   /* skip whitespace */
"$"                   return "$"
"def"                 return "def"
"self"                return "self"
"end"                 return "end"
"each"                return "each"
"elsif"               return 'elsif'
"if"                  return 'if'
"else"                return 'else'
"when"                return 'when'
"case"                return 'case'
"class"               return 'class'
"return"              return 'return'
"yield"               return 'yield'
"while"               return 'while'
"then"                return "then"
"for"                 return 'for'
"do"                  return 'do'
","                   return ','
"..."                 return '...'
".."                  return '..'
"."                   return '.'
":"                   return ':'
";"                   return ';'
"&&"                  return '&&'
"||"                  return '||'
"|"                   return "|"
"!="                  return '!='
'!'                   return '!'
"=>"                  return '=>'
">="                  return '>='
">"                   return '>'
"<="                  return '<='
"<"                   return '<'
"=="                  return '=='
"="                   return '='
"*="                  return '*='
"*"                   return '*'
"/"                   return '/'
"-="                  return '-='
"-"                   return '-'
"+="                  return '+='
"+"                   return '+'
"^"                   return '^'
"{"                   return '{'
"}"                   return '}'
"]["                  return ']['
"["                   return '['
"]"                   return ']'
"("                   return '('
")"                   return ')'
[a-zA-Z_][a-zA-Z0-9_]* return 'IDENTIFIER'
[0-9]+("."[0-9]+)?\b  return 'NUMBER'
\"([^\\\"]|\\.)*\" return 'STRING_LITERAL'
<<EOF>>               return 'EOF'
.                     return 'INVALID'

/lex

/* operator associations and precedence */

%left '||'
%left '&&'
%left '<' '<=' '>' '>=' '!=' '=='
%left '+' '-'
%left '*' '/'
%left UMINUS

%start expressions

%% /* language grammar */

expressions
    : statements EOF
        {return $1;}
    ;

statements_: statement statements_ {$$ = [$1].concat($2);} | statement {$$ =
 [$1];};



class_:
	"class" IDENTIFIER class_statements "end" {$$ = [$1,"public",$2,$3];};

class_statement:
	"def" OPERATOR "(" parameters ")" statements "end" {$$ = ["instance_overload_operator","public","Object",$2,$4,$6];}
	| "def" "self" "." IDENTIFIER "(" parameters ")" statements "end" {$$ = ["static_method","public","Object",$4,$6,$8];}
	| "def" IDENTIFIER "(" parameters ")" statements "end" {$$ = ["instance_method","public","Object",$2,$4,$6];}
	;

OPERATOR: "<="|">="|"<"|">"|"&&"|"||"|"=="|"+"|"-"|"*"|"/";

class_statements_: class_statement class_statements_ {$$ = [$1].concat($2);} | class_statement {$$ =
 [$1];}; 
class_statements: class_statements_ {$$ = ["class_statements",$1]};

statements: statements_ {$$ = ["statements",$1]};

case_statement: "when" e statements {$$ = ["case",$2,$3]};
case_statements_: case_statement case_statements_ {$$ = [$1].concat($2);} | case_statement {$$ =
 [$1];};
case_statements: case_statements_ "else" statements {$$ = $1.concat([["default",$3]])} | case_statements_;


statement
    :
    statement_with_semicolon ";" {$$ = ["semicolon",$1];}
    | statement_with_semicolon {$$ = ["semicolon",$1];}
    | class_
    | "while" e "do" statements "end" {$$ = ["while",$2,$4];}
    | "while" e statements "end" {$$ = ["while",$2,$3];}
    | "case" e case_statements "end" {$$ = ["switch",$2,$3];}
    | IDENTIFIER "." "each" "do" "|" IDENTIFIER "|" statements "end" {$$ = ["foreach","Object",$6,$1,$8];}
    | if_statement
    | "def" IDENTIFIER "(" parameters ")" statements "end" {$$ = ["function","public","Object",$2,$4,$6];}
    ;

statement_with_semicolon
   : 
   function_call
   |"yield" e  {$$ = ["yield",$2];}
   |"return" e  {$$ = ["return",$2];}
   | "local" IDENTIFIER "=" e {$$ = ["initialize_var","Object",$2,$4];}
   | "local" identifiers {$$ = ["initialize_empty_vars","Object",$2];}
   | access_array "+=" e {$$ = ["+=",$1,$3];}
   | IDENTIFIER "+=" e {$$ = ["+=",$1,$3];}
   | access_array "/=" e {$$ = ["/=",$1,$3];}
   | IDENTIFIER "/=" e {$$ = ["/=",$1,$3];}
   | access_array "*=" e {$$ = ["*=",$1,$3];}
   | IDENTIFIER "*=" e {$$ = ["*=",$1,$3];}
   | access_array "-=" e {$$ = ["-=",$1,$3];}
   | IDENTIFIER "-=" e {$$ = ["-=",$1,$3];}
   | access_array "=" e {$$ = ["set_var",$1,$3];}
   | IDENTIFIER "=" e {$$ = ["set_var",$1,$3];}
   | IDENTIFIER "." dot_expr {$$ = [".",[$1].concat($3)]}
   ;
e:
    "*" parentheses_expr {$$ = ["unpack_array",$2]}
    | parentheses_expr "..." parentheses_expr {$$ = ["exclusive_range",$1,$3]}
    | parentheses_expr ".." parentheses_expr {$$ = ["inclusive_range",$1,$3]}
    |e '||' e
        {$$ = [$2,$1,$3];}
    |e '&&' e
        {$$ = [$2,$1,$3];}
    |e '<=' e
        {$$ = [$2,$1,$3];}
    |e '<' e
        {$$ = [$2,$1,$3];}
    | e '>=' e
        {$$ = [$2,$1,$3];}
    |e '>' e
        {$$ = [$2,$1,$3];}
    | e '==' e
        {$$ = [$2,$1,$3];}
    | e '!=' e
        {$$ = [$2,$1,$3];}
    | e '+' e
        {$$ = [$2,$1,$3];}
    | e '-' e
        {$$ = ["-",$1,$3];}
    | e '*' e
        {$$ = [$2,$1,$3];}
    | e '/' e
        {$$ = [$2,$1,$3];}
    | '-' e %prec UMINUS
        {$$ = ["-",$2];}
    | not_expr
    ;


not_expr: "!" dot_expr {$$ = ["!", [".",$2]];} | dot_expr {$$ = [".", $1];};


function_call: IDENTIFIER "(" ")" {$$ = ["function_call",$1,[]]} | IDENTIFIER "(" exprs ")" {$$ = ["function_call",$1,$3]};
dot_expr: dot_expr "(" ")" {$$ = ["function_call",$1,[]]} | dot_expr "(" exprs ")" {$$ = ["function_call",$1,$3]} | dot_expr "." parentheses_expr {$$ = [$1].concat($3);} | parentheses_expr {$$ =
 [$1];};

access_array: IDENTIFIER "[" access_arr "]" {$$ = ["access_array",$1,$3];};

parentheses_expr:
    "[" "]" {$$ = ["initializer_list","Object",[]];} | "[" exprs "]" {$$ = ["initializer_list","Object",$2];}
    | "{" "}" {$$ = ["associative_array","Object",[]];} | "{" key_values "}" {$$ = ["associative_array","Object","Object",$2];}
    | '(' e ')'} {$$ = ["parentheses",$2];}
    | access_array
    | NUMBER
        {$$ = yytext;}
    | IDENTIFIER
        {$$ = yytext;}
    | STRING_LITERAL
        {$$ = yytext;};

key_values: key_values "," key_value {$$ = $1.concat([$3]);} | key_value {$$ = [$1];};
key_value: STRING_LITERAL "=>" e {$$ = [$1,$3]};

type: IDENTIFIER;
parameter: IDENTIFIER {$$ = ["Object", $1];} | IDENTIFIER ":" e {$$ = ["default_parameter","Object",$1,$3];};
parameters: parameter "," parameters {$$ = [$1].concat($3);} | parameter {$$ =
 [$1];}
| {$$ = [];};

access_arr: parentheses_expr "][" access_arr {$$ = [$1].concat($3);} | parentheses_expr {$$ =
 [$1];};
exprs: e "," exprs {$$ = [$1].concat($3);} | e {$$ = [$1];};
types: type "," types {$$ = [$1].concat($3);} | type {$$ = [$1];};
elif:
    "elsif" e "then" statements elif {$$ = ["elif",$2,$4,$5]}
    | "elsif" e "then" statements {$$ = ["elif",$2,$4]} 
    | "elsif" e statements elif {$$ = ["elif",$2,$3,$4]}
    | "elsif" e statements {$$ = ["elif",$2,$3]} 
    | "else" statements {$$ = ["else",$2];};
if_statement:
	"if" e "then" statements elif "end" {$$ = ["if",$2,$4,$5];}
    | "if" e "then" statements "end" {$$ = ["if",$2,$4];}
	| "if" e statements elif "end" {$$ = ["if",$2,$3,$4];}
	| "if" e statements "end" {$$ = ["if",$2,$3];};
identifiers: IDENTIFIER "," identifiers {$$ = [$1].concat($3);} | IDENTIFIER {$$ = [$1];};
