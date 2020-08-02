// https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/submissions/
// https://mp.weixin.qq.com/s?__biz=MjM5ODYxMDA5OQ==&mid=2651961587&idx=1&sn=54bf39db7043cc638315caf70f24d94b&chksm=bd2d0d2f8a5a84395246be4522d10fbfc1f744658047d5fb3fad8e9f3c3d76baab3a2ce84867&scene=21#wechat_redirect
// 题目类似topK

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 * 先排序在去最小个k值
 */
var getLeastNumbers1 = function (arr, k) {
    let temp = arr.sort((a, b) => a - b);
    return temp.slice(0, k)
};
// console.log('', getLeastNumbers1([3, 2, 1], 2))

/**
 * 局部冒泡排序，因为我们只需要去最小的k个数，所以只需要排序最小k个
 * */
var getLeastNumbers2 = function (arr, k) {
    var temp = bubbleSort(arr, k);
    return temp.slice(arr.length - k,)
};

function bubbleSort(arr, k) {
    for (let i = 0; i < k; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] < arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr;
}

// console.log('bubbleSort', bubbleSort([3, 2, 1,12,5,22], 2))
// console.log('', getLeastNumbers2([3, 2, 1,12,5,22], 3))


/**
 * 局部快速排序，因为我们只需要去最小的k个数，所以只需要排序最小k个，快排比冒泡效率高
 * */
var getLeastNumbers3 = function (arr, k) {
    var temp = bubbleSort(arr, k);
    return temp.slice(arr.length - k,)
};

/**
 //伪代码
 // void quick_sort(arr,low, high){
//
//     if(low== high) return;
//
//     int i = partition(arr, low, high);
//
//     quick_sort(arr, low, i-1);
//
//     quick_sort(arr, i+1, high);
//
// }
 快速排序的核心是：
 i = partition(arr, low, high);

 partition会把整体分为两个部分。
 更具体的，会用数组arr中的一个元素（默认是第一个元素t=arr[low]）为划分依据，将数据arr[low, high]划分成左右两个子数组：
 左半部分，都比t大
 右半部分，都比t小
 中间位置i是划分元素
 */

function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        let i = partition(arr, low, high);
        quickSort(arr, low, i - 1);
        quickSort(arr, i + 1, high)
    }

    return arr;
}

function partition(arr, low, high) {
    const pivot = arr[high - 1];
    console.log('pivot',pivot)
    let i = low;
    let j = high - 1;
    // 小于中心的的值[low, i)
    // 未确认的范围[i, j)
    // 大于中心的的范围为[j, high-1]
    while (i !== j) {
        // 小于中心点就++，不需要交换
        if (arr[i] <= pivot) {
            i++
        } else {
            debugger
            swap(arr, i, --j)
        }
    }
    swap(arr, j, high - 1)
    return j;
}

// function partition(arr, left, right) {
//     let pivot = left; // 基准数选择从0开始
//     // 一个指针i去做了一个分割
//     debugger
//     let index = pivot + 1; // 从基准数后面开始分区
//     for (let i = index; i <= right; i++) {
//         // 如果比基准点小就i++，然后交换元素位置
//         if (arr[i] < arr[pivot]) {
//             swap(arr, i, index);
//             index++;
//         }
//     }
//     // 最后将基准点插入到i+1的位置
//     swap(arr, pivot, index - 1);
//     // 返回最终指针i的位置
//     return index - 1;
// }

function swap(arr, i, index) {
    [arr[i], arr[index]] = [arr[index], arr[i]];
}
// console.log('1', partition([10,80,30,90,40,50,70], 0, 7))
// console.log('1')

// console.log('partition', partition([3, 2, 1, 12, 5, 22], 0, 5))

console.log('bubbleSort', quickSort([3, 2, 1, 12, 5, 22]))
// console.log('', getLeastNumbers3([3, 2, 1, 12, 5, 22], 3))
