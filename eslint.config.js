import { init } from '@fullstacksjs/eslint-config';

export default init(
  {
    typescript: true,
    // You can pass extends here
    rules: {
      'no-console': 'error',
    },
  },
  {
    files: ['**/*.ts'],
    rules: {},
  },
  {
    rules: {},
  }
);
