/**
 * sum 3 of elements => 0
 * no re-using same elements
 * provide all solutions
 *
 * 3 <= nums.length <= 3000
 * -105 <= nums[i] <= 105
 *
 * @param nums
 */
function threeSum(nums: number[]): number[][] {
    const result: number[][] = [];
    nums.forEach((num, key) => {
        nums.forEach((num2, key2) => {
            nums.forEach((num3, key3) => {
                if (key === key2 || key2 === key3 || key === key3) {
                    return // no re-using allowed
                }
                if (num + num2 + num3 === 0) { // valid result
                    let isPresentResult = false
                    result.forEach(res => {
                        if (
                            res[0] === num && res[1] === num2 && res[2] === num3
                            || res[1] === num && res[2] === num2 && res[0] === num3
                            || res[2] === num && res[0] === num2 && res[1] === num3
                            //
                            || res[0] === num && res[2] === num2 && res[1] === num3
                            || res[1] === num && res[0] === num2 && res[2] === num3
                            || res[2] === num && res[1] === num2 && res[0] === num3
                        ) {
                            isPresentResult = true
                        }
                    })
                    if (!isPresentResult) {
                        result.push([num, num2, num3])
                    }
                }
            })
        })
    })
    return result
}

console.log('result:',
    threeSum([-1, 0, 1, 2, -1, -4])
);
