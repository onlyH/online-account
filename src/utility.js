export const LIST_VIEW = 'view'
export const CHART_VIEW = 'chart'
export const TYPE_INCOME = 'income'
export const TYPE_OUTCOME = 'outcome'

//加0判断
export const n = (n) => n >= 10 ? n : '0' + n

//年份月份封装
export const range = (size, startAt = 0) => {
    const arr = []
    for(let i = 0 ; i < size; i ++) {
        arr[i] = startAt + i
    }
    return arr
};
//获取年月
export const parseToYearAndMonth = str => {
    const data = str ? new Date(str) : new Date()
    return {
        year: data.getFullYear(),
        month: data.getMonth() + 1
    }
};

export const isValidDate = dateString => {
    const regEx = /^\d{4}-\d{2}-\d{2}$/;
    if(!dateString.match(regEx)) return false;
    const d = new Date(dateString);
    if(Number.isNaN(d.getTime())) return false;
    return d.toISOString().slice(0,10) === dateString
};

export const FlatterArr = arr => {
    return arr.reduce((map,item)=> {
        map[item.id] = item
        return map
    },{})
};

// 不重复的随机数
const ID = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
};
export const Colors = {
    blue: '#347eff',
    deepBlue: '#61dafb',
    green: '#28a745',
    red: '#dc3545',
    gray: '#555',
    lightGray: '#efefef',
    white: '#fff',
}