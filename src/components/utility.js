export const LIST_VIEW = 'view'
export const CHART_VIEW = 'chart'
//加0判断
export const n = (n) => n > 10 ? n : '0' + n

//年份月份封装
export const range = (size, startAt = 0) => {
    const arr = []
    for(let i = 0 ; i < size; i ++) {
        arr[i] = startAt + i
    }
    return arr
}