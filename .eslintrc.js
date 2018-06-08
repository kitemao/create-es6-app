module.exports = {
    extends: ['airbnb-base/legacy'],
    parserOptions: {
        ecmaVersion: 8,
        sourceType: 'module',
        ecmaFeatures: {
            experimentalObjectRestSpread: true
        }
    },
    globals: {
    },
    rules: {
        semi: ['error'],
        'max-len': ['error', 120],
        'no-const-assign': 'error',
        'comma-dangle': ['off'],
        'no-unused-vars': [
            'error',
            {
                varsIgnorePattern: 'regeneratorRuntime'
            }
        ],
        indent: ['error', 4],
        'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
        'no-unused-expressions': ['error', { allowShortCircuit: true }],
        'no-multi-spaces': ['error', { exceptions: { 'VariableDeclarator': true, 'ImportDeclaration': true, 'Property': true } }]
    }
};
