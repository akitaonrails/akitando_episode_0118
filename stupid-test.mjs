import {select,from,outerJoin,innerJoin,orderBy,groupBy,insert,deleteFrom,deleteId,
    updateFrom,updateId,count,database} from './lib/fake-sql.mjs';
import {users} from './lib/users-database.mjs';
import {heroes} from './lib/heroes-database.mjs';
database['users'] = users
database['heroes'] = heroes

console.table(select('name', from('users', { where: 'users.name === "Peter Parker"' })))
console.table(select('name', from('users', { where: 'users.age > 30 && users.age < 40'})))
console.table(select('name', from('users', { where: 'users.city === "Gotham" || users.city === "Metropolis"'})))
console.table(select('count', groupBy('city', from('users'))))
console.table(select('name,age', groupBy('city', from('users'))['Coast City']))
console.table(select('name,age', orderBy('name', 'asc', from('users', { where: 'users.city === "Gotham"' }))));

console.table(select('name,alterego', innerJoin(from('users', { where: 'users.city === "Gotham"' }), from('heroes'))))
console.table(select('name,alterego', outerJoin(from('users', { where: 'users.city === "Gotham"' }), from('heroes'))))

console.log(count(innerJoin(from('users'), from('heroes'))))
console.log(count(outerJoin(from('users'), from('heroes'))))

let user_id = insert('users', { name: 'Katar Hol', age: 35, city: 'Thanagar' })
let hero_id = insert('heroes', { alterego: 'Hawkman', users_id: user_id })

console.table(select('name,alterego', innerJoin(from('users', { where: 'users.city === "Thanagar"' }), from('heroes'))))

console.log(updateFrom('users', { age: 37 }, { where: 'users.city === "Thanagar"' } ))
console.table(select('name,age', from('users', { where: `users.id === ${user_id}` })))

console.log(deleteId('users', user_id))
console.log(deleteId('heroes', hero_id))

console.table(select('name,age', from('users', { where: `users.id === ${user_id}` })))