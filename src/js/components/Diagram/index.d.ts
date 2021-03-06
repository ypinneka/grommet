import * as React from 'react';

import { ColorType } from '../../utils';

export type DiagramConnectionAnchor = 'center' | 'vertical' | 'horizontal';
export type DiagramConnectionType = 'direct' | 'curved' | 'rectilinear';

export interface DiagramProps {
  connections: {
    anchor?: DiagramConnectionAnchor;
    color?: ColorType;
    fromTarget: string | object;
    label?: string;
    offset?: 'xsmall' | 'small' | 'medium' | 'large' | string;
    thickness?:
      | 'hair'
      | 'xxsmall'
      | 'xsmall'
      | 'small'
      | 'medium'
      | 'large'
      | string;
    toTarget: string | object;
    type?: DiagramConnectionType;
  }[];
}

type divProps = JSX.IntrinsicElements['svg'];

export interface DiagramExtendedProps extends DiagramProps, divProps {}

declare const Diagram: React.FC<DiagramExtendedProps>;

export { Diagram };
