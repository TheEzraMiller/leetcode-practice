
import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import stylistic from '@stylistic/eslint-plugin'

export default [
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
        files: ['**/*.{js,ts,mjs}'],
        plugins: {
            '@stylistic': stylistic,
        },
        rules: {
            'eqeqeq': ['error', 'always'],
            'curly': ['error', 'all'],
            'prefer-const': 'error',
            'no-var': 'error',

            '@stylistic/semi': ['error', 'never'],
            '@stylistic/indent': ['error', 4],
            '@stylistic/quotes': ['error', 'single'],
            '@stylistic/keyword-spacing': 'error',
            '@stylistic/space-infix-ops': 'error',
            '@stylistic/comma-spacing': 'error',
            '@stylistic/space-before-blocks': 'error',
            '@stylistic/arrow-spacing': 'error',
        },
    },
]
