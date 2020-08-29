export function compose(...args) {
    if (args.length === 0) {
        throw new Error('in compose: number of arguments')
    }

    if (args.length === 1) {
        return args[0]
    }

    return function composed(params) {
        return args.reduceRight((acc, fn) => fn(acc), params)
    }
}

export function isFunction(fn) {
    return typeof fn === 'function'
}

export function composeReducers(...fns) {
    if (fns.length === 0) {
        throw new Error('in compose  reducers: number of arguments')
    }

    if (fns.length === 1) {
        return fns[0]
    }

    return function composed(state, action) {
        return fns.reduceRight((acc, fn) => fn(acc, action), state)
    }
}
