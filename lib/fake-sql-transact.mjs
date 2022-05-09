import fs from 'fs';

export const openAppendOnlyTransactionLog = (path) => {
    const fd = fs.openSync(path, 'a')
    return fd
}

const saveCommandInTransactionLog = (fd, command) => {
    const buffer = Buffer.from(command + "\n")
    try {
        fs.writeSync(fd, buffer, 0, buffer.length, null)
        return true
    } catch (e) {
        console.log(`error writing to transaction log: ${e}`)
        return false
    }
}

export const decorateInsertTransaction = (fd, insertFn) => {
    return (table, values) => {
        if (saveCommandInTransactionLog(fd, `insertOrig('${table}', ${JSON.stringify(values)})`))
            return insertFn.call(this, table, values)
    }
}

export const decorateUpdateFromTransaction = (fd, updateFn) => {
    return (table, values, conditions) => {
        if (saveCommandInTransactionLog(fd, 
            `updateFromOrig('${table}', ${JSON.stringify(values)}, ${JSON.stringify(conditions)})`))
            return updateFn.call(this, table, values, conditions)
    }
}

export const decorateDeleteFromTransaction = (fd, deleteFn) => {
    return (table, where) => {
        if(saveCommandInTransactionLog(fd, `deleteFromOrig('${table}', ${JSON.stringify(where)})`))
            return deleteFn.call(this, table, where)
    }
}

export const replayTransactionLog = (path, insertOrig, deleteFromOrig, updateFromOrig) => {
    const fd = fs.openSync(path, 'r')
    const buffer = Buffer.alloc(1024)
    let offset = 0
    while (true) {
        const read = fs.readSync(fd, buffer, 0, 1024, offset)
        if (read === 0) break
        const line = buffer.toString('utf8', 0, read)
        console.log("replaying: " + line)
        eval(line)
        offset += read
    }
}
