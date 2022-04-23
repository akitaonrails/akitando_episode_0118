const database = {}
database['users'] = require('./users-database.js')
database['heroes'] = require('./heroes-database.js')

function select(columns, result) {
    if (Array.isArray(result)) {
        columns = columns.split(',')
        return result.map(row => columns.map((column) => {
            if (row[column] === undefined) {
                return null
            } else {
                return row[column]
            }
        }))
    } else {
        // only does .length for now
        Object.keys(result).forEach(key => {
            result[key] = result[key].length
        })
        return result
    }
}


const from = (table, conditions) => {
    if (conditions === undefined) {
        return database[table]
    } else {
        return eval(`database[table].filter((${table}) => {
            return ${conditions.where}
        })`)
    }
}

const outerJoin = (users, heroes) => {
    return users.map(user => {
        return {
            ...user, // doesn't do any property conflict check, so id will be overriden
            ...heroes.find(hero => hero.users_id === user.id)
        }
    })
}

const innerJoin = (users, heroes) => {
    const result = users.filter(user => heroes.filter(hero => hero.users_id === user.id).length > 0)
    return outerJoin(result, heroes)
}

const orderBy = (column, order, result) => {
    return result.sort((a, b) => {
        let compare = 0
        if(a[column] < b[column]) {
            compare = -1
        } else if (a[column] > b[column]) {
            compare = 1
        }
        return (order === 'asc' ? compare : -compare)
    })
}

const groupBy = (column, result) => {
    const grouped = {}
    result.forEach(user => {
        if (grouped[user[column]] === undefined) {
            grouped[user[column]] = []
        }
        grouped[user[column]].push(user)
    })
    return grouped
}


console.log(select('name', from('users', { where: 'users.name === "Peter Parker"' })));
console.log(select('name', from('users', { where: 'users.age > 30 && users.age < 40'})));
console.log(select('name', from('users', { where: 'users.city === "Gotham" || users.city === "Metropolis"'})));
console.log(select('', groupBy('city', from('users'))));
console.log(select('count', groupBy('city', from('users'))));
console.log(select('name,age', groupBy('city', from('users'))['Coast City']));
console.log(select('name,age', orderBy('name', 'asc', from('users', { where: 'users.city === "Gotham"' }))));

console.log(innerJoin(from('users'), from('heroes')).length);
console.log(outerJoin(from('users'), from('heroes')).length);

console.log(select('name,alterego', innerJoin(from('users', { where: 'users.city === "Gotham"' }), from('heroes'))));
console.log(select('name,alterego', outerJoin(from('users', { where: 'users.city === "Gotham"' }), from('heroes'))));