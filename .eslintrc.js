/* eslint-disable indent */
module.exports = {
    'env': {
    'browser': true,
    'es2021': true
    },
    'extends': 'eslint:recommended', 
    'plugins': ['@html-eslint' , '@html-eslint/recommended'],
    'overrides': [
        {
            'env': {
                'node': true
            },
            'files': [
                '*.html',
                '.eslintrc.{js,cjs}'
            ],
            'parserOptions': {
                'sourceType': 'script'
            },
            'parser': '@html-eslint/parser',
        }
    ],
    'parserOptions': {
        'ecmaVersion': 'latest'
    },
    'rules': {
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'windows'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ]
}
};
