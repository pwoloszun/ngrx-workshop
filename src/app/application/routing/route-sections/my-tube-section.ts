import { mainAppPaths } from '@infrastructure/app-urls';

import { IMenuSection } from './menu-section.type';

export const myTubeSection: IMenuSection = {
  title: 'MyTube',
  routes: [
    { text: 'Featured Videos', url: `/${mainAppPaths.myTube}/featured` },
    { text: 'Tube Studio', url: `/${mainAppPaths.myTubeStudio}/studio-dashboard` },
  ],
  icon: {
    value: 'devices'
  },
};
