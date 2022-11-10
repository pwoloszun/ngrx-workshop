import { fundamentalsSection } from './fundamentals-section';
import { designPrinciplesSection } from './design-principles-section';
import { myTubeSection } from './my-tube-section';
import { myMessengerSection } from './my-messenger-section';

export type { IMenuSection } from './menu-section.type';

export const mainMenuSections = [
  fundamentalsSection,
  designPrinciplesSection,
  myTubeSection,
  // myMessengerSection,
];
