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
    const result: number[][] = []
    const len = nums.length
    nums.forEach((num, key) => {
        for (let key2 = key + 1; key2 < len; key2++) {
            for (let key3 = key2 + 1; key3 < len; key3++) {
                if (key === key2 || key2 === key3 || key === key3) {
                    return // no re-using allowed
                }
                const num2 = nums[key2]
                const num3 = nums[key3]
                if (num + num2 + num3 === 0) { // valid result
                    let isPresentResult = false
                    result.forEach(res => isPresentResult = checkPresent(res, [num, num2, num3]) || isPresentResult)
                    if (!isPresentResult) {
                        result.push([num, num2, num3])
                    }
                }
            }
        }
    })
    return result
}

function checkPresent(res: number[], newRes: number[]): boolean {
    // Sort both so they are in correct order
    res.sort()
    newRes.sort()

    for (const [key, num] of res.entries()) {
        if (num !== newRes[key]) { // found mismatching element - no further looking
            return false // return but from the `checkPresent` not just `forEach`
        }
    }

    return true
}

console.log('result:',
    threeSum([-1, 0, 1, 2, -1, -4])
)
