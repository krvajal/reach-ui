declare module "@reach/menu-button" {
  interface IButtonRect {
    height: number;
    width: number;
    left: number;
    top: number;
  }

  interface IState {
    isOpen: boolean;
    closingWithClick: boolean;
    selectionIndex: number;
    buttonRect: undefined | IButtonRect;
    buttonId: string;
  }

  export interface IMenuProps {
    children: React.ReactNode;
  }

  export const Menu: React.FunctionComponent<IMenuProps>;

  export type MenuButtonProps = React.HTMLProps<HTMLButtonElement> & {
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLElement>) => void;
    children: React.ReactNode;
  };

  export const MenuButton: React.FunctionComponent<MenuButtonProps>;

  export type MenuListProps = React.HTMLProps<HTMLDivElement> & {
    children: React.ReactNode;
  };

  export const MenuList: React.FunctionComponent<MenuListProps>;

  type ResolvedMenuLinkProps<T> = T extends keyof JSX.IntrinsicElements
    ? JSX.IntrinsicElements[T]
    : T;

  type ResolvedMenuLinkComponent<T> = T extends keyof JSX.IntrinsicElements
    ? T
    : React.ComponentType<T>;

  export type MenuLinkProps<
    T extends SupportedMenuLinkComponent
  > = ResolvedMenuLinkProps<T> & {
    to?: string;
    onKeyDown?: (e: React.KeyboardEvent<HTMLElement>) => void;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    component?: ResolvedMenuLinkComponent<T>;
    index?: number;
    style?: React.CSSProperties;
    setState?: (s: IState) => Partial<IState>;
    state?: IState;
    _ref?: (node: HTMLElement) => void;
  };

  type SupportedMenuLinkComponent = object | keyof JSX.IntrinsicElements;

  export function MenuLink<T extends SupportedMenuLinkComponent>(
    props: MenuLinkProps<T>
  ): React.ReactElement<MenuLinkProps<T>>;

  export type MenuItemProps = React.HTMLProps<HTMLDivElement> & {
    onSelect: () => void;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLElement>) => void;
    onMouseMove?: (e: React.MouseEvent<HTMLElement>) => void;
    role?: string;
    state?: IState;
    setState?: (s: IState) => Partial<IState>;
    index?: number;
    _ref?: (node: HTMLElement) => void;
  };

  export const MenuItem: React.FunctionComponent<MenuItemProps>;
}
