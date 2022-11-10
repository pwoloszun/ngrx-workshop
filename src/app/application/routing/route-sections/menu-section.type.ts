interface IRouteParams {
  text: string;
  url: string;
}

export interface IMenuSection {
  title: string;
  routes: IRouteParams[];
  icon: { value: string; };
}
