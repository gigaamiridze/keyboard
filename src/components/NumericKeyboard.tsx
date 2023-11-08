import { FlexBox, RegularButton, ActionButton } from '../components';
import { getLabel, deleteLabel, numericLayout } from '../utils';
import { IActionProps, IKeyboardStyles } from '../interfaces';
import { ActionButtonType, Language } from '../constants';

interface INumericKeyboardProps {
  styles?: IKeyboardStyles;
  isNumericMode?: boolean;
  actionProps: IActionProps;
  selectedLanguage: Language;
  setInput: (value: string) => void;
  onDelete: () => void;
}

function NumericKeyboard(props: INumericKeyboardProps) {
  const { styles, isNumericMode, actionProps, selectedLanguage, setInput, onDelete } = props;

  return (
      <FlexBox flexDirection='column' alignItems='center' rowGap={5}>
        {numericLayout.map((row, rowIndex) => (
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
            {rowIndex === 3 && actionProps.hasDelete && (
              <ActionButton 
                label={getLabel(deleteLabel, selectedLanguage)} 
                type={ActionButtonType.DELETE}
                isNumericMode={isNumericMode}
                styles={styles} 
                leftIcon={styles?.keyButton.delete?.leftIcon}
                rightIcon={styles?.keyButton.delete?.rightIcon}
                onClick={onDelete} 
              />
            )}
          </FlexBox>
        ))}
      </FlexBox>
  )
}

export default NumericKeyboard;
