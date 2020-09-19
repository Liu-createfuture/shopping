//防抖
export function debouce(func, delay) {
    let item = '';
    return () => {
        //判断item,有值就取消定时器,没有值就执行定时器
        if (item) clearTimeout(item);

        item = setTimeout(() => {
            console.log('1');
            func()
        }, delay)
    }
}

function padLeftZero(str) {
    return ("00" + str).substr(str.length);
}

// 时间格式化
export function formatDate(date, fmt) {
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }

    let o = {
        "M+": date.getMonth() + 1,
        "d+": date.getDate(),
        "h+": date.getHours(),
        "m+": date.getMinutes(),
        "s+": date.getSeconds()
    };

    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + "";
            fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str));
        }
    }

    return fmt;
}