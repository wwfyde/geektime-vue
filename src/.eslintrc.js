module.exports = {
    extends: [
        // 'eslint:recomended',
        'plugin:vue/recommended',
        // 'plugin:vue/strongly-recommended',
        '@vue/standard'
    ],
    plugins: ['vue'],
    rules: {
        indent: ['off', 4, { ImportDeclaration: 1 }],
        // 'quotes': "double",
        'vue/html-indent': ['off', 4, { baseIndent: 1 }],
        'vue/script-indent': ['off', 4, { baseIndent: 1 }],
        // 'vue/script-indent': ['error', 4, { baseIndent: 4 }],
        'vue/html-self-closing': [
            'error',
            {
                html: {
                    void: 'never',
                    normal: 'always',
                    component: 'always'
                }
            }
        ]

    }
}
