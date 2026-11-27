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
export default function threeSum(nums: number[]): number[][] {
    const fullResult: Record<string, number[]> = {}
    const outerNums: number[] = []
    nums.forEach((num, key) => {
        if (outerNums.indexOf(num) !== -1) { // we've seen this first digit already - no need to repeat
            return
        }
        outerNums.push(num)
        const needed = 0 - num
        const usableNums = nums.slice(key + 1) // start after the element we're inspecting on outer loop

        const twoResultAll = Object.values(twoSum(usableNums, needed))
        if (twoResultAll.length) { // if result found, add `num` we were working on & finish
            twoResultAll.forEach(twoResult => {
                twoResult.push(num)

                fullResult[twoResult.toSorted().join('_')] = twoResult
            })
        }
    })
    return Object.values(fullResult)
}

function twoSum(nums: number[], target: number): Record<string, number[]> {
    const available: number[] = []
    const allAvailable: Record<string, number[]> = {}
    for (let key = 0; key < nums.length; key++) {
        const num = nums[key]
        const needed = target - num

        // Check if present
        if (available[needed]) {
            allAvailable[num + '_' + needed] = [num, needed]
        }

        available[num] = 1
    }
    return allAvailable
}
