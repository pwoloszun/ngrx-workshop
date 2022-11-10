import { IMenuSection } from './menu-section.type';

export const myMessengerSection: IMenuSection = {
  title: 'MyMessenger',
  routes: [
    { text: 'Communication', url: '/my-messenger/communication' },
  ],
  icon: {
    value: 'message'
  },
};
