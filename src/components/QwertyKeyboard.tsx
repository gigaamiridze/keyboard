import { Fragment } from 'react';
import { getLabel, languageLabel, cleanLabel, deleteLabel } from '../utils';
import { ActionButton, RegularButton, FlexBox } from '../components';
import { IQwertyKeyboardProps } from '../models';
import { ActionButtonType } from '../types';

function QwertyKeyboard(props: IQwertyKeyboardProps) {
  const { styles, actionProps, input, inputMaxLength, hookProps } = props;
  const { hasShift, hasSymbol, hasLanguage, hasSpace, hasClean, hasDelete } = actionProps;
  const { 
    currentLayout,
    selectedLanguage,  
    isShiftActive, 
    isSymbolActive, 
    setInput,  
    onShift, 
    onSymbol, 
    onLanguageChange,
    onSpace, 
    onClean, 
    onDelete 
  } = hookProps;

  const isInputFilled = input?.length === inputMaxLength;
  
  return (
    <FlexBox flexDirection='column' alignItems='center' rowGap={styles.keyButton.rowGap}>
      {currentLayout.map((row, rowIndex) => (
        <FlexBox 
          key={rowIndex}
          alignItems='center'
          justifyContent='space-between'
          columnGap={styles.keyButton.columnGap}
        >
          {row.map((key, keyIndex) => (
            <Fragment key={keyIndex}>
              {rowIndex === 2 && hasShift && keyIndex === 0 && (
                <ActionButton 
                  key={rowIndex} 
                  label='Shift' 
                  type={ActionButtonType.SHIFT}
                  styles={styles}
                  leftIcon={styles?.keyButton.shift?.leftIcon}
                  rightIcon={styles?.keyButton.shift?.rightIcon}
                  isInputFilled={isInputFilled}
                  isActive={isShiftActive}
                  onPress={onShift} 
                />
              )}
              <RegularButton
                key={keyIndex}
                keyOptions={key}
                disabled={isInputFilled}
                styles={styles}
                isShiftActive={isShiftActive}
                isSymbolActive={isSymbolActive}
                onPress={(value) => setInput(value)}
              />
              {rowIndex === 2 && hasShift && keyIndex === row.length - 1 && (
                <ActionButton 
                  key={rowIndex} 
                  label='Shift'
                  type={ActionButtonType.SHIFT}
                  styles={styles}
                  leftIcon={styles?.keyButton.shift?.leftIcon}
                  rightIcon={styles?.keyButton.shift?.rightIcon}
                  isInputFilled={isInputFilled}
                  isActive={isShiftActive}
                  onPress={onShift} 
                />
              )}
            </Fragment>
          ))}
        </FlexBox>
      ))}
      <FlexBox
        alignItems='center'
        justifyContent='space-between'
        columnGap={styles.keyButton.columnGap}
      >
        {hasSymbol && (
          <ActionButton 
            label='123/#+=' 
            type={ActionButtonType.SYMBOL}
            styles={styles} 
            leftIcon={styles?.keyButton.symbol?.leftIcon}
            rightIcon={styles?.keyButton.symbol?.rightIcon}
            isInputFilled={isInputFilled}
            isActive={isSymbolActive} 
            onPress={onSymbol} 
          />
        )}
        {hasLanguage && (
          <ActionButton 
            label={getLabel(languageLabel, selectedLanguage)} 
            type={ActionButtonType.LANGUAGE}
            styles={styles} 
            leftIcon={styles?.keyButton.language?.leftIcon}
            rightIcon={styles?.keyButton.language?.rightIcon}
            isInputFilled={isInputFilled}
            onPress={onLanguageChange} 
          />
        )}
        {hasSpace && (
          <ActionButton 
            label=' '
            type={ActionButtonType.SPACE}
            styles={styles} 
            leftIcon={styles?.keyButton.space?.leftIcon}
            rightIcon={styles?.keyButton.space?.rightIcon}
            isInputFilled={isInputFilled}
            onPress={onSpace} 
          />
        )}
        {hasClean && (
          <ActionButton 
            label={getLabel(cleanLabel, selectedLanguage)} 
            type={ActionButtonType.CLEAN}
            styles={styles} 
            leftIcon={styles?.keyButton.clean?.leftIcon}
            rightIcon={styles?.keyButton.clean?.rightIcon}
            isInputFilled={isInputFilled}
            onPress={onClean} 
          />
        )}
        {hasDelete && (
          <ActionButton 
            label={getLabel(deleteLabel, selectedLanguage)} 
            type={ActionButtonType.DELETE}
            styles={styles} 
            leftIcon={styles?.keyButton.delete?.leftIcon}
            rightIcon={styles?.keyButton.delete?.rightIcon}
            isInputFilled={isInputFilled}
            onPress={onDelete} 
          />
        )}
      </FlexBox>
    </FlexBox>
  )
}

export default QwertyKeyboard;
