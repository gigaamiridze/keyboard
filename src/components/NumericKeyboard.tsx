import { FlexBox, RegularButton, ActionButton } from '../components';
import { getLabel, deleteLabel, numericLayout } from '../utils';
import { INumericKeyboardProps } from '../models';
import { ActionButtonType } from '../types';

function NumericKeyboard(props: INumericKeyboardProps) {
  const { styles, actionProps, selectedLanguage, setInput, onDelete } = props;

  return (
    <FlexBox flexDirection='column' alignItems='center' rowGap={styles.keyButton.rowGap}>
      {numericLayout.map((row, rowIndex) => (
        <FlexBox 
          key={rowIndex}
          alignItems='center'
          justifyContent='space-between'
          columnGap={styles.keyButton.columnGap}
        >
          {row.map((key, keyIndex) => {
            if (!actionProps.hasDot && key.label === '.') return null;

            return (
              <RegularButton
                key={keyIndex}
                keyOptions={key}
                styles={styles}
                onPress={(value) => setInput(value)}
              />
            )
          })}
          {rowIndex === 3 && actionProps.hasDelete && (
            <ActionButton 
              label={getLabel(deleteLabel, selectedLanguage)} 
              type={ActionButtonType.DELETE}
              isNumericDotMode={actionProps.hasDot}
              styles={styles} 
              leftIcon={styles?.keyButton.delete?.leftIcon}
              rightIcon={styles?.keyButton.delete?.rightIcon}
              onPress={onDelete} 
            />
          )}
        </FlexBox>
      ))}
    </FlexBox>
  )
}

export default NumericKeyboard;
