/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

grammar SqlBase;

tokens {
    DELIMITER
}

singleStatement
    : statement EOF
    ;

standaloneExpression
    : expression EOF
    ;

statement
    : query                                                            #statementDefault
    | INSERT INTO qualifiedName columnAliases? query                   #insertInto
    | DELETE FROM qualifiedName (WHERE booleanExpression)?             #delete
    ;

tableElement
    : columnDefinition
    | likeClause
    ;

columnDefinition
    : identifier type (NOT NULL)?
    ;

likeClause
    : LIKE qualifiedName
    ;

sqlParameterDeclaration
    : identifier type
    ;

externalRoutineName
    : identifier
    ;

query:
      queryTerm
      (ORDER BY sortItem (',' sortItem)*)?
      (LIMIT limit=(INTEGER_VALUE | ALL))?
    ;

queryTerm
    : queryPrimary                                                             #queryTermDefault
    ;

queryPrimary
    : querySpecification                   #queryPrimaryDefault
    | VALUES expression (',' expression)*  #inlineTable
    ;

sortItem
    : expression ordering=(ASC | DESC)?
    ;

querySpecification
    : SELECT setQuantifier? selectItem (',' selectItem)*
      (FROM relationPrimary (',' relationPrimary)*)?
      (WHERE where=booleanExpression)?
      (GROUP BY groupBy)?
    ;

groupBy
    : groupingElement (',' groupingElement)*
    ;

groupingElement
    : groupingSet                                            #singleGroupingSet
    ;

groupingSet
    : '(' (expression (',' expression)*)? ')'
    | expression
    ;

setQuantifier
    : ALL
    ;

selectItem
    : expression (AS? identifier)?  #selectSingle
    | qualifiedName '.' ASTERISK    #selectAll
    | ASTERISK                      #selectAll
    ;

joinType
    : INNER?
    | LEFT OUTER?
    ;

joinCriteria
    : ON booleanExpression
    ;

columnAliases
    : '(' identifier (',' identifier)* ')'
    ;

relationPrimary
    : qualifiedName                                                   #tableName
    ;

expression
    : booleanExpression
    ;

booleanExpression
    : valueExpression predicate[$valueExpression.ctx]?             #predicated
    | NOT booleanExpression                                        #logicalNot
    ;

// workaround for https://github.com/antlr/antlr4/issues/780
predicate[ParserRuleContext value]
    : comparisonOperator right=valueExpression                            #comparison
    | comparisonOperator comparisonQuantifier '(' query ')'               #quantifiedComparison
    | NOT? BETWEEN lower=valueExpression AND upper=valueExpression        #between
    | IS NOT? NULL                                                        #nullPredicate
    ;

valueExpression
    : primaryExpression                                                                 #valueExpressionDefault
    | operator=(MINUS | PLUS) valueExpression                                           #arithmeticUnary
    ;

primaryExpression
    : NULL                                                                                #nullLiteral
    | identifier string                                                                   #typeConstructor
    | number                                                                              #numericLiteral
    | booleanValue                                                                        #booleanLiteral
    | string                                                                              #stringLiteral
    | identifier                                                                          #columnReference
    ;

string
    : STRING                                #basicStringLiteral
    | UNICODE_STRING (UESCAPE STRING)?      #unicodeStringLiteral
    ;

comparisonOperator
    : EQ | NEQ | LT | LTE | GT | GTE
    ;

comparisonQuantifier
    : ALL | ANY
    ;

booleanValue
    : TRUE | FALSE
    ;

types
    : '(' (type (',' type)*)? ')'
    ;

type
    : baseType ('(' typeParameter (',' typeParameter)* ')')?
    ;

typeParameter
    : INTEGER_VALUE | type
    ;

baseType
    : qualifiedName
    ;


callArgument
    : expression                    #positionalArgument
    | identifier '=>' expression    #namedArgument
    ;

qualifiedName
    : identifier ('.' identifier)*
    ;

identifier
    : IDENTIFIER             #unquotedIdentifier
    | QUOTED_IDENTIFIER      #quotedIdentifier
    | nonReserved            #unquotedIdentifier
    | BACKQUOTED_IDENTIFIER  #backQuotedIdentifier
    | DIGIT_IDENTIFIER       #digitIdentifier
    ;

number
    : DECIMAL_VALUE  #decimalLiteral
    | INTEGER_VALUE  #integerLiteral
    ;

nonReserved
    // IMPORTANT: this rule must only contain tokens. Nested rules are not supported. See SqlParser.exitNonReserved
    : ALL | ANY | ASC
    | DESC
    | LIMIT
    | NAME
    | ROW | ROWS
    | SQL
    | TEXT | TYPE
    ;

ALL: 'ALL';
AND: 'AND';
ANY: 'ANY';
AS: 'AS';
ASC: 'ASC';
BETWEEN: 'BETWEEN';
BY: 'BY';
COLUMN: 'COLUMN';
COLUMNS: 'COLUMNS';
DATA: 'DATA';
DATE: 'DATE';
DAY: 'DAY';
DELETE: 'DELETE';
DESC: 'DESC';
EXISTS: 'EXISTS';
FALSE: 'FALSE';
FIRST: 'FIRST';
FROM: 'FROM';
GROUP: 'GROUP';
IN: 'IN';
INNER: 'INNER';
INSERT: 'INSERT';
INTO: 'INTO';
IS: 'IS';
JOIN: 'JOIN';
LEFT: 'LEFT';
LIKE: 'LIKE';
LIMIT: 'LIMIT';
NAME: 'NAME';
NOT: 'NOT';
NULL: 'NULL';
ON: 'ON';
OR: 'OR';
ORDER: 'ORDER';
OUTER: 'OUTER';
RIGHT: 'RIGHT';
ROW: 'ROW';
ROWS: 'ROWS';
SELECT: 'SELECT';
SQL: 'SQL';
TEXT: 'TEXT';
TO: 'TO';
TRUE: 'TRUE';
TYPE: 'TYPE';
UESCAPE: 'UESCAPE';
VALUES: 'VALUES';
WHERE: 'WHERE';

EQ  : '=';
NEQ : '<>' | '!=';
LT  : '<';
LTE : '<=';
GT  : '>';
GTE : '>=';

PLUS: '+';
MINUS: '-';
ASTERISK: '*';
SLASH: '/';
PERCENT: '%';
CONCAT: '||';

STRING
    : '\'' ( ~'\'' | '\'\'' )* '\''
    ;

UNICODE_STRING
    : 'U&\'' ( ~'\'' | '\'\'' )* '\''
    ;

// Note: we allow any character inside the binary literal and validate
// its a correct literal when the AST is being constructed. This
// allows us to provide more meaningful error messages to the user
BINARY_LITERAL
    :  'X\'' (~'\'')* '\''
    ;

INTEGER_VALUE
    : DIGIT+
    ;

DECIMAL_VALUE
    : DIGIT+ '.' DIGIT*
    | '.' DIGIT+
    ;

IDENTIFIER
    : (LETTER | '_') (LETTER | DIGIT | '_' | '@' | ':')*
    ;

DIGIT_IDENTIFIER
    : DIGIT (LETTER | DIGIT | '_' | '@' | ':')+
    ;

QUOTED_IDENTIFIER
    : '"' ( ~'"' | '""' )* '"'
    ;

BACKQUOTED_IDENTIFIER
    : '`' ( ~'`' | '``' )* '`'
    ;

fragment EXPONENT
    : 'E' [+-]? DIGIT+
    ;

fragment DIGIT
    : [0-9]
    ;

fragment LETTER
    : [A-Z]
    ;

WS
    : [ \r\n\t]+ -> channel(HIDDEN)
    ;

// Catch-all for anything we can't recognize.
// We use this to be able to ignore and recover all the text
// when splitting statements with DelimiterLexer
UNRECOGNIZED
    : .
    ;
