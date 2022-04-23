import * as antlr4 from 'antlr4';
import { SqlBaseLexer } from './SqlBaseLexer';
import { SqlBaseParser } from './SqlBaseParser';
import { SqlBaseListener } from './SqlBaseListener';
import { CustomListener } from'./CustomListener';

export const SplitQueries = () => {

  const chars = new antlr4.InputStream("SELECT name, age FROM users WHERE age > 20 AND city = 'Gotham'");
  const lexer = new SqlBaseLexer(chars);
  const tokens  = new antlr4.CommonTokenStream(lexer);
  const parser = new SqlBaseParser(tokens);
  parser.buildParseTrees = true;
  const tree = parser.queriesText(); // the tree upon which I'll walk

  const result = [];

  const listener = new CustomListener(result); // custom listener builds on the empty results array
  antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);

  return listener.result; // this function returns the start and stop indices.
};
