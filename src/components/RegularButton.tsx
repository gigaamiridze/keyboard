import { IButton, IKeyboardStyles } from '../interfaces';
import { Button } from '../components';

interface IRegularButtonProps {
	keyOptions: IButton;
  styles?: IKeyboardStyles;
  isShiftActive?: boolean;
  isSymbolActive?: boolean;
	onClick: (value: string) => void;
}

function RegularButton(props: IRegularButtonProps) {
  const { keyOptions, styles, isShiftActive, isSymbolActive, onClick } = props;

  const valueToPass = isShiftActive ? keyOptions.shiftValue : isSymbolActive ? keyOptions.symbolValue : keyOptions.value;
  const labelToRender = isShiftActive ? keyOptions.shiftValue : isSymbolActive ? keyOptions.symbolValue : keyOptions.label;

  return (
    <Button
      styles={styles} 
      onClick={() => onClick(valueToPass)}
    >
      {labelToRender}
    </Button>
  )
}

export default RegularButton;
