declare module 'react-scroll' {
  import { ComponentType, ReactElement } from 'react';

  export interface LinkProps {
    to: string;
    spy?: boolean;
    smooth?: boolean;
    offset?: number;
    duration?: number;
    delay?: number;
    isDynamic?: boolean;
    onClick?: () => void;
    onSetActive?: () => void;
    onSetInactive?: () => void;
    ignoreCancelEvents?: boolean;
    spyThrottle?: number;
    hashSpy?: boolean;
    activeClass?: string;
    containerId?: string;
    a11y?: boolean;
    [key: string]: any;
  }

  export const Link: ComponentType<LinkProps>;
  export const Element: ComponentType<any>;
  export const Events: {
    scrollEvent: {
      register: (event: string, callback: () => void) => void;
      unregister: (event: string, callback: () => void) => void;
    };
    scrollSpy: {
      update: () => void;
    };
  };
  export const scrollSpy: {
    update: () => void;
  };
  export const scroller: {
    scrollTo: (to: string, options?: any) => void;
  };
} 