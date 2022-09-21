import type { IApi } from '@/types';

export default (api: IApi) => {
  api.describe({ key: 'dumi-preset' });

  return {
    plugins: [
      require.resolve('./registerMethods'),

      require.resolve('./features/configPlugins'),
      require.resolve('./features/compile'),
      require.resolve('./features/routes'),
      require.resolve('./features/theme'),
      require.resolve('./features/locales'),
    ],
  };
};
