== Stupid Database

This is an exercise in building a very minimal (and very stupid) in-memory SQL-like database for educational purposes.

None of this code is to be considered usable in a real project. There are no safeguards, security, checks, or anything that resembles production-ready code. And it's written this way to be easily understandable for a very beginner programmer.

The goal is to demystify the SQL syntax like:

`SELECT name FROM users WHERE age > 30`

To an equivalente javascript call like:

`select('name', from('users', { where: 'users.age > 30' }))`

And the idea is to have a "mental model" of what SQL means in a more general programming language

You can run the example with:

`node stupid-database.js`


Copyright (C) Fabio Akita, 2022
This project should not be used out of context, without the permission of the author