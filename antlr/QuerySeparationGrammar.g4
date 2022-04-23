grammar QuerySeparationGrammar;

queriesText 
    : statement* EOF
    ;

statement 
    : ';'* (CHAR | STRING | COMMENT)+ ';'*
    ;

CHAR 
    : ~';' 
    ;

STRING
    : '\'' ( ~'\'' | '\'\'' )* '\''
    ;

COMMENT
    : SIMPLE_COMMENT | BRACKETED_COMMENT 
    ;

fragment SIMPLE_COMMENT
    : '--' ~[\r\n]* '\r'? '\n'?
    ;

fragment BRACKETED_COMMENT
    : '/*' .*? '*/'
    ;
