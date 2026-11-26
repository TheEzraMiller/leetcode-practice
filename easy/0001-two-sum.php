<?php
/**
 * LeetCode #1 — Two Sum
 *
 * Difficulty: Easy
 * Completed: 2026-11-26
 * Source: https://leetcode.com/problems/two-sum/
 *
 * Problem:
 * Find the indices of two integers whose sum equals the target.
 *
 * Constraints:
 * - Exactly one valid solution exists.
 * - Each element can only be used once.
 * - Duplicate values, negative numbers and zero are allowed.
 * - Result indices can be returned in either order.
 * - Array length: 2–10,000.
 * - Values and target: -10^9 to 10^9.
 *
 * Final approach:
 * Single-pass hash table mapping values to previously visited indices.
 * Search for the missing value before storing the current element.
 *
 * Complexity:
 * - Time: O(n) on average.
 * - Auxiliary space: O(n).
 *
 * Solution progression:
 * 1. Nested foreach loops — O(n²).
 * 2. Unique pair comparisons — removed redundant iterations.
 * 3. array_search() — simplified code, but still O(n²).
 * 4. Two-pass hash table — achieved O(n).
 * 5. Single-pass hash table — enabled earlier returns.
 * 6. Search before storing — eliminated duplicate-index tracking.
 * 7. Simplified lookup structure to value => index.
 *
 * Lessons learned:
 * - PHP built-in functions do not necessarily improve complexity.
 * - Hash table key lookups are O(1) on average.
 * - Changing the order of operations can reduce storage requirements.
 * - Overwriting duplicate values is safe for this problem.
 * - Test edge cases after each refactoring.
 *
 * Assistance:
 * Implementation written independently, with incremental AI hints
 * and code reviews. No complete solution provided by AI.
 */
class Solution
{

    /**
     * @param  Integer[]  $nums
     * @param  Integer  $target
     *
     * @return Integer[]
     */
    function twoSum($nums, $target)
    {
        $newArr = [];
        foreach ($nums as $i => $num) { // Mark places in newArray for values i have
            if ($i !== 0) { // Check if this new element is match to something already in the array; Ignore the first one as not enough elements
                $missingValue = $target - $num;
                $present = isset($newArr[$missingValue]);

                if ($present) {
                    return [$i, $newArr[$missingValue]];
                }
            }
            // since no matches found yet, continue logging found items

            $newArr[$num] = $i;
        }

        return []; // No results
    }
}

print_r((new Solution)->twoSum([2, 5, 7, 11], 9));
