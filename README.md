### Stupid Database

This is an exercise in building a very minimal (and very stupid) in-memory SQL-like database for educational purposes.

None of this code is to be considered usable in a real project. There are no safeguards, security, checks, or anything that resembles production-ready code. And it's written this way to be easily understandable for a very beginner programmer.

The goal is to demystify the SQL syntax like:

`SELECT name FROM users WHERE age > 30`

To an equivalent javascript call like:

`select('name', from('users', { where: 'users.age > 30' }))`

And the idea is to have a "mental model" of what SQL means in a more general programming language

You can run the example with:

`node stupid-test.mjs`

### ANTLR4

Just out of fun, I did a very small and very naive implementation of a SQL parser using Antlr4.

You can run very basic SQL agains the stupid database. Just add the commands in the `test.sql` file and run doing:

`node stupid.mjs`

The parser is a stripped down version copied from the SQLite3 parser.

Again, this is for educational purposes only.

---

Copyright (C) Fabio Akita, 2022
This project should not be used out of context, without the permission of the author