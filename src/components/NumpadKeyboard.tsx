import { FlexBox, RegularButton } from '../components';
import { INumpadKeyboardProps } from '../models';
import { numpadLayout } from '../utils';

function NumpadKeyboard(props: INumpadKeyboardProps) {
  const { styles, input, inputMaxLength, setInput } = props;
  const isInputFilled = input?.length === inputMaxLength;

  return (
    <FlexBox flexDirection='column' alignItems='center' rowGap={styles.keyButton.rowGap}>
      {numpadLayout.map((row, rowIndex) => (
        <FlexBox 
          key={rowIndex}
          alignItems='center'
          justifyContent='space-between'
          columnGap={styles.keyButton.columnGap}
        >
          {row.map((key, keyIndex) => (
            <RegularButton
              key={keyIndex}
              keyOptions={key}
              disabled={isInputFilled}
              styles={styles}
              onPress={(value) => setInput(value)}
            />
          ))}
        </FlexBox>
      ))}
    </FlexBox>
  )
}

export default NumpadKeyboard;
