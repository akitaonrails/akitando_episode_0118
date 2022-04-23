"use strict";
exports.__esModule = true;
exports.SplitQueries = void 0;
var antlr4 = require("antlr4");
var SqlBaseLexer_1 = require("./SqlBaseLexer");
var SqlBaseParser_1 = require("./SqlBaseParser");
var CustomListener_1 = require("./CustomListener");
var SplitQueries = function () {
    var chars = new antlr4.InputStream("SELECT name, age FROM users WHERE age > 20 AND city = 'Gotham'");
    var lexer = new SqlBaseLexer_1.SqlBaseLexer(chars);
    var tokens = new antlr4.CommonTokenStream(lexer);
    var parser = new SqlBaseParser_1.SqlBaseParser(tokens);
    parser.buildParseTrees = true;
    var tree = parser.queriesText(); // the tree upon which I'll walk
    var result = [];
    var listener = new CustomListener_1.CustomListener(result); // custom listener builds on the empty results array
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
    return listener.result; // this function returns the start and stop indices.
};
exports.SplitQueries = SplitQueries;
