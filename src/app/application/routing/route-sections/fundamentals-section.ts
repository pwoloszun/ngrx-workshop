import { mainAppPaths } from '@infrastructure/app-urls';

import { IMenuSection } from './menu-section.type';

export const fundamentalsSection: IMenuSection = {
  title: 'Fundamentals',
  routes: [
    { text: 'Dashboard', url: `/${mainAppPaths.fundamentals}/dashboard` },
    { text: 'Local Counter', url: `/${mainAppPaths.fundamentals}/local-counter` },
    { text: 'Global Counter', url: `/${mainAppPaths.fundamentals}/global-counter` },

  ],
  icon: {
    value: 'construction'
  },
};
