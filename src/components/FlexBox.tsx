import { StyledFlexBox } from '../styles';
import { IFlexBoxProps } from '../models';

function FlexBox(props: IFlexBoxProps) {
  const { as, children, additionalStyles, onPress, ...restProps } = props;

  return (
    <StyledFlexBox
      as={as}
      {...restProps}
      onClick={onPress}
      style={{...additionalStyles}}
    >
      {children}
    </StyledFlexBox>
  )
}

export default FlexBox;
