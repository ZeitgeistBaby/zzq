//单一过滤器
//导出 trim
export const trim = (str) => {
    if (typeof str != 'string') {
        throw Error('Must be a string')
    } else {
        return str.replace(/^\s+|\s+$/g,'')
    }
};

//或者导出多个，注：在index.js 引用时，应将 a 引入

// export const a = 11;