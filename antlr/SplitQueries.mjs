"use strict";
import {default as antlr4} from 'antlr4';
import {SqlBaseLexer} from "./SqlBaseLexer.js";
import {SqlBaseParser} from "./SqlBaseParser.js";
import {CustomListener} from "./CustomListener.js";
export var SplitQueries = function () {
    var input = "SELECT name, age FROM users WHERE age > 20 AND city = 'Gotham'";
    var chars = new antlr4.InputStream(input);
    var lexer = new SqlBaseLexer(chars);
    var tokens = new antlr4.CommonTokenStream(lexer);
    var parser = new SqlBaseParser(tokens);
    parser.buildParseTrees = true;
    var tree = parser.statement(); // the tree upon which I'll walk
    var result = [];
    var listener = new CustomListener(result); // custom listener builds on the empty results array
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
    return listener.result; // this function returns the start and stop indices.
};
SplitQueries();