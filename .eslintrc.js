module.exports = {
    extends: ['react-app', 'react-app/jest'],
    rules: {
        // Error prevention
        'no-unused-vars': 'warn',
        'no-console': ['warn', { allow: ['warn', 'error'] }],
        'no-debugger': 'warn',

        // Code quality
        'eqeqeq': ['warn', 'always'],
        'no-var': 'warn',
        'prefer-const': 'warn',

        // React specific
        'react/display-name': 'warn',
        'react/prop-types': 'off',
        'react/no-unescaped-entities': 'warn',

        // Accessibility
        'jsx-a11y/anchor-is-valid': 'warn',
        'jsx-a11y/anchor-has-content': 'warn',
        'jsx-a11y/img-redundant-alt': 'warn',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
