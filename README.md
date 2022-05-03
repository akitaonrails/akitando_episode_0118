### Stupid Database

This is an exercise in building a very minimal (and very stupid) in-memory SQL-like database for educational purposes.

None of this code is to be considered usable in a real project. There are no safeguards, security, checks, or anything that resembles production-ready code. And it's written this way to be easily understandable for a very beginner programmer.

The goal is to demystify the SQL syntax like:

`SELECT name FROM users WHERE age > 30`

To an equivalent javascript call like:

`select('name', from('users', { where: 'users.age > 30' }))`

And the idea is to have a "mental model" of what SQL means in a more general programming language

You can run the example with:

`node test`

### REPL

You can open an interactive REPL to run SQL command directly by running:

`./repl.js`

It's a node REPL and you can send SQL commands like this:

`stupid sql > select name from users where users.city = 'Gotham'`


### REPL with Transaction Log

This is another experimental version of a persistency layer based on a simple append-only transaction log.

This will decorate the insert, delete and update functions with special transaction-enabled versions.

Transactions will be saved in the 'transact.log' file.

Run: `./replTransact.mjs`

This will replay existing transactions and save new operations to the transaction log.

### Client/Server

There is also a demonstration of the most minimal bare-bones "SQL-like"
database. You can start this server at port 4000:

`./stupid-server.mjs`

And connect to it with this client:

`./stupid-client.mjs`

It will open an interactive prompt so you can send the SQL commands

### AVL Tree based Index

Just to show how an index is built and used (in a normal SQL server,
it's obviously a B+Tree, but as this is a stupid in-memory hash, a simple
AVL Tree should suffice).

We can compare the times for the equivalente of a 'table scan' filtering
every single element in the table or using the index.

`
./bench_index.mjs
`

Spoilers: on my i9-9900K, with NVME, running inside WSL2, this is the result:

`
❯ ./bench_index.mjs
from('users', { where: 'users.city === "Wakanda"'}).length
took 145 ms
normal select: 524288

getFromIds(users,getFromIndex('users', 'city', 'Wakanda')).length
took 20 ms
indexed select: 524288
`

The AVL indexed version can go from anywhere around 5 to 10 times faster, obviously.


### ANTLR4

Just out of fun, I did a very small and very naive implementation of a SQL parser using Antlr4.

You can run very basic SQL against the stupid database. Just add the commands in the `test.sql` file and run doing:

`./stupid.mjs`

The parser is a stripped down version copied from the SQLite3 parser.

Again, this is for educational purposes only.

---

Copyright (C) Fabio Akita, 2022
This project should not be used out of context, without the permission of the author