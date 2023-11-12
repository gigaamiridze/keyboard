import { Fragment } from 'react';
import { IKeyboardStyles, IActionProps, IQwertyKeyboardHookProps } from '../interfaces';
import { getLabel, languageLabel, cleanLabel, deleteLabel } from '../utils';
import { ActionButton, RegularButton, FlexBox } from '../components';
import { ActionButtonType } from '../constants';

interface IQwertyKeyboardProps {
  styles?: IKeyboardStyles;
  actionProps: IActionProps;
  hookOptions: IQwertyKeyboardHookProps;
}

function QwertyKeyboard(props: IQwertyKeyboardProps) {
  const { styles, actionProps, hookOptions } = props;
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
  } = hookOptions;
  
  return (
    <FlexBox flexDirection='column' alignItems='center' rowGap={5}>
      {currentLayout.map((row, rowIndex) => (
        <FlexBox 
          key={rowIndex}
          alignItems='center'
          justifyContent='space-between'
          columnGap={5}
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
                  isActive={isShiftActive}
                  onClick={onShift} 
                />
              )}
              <RegularButton
                key={keyIndex}
                keyOptions={key}
                styles={styles}
                isShiftActive={isShiftActive}
                isSymbolActive={isSymbolActive}
                onClick={(value) => setInput(value)}
              />
              {rowIndex === 2 && hasShift && keyIndex === row.length - 1 && (
                <ActionButton 
                  key={rowIndex} 
                  label='Shift'
                  type={ActionButtonType.SHIFT}
                  styles={styles}
                  leftIcon={styles?.keyButton.shift?.leftIcon}
                  rightIcon={styles?.keyButton.shift?.rightIcon}
                  isActive={isShiftActive}
                  onClick={onShift} 
                />
              )}
            </Fragment>
          ))}
        </FlexBox>
      ))}
      <FlexBox
        alignItems='center'
        justifyContent='space-between'
        columnGap={5}
      >
        {hasSymbol && (
          <ActionButton 
            label='123/#+=' 
            type={ActionButtonType.SYMBOL}
            styles={styles} 
            leftIcon={styles?.keyButton.symbol?.leftIcon}
            rightIcon={styles?.keyButton.symbol?.rightIcon}
            isActive={isSymbolActive} 
            onClick={onSymbol} 
          />
        )}
        {hasLanguage && (
          <ActionButton 
            label={getLabel(languageLabel, selectedLanguage)} 
            type={ActionButtonType.LANGUAGE}
            styles={styles} 
            leftIcon={styles?.keyButton.language?.leftIcon}
            rightIcon={styles?.keyButton.language?.rightIcon}
            onClick={onLanguageChange} 
          />
        )}
        {hasSpace && (
          <ActionButton 
            label=' '
            type={ActionButtonType.SPACE}
            styles={styles} 
            leftIcon={styles?.keyButton.space?.leftIcon}
            rightIcon={styles?.keyButton.space?.rightIcon}
            onClick={onSpace} 
          />
        )}
        {hasClean && (
          <ActionButton 
            label={getLabel(cleanLabel, selectedLanguage)} 
            type={ActionButtonType.CLEAN}
            styles={styles} 
            leftIcon={styles?.keyButton.clean?.leftIcon}
            rightIcon={styles?.keyButton.clean?.rightIcon}
            onClick={onClean} 
          />
        )}
        {hasDelete && (
          <ActionButton 
            label={getLabel(deleteLabel, selectedLanguage)} 
            type={ActionButtonType.DELETE}
            styles={styles} 
            leftIcon={styles?.keyButton.delete?.leftIcon}
            rightIcon={styles?.keyButton.delete?.rightIcon}
            onClick={onDelete} 
          />
        )}
      </FlexBox>
    </FlexBox>
  )
}

export default QwertyKeyboard;
