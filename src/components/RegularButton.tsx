import { IRegularButtonProps } from '../models';
import { Button } from '../styles';

function RegularButton(props: IRegularButtonProps) {
  const { keyOptions, disabled, styles, isShiftActive, isSymbolActive, onPress } = props;

  const valueToPass = isShiftActive ? keyOptions.shiftValue : isSymbolActive ? keyOptions.symbolValue : keyOptions.value;
  const labelToRender = isShiftActive ? keyOptions.shiftValue : isSymbolActive ? keyOptions.symbolValue : keyOptions.label;

  return (
    <Button
      styles={styles} 
      onClick={() => onPress(valueToPass)}
      disabled={disabled}
    >
      {labelToRender}
    </Button>
  )
}

export default RegularButton;
