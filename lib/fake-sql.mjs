export const select = (columns, result) => {
    switch(columns) {
        case '*':
            columns = Object.keys(result[0])
            break;
        case 'count':
            return result.length
        default:
            columns = columns.split(',')
    }
    if (result === undefined) return []
    return result.map(row => columns.map((column) => {
        if (row[column] === undefined) {
            return null
        } else {
            return row[column]
        }
    }).reduce((a, v, i) => ({...a, [columns[i]]: v}), {}))
}

export const from = (table, conditions) => {
    if (conditions === undefined) {
        if(database[table]) {
            return database[table]
        }
        throw new Error('Table or view not exists');
    } else {
        return eval(`database[table].filter((${table}) => {
            return ${conditions.where}
        })`)
    }
}

export const outerJoin = (users, heroes) => {
    return users.map(user => {
        return {
            ...user, // doesn't do any property conflict check, so id will be overriden
            ...heroes.find(hero => hero.users_id === user.id)
        }
    })
}

export const innerJoin = (users, heroes) => {
    const result = users.filter(user => heroes.filter(hero => hero.users_id === user.id).length > 0)
    return outerJoin(result, heroes)
}

export const orderBy = (column, order, result) => {
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

export const groupBy = (column, result) => {
    const grouped = {}
    result.forEach(user => {
        if (grouped[user[column]] === undefined) {
            grouped[user[column]] = []
        }
        grouped[user[column]].push(user)
    })
    return grouped
}

export const insert = (table, values) => {
    const id = from(table).length + 1
    from(table).push({
        ...values,
        id
    })
    return id
}

export const deleteFrom = (table, conditions) => {
    let counter = 0
    from(table, conditions).forEach(row => {
        counter ++
        from(table).pop(row)
    })
    return counter
}   

export const deleteId = (table, id) => {
    return deleteFrom(table, { where: `${table}.id === ${id}` })
}

export const count = (result) => {
    return result.length
}

export const updateFrom = (table, values, conditions) => {
    let counter = 0
    from(table, conditions).forEach(row => {
        Object.keys(values).forEach(key => {
            counter ++
            row[key] = values[key]
        })
    })
    return counter
}

export const updateId = (table, values, id) => {
    return updateFrom(table, values, { where: `${table}.id === ${id}` })
}


export const database = {}