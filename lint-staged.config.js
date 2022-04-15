module.exports = {
  '*.php': ['vendor/bin/phpinsights -n --fix', 'vendor/bin/rector process'],
  '*.{js,jsx,ts,tsx,vue}': ['prettier --write', 'npm run lint:js --'],
  '*.{pcss,css}': ['prettier --write', 'npm run lint:css --'],
  '*.{json,md}': ['prettier --write'],
  '*.twig': [
    'prettier --write',
    'bin/console lint:twig'
  ],
  '*.{yml,yaml}': [
    'prettier --write',
    'bin/console lint:yaml'
  ]
}
