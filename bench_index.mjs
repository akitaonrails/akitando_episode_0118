#!/usr/bin/env node
import {select,from,outerJoin,innerJoin,orderBy,groupBy,insert,deleteFrom,deleteId,
    updateFrom,updateId,count,database} from './lib/fake-sql.mjs';
import {createIndex,insertIndex,removeIndex,getRangeIndex,getFromIndex,
    getFromIds,decorateInsert,decorateDeleteId,indexes} from './lib/fake-sql-index.mjs';
import {users} from './lib/users-database.mjs';
database['users'] = users

const timer = (command) => {
    const start = new Date()
    const result = eval(command)
    const end = new Date()
    const time = end.getTime() - start.getTime()
    console.log(`${command}\ntook ${time} ms`)
    return result
}

Object.keys(users[0]).forEach(key => {
    createIndex('users', key)
    users.forEach(user => {
        insertIndex('users', key, user[key], user['id'])
    })
})

// repeat everything X times to create volume so timer is significant
const newInsert = decorateInsert(insert)
for(let i = 0; i < 18; i++) {
    users.forEach(user => {
        newInsert('users', user)
    })
}
console.log(`table size: ${count(users)}`)

let result = timer(`from('users', { where: 'users.city === "Wakanda"'})`)
console.log(`normal select: ${result.length}\n`)

result = timer(`getFromIds(users,getFromIndex('users', 'city', 'Wakanda'))`)
console.log(`indexed select: ${result.length}\n`)