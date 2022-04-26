These are the files used in Rockset Console to parse a list of queries separated by semicolons, all in the user's browser. To re-generate files from grammar, run: `antlr4 -Dlanguage=JavaScript QuerySeparationGrammar.g4`. You can run the splitQueries script on your own string inputs!

See [this blog](https://rockset.com/blog/client-side-sql-query-parsing-with-antlr/) for how we use this in Rockset.
See [here](https://github.com/antlr/antlr4/blob/master/doc/javascript-target.md) for more information on ANTLR in javascript.
