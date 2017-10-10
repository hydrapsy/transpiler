/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var perl_parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,16],$V1=[1,7],$V2=[1,8],$V3=[1,10],$V4=[1,11],$V5=[1,12],$V6=[1,13],$V7=[1,17],$V8=[1,18],$V9=[5,18],$Va=[5,15,18,21,25,30,33,34,35,72,74],$Vb=[1,30],$Vc=[1,27],$Vd=[1,31],$Ve=[1,33],$Vf=[1,34],$Vg=[1,35],$Vh=[1,46],$Vi=[1,53],$Vj=[20,24],$Vk=[1,56],$Vl=[1,57],$Vm=[1,58],$Vn=[1,59],$Vo=[1,60],$Vp=[1,61],$Vq=[1,62],$Vr=[1,63],$Vs=[1,64],$Vt=[1,65],$Vu=[1,66],$Vv=[1,67],$Vw=[20,24,45,46,47,48,49,50,51,52,53,54,55,56,68],$Vx=[1,69],$Vy=[20,22,24,45,46,47,48,49,50,51,52,53,54,55,56,60,68,69],$Vz=[2,76],$VA=[1,74],$VB=[50,68,74],$VC=[1,119],$VD=[1,118],$VE=[20,24,45,46,68],$VF=[20,24,45,46,47,48,49,50,68],$VG=[20,24,45,46,47,48,49,50,51,52,53,68],$VH=[1,161],$VI=[16,18,32];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expressions":3,"statements":4,"EOF":5,"statements_":6,"statement":7,"class_statements":8,"class_statements_":9,"class_statement":10,"access_modifier":11,"public":12,"private":13,"class_":14,"class":15,"IDENTIFIER":16,"{":17,"}":18,"statement_with_semicolon":19,";":20,"while":21,"(":22,"e":23,")":24,"for":25,"type":26,"var_name":27,":":28,"if_statement":29,"function":30,"parameters":31,"static":32,"print":33,"return":34,"my":35,"=":36,"var_names":37,"access_array":38,"++":39,"--":40,"+=":41,"-=":42,"*=":43,"/=":44,"||":45,"&&":46,"<=":47,"<":48,">=":49,">":50,"+":51,".":52,"-":53,"*":54,"/":55,"%":56,"parentheses_expr":57,"[":58,"access_arr":59,"]":60,"exprs":61,"NUMBER":62,"STRING_LITERAL":63,"E":64,"PI":65,"types":66,"parameter":67,",":68,"][":69,"elif":70,"else":71,"if":72,"else_statement":73,"$":74,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",12:"public",13:"private",15:"class",16:"IDENTIFIER",17:"{",18:"}",20:";",21:"while",22:"(",24:")",25:"for",28:":",30:"function",32:"static",33:"print",34:"return",35:"my",36:"=",39:"++",40:"--",41:"+=",42:"-=",43:"*=",44:"/=",45:"||",46:"&&",47:"<=",48:"<",49:">=",50:">",51:"+",52:".",53:"-",54:"*",55:"/",56:"%",58:"[",60:"]",62:"NUMBER",63:"STRING_LITERAL",64:"E",65:"PI",68:",",69:"][",71:"else",72:"if",74:"$"},
productions_: [0,[3,2],[6,2],[6,1],[8,1],[4,1],[9,2],[9,1],[11,1],[11,1],[14,5],[7,2],[7,1],[7,7],[7,11],[7,10],[7,1],[7,8],[10,8],[10,7],[19,4],[19,2],[19,4],[19,2],[19,3],[19,3],[19,2],[19,2],[19,3],[19,3],[19,3],[19,3],[23,3],[23,3],[23,3],[23,3],[23,3],[23,3],[23,3],[23,3],[23,3],[23,3],[23,3],[23,3],[23,2],[23,1],[38,4],[57,1],[57,3],[57,4],[57,2],[57,3],[57,1],[57,1],[57,1],[57,1],[57,1],[26,3],[26,4],[26,1],[67,1],[31,3],[31,1],[59,3],[59,1],[61,3],[61,1],[66,3],[66,1],[70,9],[70,1],[73,4],[29,8],[29,7],[27,2],[37,3],[37,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
return $$[$0-1];
break;
case 2: case 6:
this.$ = [$$[$0-1]].concat($$[$0]);
break;
case 3: case 7: case 62: case 64:
this.$ =
 [$$[$0]];
break;
case 4:
this.$ = ["class_statements",$$[$0]]
break;
case 5:
this.$ = ["statements",$$[$0]]
break;
case 10:
this.$ = [$$[$0-4],$$[$0-3],$$[$0-1]];
break;
case 11:
this.$ = ["semicolon",$$[$0-1]];
break;
case 13:
this.$ = ["while",$$[$0-4],$$[$0-1]];
break;
case 14:
this.$ = ["for",$$[$0-8],$$[$0-6],$$[$0-4],$$[$0-1]];
break;
case 15:
this.$ = ["foreach",$$[$0-7],$$[$0-6],$$[$0-4],$$[$0-1]];
break;
case 17:
this.$ = ["function","Object",$$[$0-6],$$[$0-4],$$[$0-1]];
break;
case 18:
this.$ = ["static_method","public","Object",$$[$0-6],$$[$0-4],$$[$0-1]];
break;
case 19:
this.$ = ["instance_method","public","Object",$$[$0-6],$$[$0-4],$$[$0-1]];
break;
case 20:
this.$ = ["println",$$[$0-1]];
break;
case 21:
this.$ = ["return",$$[$0]];
break;
case 22:
this.$ = ["initialize_var","Object",$$[$0-2],$$[$0]];
break;
case 23:
this.$ = ["initialize_empty_vars","Object",$$[$0]];
break;
case 24: case 25:
this.$ = ["set_var",$$[$0-2],$$[$0]];
break;
case 26:
this.$ = ["plus_plus",$$[$0-1]];
break;
case 27:
this.$ = ["minus_minus",$$[$0-1]];
break;
case 28:
this.$ = ["plus_equals",$$[$0-2],$$[$0]];
break;
case 29:
this.$ = ["minus_equals",$$[$0-2],$$[$0]];
break;
case 30:
this.$ = ["times_equals",$$[$0-2],$$[$0]];
break;
case 31:
this.$ = ["divide_equals",$$[$0-2],$$[$0]];
break;
case 32: case 33: case 34: case 35: case 36: case 37: case 38: case 39: case 41: case 42: case 43:
this.$ = [$$[$0-1],$$[$0-2],$$[$0]];
break;
case 40:
this.$ = ["-",$$[$0-2],$$[$0]];
break;
case 44:
this.$ = ["-",$$[$0]];
break;
case 45: case 74:
this.$ = $$[$0];
break;
case 46:
this.$ = ["access_array",$$[$0-3],$$[$0-1]];
break;
case 48:
this.$ = ["function_call",$$[$0-2],[]];
break;
case 49:
this.$ = ["function_call",$$[$0-3],$$[$0-1]];
break;
case 50:
this.$ = ["initializer_list_or_parentheses",[]];
break;
case 51:
this.$ = ["initializer_list",$$[$0-1]];
break;
case 52: case 53: case 54:
this.$ = yytext;
break;
case 55:
this.$ = Math.E;
break;
case 56:
this.$ = Math.PI;
break;
case 57:
this.$ = [$$[$0-2],"[]"];
break;
case 58:
this.$ = [$$[$0-3],$$[$0-1]]
break;
case 60:
this.$ = ["Object", $$[$0]];
break;
case 61: case 63: case 65: case 67: case 75:
this.$ = [$$[$0-2]].concat($$[$0]);
break;
case 66: case 68: case 76:
this.$ = [$$[$0]];
break;
case 69:
this.$ = ["elif",$$[$0-5],$$[$0-2],$$[$0]]
break;
case 71:
this.$ = ["else",$$[$0-1]];
break;
case 72:
this.$ = ["if",$$[$0-5],$$[$0-2],$$[$0]];
break;
case 73:
this.$ = ["if",$$[$0-4],$$[$0-1]];
break;
}
},
table: [{3:1,4:2,6:3,7:4,14:6,15:$V0,19:5,21:$V1,25:$V2,27:15,29:9,30:$V3,33:$V4,34:$V5,35:$V6,38:14,72:$V7,74:$V8},{1:[3]},{5:[1,19]},o($V9,[2,5]),o($V9,[2,3],{7:4,19:5,14:6,29:9,38:14,27:15,6:20,15:$V0,21:$V1,25:$V2,30:$V3,33:$V4,34:$V5,35:$V6,72:$V7,74:$V8}),{20:[1,21]},o($Va,[2,12]),{22:[1,22]},{22:[1,23]},o($Va,[2,16]),{16:[1,24]},{22:[1,25]},{22:$Vb,23:26,27:32,38:29,53:$Vc,57:28,62:$Vd,63:$Ve,64:$Vf,65:$Vg,74:$V8},{27:36,37:37,74:$V8},{36:[1,38]},{36:[1,39],39:[1,40],40:[1,41],41:[1,42],42:[1,43],43:[1,44],44:[1,45],58:$Vh},{16:[1,47]},{22:[1,48]},{16:[1,49]},{1:[2,1]},o($V9,[2,2]),o($Va,[2,11]),{22:$Vb,23:50,27:32,38:29,53:$Vc,57:28,62:$Vd,63:$Ve,64:$Vf,65:$Vg,74:$V8},{16:$Vi,19:51,26:52,27:15,33:$V4,34:$V5,35:$V6,38:14,74:$V8},{22:[1,54]},{22:$Vb,23:55,27:32,38:29,53:$Vc,57:28,62:$Vd,63:$Ve,64:$Vf,65:$Vg,74:$V8},o($Vj,[2,21],{45:$Vk,46:$Vl,47:$Vm,48:$Vn,49:$Vo,50:$Vp,51:$Vq,52:$Vr,53:$Vs,54:$Vt,55:$Vu,56:$Vv}),{22:$Vb,23:68,27:32,38:29,53:$Vc,57:28,62:$Vd,63:$Ve,64:$Vf,65:$Vg,74:$V8},o($Vw,[2,45],{22:$Vx}),o($Vy,[2,47]),{22:$Vb,23:72,24:[1,70],27:32,38:29,53:$Vc,57:28,61:71,62:$Vd,63:$Ve,64:$Vf,65:$Vg,74:$V8},o($Vy,[2,52]),o($Vy,[2,53],{58:$Vh}),o($Vy,[2,54]),o($Vy,[2,55]),o($Vy,[2,56]),o($Vj,$Vz,{36:[1,73],68:$VA}),o($Vj,[2,23]),{22:$Vb,23:75,27:32,38:29,53:$Vc,57:28,62:$Vd,63:$Ve,64:$Vf,65:$Vg,74:$V8},{22:$Vb,23:76,27:32,38:29,53:$Vc,57:28,62:$Vd,63:$Ve,64:$Vf,65:$Vg,74:$V8},o($Vj,[2,26]),o($Vj,[2,27]),{22:$Vb,23:77,27:32,38:29,53:$Vc,57:28,62:$Vd,63:$Ve,64:$Vf,65:$Vg,74:$V8},{22:$Vb,23:78,27:32,38:29,53:$Vc,57:28,62:$Vd,63:$Ve,64:$Vf,65:$Vg,74:$V8},{22:$Vb,23:79,27:32,38:29,53:$Vc,57:28,62:$Vd,63:$Ve,64:$Vf,65:$Vg,74:$V8},{22:$Vb,23:80,27:32,38:29,53:$Vc,57:28,62:$Vd,63:$Ve,64:$Vf,65:$Vg,74:$V8},{22:$Vb,27:32,38:29,57:82,59:81,62:$Vd,63:$Ve,64:$Vf,65:$Vg,74:$V8},{17:[1,83]},{22:$Vb,23:84,27:32,38:29,53:$Vc,57:28,62:$Vd,63:$Ve,64:$Vf,65:$Vg,74:$V8},o([20,22,24,28,36,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,58,60,68,69],[2,74]),{24:[1,85],45:$Vk,46:$Vl,47:$Vm,48:$Vn,49:$Vo,50:$Vp,51:$Vq,52:$Vr,53:$Vs,54:$Vt,55:$Vu,56:$Vv},{20:[1,86]},{27:87,74:$V8},o($VB,[2,59],{48:[1,89],58:[1,88]}),{27:92,31:90,67:91,74:$V8},{24:[1,93],45:$Vk,46:$Vl,47:$Vm,48:$Vn,49:$Vo,50:$Vp,51:$Vq,52:$Vr,53:$Vs,54:$Vt,55:$Vu,56:$Vv},{22:$Vb,23:94,27:32,38:29,53:$Vc,57:28,62:$Vd,63:$Ve,64:$Vf,65:$Vg,74:$V8},{22:$Vb,23:95,27:32,38:29,53:$Vc,57:28,62:$Vd,63:$Ve,64:$Vf,65:$Vg,74:$V8},{22:$Vb,23:96,27:32,38:29,53:$Vc,57:28,62:$Vd,63:$Ve,64:$Vf,65:$Vg,74:$V8},{22:$Vb,23:97,27:32,38:29,53:$Vc,57:28,62:$Vd,63:$Ve,64:$Vf,65:$Vg,74:$V8},{22:$Vb,23:98,27:32,38:29,53:$Vc,57:28,62:$Vd,63:$Ve,64:$Vf,65:$Vg,74:$V8},{22:$Vb,23:99,27:32,38:29,53:$Vc,57:28,62:$Vd,63:$Ve,64:$Vf,65:$Vg,74:$V8},{22:$Vb,23:100,27:32,38:29,53:$Vc,57:28,62:$Vd,63:$Ve,64:$Vf,65:$Vg,74:$V8},{22:$Vb,23:101,27:32,38:29,53:$Vc,57:28,62:$Vd,63:$Ve,64:$Vf,65:$Vg,74:$V8},{22:$Vb,23:102,27:32,38:29,53:$Vc,57:28,62:$Vd,63:$Ve,64:$Vf,65:$Vg,74:$V8},{22:$Vb,23:103,27:32,38:29,53:$Vc,57:28,62:$Vd,63:$Ve,64:$Vf,65:$Vg,74:$V8},{22:$Vb,23:104,27:32,38:29,53:$Vc,57:28,62:$Vd,63:$Ve,64:$Vf,65:$Vg,74:$V8},{22:$Vb,23:105,27:32,38:29,53:$Vc,57:28,62:$Vd,63:$Ve,64:$Vf,65:$Vg,74:$V8},o($Vw,[2,44]),{22:$Vb,23:72,24:[1,106],27:32,38:29,53:$Vc,57:28,61:107,62:$Vd,63:$Ve,64:$Vf,65:$Vg,74:$V8},o($Vy,[2,50]),{24:[1,108]},{24:[2,66],45:$Vk,46:$Vl,47:$Vm,48:$Vn,49:$Vo,50:$Vp,51:$Vq,52:$Vr,53:$Vs,54:$Vt,55:$Vu,56:$Vv,68:[1,109]},{22:$Vb,23:110,27:32,38:29,53:$Vc,57:28,62:$Vd,63:$Ve,64:$Vf,65:$Vg,74:$V8},{27:112,37:111,74:$V8},o($Vj,[2,24],{45:$Vk,46:$Vl,47:$Vm,48:$Vn,49:$Vo,50:$Vp,51:$Vq,52:$Vr,53:$Vs,54:$Vt,55:$Vu,56:$Vv}),o($Vj,[2,25],{45:$Vk,46:$Vl,47:$Vm,48:$Vn,49:$Vo,50:$Vp,51:$Vq,52:$Vr,53:$Vs,54:$Vt,55:$Vu,56:$Vv}),o($Vj,[2,28],{45:$Vk,46:$Vl,47:$Vm,48:$Vn,49:$Vo,50:$Vp,51:$Vq,52:$Vr,53:$Vs,54:$Vt,55:$Vu,56:$Vv}),o($Vj,[2,29],{45:$Vk,46:$Vl,47:$Vm,48:$Vn,49:$Vo,50:$Vp,51:$Vq,52:$Vr,53:$Vs,54:$Vt,55:$Vu,56:$Vv}),o($Vj,[2,30],{45:$Vk,46:$Vl,47:$Vm,48:$Vn,49:$Vo,50:$Vp,51:$Vq,52:$Vr,53:$Vs,54:$Vt,55:$Vu,56:$Vv}),o($Vj,[2,31],{45:$Vk,46:$Vl,47:$Vm,48:$Vn,49:$Vo,50:$Vp,51:$Vq,52:$Vr,53:$Vs,54:$Vt,55:$Vu,56:$Vv}),{60:[1,113]},{22:$Vx,60:[2,64],69:[1,114]},{8:115,9:116,10:117,16:$VC,32:$VD},{24:[1,120],45:$Vk,46:$Vl,47:$Vm,48:$Vn,49:$Vo,50:$Vp,51:$Vq,52:$Vr,53:$Vs,54:$Vt,55:$Vu,56:$Vv},{17:[1,121]},{22:$Vb,23:122,27:32,38:29,53:$Vc,57:28,62:$Vd,63:$Ve,64:$Vf,65:$Vg,74:$V8},{28:[1,123]},{60:[1,124]},{16:$Vi,26:126,66:125},{24:[1,127]},{24:[2,62],68:[1,128]},o([24,68],[2,60]),o($Vj,[2,20]),o($VE,[2,32],{47:$Vm,48:$Vn,49:$Vo,50:$Vp,51:$Vq,52:$Vr,53:$Vs,54:$Vt,55:$Vu,56:$Vv}),o($VE,[2,33],{47:$Vm,48:$Vn,49:$Vo,50:$Vp,51:$Vq,52:$Vr,53:$Vs,54:$Vt,55:$Vu,56:$Vv}),o($VF,[2,34],{51:$Vq,52:$Vr,53:$Vs,54:$Vt,55:$Vu,56:$Vv}),o($VF,[2,35],{51:$Vq,52:$Vr,53:$Vs,54:$Vt,55:$Vu,56:$Vv}),o($VF,[2,36],{51:$Vq,52:$Vr,53:$Vs,54:$Vt,55:$Vu,56:$Vv}),o($VF,[2,37],{51:$Vq,52:$Vr,53:$Vs,54:$Vt,55:$Vu,56:$Vv}),o($VG,[2,38],{54:$Vt,55:$Vu,56:$Vv}),o($VG,[2,39],{54:$Vt,55:$Vu,56:$Vv}),o($VG,[2,40],{54:$Vt,55:$Vu,56:$Vv}),o($Vw,[2,41]),o($Vw,[2,42]),o($Vw,[2,43]),o($Vy,[2,48]),{24:[1,129]},o($Vy,[2,51]),{22:$Vb,23:72,27:32,38:29,53:$Vc,57:28,61:130,62:$Vd,63:$Ve,64:$Vf,65:$Vg,74:$V8},o($Vj,[2,22],{45:$Vk,46:$Vl,47:$Vm,48:$Vn,49:$Vo,50:$Vp,51:$Vq,52:$Vr,53:$Vs,54:$Vt,55:$Vu,56:$Vv}),o($Vj,[2,75]),o($Vj,$Vz,{68:$VA}),o([20,22,24,36,45,46,47,48,49,50,51,52,53,54,55,56,60,68,69],[2,46]),{22:$Vb,27:32,38:29,57:82,59:131,62:$Vd,63:$Ve,64:$Vf,65:$Vg,74:$V8},{18:[1,132]},{18:[2,4]},{9:133,10:117,16:$VC,18:[2,7],32:$VD},{16:[1,134]},{22:[1,135]},{17:[1,136]},{4:137,6:3,7:4,14:6,15:$V0,19:5,21:$V1,25:$V2,27:15,29:9,30:$V3,33:$V4,34:$V5,35:$V6,38:14,72:$V7,74:$V8},{20:[1,138],45:$Vk,46:$Vl,47:$Vm,48:$Vn,49:$Vo,50:$Vp,51:$Vq,52:$Vr,53:$Vs,54:$Vt,55:$Vu,56:$Vv},{27:139,74:$V8},o($VB,[2,57]),{50:[1,140]},{50:[2,68],68:[1,141]},{17:[1,142]},{27:92,31:143,67:91,74:$V8},o($Vy,[2,49]),{24:[2,65]},{60:[2,63]},o($Va,[2,10]),{18:[2,6]},{22:[1,144]},{27:92,31:145,67:91,74:$V8},{4:146,6:3,7:4,14:6,15:$V0,19:5,21:$V1,25:$V2,27:15,29:9,30:$V3,33:$V4,34:$V5,35:$V6,38:14,72:$V7,74:$V8},{18:[1,147]},{19:148,27:15,33:$V4,34:$V5,35:$V6,38:14,74:$V8},{24:[1,149]},o($VB,[2,58]),{16:$Vi,26:126,66:150},{4:151,6:3,7:4,14:6,15:$V0,19:5,21:$V1,25:$V2,27:15,29:9,30:$V3,33:$V4,34:$V5,35:$V6,38:14,72:$V7,74:$V8},{24:[2,61]},{27:92,31:152,67:91,74:$V8},{24:[1,153]},{18:[1,154]},o($Va,[2,13]),{24:[1,155]},{17:[1,156]},{50:[2,67]},{18:[1,157]},{24:[1,158]},{17:[1,159]},o($Va,[2,73],{70:160,73:162,71:$VH}),{17:[1,163]},{4:164,6:3,7:4,14:6,15:$V0,19:5,21:$V1,25:$V2,27:15,29:9,30:$V3,33:$V4,34:$V5,35:$V6,38:14,72:$V7,74:$V8},o($Va,[2,17]),{17:[1,165]},{4:166,6:3,7:4,14:6,15:$V0,19:5,21:$V1,25:$V2,27:15,29:9,30:$V3,33:$V4,34:$V5,35:$V6,38:14,72:$V7,74:$V8},o($Va,[2,72]),{17:[1,168],72:[1,167]},o($Va,[2,70]),{4:169,6:3,7:4,14:6,15:$V0,19:5,21:$V1,25:$V2,27:15,29:9,30:$V3,33:$V4,34:$V5,35:$V6,38:14,72:$V7,74:$V8},{18:[1,170]},{4:171,6:3,7:4,14:6,15:$V0,19:5,21:$V1,25:$V2,27:15,29:9,30:$V3,33:$V4,34:$V5,35:$V6,38:14,72:$V7,74:$V8},{18:[1,172]},{22:[1,173]},{4:174,6:3,7:4,14:6,15:$V0,19:5,21:$V1,25:$V2,27:15,29:9,30:$V3,33:$V4,34:$V5,35:$V6,38:14,72:$V7,74:$V8},{18:[1,175]},o($Va,[2,15]),{18:[1,176]},o($VI,[2,19]),{22:$Vb,23:177,27:32,38:29,53:$Vc,57:28,62:$Vd,63:$Ve,64:$Vf,65:$Vg,74:$V8},{18:[1,178]},o($Va,[2,14]),o($VI,[2,18]),{24:[1,179],45:$Vk,46:$Vl,47:$Vm,48:$Vn,49:$Vo,50:$Vp,51:$Vq,52:$Vr,53:$Vs,54:$Vt,55:$Vu,56:$Vv},o($Va,[2,71]),{17:[1,180]},{4:181,6:3,7:4,14:6,15:$V0,19:5,21:$V1,25:$V2,27:15,29:9,30:$V3,33:$V4,34:$V5,35:$V6,38:14,72:$V7,74:$V8},{18:[1,182]},{70:183,71:$VH,73:162},o($Va,[2,69])],
defaultActions: {19:[2,1],116:[2,4],130:[2,65],131:[2,63],133:[2,6],143:[2,61],150:[2,67]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace */
break;
case 1:return 62
break;
case 2:return 63
break;
case 3:return "$"
break;
case 4:return "function"
break;
case 5:return "class"
break;
case 6:return "public"
break;
case 7:return "extends"
break;
case 8:return "implements"
break;
case 9:return "private"
break;
case 10:return "static"
break;
case 11:return 72
break;
case 12:return 71
break;
case 13:return 34
break;
case 14:return "sin"
break;
case 15:return "tan"
break;
case 16:return "cos"
break;
case 17:return "print"
break;
case 18:return 21
break;
case 19:return 25
break;
case 20:return 35
break;
case 21:return 68
break;
case 22:return 20
break;
case 23:return 52
break;
case 24:return 28
break;
case 25:return 46
break;
case 26:return 45
break;
case 27:return 49
break;
case 28:return 50
break;
case 29:return 47
break;
case 30:return 48
break;
case 31:return '=='
break;
case 32:return 36
break;
case 33:return 43
break;
case 34:return 54
break;
case 35:return 44
break;
case 36:return 55
break;
case 37:return 56
break;
case 38:return 42
break;
case 39:return 40
break;
case 40:return 53
break;
case 41:return 39
break;
case 42:return 41
break;
case 43:return 51
break;
case 44:return '^'
break;
case 45:return 17
break;
case 46:return 18
break;
case 47:return 69
break;
case 48:return 58
break;
case 49:return 60
break;
case 50:return 22
break;
case 51:return 24
break;
case 52:return 65
break;
case 53:return 64
break;
case 54:return 16
break;
case 55:return 5
break;
case 56:return 'INVALID'
break;
}
},
rules: [/^(?:\s+)/,/^(?:[0-9]+(\.[0-9]+)?\b)/,/^(?:"([^\\\"]|\\.)*")/,/^(?:\$)/,/^(?:function\b)/,/^(?:class\b)/,/^(?:public\b)/,/^(?:extends\b)/,/^(?:implements\b)/,/^(?:private\b)/,/^(?:static\b)/,/^(?:if\b)/,/^(?:else\b)/,/^(?:return\b)/,/^(?:sin\b)/,/^(?:tan\b)/,/^(?:cos\b)/,/^(?:print\b)/,/^(?:while\b)/,/^(?:for\b)/,/^(?:my\b)/,/^(?:,)/,/^(?:;)/,/^(?:\.)/,/^(?::)/,/^(?:&&)/,/^(?:\|\|)/,/^(?:>=)/,/^(?:>)/,/^(?:<=)/,/^(?:<)/,/^(?:==)/,/^(?:=)/,/^(?:\*=)/,/^(?:\*)/,/^(?:\/=)/,/^(?:\/)/,/^(?:%)/,/^(?:-=)/,/^(?:--)/,/^(?:-)/,/^(?:\+\+)/,/^(?:\+=)/,/^(?:\+)/,/^(?:\^)/,/^(?:\{)/,/^(?:\})/,/^(?:\]\[)/,/^(?:\[)/,/^(?:\])/,/^(?:\()/,/^(?:\))/,/^(?:PI\b)/,/^(?:E\b)/,/^(?:[a-zA-Z][a-zA-Z0-9]*)/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = perl_parser;
exports.Parser = perl_parser.Parser;
exports.parse = function () { return perl_parser.parse.apply(perl_parser, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}