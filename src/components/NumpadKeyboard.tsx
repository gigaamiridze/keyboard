import { FlexBox, RegularButton } from '../components';
import { IKeyboardStyles } from '../interfaces';
import { numpadLayout } from '../utils';

interface INumpadKeyboardProps {
  styles?: IKeyboardStyles;
  setInput: (value: string) => void;
}

function NumpadKeyboard({ styles, setInput }: INumpadKeyboardProps) {
  return (
    <FlexBox flexDirection='column' alignItems='center' rowGap={5}>
      {numpadLayout.map((row, rowIndex) => (
        <FlexBox 
          key={rowIndex}
          alignItems='center'
          justifyContent='space-between'
          columnGap={5}
        >
          {row.map((key, keyIndex) => (
            <RegularButton
              key={keyIndex}
              keyOptions={key}
              styles={styles}
              onClick={(value) => setInput(value)}
            />
          ))}
        </FlexBox>
      ))}
    </FlexBox>
  )
}

export default NumpadKeyboard;
