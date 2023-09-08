// 写一个时间格式化函数

function dateFormat(dateStr) {
    const dt = new Date(dateStr)

    const y = dt.getFullYear()
    const m = padZero(dt.getMonth() + 1)
    const d = padZero(dt.getDate())

    const hh = padZero(dt.getHours())
    const mm = padZero(dt.getMinutes())
    const ss = padZero(dt.getSeconds())

    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}

/*深拷贝*/

function deepClone(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj
    }
    let newObj = obj instanceof Array ? [] : {}
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = deepClone(obj[key])
        }
    }
    return newObj
}

// 浅拷贝

function shallowClone(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj
    }
    let newObj = obj instanceof Array ? [] : {}
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = obj[key]
        }
    }
    return newObj
}
// 防抖

function debounce(func, delay) {
    let timer = null
    return function (...args) {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            func.apply(this, args)
        }, delay)
    }
}
// 节流

function throttle(func, delay) {
    let timer = null
    return function (...args) {
        if (!timer) {
            timer = setTimeout(() => {
                func.apply(this, args)
                timer = null
            }, delay)
        }
    }
}

// 手写promise

function MyPromise(executor) {
    let self = this
    self.status = 'pending'
    self.data = undefined
    self.callbacks = []
    function resolve(data) {
        if (self.status === 'pending') {
            self.status = 'resolved'
            self.data = data
            self.callbacks.forEach(cb => cb.onResolved(data))
        }
    }
    function reject(data) {
        if (self.status === 'pending') {
            self.status = 'rejected'
            self.data = data
            self.callbacks.forEach(cb => cb.onRejected(data))
        }
    }
    executor(resolve, reject)
}

// 冒泡排序

function bubbleSort(arr) {
    
function bubbleSort(arr) {
    let len = arr.length
    for (let i = 0; i < len - 1;
        for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr
}
 i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    
// 快速排序

function quickSort(arr) {
    if (arr.length <= 1) return arr
    let pivotIndex = Math.floor(arr.length / 2)
    let pivot = arr.splice(pivotIndex, 1)[0]
    let left = []
    let right = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat([pivot], quickSort(right))
}
if (arr.length <= 1) {
        return arr
    }
    let pivotIndex = Math.floor(arr.length / 2)
    let pivot = arr.splice(pivotIndex, 1)[0]
    let left = []
    let right = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat([pivot], quickSort(right))
}

// 堆排序

function heapSort(arr) {
    for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
        adjustHeap(arr, i, arr.length)
    }
    for (let i = arr.length - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]]
        adjustHeap(arr, 0, i)
    }
    return arr
}
