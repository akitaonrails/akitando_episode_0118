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

const insert = (table, values) => {
    const id = from(table).length + 1
    from(table).push({
        ...values,
        id
    })
    return id
}

const deleteFrom = (table, conditions) => {
    let counter = 0
    from(table, conditions).forEach(row => {
        counter ++
        from(table).pop(row)
    })
    return counter
}   

const deleteId = (table, id) => {
    return deleteFrom(table, { where: `${table}.id === ${id}` })
}

const count = (result) => {
    return result.length
}

const updateFrom = (table, values, conditions) => {
    let counter = 0
    from(table, conditions).forEach(row => {
        Object.keys(values).forEach(key => {
            counter ++
            row[key] = values[key]
        })
    })
    return counter
}

const updateId = (table, values, id) => {
    return updateFrom(table, values, { where: `${table}.id === ${id}` })
}


const database = {}

module.exports = [
    select,from,outerJoin,innerJoin,orderBy,groupBy,insert,deleteFrom,deleteId,updateFrom,updateId,count,database
]