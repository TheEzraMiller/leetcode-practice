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
    const fullResult: number[][] = []
    nums.forEach((num, key) => {
        const needed = 0 - num
        let usableNums = nums.toSpliced(key, 1)

        while (usableNums.length >= 2) { // While there is something to search
            const twoResult = twoSum(usableNums, needed)
            if (twoResult.length) { // if result found, add `num` we were working on & finish
                twoResult.push(num)

                let isPresentResult = false
                fullResult.forEach(res => isPresentResult = checkPresent(res, twoResult) || isPresentResult)

                if (!isPresentResult) {
                    fullResult.push(twoResult)
                }

                // Throw out found elements
                usableNums = usableNums.filter(num => num !== twoResult[0] && num !== twoResult[1])
            } else {
                break // if we didn't find any results - not worth searching again
            }
        }
    })
    return fullResult
}

function twoSum(nums: number[], target: number): number[] {
    const available: number[] = []
    for (let key = 0; key < nums.length; key++) {
        const num = nums[key]
        const needed = target - num

        // Check if present
        if (available[needed]) {
            return [num, needed]
        }

        available[num] = 1
    }
    return []
}

function checkPresent(res: number[], newRes: number[]): boolean {
    // Sort both so they are in correct order
    const r = res.toSorted()
    const nr = newRes.toSorted()

    for (const [key, num] of r.entries()) {
        if (num !== nr[key]) { // found mismatching element - no further looking
            return false // return but from the `checkPresent` not just `forEach`
        }
    }

    return true
}
