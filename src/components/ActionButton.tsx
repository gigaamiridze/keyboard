import { IActionButtonProps } from '../models';
import { Button } from '../styles';

function ActionButton(props: IActionButtonProps) {
  const { label, type, isNumericMode, isNumericDotMode, isInputFilled, styles, leftIcon, rightIcon, isActive, onPress } = props;
 
  return (
    <Button
      type={type}
      isNumericMode={isNumericMode}
      isNumericDotMode={isNumericDotMode}
      isInputFilled={isInputFilled}
      styles={styles}
      isActive={isActive}
      onClick={onPress}
    >
      {leftIcon && leftIcon}
      {label}
      {rightIcon && rightIcon}
    </Button>
  )
}

export default ActionButton;
