export default {
  '*.{ts,tsx}': 'eslint --fix --quiet',
  '*.{json,md,yml}': 'prettier --write --ignore-unknown',
};
