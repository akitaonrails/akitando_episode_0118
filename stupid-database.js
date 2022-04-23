const [select,from,outerJoin,innerJoin,orderBy,groupBy,insert,deleteFrom,deleteId,count,database] = require('./fake-sql.js')
database['users'] = require('./users-database.js')
database['heroes'] = require('./heroes-database.js')

console.log(select('name', from('users', { where: 'users.name === "Peter Parker"' })));
console.log(select('name', from('users', { where: 'users.age > 30 && users.age < 40'})));
console.log(select('name', from('users', { where: 'users.city === "Gotham" || users.city === "Metropolis"'})));
console.log(select('count', groupBy('city', from('users'))));
console.log(select('name,age', groupBy('city', from('users'))['Coast City']));
console.log(select('name,age', orderBy('name', 'asc', from('users', { where: 'users.city === "Gotham"' }))));

console.log(select('name,alterego', innerJoin(from('users', { where: 'users.city === "Gotham"' }), from('heroes'))));
console.log(select('name,alterego', outerJoin(from('users', { where: 'users.city === "Gotham"' }), from('heroes'))));

console.log(count(innerJoin(from('users'), from('heroes'))));
console.log(count(outerJoin(from('users'), from('heroes'))));

let user_id = insert('users', { name: 'Katar Hol', age: 35, city: 'Thanagar' })
insert('heroes', { alterego: 'Hawkman', users_id: user_id })

console.log(select('name,alterego', innerJoin(from('users', { where: 'users.city === "Thanagar"' }), from('heroes'))));