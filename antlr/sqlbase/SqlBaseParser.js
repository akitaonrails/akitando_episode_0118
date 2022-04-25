// Generated from SqlBase.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import SqlBaseListener from './SqlBaseListener.js';
const serializedATN = [4,1,76,380,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,1,0,1,0,1,0,1,1,1,1,
1,1,1,2,1,2,1,2,1,2,1,2,3,2,92,8,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,101,8,
2,3,2,103,8,2,1,3,1,3,3,3,107,8,3,1,4,1,4,1,4,1,4,3,4,113,8,4,1,5,1,5,1,
5,1,6,1,6,1,6,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,5,8,129,8,8,10,8,12,8,132,
9,8,3,8,134,8,8,1,8,1,8,3,8,138,8,8,1,9,1,9,1,10,1,10,1,10,1,10,1,10,5,10,
147,8,10,10,10,12,10,150,9,10,3,10,152,8,10,1,11,1,11,3,11,156,8,11,1,12,
1,12,3,12,160,8,12,1,12,1,12,1,12,5,12,165,8,12,10,12,12,12,168,9,12,1,12,
1,12,1,12,1,12,5,12,174,8,12,10,12,12,12,177,9,12,3,12,179,8,12,1,12,1,12,
3,12,183,8,12,1,12,1,12,1,12,3,12,188,8,12,1,13,1,13,1,13,5,13,193,8,13,
10,13,12,13,196,9,13,1,14,1,14,1,15,1,15,1,15,1,15,5,15,204,8,15,10,15,12,
15,207,9,15,3,15,209,8,15,1,15,1,15,3,15,213,8,15,1,16,1,16,1,17,1,17,3,
17,219,8,17,1,17,3,17,222,8,17,1,17,1,17,1,17,1,17,1,17,3,17,229,8,17,1,
18,3,18,232,8,18,1,18,1,18,3,18,236,8,18,3,18,238,8,18,1,19,1,19,1,19,1,
20,1,20,1,20,1,20,5,20,247,8,20,10,20,12,20,250,9,20,1,20,1,20,1,21,1,21,
1,22,1,22,1,23,1,23,3,23,260,8,23,1,23,1,23,3,23,264,8,23,1,24,1,24,1,24,
1,24,1,24,1,24,1,24,1,24,1,24,1,24,3,24,276,8,24,1,24,1,24,1,24,1,24,1,24,
1,24,1,24,3,24,285,8,24,1,24,3,24,288,8,24,1,25,1,25,1,25,3,25,293,8,25,
1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,3,26,303,8,26,1,27,1,27,1,27,1,27,
3,27,309,8,27,3,27,311,8,27,1,28,1,28,1,29,1,29,1,30,1,30,1,31,1,31,1,31,
1,31,5,31,323,8,31,10,31,12,31,326,9,31,3,31,328,8,31,1,31,1,31,1,32,1,32,
1,32,1,32,1,32,5,32,337,8,32,10,32,12,32,340,9,32,1,32,1,32,3,32,344,8,32,
1,33,1,33,3,33,348,8,33,1,34,1,34,1,35,1,35,1,35,1,35,1,35,3,35,357,8,35,
1,36,1,36,1,36,5,36,362,8,36,10,36,12,36,365,9,36,1,37,1,37,1,37,1,37,1,
37,3,37,372,8,37,1,38,1,38,3,38,376,8,38,1,39,1,39,1,39,0,0,40,0,2,4,6,8,
10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,
58,60,62,64,66,68,70,72,74,76,78,0,7,2,0,6,6,68,68,2,0,10,10,19,19,1,0,59,
60,1,0,53,58,2,0,6,6,8,8,2,0,21,21,48,48,8,0,6,6,8,8,10,10,19,19,33,34,42,
43,45,46,49,49,396,0,80,1,0,0,0,2,83,1,0,0,0,4,102,1,0,0,0,6,106,1,0,0,0,
8,108,1,0,0,0,10,114,1,0,0,0,12,117,1,0,0,0,14,120,1,0,0,0,16,122,1,0,0,
0,18,139,1,0,0,0,20,151,1,0,0,0,22,153,1,0,0,0,24,157,1,0,0,0,26,189,1,0,
0,0,28,197,1,0,0,0,30,212,1,0,0,0,32,214,1,0,0,0,34,228,1,0,0,0,36,237,1,
0,0,0,38,239,1,0,0,0,40,242,1,0,0,0,42,253,1,0,0,0,44,255,1,0,0,0,46,263,
1,0,0,0,48,287,1,0,0,0,50,292,1,0,0,0,52,302,1,0,0,0,54,310,1,0,0,0,56,312,
1,0,0,0,58,314,1,0,0,0,60,316,1,0,0,0,62,318,1,0,0,0,64,331,1,0,0,0,66,347,
1,0,0,0,68,349,1,0,0,0,70,356,1,0,0,0,72,358,1,0,0,0,74,371,1,0,0,0,76,375,
1,0,0,0,78,377,1,0,0,0,80,81,3,4,2,0,81,82,5,0,0,1,82,1,1,0,0,0,83,84,3,
44,22,0,84,85,5,0,0,1,85,3,1,0,0,0,86,103,3,16,8,0,87,88,5,27,0,0,88,89,
5,28,0,0,89,91,3,72,36,0,90,92,3,40,20,0,91,90,1,0,0,0,91,92,1,0,0,0,92,
93,1,0,0,0,93,94,3,16,8,0,94,103,1,0,0,0,95,96,5,18,0,0,96,97,5,23,0,0,97,
100,3,72,36,0,98,99,5,52,0,0,99,101,3,46,23,0,100,98,1,0,0,0,100,101,1,0,
0,0,101,103,1,0,0,0,102,86,1,0,0,0,102,87,1,0,0,0,102,95,1,0,0,0,103,5,1,
0,0,0,104,107,3,8,4,0,105,107,3,10,5,0,106,104,1,0,0,0,106,105,1,0,0,0,107,
7,1,0,0,0,108,109,3,74,37,0,109,112,3,64,32,0,110,111,5,35,0,0,111,113,5,
36,0,0,112,110,1,0,0,0,112,113,1,0,0,0,113,9,1,0,0,0,114,115,5,32,0,0,115,
116,3,72,36,0,116,11,1,0,0,0,117,118,3,74,37,0,118,119,3,64,32,0,119,13,
1,0,0,0,120,121,3,74,37,0,121,15,1,0,0,0,122,133,3,18,9,0,123,124,5,39,0,
0,124,125,5,12,0,0,125,130,3,22,11,0,126,127,5,1,0,0,127,129,3,22,11,0,128,
126,1,0,0,0,129,132,1,0,0,0,130,128,1,0,0,0,130,131,1,0,0,0,131,134,1,0,
0,0,132,130,1,0,0,0,133,123,1,0,0,0,133,134,1,0,0,0,134,137,1,0,0,0,135,
136,5,33,0,0,136,138,7,0,0,0,137,135,1,0,0,0,137,138,1,0,0,0,138,17,1,0,
0,0,139,140,3,20,10,0,140,19,1,0,0,0,141,152,3,24,12,0,142,143,5,51,0,0,
143,148,3,44,22,0,144,145,5,1,0,0,145,147,3,44,22,0,146,144,1,0,0,0,147,
150,1,0,0,0,148,146,1,0,0,0,148,149,1,0,0,0,149,152,1,0,0,0,150,148,1,0,
0,0,151,141,1,0,0,0,151,142,1,0,0,0,152,21,1,0,0,0,153,155,3,44,22,0,154,
156,7,1,0,0,155,154,1,0,0,0,155,156,1,0,0,0,156,23,1,0,0,0,157,159,5,44,
0,0,158,160,3,32,16,0,159,158,1,0,0,0,159,160,1,0,0,0,160,161,1,0,0,0,161,
166,3,34,17,0,162,163,5,1,0,0,163,165,3,34,17,0,164,162,1,0,0,0,165,168,
1,0,0,0,166,164,1,0,0,0,166,167,1,0,0,0,167,178,1,0,0,0,168,166,1,0,0,0,
169,170,5,23,0,0,170,175,3,42,21,0,171,172,5,1,0,0,172,174,3,42,21,0,173,
171,1,0,0,0,174,177,1,0,0,0,175,173,1,0,0,0,175,176,1,0,0,0,176,179,1,0,
0,0,177,175,1,0,0,0,178,169,1,0,0,0,178,179,1,0,0,0,179,182,1,0,0,0,180,
181,5,52,0,0,181,183,3,46,23,0,182,180,1,0,0,0,182,183,1,0,0,0,183,187,1,
0,0,0,184,185,5,24,0,0,185,186,5,12,0,0,186,188,3,26,13,0,187,184,1,0,0,
0,187,188,1,0,0,0,188,25,1,0,0,0,189,194,3,28,14,0,190,191,5,1,0,0,191,193,
3,28,14,0,192,190,1,0,0,0,193,196,1,0,0,0,194,192,1,0,0,0,194,195,1,0,0,
0,195,27,1,0,0,0,196,194,1,0,0,0,197,198,3,30,15,0,198,29,1,0,0,0,199,208,
5,2,0,0,200,205,3,44,22,0,201,202,5,1,0,0,202,204,3,44,22,0,203,201,1,0,
0,0,204,207,1,0,0,0,205,203,1,0,0,0,205,206,1,0,0,0,206,209,1,0,0,0,207,
205,1,0,0,0,208,200,1,0,0,0,208,209,1,0,0,0,209,210,1,0,0,0,210,213,5,3,
0,0,211,213,3,44,22,0,212,199,1,0,0,0,212,211,1,0,0,0,213,31,1,0,0,0,214,
215,5,6,0,0,215,33,1,0,0,0,216,221,3,44,22,0,217,219,5,9,0,0,218,217,1,0,
0,0,218,219,1,0,0,0,219,220,1,0,0,0,220,222,3,74,37,0,221,218,1,0,0,0,221,
222,1,0,0,0,222,229,1,0,0,0,223,224,3,72,36,0,224,225,5,4,0,0,225,226,5,
61,0,0,226,229,1,0,0,0,227,229,5,61,0,0,228,216,1,0,0,0,228,223,1,0,0,0,
228,227,1,0,0,0,229,35,1,0,0,0,230,232,5,26,0,0,231,230,1,0,0,0,231,232,
1,0,0,0,232,238,1,0,0,0,233,235,5,31,0,0,234,236,5,40,0,0,235,234,1,0,0,
0,235,236,1,0,0,0,236,238,1,0,0,0,237,231,1,0,0,0,237,233,1,0,0,0,238,37,
1,0,0,0,239,240,5,37,0,0,240,241,3,46,23,0,241,39,1,0,0,0,242,243,5,2,0,
0,243,248,3,74,37,0,244,245,5,1,0,0,245,247,3,74,37,0,246,244,1,0,0,0,247,
250,1,0,0,0,248,246,1,0,0,0,248,249,1,0,0,0,249,251,1,0,0,0,250,248,1,0,
0,0,251,252,5,3,0,0,252,41,1,0,0,0,253,254,3,72,36,0,254,43,1,0,0,0,255,
256,3,46,23,0,256,45,1,0,0,0,257,259,3,50,25,0,258,260,3,48,24,0,259,258,
1,0,0,0,259,260,1,0,0,0,260,264,1,0,0,0,261,262,5,35,0,0,262,264,3,46,23,
0,263,257,1,0,0,0,263,261,1,0,0,0,264,47,1,0,0,0,265,266,3,56,28,0,266,267,
3,50,25,0,267,288,1,0,0,0,268,269,3,56,28,0,269,270,3,58,29,0,270,271,5,
2,0,0,271,272,3,16,8,0,272,273,5,3,0,0,273,288,1,0,0,0,274,276,5,35,0,0,
275,274,1,0,0,0,275,276,1,0,0,0,276,277,1,0,0,0,277,278,5,11,0,0,278,279,
3,50,25,0,279,280,5,7,0,0,280,281,3,50,25,0,281,288,1,0,0,0,282,284,5,29,
0,0,283,285,5,35,0,0,284,283,1,0,0,0,284,285,1,0,0,0,285,286,1,0,0,0,286,
288,5,36,0,0,287,265,1,0,0,0,287,268,1,0,0,0,287,275,1,0,0,0,287,282,1,0,
0,0,288,49,1,0,0,0,289,293,3,52,26,0,290,291,7,2,0,0,291,293,3,50,25,0,292,
289,1,0,0,0,292,290,1,0,0,0,293,51,1,0,0,0,294,303,5,36,0,0,295,296,3,74,
37,0,296,297,3,54,27,0,297,303,1,0,0,0,298,303,3,76,38,0,299,303,3,60,30,
0,300,303,3,54,27,0,301,303,3,74,37,0,302,294,1,0,0,0,302,295,1,0,0,0,302,
298,1,0,0,0,302,299,1,0,0,0,302,300,1,0,0,0,302,301,1,0,0,0,303,53,1,0,0,
0,304,311,5,65,0,0,305,308,5,66,0,0,306,307,5,50,0,0,307,309,5,65,0,0,308,
306,1,0,0,0,308,309,1,0,0,0,309,311,1,0,0,0,310,304,1,0,0,0,310,305,1,0,
0,0,311,55,1,0,0,0,312,313,7,3,0,0,313,57,1,0,0,0,314,315,7,4,0,0,315,59,
1,0,0,0,316,317,7,5,0,0,317,61,1,0,0,0,318,327,5,2,0,0,319,324,3,64,32,0,
320,321,5,1,0,0,321,323,3,64,32,0,322,320,1,0,0,0,323,326,1,0,0,0,324,322,
1,0,0,0,324,325,1,0,0,0,325,328,1,0,0,0,326,324,1,0,0,0,327,319,1,0,0,0,
327,328,1,0,0,0,328,329,1,0,0,0,329,330,5,3,0,0,330,63,1,0,0,0,331,343,3,
68,34,0,332,333,5,2,0,0,333,338,3,66,33,0,334,335,5,1,0,0,335,337,3,66,33,
0,336,334,1,0,0,0,337,340,1,0,0,0,338,336,1,0,0,0,338,339,1,0,0,0,339,341,
1,0,0,0,340,338,1,0,0,0,341,342,5,3,0,0,342,344,1,0,0,0,343,332,1,0,0,0,
343,344,1,0,0,0,344,65,1,0,0,0,345,348,5,68,0,0,346,348,3,64,32,0,347,345,
1,0,0,0,347,346,1,0,0,0,348,67,1,0,0,0,349,350,3,72,36,0,350,69,1,0,0,0,
351,357,3,44,22,0,352,353,3,74,37,0,353,354,5,5,0,0,354,355,3,44,22,0,355,
357,1,0,0,0,356,351,1,0,0,0,356,352,1,0,0,0,357,71,1,0,0,0,358,363,3,74,
37,0,359,360,5,4,0,0,360,362,3,74,37,0,361,359,1,0,0,0,362,365,1,0,0,0,363,
361,1,0,0,0,363,364,1,0,0,0,364,73,1,0,0,0,365,363,1,0,0,0,366,372,5,70,
0,0,367,372,5,72,0,0,368,372,3,78,39,0,369,372,5,73,0,0,370,372,5,71,0,0,
371,366,1,0,0,0,371,367,1,0,0,0,371,368,1,0,0,0,371,369,1,0,0,0,371,370,
1,0,0,0,372,75,1,0,0,0,373,376,5,69,0,0,374,376,5,68,0,0,375,373,1,0,0,0,
375,374,1,0,0,0,376,77,1,0,0,0,377,378,7,6,0,0,378,79,1,0,0,0,46,91,100,
102,106,112,130,133,137,148,151,155,159,166,175,178,182,187,194,205,208,
212,218,221,228,231,235,237,248,259,263,275,284,287,292,302,308,310,324,
327,338,343,347,356,363,371,375];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export class SqlBaseParser extends antlr4.Parser {

    static grammarFileName = "SqlBase.g4";
    static literalNames = [ null, "','", "'('", "')'", "'.'", "'=>'", "'ALL'", 
                            "'AND'", "'ANY'", "'AS'", "'ASC'", "'BETWEEN'", 
                            "'BY'", "'COLUMN'", "'COLUMNS'", "'DATA'", "'DATE'", 
                            "'DAY'", "'DELETE'", "'DESC'", "'EXISTS'", "'FALSE'", 
                            "'FIRST'", "'FROM'", "'GROUP'", "'IN'", "'INNER'", 
                            "'INSERT'", "'INTO'", "'IS'", "'JOIN'", "'LEFT'", 
                            "'LIKE'", "'LIMIT'", "'NAME'", "'NOT'", "'NULL'", 
                            "'ON'", "'OR'", "'ORDER'", "'OUTER'", "'RIGHT'", 
                            "'ROW'", "'ROWS'", "'SELECT'", "'SQL'", "'TEXT'", 
                            "'TO'", "'TRUE'", "'TYPE'", "'UESCAPE'", "'VALUES'", 
                            "'WHERE'", "'='", null, "'<'", "'<='", "'>'", 
                            "'>='", "'+'", "'-'", "'*'", "'/'", "'%'", "'||'" ];
    static symbolicNames = [ null, null, null, null, null, null, "ALL", 
                             "AND", "ANY", "AS", "ASC", "BETWEEN", "BY", 
                             "COLUMN", "COLUMNS", "DATA", "DATE", "DAY", 
                             "DELETE", "DESC", "EXISTS", "FALSE", "FIRST", 
                             "FROM", "GROUP", "IN", "INNER", "INSERT", "INTO", 
                             "IS", "JOIN", "LEFT", "LIKE", "LIMIT", "NAME", 
                             "NOT", "NULL", "ON", "OR", "ORDER", "OUTER", 
                             "RIGHT", "ROW", "ROWS", "SELECT", "SQL", "TEXT", 
                             "TO", "TRUE", "TYPE", "UESCAPE", "VALUES", 
                             "WHERE", "EQ", "NEQ", "LT", "LTE", "GT", "GTE", 
                             "PLUS", "MINUS", "ASTERISK", "SLASH", "PERCENT", 
                             "CONCAT", "STRING", "UNICODE_STRING", "BINARY_LITERAL", 
                             "INTEGER_VALUE", "DECIMAL_VALUE", "IDENTIFIER", 
                             "DIGIT_IDENTIFIER", "QUOTED_IDENTIFIER", "BACKQUOTED_IDENTIFIER", 
                             "WS", "UNRECOGNIZED", "DELIMITER" ];
    static ruleNames = [ "singleStatement", "standaloneExpression", "statement", 
                         "tableElement", "columnDefinition", "likeClause", 
                         "sqlParameterDeclaration", "externalRoutineName", 
                         "query", "queryTerm", "queryPrimary", "sortItem", 
                         "querySpecification", "groupBy", "groupingElement", 
                         "groupingSet", "setQuantifier", "selectItem", "joinType", 
                         "joinCriteria", "columnAliases", "relationPrimary", 
                         "expression", "booleanExpression", "predicate", 
                         "valueExpression", "primaryExpression", "string", 
                         "comparisonOperator", "comparisonQuantifier", "booleanValue", 
                         "types", "type", "typeParameter", "baseType", "callArgument", 
                         "qualifiedName", "identifier", "number", "nonReserved" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = SqlBaseParser.ruleNames;
        this.literalNames = SqlBaseParser.literalNames;
        this.symbolicNames = SqlBaseParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	singleStatement() {
	    let localctx = new SingleStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, SqlBaseParser.RULE_singleStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 80;
	        this.statement();
	        this.state = 81;
	        this.match(SqlBaseParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	standaloneExpression() {
	    let localctx = new StandaloneExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, SqlBaseParser.RULE_standaloneExpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 83;
	        this.expression();
	        this.state = 84;
	        this.match(SqlBaseParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, SqlBaseParser.RULE_statement);
	    var _la = 0; // Token type
	    try {
	        this.state = 102;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case SqlBaseParser.SELECT:
	        case SqlBaseParser.VALUES:
	            localctx = new StatementDefaultContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 86;
	            this.query();
	            break;
	        case SqlBaseParser.INSERT:
	            localctx = new InsertIntoContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 87;
	            this.match(SqlBaseParser.INSERT);
	            this.state = 88;
	            this.match(SqlBaseParser.INTO);
	            this.state = 89;
	            this.qualifiedName();
	            this.state = 91;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===SqlBaseParser.T__1) {
	                this.state = 90;
	                this.columnAliases();
	            }

	            this.state = 93;
	            this.query();
	            break;
	        case SqlBaseParser.DELETE:
	            localctx = new DeleteContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 95;
	            this.match(SqlBaseParser.DELETE);
	            this.state = 96;
	            this.match(SqlBaseParser.FROM);
	            this.state = 97;
	            this.qualifiedName();
	            this.state = 100;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===SqlBaseParser.WHERE) {
	                this.state = 98;
	                this.match(SqlBaseParser.WHERE);
	                this.state = 99;
	                this.booleanExpression();
	            }

	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	tableElement() {
	    let localctx = new TableElementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, SqlBaseParser.RULE_tableElement);
	    try {
	        this.state = 106;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case SqlBaseParser.ALL:
	        case SqlBaseParser.ANY:
	        case SqlBaseParser.ASC:
	        case SqlBaseParser.DESC:
	        case SqlBaseParser.LIMIT:
	        case SqlBaseParser.NAME:
	        case SqlBaseParser.ROW:
	        case SqlBaseParser.ROWS:
	        case SqlBaseParser.SQL:
	        case SqlBaseParser.TEXT:
	        case SqlBaseParser.TYPE:
	        case SqlBaseParser.IDENTIFIER:
	        case SqlBaseParser.DIGIT_IDENTIFIER:
	        case SqlBaseParser.QUOTED_IDENTIFIER:
	        case SqlBaseParser.BACKQUOTED_IDENTIFIER:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 104;
	            this.columnDefinition();
	            break;
	        case SqlBaseParser.LIKE:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 105;
	            this.likeClause();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	columnDefinition() {
	    let localctx = new ColumnDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, SqlBaseParser.RULE_columnDefinition);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 108;
	        this.identifier();
	        this.state = 109;
	        this.type();
	        this.state = 112;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SqlBaseParser.NOT) {
	            this.state = 110;
	            this.match(SqlBaseParser.NOT);
	            this.state = 111;
	            this.match(SqlBaseParser.NULL);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	likeClause() {
	    let localctx = new LikeClauseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, SqlBaseParser.RULE_likeClause);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 114;
	        this.match(SqlBaseParser.LIKE);
	        this.state = 115;
	        this.qualifiedName();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sqlParameterDeclaration() {
	    let localctx = new SqlParameterDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, SqlBaseParser.RULE_sqlParameterDeclaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 117;
	        this.identifier();
	        this.state = 118;
	        this.type();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	externalRoutineName() {
	    let localctx = new ExternalRoutineNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, SqlBaseParser.RULE_externalRoutineName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 120;
	        this.identifier();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	query() {
	    let localctx = new QueryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, SqlBaseParser.RULE_query);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 122;
	        this.queryTerm();
	        this.state = 133;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SqlBaseParser.ORDER) {
	            this.state = 123;
	            this.match(SqlBaseParser.ORDER);
	            this.state = 124;
	            this.match(SqlBaseParser.BY);
	            this.state = 125;
	            this.sortItem();
	            this.state = 130;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===SqlBaseParser.T__0) {
	                this.state = 126;
	                this.match(SqlBaseParser.T__0);
	                this.state = 127;
	                this.sortItem();
	                this.state = 132;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 137;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SqlBaseParser.LIMIT) {
	            this.state = 135;
	            this.match(SqlBaseParser.LIMIT);
	            this.state = 136;
	            localctx.limit = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===SqlBaseParser.ALL || _la===SqlBaseParser.INTEGER_VALUE)) {
	                localctx.limit = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	queryTerm() {
	    let localctx = new QueryTermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, SqlBaseParser.RULE_queryTerm);
	    try {
	        localctx = new QueryTermDefaultContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 139;
	        this.queryPrimary();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	queryPrimary() {
	    let localctx = new QueryPrimaryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, SqlBaseParser.RULE_queryPrimary);
	    var _la = 0; // Token type
	    try {
	        this.state = 151;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case SqlBaseParser.SELECT:
	            localctx = new QueryPrimaryDefaultContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 141;
	            this.querySpecification();
	            break;
	        case SqlBaseParser.VALUES:
	            localctx = new InlineTableContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 142;
	            this.match(SqlBaseParser.VALUES);
	            this.state = 143;
	            this.expression();
	            this.state = 148;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===SqlBaseParser.T__0) {
	                this.state = 144;
	                this.match(SqlBaseParser.T__0);
	                this.state = 145;
	                this.expression();
	                this.state = 150;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sortItem() {
	    let localctx = new SortItemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, SqlBaseParser.RULE_sortItem);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 153;
	        this.expression();
	        this.state = 155;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SqlBaseParser.ASC || _la===SqlBaseParser.DESC) {
	            this.state = 154;
	            localctx.ordering = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===SqlBaseParser.ASC || _la===SqlBaseParser.DESC)) {
	                localctx.ordering = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	querySpecification() {
	    let localctx = new QuerySpecificationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, SqlBaseParser.RULE_querySpecification);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 157;
	        this.match(SqlBaseParser.SELECT);
	        this.state = 159;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        if(la_===1) {
	            this.state = 158;
	            this.setQuantifier();

	        }
	        this.state = 161;
	        this.selectItem();
	        this.state = 166;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===SqlBaseParser.T__0) {
	            this.state = 162;
	            this.match(SqlBaseParser.T__0);
	            this.state = 163;
	            this.selectItem();
	            this.state = 168;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 178;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SqlBaseParser.FROM) {
	            this.state = 169;
	            this.match(SqlBaseParser.FROM);
	            this.state = 170;
	            this.relationPrimary();
	            this.state = 175;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===SqlBaseParser.T__0) {
	                this.state = 171;
	                this.match(SqlBaseParser.T__0);
	                this.state = 172;
	                this.relationPrimary();
	                this.state = 177;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 182;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SqlBaseParser.WHERE) {
	            this.state = 180;
	            this.match(SqlBaseParser.WHERE);
	            this.state = 181;
	            localctx.where = this.booleanExpression();
	        }

	        this.state = 187;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SqlBaseParser.GROUP) {
	            this.state = 184;
	            this.match(SqlBaseParser.GROUP);
	            this.state = 185;
	            this.match(SqlBaseParser.BY);
	            this.state = 186;
	            this.groupBy();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	groupBy() {
	    let localctx = new GroupByContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, SqlBaseParser.RULE_groupBy);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 189;
	        this.groupingElement();
	        this.state = 194;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===SqlBaseParser.T__0) {
	            this.state = 190;
	            this.match(SqlBaseParser.T__0);
	            this.state = 191;
	            this.groupingElement();
	            this.state = 196;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	groupingElement() {
	    let localctx = new GroupingElementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, SqlBaseParser.RULE_groupingElement);
	    try {
	        localctx = new SingleGroupingSetContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 197;
	        this.groupingSet();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	groupingSet() {
	    let localctx = new GroupingSetContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, SqlBaseParser.RULE_groupingSet);
	    var _la = 0; // Token type
	    try {
	        this.state = 212;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case SqlBaseParser.T__1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 199;
	            this.match(SqlBaseParser.T__1);
	            this.state = 208;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 6)) & ~0x1f) == 0 && ((1 << (_la - 6)) & ((1 << (SqlBaseParser.ALL - 6)) | (1 << (SqlBaseParser.ANY - 6)) | (1 << (SqlBaseParser.ASC - 6)) | (1 << (SqlBaseParser.DESC - 6)) | (1 << (SqlBaseParser.FALSE - 6)) | (1 << (SqlBaseParser.LIMIT - 6)) | (1 << (SqlBaseParser.NAME - 6)) | (1 << (SqlBaseParser.NOT - 6)) | (1 << (SqlBaseParser.NULL - 6)))) !== 0) || ((((_la - 42)) & ~0x1f) == 0 && ((1 << (_la - 42)) & ((1 << (SqlBaseParser.ROW - 42)) | (1 << (SqlBaseParser.ROWS - 42)) | (1 << (SqlBaseParser.SQL - 42)) | (1 << (SqlBaseParser.TEXT - 42)) | (1 << (SqlBaseParser.TRUE - 42)) | (1 << (SqlBaseParser.TYPE - 42)) | (1 << (SqlBaseParser.PLUS - 42)) | (1 << (SqlBaseParser.MINUS - 42)) | (1 << (SqlBaseParser.STRING - 42)) | (1 << (SqlBaseParser.UNICODE_STRING - 42)) | (1 << (SqlBaseParser.INTEGER_VALUE - 42)) | (1 << (SqlBaseParser.DECIMAL_VALUE - 42)) | (1 << (SqlBaseParser.IDENTIFIER - 42)) | (1 << (SqlBaseParser.DIGIT_IDENTIFIER - 42)) | (1 << (SqlBaseParser.QUOTED_IDENTIFIER - 42)) | (1 << (SqlBaseParser.BACKQUOTED_IDENTIFIER - 42)))) !== 0)) {
	                this.state = 200;
	                this.expression();
	                this.state = 205;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===SqlBaseParser.T__0) {
	                    this.state = 201;
	                    this.match(SqlBaseParser.T__0);
	                    this.state = 202;
	                    this.expression();
	                    this.state = 207;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 210;
	            this.match(SqlBaseParser.T__2);
	            break;
	        case SqlBaseParser.ALL:
	        case SqlBaseParser.ANY:
	        case SqlBaseParser.ASC:
	        case SqlBaseParser.DESC:
	        case SqlBaseParser.FALSE:
	        case SqlBaseParser.LIMIT:
	        case SqlBaseParser.NAME:
	        case SqlBaseParser.NOT:
	        case SqlBaseParser.NULL:
	        case SqlBaseParser.ROW:
	        case SqlBaseParser.ROWS:
	        case SqlBaseParser.SQL:
	        case SqlBaseParser.TEXT:
	        case SqlBaseParser.TRUE:
	        case SqlBaseParser.TYPE:
	        case SqlBaseParser.PLUS:
	        case SqlBaseParser.MINUS:
	        case SqlBaseParser.STRING:
	        case SqlBaseParser.UNICODE_STRING:
	        case SqlBaseParser.INTEGER_VALUE:
	        case SqlBaseParser.DECIMAL_VALUE:
	        case SqlBaseParser.IDENTIFIER:
	        case SqlBaseParser.DIGIT_IDENTIFIER:
	        case SqlBaseParser.QUOTED_IDENTIFIER:
	        case SqlBaseParser.BACKQUOTED_IDENTIFIER:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 211;
	            this.expression();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	setQuantifier() {
	    let localctx = new SetQuantifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, SqlBaseParser.RULE_setQuantifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 214;
	        this.match(SqlBaseParser.ALL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	selectItem() {
	    let localctx = new SelectItemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, SqlBaseParser.RULE_selectItem);
	    var _la = 0; // Token type
	    try {
	        this.state = 228;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new SelectSingleContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 216;
	            this.expression();
	            this.state = 221;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	            if(la_===1) {
	                this.state = 218;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===SqlBaseParser.AS) {
	                    this.state = 217;
	                    this.match(SqlBaseParser.AS);
	                }

	                this.state = 220;
	                this.identifier();

	            }
	            break;

	        case 2:
	            localctx = new SelectAllContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 223;
	            this.qualifiedName();
	            this.state = 224;
	            this.match(SqlBaseParser.T__3);
	            this.state = 225;
	            this.match(SqlBaseParser.ASTERISK);
	            break;

	        case 3:
	            localctx = new SelectAllContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 227;
	            this.match(SqlBaseParser.ASTERISK);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	joinType() {
	    let localctx = new JoinTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, SqlBaseParser.RULE_joinType);
	    var _la = 0; // Token type
	    try {
	        this.state = 237;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case SqlBaseParser.EOF:
	        case SqlBaseParser.INNER:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 231;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===SqlBaseParser.INNER) {
	                this.state = 230;
	                this.match(SqlBaseParser.INNER);
	            }

	            break;
	        case SqlBaseParser.LEFT:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 233;
	            this.match(SqlBaseParser.LEFT);
	            this.state = 235;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===SqlBaseParser.OUTER) {
	                this.state = 234;
	                this.match(SqlBaseParser.OUTER);
	            }

	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	joinCriteria() {
	    let localctx = new JoinCriteriaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, SqlBaseParser.RULE_joinCriteria);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 239;
	        this.match(SqlBaseParser.ON);
	        this.state = 240;
	        this.booleanExpression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	columnAliases() {
	    let localctx = new ColumnAliasesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, SqlBaseParser.RULE_columnAliases);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 242;
	        this.match(SqlBaseParser.T__1);
	        this.state = 243;
	        this.identifier();
	        this.state = 248;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===SqlBaseParser.T__0) {
	            this.state = 244;
	            this.match(SqlBaseParser.T__0);
	            this.state = 245;
	            this.identifier();
	            this.state = 250;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 251;
	        this.match(SqlBaseParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	relationPrimary() {
	    let localctx = new RelationPrimaryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, SqlBaseParser.RULE_relationPrimary);
	    try {
	        localctx = new TableNameContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 253;
	        this.qualifiedName();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, SqlBaseParser.RULE_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 255;
	        this.booleanExpression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	booleanExpression() {
	    let localctx = new BooleanExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, SqlBaseParser.RULE_booleanExpression);
	    var _la = 0; // Token type
	    try {
	        this.state = 263;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case SqlBaseParser.ALL:
	        case SqlBaseParser.ANY:
	        case SqlBaseParser.ASC:
	        case SqlBaseParser.DESC:
	        case SqlBaseParser.FALSE:
	        case SqlBaseParser.LIMIT:
	        case SqlBaseParser.NAME:
	        case SqlBaseParser.NULL:
	        case SqlBaseParser.ROW:
	        case SqlBaseParser.ROWS:
	        case SqlBaseParser.SQL:
	        case SqlBaseParser.TEXT:
	        case SqlBaseParser.TRUE:
	        case SqlBaseParser.TYPE:
	        case SqlBaseParser.PLUS:
	        case SqlBaseParser.MINUS:
	        case SqlBaseParser.STRING:
	        case SqlBaseParser.UNICODE_STRING:
	        case SqlBaseParser.INTEGER_VALUE:
	        case SqlBaseParser.DECIMAL_VALUE:
	        case SqlBaseParser.IDENTIFIER:
	        case SqlBaseParser.DIGIT_IDENTIFIER:
	        case SqlBaseParser.QUOTED_IDENTIFIER:
	        case SqlBaseParser.BACKQUOTED_IDENTIFIER:
	            localctx = new PredicatedContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 257;
	            localctx._valueExpression = this.valueExpression();
	            this.state = 259;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===SqlBaseParser.BETWEEN || _la===SqlBaseParser.IS || ((((_la - 35)) & ~0x1f) == 0 && ((1 << (_la - 35)) & ((1 << (SqlBaseParser.NOT - 35)) | (1 << (SqlBaseParser.EQ - 35)) | (1 << (SqlBaseParser.NEQ - 35)) | (1 << (SqlBaseParser.LT - 35)) | (1 << (SqlBaseParser.LTE - 35)) | (1 << (SqlBaseParser.GT - 35)) | (1 << (SqlBaseParser.GTE - 35)))) !== 0)) {
	                this.state = 258;
	                this.predicate(localctx._valueExpression);
	            }

	            break;
	        case SqlBaseParser.NOT:
	            localctx = new LogicalNotContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 261;
	            this.match(SqlBaseParser.NOT);
	            this.state = 262;
	            this.booleanExpression();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	predicate(value) {
	    let localctx = new PredicateContext(this, this._ctx, this.state, value);
	    this.enterRule(localctx, 48, SqlBaseParser.RULE_predicate);
	    var _la = 0; // Token type
	    try {
	        this.state = 287;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ComparisonContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 265;
	            this.comparisonOperator();
	            this.state = 266;
	            localctx.right = this.valueExpression();
	            break;

	        case 2:
	            localctx = new QuantifiedComparisonContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 268;
	            this.comparisonOperator();
	            this.state = 269;
	            this.comparisonQuantifier();
	            this.state = 270;
	            this.match(SqlBaseParser.T__1);
	            this.state = 271;
	            this.query();
	            this.state = 272;
	            this.match(SqlBaseParser.T__2);
	            break;

	        case 3:
	            localctx = new BetweenContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 275;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===SqlBaseParser.NOT) {
	                this.state = 274;
	                this.match(SqlBaseParser.NOT);
	            }

	            this.state = 277;
	            this.match(SqlBaseParser.BETWEEN);
	            this.state = 278;
	            localctx.lower = this.valueExpression();
	            this.state = 279;
	            this.match(SqlBaseParser.AND);
	            this.state = 280;
	            localctx.upper = this.valueExpression();
	            break;

	        case 4:
	            localctx = new NullPredicateContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 282;
	            this.match(SqlBaseParser.IS);
	            this.state = 284;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===SqlBaseParser.NOT) {
	                this.state = 283;
	                this.match(SqlBaseParser.NOT);
	            }

	            this.state = 286;
	            this.match(SqlBaseParser.NULL);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valueExpression() {
	    let localctx = new ValueExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, SqlBaseParser.RULE_valueExpression);
	    var _la = 0; // Token type
	    try {
	        this.state = 292;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case SqlBaseParser.ALL:
	        case SqlBaseParser.ANY:
	        case SqlBaseParser.ASC:
	        case SqlBaseParser.DESC:
	        case SqlBaseParser.FALSE:
	        case SqlBaseParser.LIMIT:
	        case SqlBaseParser.NAME:
	        case SqlBaseParser.NULL:
	        case SqlBaseParser.ROW:
	        case SqlBaseParser.ROWS:
	        case SqlBaseParser.SQL:
	        case SqlBaseParser.TEXT:
	        case SqlBaseParser.TRUE:
	        case SqlBaseParser.TYPE:
	        case SqlBaseParser.STRING:
	        case SqlBaseParser.UNICODE_STRING:
	        case SqlBaseParser.INTEGER_VALUE:
	        case SqlBaseParser.DECIMAL_VALUE:
	        case SqlBaseParser.IDENTIFIER:
	        case SqlBaseParser.DIGIT_IDENTIFIER:
	        case SqlBaseParser.QUOTED_IDENTIFIER:
	        case SqlBaseParser.BACKQUOTED_IDENTIFIER:
	            localctx = new ValueExpressionDefaultContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 289;
	            this.primaryExpression();
	            break;
	        case SqlBaseParser.PLUS:
	        case SqlBaseParser.MINUS:
	            localctx = new ArithmeticUnaryContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 290;
	            localctx.operator = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===SqlBaseParser.PLUS || _la===SqlBaseParser.MINUS)) {
	                localctx.operator = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 291;
	            this.valueExpression();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	primaryExpression() {
	    let localctx = new PrimaryExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, SqlBaseParser.RULE_primaryExpression);
	    try {
	        this.state = 302;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,34,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new NullLiteralContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 294;
	            this.match(SqlBaseParser.NULL);
	            break;

	        case 2:
	            localctx = new TypeConstructorContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 295;
	            this.identifier();
	            this.state = 296;
	            this.string();
	            break;

	        case 3:
	            localctx = new NumericLiteralContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 298;
	            this.number();
	            break;

	        case 4:
	            localctx = new BooleanLiteralContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 299;
	            this.booleanValue();
	            break;

	        case 5:
	            localctx = new StringLiteralContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 300;
	            this.string();
	            break;

	        case 6:
	            localctx = new ColumnReferenceContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 301;
	            this.identifier();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	string() {
	    let localctx = new StringContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, SqlBaseParser.RULE_string);
	    var _la = 0; // Token type
	    try {
	        this.state = 310;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case SqlBaseParser.STRING:
	            localctx = new BasicStringLiteralContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 304;
	            this.match(SqlBaseParser.STRING);
	            break;
	        case SqlBaseParser.UNICODE_STRING:
	            localctx = new UnicodeStringLiteralContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 305;
	            this.match(SqlBaseParser.UNICODE_STRING);
	            this.state = 308;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===SqlBaseParser.UESCAPE) {
	                this.state = 306;
	                this.match(SqlBaseParser.UESCAPE);
	                this.state = 307;
	                this.match(SqlBaseParser.STRING);
	            }

	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	comparisonOperator() {
	    let localctx = new ComparisonOperatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, SqlBaseParser.RULE_comparisonOperator);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 312;
	        _la = this._input.LA(1);
	        if(!(((((_la - 53)) & ~0x1f) == 0 && ((1 << (_la - 53)) & ((1 << (SqlBaseParser.EQ - 53)) | (1 << (SqlBaseParser.NEQ - 53)) | (1 << (SqlBaseParser.LT - 53)) | (1 << (SqlBaseParser.LTE - 53)) | (1 << (SqlBaseParser.GT - 53)) | (1 << (SqlBaseParser.GTE - 53)))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	comparisonQuantifier() {
	    let localctx = new ComparisonQuantifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, SqlBaseParser.RULE_comparisonQuantifier);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 314;
	        _la = this._input.LA(1);
	        if(!(_la===SqlBaseParser.ALL || _la===SqlBaseParser.ANY)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	booleanValue() {
	    let localctx = new BooleanValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, SqlBaseParser.RULE_booleanValue);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 316;
	        _la = this._input.LA(1);
	        if(!(_la===SqlBaseParser.FALSE || _la===SqlBaseParser.TRUE)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	types() {
	    let localctx = new TypesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, SqlBaseParser.RULE_types);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 318;
	        this.match(SqlBaseParser.T__1);
	        this.state = 327;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 6)) & ~0x1f) == 0 && ((1 << (_la - 6)) & ((1 << (SqlBaseParser.ALL - 6)) | (1 << (SqlBaseParser.ANY - 6)) | (1 << (SqlBaseParser.ASC - 6)) | (1 << (SqlBaseParser.DESC - 6)) | (1 << (SqlBaseParser.LIMIT - 6)) | (1 << (SqlBaseParser.NAME - 6)))) !== 0) || ((((_la - 42)) & ~0x1f) == 0 && ((1 << (_la - 42)) & ((1 << (SqlBaseParser.ROW - 42)) | (1 << (SqlBaseParser.ROWS - 42)) | (1 << (SqlBaseParser.SQL - 42)) | (1 << (SqlBaseParser.TEXT - 42)) | (1 << (SqlBaseParser.TYPE - 42)) | (1 << (SqlBaseParser.IDENTIFIER - 42)) | (1 << (SqlBaseParser.DIGIT_IDENTIFIER - 42)) | (1 << (SqlBaseParser.QUOTED_IDENTIFIER - 42)) | (1 << (SqlBaseParser.BACKQUOTED_IDENTIFIER - 42)))) !== 0)) {
	            this.state = 319;
	            this.type();
	            this.state = 324;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===SqlBaseParser.T__0) {
	                this.state = 320;
	                this.match(SqlBaseParser.T__0);
	                this.state = 321;
	                this.type();
	                this.state = 326;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 329;
	        this.match(SqlBaseParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	type() {
	    let localctx = new TypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, SqlBaseParser.RULE_type);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 331;
	        this.baseType();
	        this.state = 343;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SqlBaseParser.T__1) {
	            this.state = 332;
	            this.match(SqlBaseParser.T__1);
	            this.state = 333;
	            this.typeParameter();
	            this.state = 338;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===SqlBaseParser.T__0) {
	                this.state = 334;
	                this.match(SqlBaseParser.T__0);
	                this.state = 335;
	                this.typeParameter();
	                this.state = 340;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 341;
	            this.match(SqlBaseParser.T__2);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	typeParameter() {
	    let localctx = new TypeParameterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, SqlBaseParser.RULE_typeParameter);
	    try {
	        this.state = 347;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case SqlBaseParser.INTEGER_VALUE:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 345;
	            this.match(SqlBaseParser.INTEGER_VALUE);
	            break;
	        case SqlBaseParser.ALL:
	        case SqlBaseParser.ANY:
	        case SqlBaseParser.ASC:
	        case SqlBaseParser.DESC:
	        case SqlBaseParser.LIMIT:
	        case SqlBaseParser.NAME:
	        case SqlBaseParser.ROW:
	        case SqlBaseParser.ROWS:
	        case SqlBaseParser.SQL:
	        case SqlBaseParser.TEXT:
	        case SqlBaseParser.TYPE:
	        case SqlBaseParser.IDENTIFIER:
	        case SqlBaseParser.DIGIT_IDENTIFIER:
	        case SqlBaseParser.QUOTED_IDENTIFIER:
	        case SqlBaseParser.BACKQUOTED_IDENTIFIER:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 346;
	            this.type();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	baseType() {
	    let localctx = new BaseTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, SqlBaseParser.RULE_baseType);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 349;
	        this.qualifiedName();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	callArgument() {
	    let localctx = new CallArgumentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, SqlBaseParser.RULE_callArgument);
	    try {
	        this.state = 356;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,42,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new PositionalArgumentContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 351;
	            this.expression();
	            break;

	        case 2:
	            localctx = new NamedArgumentContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 352;
	            this.identifier();
	            this.state = 353;
	            this.match(SqlBaseParser.T__4);
	            this.state = 354;
	            this.expression();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	qualifiedName() {
	    let localctx = new QualifiedNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, SqlBaseParser.RULE_qualifiedName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 358;
	        this.identifier();
	        this.state = 363;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,43,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 359;
	                this.match(SqlBaseParser.T__3);
	                this.state = 360;
	                this.identifier(); 
	            }
	            this.state = 365;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,43,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	identifier() {
	    let localctx = new IdentifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, SqlBaseParser.RULE_identifier);
	    try {
	        this.state = 371;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case SqlBaseParser.IDENTIFIER:
	            localctx = new UnquotedIdentifierContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 366;
	            this.match(SqlBaseParser.IDENTIFIER);
	            break;
	        case SqlBaseParser.QUOTED_IDENTIFIER:
	            localctx = new QuotedIdentifierContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 367;
	            this.match(SqlBaseParser.QUOTED_IDENTIFIER);
	            break;
	        case SqlBaseParser.ALL:
	        case SqlBaseParser.ANY:
	        case SqlBaseParser.ASC:
	        case SqlBaseParser.DESC:
	        case SqlBaseParser.LIMIT:
	        case SqlBaseParser.NAME:
	        case SqlBaseParser.ROW:
	        case SqlBaseParser.ROWS:
	        case SqlBaseParser.SQL:
	        case SqlBaseParser.TEXT:
	        case SqlBaseParser.TYPE:
	            localctx = new UnquotedIdentifierContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 368;
	            this.nonReserved();
	            break;
	        case SqlBaseParser.BACKQUOTED_IDENTIFIER:
	            localctx = new BackQuotedIdentifierContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 369;
	            this.match(SqlBaseParser.BACKQUOTED_IDENTIFIER);
	            break;
	        case SqlBaseParser.DIGIT_IDENTIFIER:
	            localctx = new DigitIdentifierContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 370;
	            this.match(SqlBaseParser.DIGIT_IDENTIFIER);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	number() {
	    let localctx = new NumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, SqlBaseParser.RULE_number);
	    try {
	        this.state = 375;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case SqlBaseParser.DECIMAL_VALUE:
	            localctx = new DecimalLiteralContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 373;
	            this.match(SqlBaseParser.DECIMAL_VALUE);
	            break;
	        case SqlBaseParser.INTEGER_VALUE:
	            localctx = new IntegerLiteralContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 374;
	            this.match(SqlBaseParser.INTEGER_VALUE);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nonReserved() {
	    let localctx = new NonReservedContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, SqlBaseParser.RULE_nonReserved);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 377;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SqlBaseParser.ALL) | (1 << SqlBaseParser.ANY) | (1 << SqlBaseParser.ASC) | (1 << SqlBaseParser.DESC))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (SqlBaseParser.LIMIT - 33)) | (1 << (SqlBaseParser.NAME - 33)) | (1 << (SqlBaseParser.ROW - 33)) | (1 << (SqlBaseParser.ROWS - 33)) | (1 << (SqlBaseParser.SQL - 33)) | (1 << (SqlBaseParser.TEXT - 33)) | (1 << (SqlBaseParser.TYPE - 33)))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

SqlBaseParser.EOF = antlr4.Token.EOF;
SqlBaseParser.T__0 = 1;
SqlBaseParser.T__1 = 2;
SqlBaseParser.T__2 = 3;
SqlBaseParser.T__3 = 4;
SqlBaseParser.T__4 = 5;
SqlBaseParser.ALL = 6;
SqlBaseParser.AND = 7;
SqlBaseParser.ANY = 8;
SqlBaseParser.AS = 9;
SqlBaseParser.ASC = 10;
SqlBaseParser.BETWEEN = 11;
SqlBaseParser.BY = 12;
SqlBaseParser.COLUMN = 13;
SqlBaseParser.COLUMNS = 14;
SqlBaseParser.DATA = 15;
SqlBaseParser.DATE = 16;
SqlBaseParser.DAY = 17;
SqlBaseParser.DELETE = 18;
SqlBaseParser.DESC = 19;
SqlBaseParser.EXISTS = 20;
SqlBaseParser.FALSE = 21;
SqlBaseParser.FIRST = 22;
SqlBaseParser.FROM = 23;
SqlBaseParser.GROUP = 24;
SqlBaseParser.IN = 25;
SqlBaseParser.INNER = 26;
SqlBaseParser.INSERT = 27;
SqlBaseParser.INTO = 28;
SqlBaseParser.IS = 29;
SqlBaseParser.JOIN = 30;
SqlBaseParser.LEFT = 31;
SqlBaseParser.LIKE = 32;
SqlBaseParser.LIMIT = 33;
SqlBaseParser.NAME = 34;
SqlBaseParser.NOT = 35;
SqlBaseParser.NULL = 36;
SqlBaseParser.ON = 37;
SqlBaseParser.OR = 38;
SqlBaseParser.ORDER = 39;
SqlBaseParser.OUTER = 40;
SqlBaseParser.RIGHT = 41;
SqlBaseParser.ROW = 42;
SqlBaseParser.ROWS = 43;
SqlBaseParser.SELECT = 44;
SqlBaseParser.SQL = 45;
SqlBaseParser.TEXT = 46;
SqlBaseParser.TO = 47;
SqlBaseParser.TRUE = 48;
SqlBaseParser.TYPE = 49;
SqlBaseParser.UESCAPE = 50;
SqlBaseParser.VALUES = 51;
SqlBaseParser.WHERE = 52;
SqlBaseParser.EQ = 53;
SqlBaseParser.NEQ = 54;
SqlBaseParser.LT = 55;
SqlBaseParser.LTE = 56;
SqlBaseParser.GT = 57;
SqlBaseParser.GTE = 58;
SqlBaseParser.PLUS = 59;
SqlBaseParser.MINUS = 60;
SqlBaseParser.ASTERISK = 61;
SqlBaseParser.SLASH = 62;
SqlBaseParser.PERCENT = 63;
SqlBaseParser.CONCAT = 64;
SqlBaseParser.STRING = 65;
SqlBaseParser.UNICODE_STRING = 66;
SqlBaseParser.BINARY_LITERAL = 67;
SqlBaseParser.INTEGER_VALUE = 68;
SqlBaseParser.DECIMAL_VALUE = 69;
SqlBaseParser.IDENTIFIER = 70;
SqlBaseParser.DIGIT_IDENTIFIER = 71;
SqlBaseParser.QUOTED_IDENTIFIER = 72;
SqlBaseParser.BACKQUOTED_IDENTIFIER = 73;
SqlBaseParser.WS = 74;
SqlBaseParser.UNRECOGNIZED = 75;
SqlBaseParser.DELIMITER = 76;

SqlBaseParser.RULE_singleStatement = 0;
SqlBaseParser.RULE_standaloneExpression = 1;
SqlBaseParser.RULE_statement = 2;
SqlBaseParser.RULE_tableElement = 3;
SqlBaseParser.RULE_columnDefinition = 4;
SqlBaseParser.RULE_likeClause = 5;
SqlBaseParser.RULE_sqlParameterDeclaration = 6;
SqlBaseParser.RULE_externalRoutineName = 7;
SqlBaseParser.RULE_query = 8;
SqlBaseParser.RULE_queryTerm = 9;
SqlBaseParser.RULE_queryPrimary = 10;
SqlBaseParser.RULE_sortItem = 11;
SqlBaseParser.RULE_querySpecification = 12;
SqlBaseParser.RULE_groupBy = 13;
SqlBaseParser.RULE_groupingElement = 14;
SqlBaseParser.RULE_groupingSet = 15;
SqlBaseParser.RULE_setQuantifier = 16;
SqlBaseParser.RULE_selectItem = 17;
SqlBaseParser.RULE_joinType = 18;
SqlBaseParser.RULE_joinCriteria = 19;
SqlBaseParser.RULE_columnAliases = 20;
SqlBaseParser.RULE_relationPrimary = 21;
SqlBaseParser.RULE_expression = 22;
SqlBaseParser.RULE_booleanExpression = 23;
SqlBaseParser.RULE_predicate = 24;
SqlBaseParser.RULE_valueExpression = 25;
SqlBaseParser.RULE_primaryExpression = 26;
SqlBaseParser.RULE_string = 27;
SqlBaseParser.RULE_comparisonOperator = 28;
SqlBaseParser.RULE_comparisonQuantifier = 29;
SqlBaseParser.RULE_booleanValue = 30;
SqlBaseParser.RULE_types = 31;
SqlBaseParser.RULE_type = 32;
SqlBaseParser.RULE_typeParameter = 33;
SqlBaseParser.RULE_baseType = 34;
SqlBaseParser.RULE_callArgument = 35;
SqlBaseParser.RULE_qualifiedName = 36;
SqlBaseParser.RULE_identifier = 37;
SqlBaseParser.RULE_number = 38;
SqlBaseParser.RULE_nonReserved = 39;

class SingleStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlBaseParser.RULE_singleStatement;
    }

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	EOF() {
	    return this.getToken(SqlBaseParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.enterSingleStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.exitSingleStatement(this);
		}
	}


}



class StandaloneExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlBaseParser.RULE_standaloneExpression;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	EOF() {
	    return this.getToken(SqlBaseParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.enterStandaloneExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.exitStandaloneExpression(this);
		}
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlBaseParser.RULE_statement;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class StatementDefaultContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	query() {
	    return this.getTypedRuleContext(QueryContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.enterStatementDefault(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.exitStatementDefault(this);
		}
	}


}

SqlBaseParser.StatementDefaultContext = StatementDefaultContext;

class InsertIntoContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	INSERT() {
	    return this.getToken(SqlBaseParser.INSERT, 0);
	};

	INTO() {
	    return this.getToken(SqlBaseParser.INTO, 0);
	};

	qualifiedName() {
	    return this.getTypedRuleContext(QualifiedNameContext,0);
	};

	query() {
	    return this.getTypedRuleContext(QueryContext,0);
	};

	columnAliases() {
	    return this.getTypedRuleContext(ColumnAliasesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.enterInsertInto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.exitInsertInto(this);
		}
	}


}

SqlBaseParser.InsertIntoContext = InsertIntoContext;

class DeleteContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	DELETE() {
	    return this.getToken(SqlBaseParser.DELETE, 0);
	};

	FROM() {
	    return this.getToken(SqlBaseParser.FROM, 0);
	};

	qualifiedName() {
	    return this.getTypedRuleContext(QualifiedNameContext,0);
	};

	WHERE() {
	    return this.getToken(SqlBaseParser.WHERE, 0);
	};

	booleanExpression() {
	    return this.getTypedRuleContext(BooleanExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.enterDelete(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.exitDelete(this);
		}
	}


}

SqlBaseParser.DeleteContext = DeleteContext;

class TableElementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlBaseParser.RULE_tableElement;
    }

	columnDefinition() {
	    return this.getTypedRuleContext(ColumnDefinitionContext,0);
	};

	likeClause() {
	    return this.getTypedRuleContext(LikeClauseContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.enterTableElement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.exitTableElement(this);
		}
	}


}



class ColumnDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlBaseParser.RULE_columnDefinition;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	NOT() {
	    return this.getToken(SqlBaseParser.NOT, 0);
	};

	NULL() {
	    return this.getToken(SqlBaseParser.NULL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.enterColumnDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.exitColumnDefinition(this);
		}
	}


}



class LikeClauseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlBaseParser.RULE_likeClause;
    }

	LIKE() {
	    return this.getToken(SqlBaseParser.LIKE, 0);
	};

	qualifiedName() {
	    return this.getTypedRuleContext(QualifiedNameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.enterLikeClause(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.exitLikeClause(this);
		}
	}


}



class SqlParameterDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlBaseParser.RULE_sqlParameterDeclaration;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.enterSqlParameterDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.exitSqlParameterDeclaration(this);
		}
	}


}



class ExternalRoutineNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlBaseParser.RULE_externalRoutineName;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.enterExternalRoutineName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.exitExternalRoutineName(this);
		}
	}


}



class QueryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlBaseParser.RULE_query;
        this.limit = null; // Token
    }

	queryTerm() {
	    return this.getTypedRuleContext(QueryTermContext,0);
	};

	ORDER() {
	    return this.getToken(SqlBaseParser.ORDER, 0);
	};

	BY() {
	    return this.getToken(SqlBaseParser.BY, 0);
	};

	sortItem = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SortItemContext);
	    } else {
	        return this.getTypedRuleContext(SortItemContext,i);
	    }
	};

	LIMIT() {
	    return this.getToken(SqlBaseParser.LIMIT, 0);
	};

	INTEGER_VALUE() {
	    return this.getToken(SqlBaseParser.INTEGER_VALUE, 0);
	};

	ALL() {
	    return this.getToken(SqlBaseParser.ALL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.enterQuery(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.exitQuery(this);
		}
	}


}



class QueryTermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlBaseParser.RULE_queryTerm;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class QueryTermDefaultContext extends QueryTermContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	queryPrimary() {
	    return this.getTypedRuleContext(QueryPrimaryContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.enterQueryTermDefault(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.exitQueryTermDefault(this);
		}
	}


}

SqlBaseParser.QueryTermDefaultContext = QueryTermDefaultContext;

class QueryPrimaryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlBaseParser.RULE_queryPrimary;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class QueryPrimaryDefaultContext extends QueryPrimaryContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	querySpecification() {
	    return this.getTypedRuleContext(QuerySpecificationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.enterQueryPrimaryDefault(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.exitQueryPrimaryDefault(this);
		}
	}


}

SqlBaseParser.QueryPrimaryDefaultContext = QueryPrimaryDefaultContext;

class InlineTableContext extends QueryPrimaryContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	VALUES() {
	    return this.getToken(SqlBaseParser.VALUES, 0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.enterInlineTable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.exitInlineTable(this);
		}
	}


}

SqlBaseParser.InlineTableContext = InlineTableContext;

class SortItemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlBaseParser.RULE_sortItem;
        this.ordering = null; // Token
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	ASC() {
	    return this.getToken(SqlBaseParser.ASC, 0);
	};

	DESC() {
	    return this.getToken(SqlBaseParser.DESC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.enterSortItem(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.exitSortItem(this);
		}
	}


}



class QuerySpecificationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlBaseParser.RULE_querySpecification;
        this.where = null; // BooleanExpressionContext
    }

	SELECT() {
	    return this.getToken(SqlBaseParser.SELECT, 0);
	};

	selectItem = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SelectItemContext);
	    } else {
	        return this.getTypedRuleContext(SelectItemContext,i);
	    }
	};

	setQuantifier() {
	    return this.getTypedRuleContext(SetQuantifierContext,0);
	};

	FROM() {
	    return this.getToken(SqlBaseParser.FROM, 0);
	};

	relationPrimary = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RelationPrimaryContext);
	    } else {
	        return this.getTypedRuleContext(RelationPrimaryContext,i);
	    }
	};

	WHERE() {
	    return this.getToken(SqlBaseParser.WHERE, 0);
	};

	GROUP() {
	    return this.getToken(SqlBaseParser.GROUP, 0);
	};

	BY() {
	    return this.getToken(SqlBaseParser.BY, 0);
	};

	groupBy() {
	    return this.getTypedRuleContext(GroupByContext,0);
	};

	booleanExpression() {
	    return this.getTypedRuleContext(BooleanExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.enterQuerySpecification(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.exitQuerySpecification(this);
		}
	}


}



class GroupByContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlBaseParser.RULE_groupBy;
    }

	groupingElement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(GroupingElementContext);
	    } else {
	        return this.getTypedRuleContext(GroupingElementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.enterGroupBy(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.exitGroupBy(this);
		}
	}


}



class GroupingElementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlBaseParser.RULE_groupingElement;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class SingleGroupingSetContext extends GroupingElementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	groupingSet() {
	    return this.getTypedRuleContext(GroupingSetContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.enterSingleGroupingSet(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.exitSingleGroupingSet(this);
		}
	}


}

SqlBaseParser.SingleGroupingSetContext = SingleGroupingSetContext;

class GroupingSetContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlBaseParser.RULE_groupingSet;
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.enterGroupingSet(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.exitGroupingSet(this);
		}
	}


}



class SetQuantifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlBaseParser.RULE_setQuantifier;
    }

	ALL() {
	    return this.getToken(SqlBaseParser.ALL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.enterSetQuantifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.exitSetQuantifier(this);
		}
	}


}



class SelectItemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlBaseParser.RULE_selectItem;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class SelectAllContext extends SelectItemContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	qualifiedName() {
	    return this.getTypedRuleContext(QualifiedNameContext,0);
	};

	ASTERISK() {
	    return this.getToken(SqlBaseParser.ASTERISK, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.enterSelectAll(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.exitSelectAll(this);
		}
	}


}

SqlBaseParser.SelectAllContext = SelectAllContext;

class SelectSingleContext extends SelectItemContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	AS() {
	    return this.getToken(SqlBaseParser.AS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.enterSelectSingle(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.exitSelectSingle(this);
		}
	}


}

SqlBaseParser.SelectSingleContext = SelectSingleContext;

class JoinTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlBaseParser.RULE_joinType;
    }

	INNER() {
	    return this.getToken(SqlBaseParser.INNER, 0);
	};

	LEFT() {
	    return this.getToken(SqlBaseParser.LEFT, 0);
	};

	OUTER() {
	    return this.getToken(SqlBaseParser.OUTER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.enterJoinType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.exitJoinType(this);
		}
	}


}



class JoinCriteriaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlBaseParser.RULE_joinCriteria;
    }

	ON() {
	    return this.getToken(SqlBaseParser.ON, 0);
	};

	booleanExpression() {
	    return this.getTypedRuleContext(BooleanExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.enterJoinCriteria(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.exitJoinCriteria(this);
		}
	}


}



class ColumnAliasesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlBaseParser.RULE_columnAliases;
    }

	identifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentifierContext);
	    } else {
	        return this.getTypedRuleContext(IdentifierContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.enterColumnAliases(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.exitColumnAliases(this);
		}
	}


}



class RelationPrimaryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlBaseParser.RULE_relationPrimary;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class TableNameContext extends RelationPrimaryContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	qualifiedName() {
	    return this.getTypedRuleContext(QualifiedNameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.enterTableName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.exitTableName(this);
		}
	}


}

SqlBaseParser.TableNameContext = TableNameContext;

class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlBaseParser.RULE_expression;
    }

	booleanExpression() {
	    return this.getTypedRuleContext(BooleanExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.exitExpression(this);
		}
	}


}



class BooleanExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlBaseParser.RULE_booleanExpression;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class LogicalNotContext extends BooleanExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NOT() {
	    return this.getToken(SqlBaseParser.NOT, 0);
	};

	booleanExpression() {
	    return this.getTypedRuleContext(BooleanExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.enterLogicalNot(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.exitLogicalNot(this);
		}
	}


}

SqlBaseParser.LogicalNotContext = LogicalNotContext;

class PredicatedContext extends BooleanExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this._valueExpression = null; // ValueExpressionContext;
        super.copyFrom(ctx);
    }

	valueExpression() {
	    return this.getTypedRuleContext(ValueExpressionContext,0);
	};

	predicate() {
	    return this.getTypedRuleContext(PredicateContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.enterPredicated(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.exitPredicated(this);
		}
	}


}

SqlBaseParser.PredicatedContext = PredicatedContext;

class PredicateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState, value) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlBaseParser.RULE_predicate;
        this.value = null
        this.value = value || null;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
			this.value = ctx.value;
		}

}


class ComparisonContext extends PredicateContext {

    constructor(parser, ctx) {
        super(parser);
        this.right = null; // ValueExpressionContext;
        super.copyFrom(ctx);
    }

	comparisonOperator() {
	    return this.getTypedRuleContext(ComparisonOperatorContext,0);
	};

	valueExpression() {
	    return this.getTypedRuleContext(ValueExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.enterComparison(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.exitComparison(this);
		}
	}


}

SqlBaseParser.ComparisonContext = ComparisonContext;

class NullPredicateContext extends PredicateContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	IS() {
	    return this.getToken(SqlBaseParser.IS, 0);
	};

	NULL() {
	    return this.getToken(SqlBaseParser.NULL, 0);
	};

	NOT() {
	    return this.getToken(SqlBaseParser.NOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.enterNullPredicate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.exitNullPredicate(this);
		}
	}


}

SqlBaseParser.NullPredicateContext = NullPredicateContext;

class BetweenContext extends PredicateContext {

    constructor(parser, ctx) {
        super(parser);
        this.lower = null; // ValueExpressionContext;
        this.upper = null; // ValueExpressionContext;
        super.copyFrom(ctx);
    }

	BETWEEN() {
	    return this.getToken(SqlBaseParser.BETWEEN, 0);
	};

	AND() {
	    return this.getToken(SqlBaseParser.AND, 0);
	};

	valueExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValueExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ValueExpressionContext,i);
	    }
	};

	NOT() {
	    return this.getToken(SqlBaseParser.NOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.enterBetween(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.exitBetween(this);
		}
	}


}

SqlBaseParser.BetweenContext = BetweenContext;

class QuantifiedComparisonContext extends PredicateContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	comparisonOperator() {
	    return this.getTypedRuleContext(ComparisonOperatorContext,0);
	};

	comparisonQuantifier() {
	    return this.getTypedRuleContext(ComparisonQuantifierContext,0);
	};

	query() {
	    return this.getTypedRuleContext(QueryContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.enterQuantifiedComparison(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.exitQuantifiedComparison(this);
		}
	}


}

SqlBaseParser.QuantifiedComparisonContext = QuantifiedComparisonContext;

class ValueExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlBaseParser.RULE_valueExpression;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ValueExpressionDefaultContext extends ValueExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	primaryExpression() {
	    return this.getTypedRuleContext(PrimaryExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.enterValueExpressionDefault(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.exitValueExpressionDefault(this);
		}
	}


}

SqlBaseParser.ValueExpressionDefaultContext = ValueExpressionDefaultContext;

class ArithmeticUnaryContext extends ValueExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.operator = null; // Token;
        super.copyFrom(ctx);
    }

	valueExpression() {
	    return this.getTypedRuleContext(ValueExpressionContext,0);
	};

	MINUS() {
	    return this.getToken(SqlBaseParser.MINUS, 0);
	};

	PLUS() {
	    return this.getToken(SqlBaseParser.PLUS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.enterArithmeticUnary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.exitArithmeticUnary(this);
		}
	}


}

SqlBaseParser.ArithmeticUnaryContext = ArithmeticUnaryContext;

class PrimaryExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlBaseParser.RULE_primaryExpression;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ColumnReferenceContext extends PrimaryExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.enterColumnReference(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.exitColumnReference(this);
		}
	}


}

SqlBaseParser.ColumnReferenceContext = ColumnReferenceContext;

class NullLiteralContext extends PrimaryExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NULL() {
	    return this.getToken(SqlBaseParser.NULL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.enterNullLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.exitNullLiteral(this);
		}
	}


}

SqlBaseParser.NullLiteralContext = NullLiteralContext;

class StringLiteralContext extends PrimaryExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.enterStringLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.exitStringLiteral(this);
		}
	}


}

SqlBaseParser.StringLiteralContext = StringLiteralContext;

class TypeConstructorContext extends PrimaryExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.enterTypeConstructor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.exitTypeConstructor(this);
		}
	}


}

SqlBaseParser.TypeConstructorContext = TypeConstructorContext;

class NumericLiteralContext extends PrimaryExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.enterNumericLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.exitNumericLiteral(this);
		}
	}


}

SqlBaseParser.NumericLiteralContext = NumericLiteralContext;

class BooleanLiteralContext extends PrimaryExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	booleanValue() {
	    return this.getTypedRuleContext(BooleanValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.enterBooleanLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.exitBooleanLiteral(this);
		}
	}


}

SqlBaseParser.BooleanLiteralContext = BooleanLiteralContext;

class StringContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlBaseParser.RULE_string;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class UnicodeStringLiteralContext extends StringContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	UNICODE_STRING() {
	    return this.getToken(SqlBaseParser.UNICODE_STRING, 0);
	};

	UESCAPE() {
	    return this.getToken(SqlBaseParser.UESCAPE, 0);
	};

	STRING() {
	    return this.getToken(SqlBaseParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.enterUnicodeStringLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.exitUnicodeStringLiteral(this);
		}
	}


}

SqlBaseParser.UnicodeStringLiteralContext = UnicodeStringLiteralContext;

class BasicStringLiteralContext extends StringContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	STRING() {
	    return this.getToken(SqlBaseParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.enterBasicStringLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.exitBasicStringLiteral(this);
		}
	}


}

SqlBaseParser.BasicStringLiteralContext = BasicStringLiteralContext;

class ComparisonOperatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlBaseParser.RULE_comparisonOperator;
    }

	EQ() {
	    return this.getToken(SqlBaseParser.EQ, 0);
	};

	NEQ() {
	    return this.getToken(SqlBaseParser.NEQ, 0);
	};

	LT() {
	    return this.getToken(SqlBaseParser.LT, 0);
	};

	LTE() {
	    return this.getToken(SqlBaseParser.LTE, 0);
	};

	GT() {
	    return this.getToken(SqlBaseParser.GT, 0);
	};

	GTE() {
	    return this.getToken(SqlBaseParser.GTE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.enterComparisonOperator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.exitComparisonOperator(this);
		}
	}


}



class ComparisonQuantifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlBaseParser.RULE_comparisonQuantifier;
    }

	ALL() {
	    return this.getToken(SqlBaseParser.ALL, 0);
	};

	ANY() {
	    return this.getToken(SqlBaseParser.ANY, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.enterComparisonQuantifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.exitComparisonQuantifier(this);
		}
	}


}



class BooleanValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlBaseParser.RULE_booleanValue;
    }

	TRUE() {
	    return this.getToken(SqlBaseParser.TRUE, 0);
	};

	FALSE() {
	    return this.getToken(SqlBaseParser.FALSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.enterBooleanValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.exitBooleanValue(this);
		}
	}


}



class TypesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlBaseParser.RULE_types;
    }

	type = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TypeContext);
	    } else {
	        return this.getTypedRuleContext(TypeContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.enterTypes(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.exitTypes(this);
		}
	}


}



class TypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlBaseParser.RULE_type;
    }

	baseType() {
	    return this.getTypedRuleContext(BaseTypeContext,0);
	};

	typeParameter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TypeParameterContext);
	    } else {
	        return this.getTypedRuleContext(TypeParameterContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.enterType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.exitType(this);
		}
	}


}



class TypeParameterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlBaseParser.RULE_typeParameter;
    }

	INTEGER_VALUE() {
	    return this.getToken(SqlBaseParser.INTEGER_VALUE, 0);
	};

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.enterTypeParameter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.exitTypeParameter(this);
		}
	}


}



class BaseTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlBaseParser.RULE_baseType;
    }

	qualifiedName() {
	    return this.getTypedRuleContext(QualifiedNameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.enterBaseType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.exitBaseType(this);
		}
	}


}



class CallArgumentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlBaseParser.RULE_callArgument;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class PositionalArgumentContext extends CallArgumentContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.enterPositionalArgument(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.exitPositionalArgument(this);
		}
	}


}

SqlBaseParser.PositionalArgumentContext = PositionalArgumentContext;

class NamedArgumentContext extends CallArgumentContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.enterNamedArgument(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.exitNamedArgument(this);
		}
	}


}

SqlBaseParser.NamedArgumentContext = NamedArgumentContext;

class QualifiedNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlBaseParser.RULE_qualifiedName;
    }

	identifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentifierContext);
	    } else {
	        return this.getTypedRuleContext(IdentifierContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.enterQualifiedName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.exitQualifiedName(this);
		}
	}


}



class IdentifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlBaseParser.RULE_identifier;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class BackQuotedIdentifierContext extends IdentifierContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	BACKQUOTED_IDENTIFIER() {
	    return this.getToken(SqlBaseParser.BACKQUOTED_IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.enterBackQuotedIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.exitBackQuotedIdentifier(this);
		}
	}


}

SqlBaseParser.BackQuotedIdentifierContext = BackQuotedIdentifierContext;

class QuotedIdentifierContext extends IdentifierContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	QUOTED_IDENTIFIER() {
	    return this.getToken(SqlBaseParser.QUOTED_IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.enterQuotedIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.exitQuotedIdentifier(this);
		}
	}


}

SqlBaseParser.QuotedIdentifierContext = QuotedIdentifierContext;

class DigitIdentifierContext extends IdentifierContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	DIGIT_IDENTIFIER() {
	    return this.getToken(SqlBaseParser.DIGIT_IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.enterDigitIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.exitDigitIdentifier(this);
		}
	}


}

SqlBaseParser.DigitIdentifierContext = DigitIdentifierContext;

class UnquotedIdentifierContext extends IdentifierContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	IDENTIFIER() {
	    return this.getToken(SqlBaseParser.IDENTIFIER, 0);
	};

	nonReserved() {
	    return this.getTypedRuleContext(NonReservedContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.enterUnquotedIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.exitUnquotedIdentifier(this);
		}
	}


}

SqlBaseParser.UnquotedIdentifierContext = UnquotedIdentifierContext;

class NumberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlBaseParser.RULE_number;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class DecimalLiteralContext extends NumberContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	DECIMAL_VALUE() {
	    return this.getToken(SqlBaseParser.DECIMAL_VALUE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.enterDecimalLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.exitDecimalLiteral(this);
		}
	}


}

SqlBaseParser.DecimalLiteralContext = DecimalLiteralContext;

class IntegerLiteralContext extends NumberContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	INTEGER_VALUE() {
	    return this.getToken(SqlBaseParser.INTEGER_VALUE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.enterIntegerLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.exitIntegerLiteral(this);
		}
	}


}

SqlBaseParser.IntegerLiteralContext = IntegerLiteralContext;

class NonReservedContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SqlBaseParser.RULE_nonReserved;
    }

	ALL() {
	    return this.getToken(SqlBaseParser.ALL, 0);
	};

	ANY() {
	    return this.getToken(SqlBaseParser.ANY, 0);
	};

	ASC() {
	    return this.getToken(SqlBaseParser.ASC, 0);
	};

	DESC() {
	    return this.getToken(SqlBaseParser.DESC, 0);
	};

	LIMIT() {
	    return this.getToken(SqlBaseParser.LIMIT, 0);
	};

	NAME() {
	    return this.getToken(SqlBaseParser.NAME, 0);
	};

	ROW() {
	    return this.getToken(SqlBaseParser.ROW, 0);
	};

	ROWS() {
	    return this.getToken(SqlBaseParser.ROWS, 0);
	};

	SQL() {
	    return this.getToken(SqlBaseParser.SQL, 0);
	};

	TEXT() {
	    return this.getToken(SqlBaseParser.TEXT, 0);
	};

	TYPE() {
	    return this.getToken(SqlBaseParser.TYPE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.enterNonReserved(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SqlBaseListener ) {
	        listener.exitNonReserved(this);
		}
	}


}




SqlBaseParser.SingleStatementContext = SingleStatementContext; 
SqlBaseParser.StandaloneExpressionContext = StandaloneExpressionContext; 
SqlBaseParser.StatementContext = StatementContext; 
SqlBaseParser.TableElementContext = TableElementContext; 
SqlBaseParser.ColumnDefinitionContext = ColumnDefinitionContext; 
SqlBaseParser.LikeClauseContext = LikeClauseContext; 
SqlBaseParser.SqlParameterDeclarationContext = SqlParameterDeclarationContext; 
SqlBaseParser.ExternalRoutineNameContext = ExternalRoutineNameContext; 
SqlBaseParser.QueryContext = QueryContext; 
SqlBaseParser.QueryTermContext = QueryTermContext; 
SqlBaseParser.QueryPrimaryContext = QueryPrimaryContext; 
SqlBaseParser.SortItemContext = SortItemContext; 
SqlBaseParser.QuerySpecificationContext = QuerySpecificationContext; 
SqlBaseParser.GroupByContext = GroupByContext; 
SqlBaseParser.GroupingElementContext = GroupingElementContext; 
SqlBaseParser.GroupingSetContext = GroupingSetContext; 
SqlBaseParser.SetQuantifierContext = SetQuantifierContext; 
SqlBaseParser.SelectItemContext = SelectItemContext; 
SqlBaseParser.JoinTypeContext = JoinTypeContext; 
SqlBaseParser.JoinCriteriaContext = JoinCriteriaContext; 
SqlBaseParser.ColumnAliasesContext = ColumnAliasesContext; 
SqlBaseParser.RelationPrimaryContext = RelationPrimaryContext; 
SqlBaseParser.ExpressionContext = ExpressionContext; 
SqlBaseParser.BooleanExpressionContext = BooleanExpressionContext; 
SqlBaseParser.PredicateContext = PredicateContext; 
SqlBaseParser.ValueExpressionContext = ValueExpressionContext; 
SqlBaseParser.PrimaryExpressionContext = PrimaryExpressionContext; 
SqlBaseParser.StringContext = StringContext; 
SqlBaseParser.ComparisonOperatorContext = ComparisonOperatorContext; 
SqlBaseParser.ComparisonQuantifierContext = ComparisonQuantifierContext; 
SqlBaseParser.BooleanValueContext = BooleanValueContext; 
SqlBaseParser.TypesContext = TypesContext; 
SqlBaseParser.TypeContext = TypeContext; 
SqlBaseParser.TypeParameterContext = TypeParameterContext; 
SqlBaseParser.BaseTypeContext = BaseTypeContext; 
SqlBaseParser.CallArgumentContext = CallArgumentContext; 
SqlBaseParser.QualifiedNameContext = QualifiedNameContext; 
SqlBaseParser.IdentifierContext = IdentifierContext; 
SqlBaseParser.NumberContext = NumberContext; 
SqlBaseParser.NonReservedContext = NonReservedContext; 
