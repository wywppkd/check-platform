import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'check-platform',
  favicon: '/check-platform/logo.png',
  logo: '/check-platform/logo.png',
  outputPath: 'docs-dist',
  mode: 'site',
  base: '/check-platform/',
  publicPath: '/check-platform/',
  // more config: https://d.umijs.org/config
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/wywppkd/check-platform',
    },
  ],
});
