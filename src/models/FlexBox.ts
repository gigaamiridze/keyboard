import { ReactNode, CSSProperties } from 'react';
import { FlexDirectionType, AlignItemsType, JustifyContentType } from '../types';

export interface IFlexBoxProps extends IStyledFlexBoxProps {
  as?: string;
  children: ReactNode;
  additionalStyles?: CSSProperties;
  onPress?: () => void;
}

export interface IStyledFlexBoxProps {
  flexDirection?: FlexDirectionType;
  alignItems?: AlignItemsType;
  justifyContent?: JustifyContentType;
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse' | 'initial';
  gap?: number | 'normal' | 'initial' | 'inherit';
  rowGap?: number | 'normal' | 'initial' | 'inherit';
  columnGap?: number | 'normal' | 'initial' | 'inherit';
}
