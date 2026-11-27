import {test} from 'node:test'
import assert from 'node:assert/strict'
import threeSum from './0015-3Sum.ts'

test('Example 1', () => {
    const input = [-1, 0, 1, 2, -1, -4]
    const expected = [[-1, 0, 1], [-1, -1, 2]]

    const actual = threeSum(input)

    // assert.deepStrictEqual(actual, expected)
    assert.deepStrictEqual(
        normalise(actual),
        normalise(expected)
    )
})

test('Example 2', () => {
    const input = [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]
    const expected = [[-4, 0, 4], [-4, 1, 3], [-3, -1, 4], [-3, 0, 3], [-3, 1, 2], [-2, -1, 3], [-2, 0, 2], [-1, -1, 2], [-1, 0, 1]]

    const actual = threeSum(input)

    // assert.deepStrictEqual(actual, expected)
    assert.deepStrictEqual(
        normalise(actual),
        normalise(expected)
    )
})

test('Example 3', () => {
    const input = [-4, -2, 1, -5, -4, -4, 4, -2, 0, 4, 0, -2, 3, 1, -5, 0]
    const expected = [[-5, 1, 4], [-4, 0, 4], [-4, 1, 3], [-2, -2, 4], [-2, 1, 1], [0, 0, 0]]

    const actual = threeSum(input)

    // assert.deepStrictEqual(actual, expected)
    assert.deepStrictEqual(
        normalise(actual),
        normalise(expected)
    )
})

function normalise(result: number[][]): number[][] {
    return result
        .map(triplet => triplet.toSorted((a, b) => a - b))
        .sort()
}
