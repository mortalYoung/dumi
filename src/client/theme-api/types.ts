import type { ExampleBlockAsset } from 'dumi-assets-types';
import type { ReactNode } from 'react';

export interface IPreviewerProps {
  /**
   * title of current demo
   */
  title?: string;
  /**
   * description of current demo
   */
  description?: string;
  /**
   * asset metadata of current demo
   */
  asset: ExampleBlockAsset;
  /**
   * react node of current demo
   */
  children: ReactNode;
}
