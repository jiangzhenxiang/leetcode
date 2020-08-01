/***
 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。

 说明:
 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。

 示例:
 输入:
 nums1 = [1,2,3,0,0,0], m = 3
 nums2 = [2,5,6],       n = 3
 输出: [1,2,2,3,5,6]

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/merge-sorted-array
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

// 先合并后排序
const merge1 = function (nums1, m, nums2, n) {
    let arr1 = nums1.slice(0, m);
    let arr2 = nums2.slice(0, n);
    let temp = arr1.concat(arr2);
    return temp.sort()
};
// console.log('', merge1([1, 2, 3, 0, 0, 0],3, [2, 5, 6], 3))

/** 双指针 / 从后向前数组遍历
 因为 nums1 的空间都集中在后面，所以从后向前处理排序的数据会更好，节省空间，一边遍历一边将值填充进去

 设置指针 len1 和 len2 分别指向 nums1 和 nums2 的有数字尾部，
 从尾部值开始比较遍历，同时设置指针 len 指向 nums1 的最末尾，
 每次遍历比较值大小之后，则进行填充。

 当 len1<0 时遍历结束，此时 nums2 中还有数据未拷贝完全，将其直接拷贝到 nums1 的前面，最后得到结果数组
 时间复杂度：O(m+n)O(m+n)

 */
var merge2 = function (nums1, m, nums2, n) {
    let len1 = m - 1;
    let len2 = n - 1;
    let len = m + n - 1;
    while (len1 >= 0 && len2 >= 0) {
        // 注意--符号在后面，表示先进行计算再减1，这种缩写缩短了代码
        nums1[len--] = nums1[len1] > nums2[len2] ? nums1[len1--] : nums2[len2--];
    }

    function arrayCopy(src, srcIndex, dest, destIndex, length) {
        dest.splice(destIndex, length, ...src.slice(srcIndex, srcIndex + length));
    }

    // 表示将nums2数组从下标0位置开始，拷贝到nums1数组中，从下标0位置开始，长度为len2+1
    arrayCopy(nums2, 0, nums1, 0, len2 + 1);
    return nums1;
};

// console.log('', merge2([1, 2 ],2, [2, 5, 6], 3))

// 从前往后
var merge = function (nums1, m, nums2, n) {
    let target = [];
    let p1 = 0;
    let p2 = 0;
    let p = 0; // Set pointer for nums1
    while (p1 < m && p2 < n) {
        target[p++] = nums1[p1] < nums2[p2] ? nums1[p1++] : nums2[p2++];
    }
    // nums1还有剩余，将剩余的添加

    if (p1 < m) {
        target.splice(p, 0, ...nums1.slice(p1, m))
    }
    if (p2 < n) {
        target.splice(p, 0, ...nums2.slice(p2, n))
    }
    return target;
};
console.log('11', merge([1,2,3,0,0,0], 3, [2, 5, 6], 3))
