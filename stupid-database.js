const database = require('./users-database.js');

const select = (columns, result) => {
    if (Array.isArray(result)) {
        columns = columns.split(',')
        return result.map(row => columns.map((column) => {
            if (row[column] === undefined) {
                return eval(`row[0].${column}`)
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
