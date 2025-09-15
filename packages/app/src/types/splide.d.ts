declare module '@splidejs/react-splide' {
  import { ComponentType, ReactNode } from 'react';

  export interface SplideProps {
    children?: ReactNode;
    options?: Record<string, unknown>;
    extensions?: Record<string, unknown>;
    hasTrack?: boolean;
    'aria-label'?: string;
    className?: string;
  }

  export interface SplideSlideProps {
    children?: ReactNode;
    className?: string;
  }

  export const Splide: ComponentType<SplideProps>;
  export const SplideTrack: ComponentType<{ children?: ReactNode; className?: string }>;
  export const SplideSlide: ComponentType<SplideSlideProps>;
}
