module.exports = {
  extends: 'stylelint-config-standard',
  plugins: ['stylelint-order'],
  rules: {
    'at-rule-no-unknown': [true, { ignoreAtRules: ['tailwind', 'apply'] }],
    'order/order': ['custom-properties', 'declarations'],
    'order/properties-order': [
      'display',
      'width',
      'height',
      'margin',
      'padding',

      'position',
      'z-index',
      'top',
      'right',
      'bottom',
      'left',

      'font',
      'font-weight',
      'font-size',
      'line-height',
      'font-family',
      'color',

      'border',
      'border-top',
      'border-right',
      'border-bottom',
      'border-left',

      'background',
      'background-size',
      'background-position',
      'background-repeat',
      'background-color',
      'background-image',

      'transform',
      'opacity'
    ]
  }
};
