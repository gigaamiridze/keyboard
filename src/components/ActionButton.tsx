import { IKeyboardStyles } from '../interfaces';
import { ActionButtonType } from '../constants';
import { Button } from '../components';

interface IActionButtonProps {
  label: string;
  type: ActionButtonType;
  isNumericMode?: boolean;
  styles?: IKeyboardStyles;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  isActive?: boolean;
  onClick: () => void;
}

function ActionButton(props: IActionButtonProps) {
  const { label, type, isNumericMode, styles, leftIcon, rightIcon, isActive, onClick } = props;
 
  return (
    <Button
      type={type}
      isNumericMode={isNumericMode}
      styles={styles}
      isActive={isActive}
      onClick={onClick}
    >
      {leftIcon && leftIcon}
      {label}
      {rightIcon && rightIcon}
    </Button>
  )
}

export default ActionButton;
