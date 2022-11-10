export const mainAppPaths = {
  fundamentals: 'fundamentals',
  designPrinciples: 'design-principles',
  myMessenger: 'my-messenger',
  myTube: 'my-tube',
  myTubeStudio: 'my-tube-studio',
};

interface ILinkUrl {
  linkUrl: string;
}

export type WithLink<T> = T & ILinkUrl;

export function getVideoUrl(id: number): string {
  return `/${mainAppPaths.myTube}/watch/${id}`;
}


