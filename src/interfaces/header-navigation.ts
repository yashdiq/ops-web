export interface IHeaderNavigation {
  label: string;
  href: string;
  items?: INavigationItem[];
}

export interface INavigationItem {
  title: string;
  href: string;
  description?: string;
}
