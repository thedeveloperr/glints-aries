import { useCombobox } from 'downshift';
import { find } from 'lodash';
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { ArrowDownIcon, ArrowUpIcon } from '../..';
import { useOutsideAlerter } from '../../Utils/useOutsideAlerter';
import * as S from './PhoneNumberInputStyles';

// Downshift wants a ref to this, but we need one ourselves, and there is no way
// to share.
// https://github.com/downshift-js/downshift/issues/604
// https://github.com/downshift-js/downshift/issues/1167
const refErrorFix = { suppressRefError: true };

export const PhoneNumberInput = ({
  value,
  onChange,
  callingCodeOptions,
  onInputChange,
  filterValue,
  label,
  callingCodePlaceholder,
  callingCodeFilterInputPlaceholder,
  error,
}: Props) => {
  const [isCallingCodeInputOpen, setIsCallingCodeInputOpen] = useState(false);
  const toggleIsCallingCodeOpen = () =>
    setIsCallingCodeInputOpen(!isCallingCodeInputOpen);
  const closeCallingCodeInput = () => setIsCallingCodeInputOpen(false);

  const {
    getComboboxProps,
    getInputProps,
    getToggleButtonProps,
    getMenuProps,
    getItemProps,
  } = useCombobox<CallingCodeOption>({
    items: callingCodeOptions,
    selectedItem:
      find(callingCodeOptions, { callingCode: value.callingCode }) || null,
    onSelectedItemChange: ({ selectedItem: { callingCode } }) => {
      onChange({ ...value, callingCode });
      closeCallingCodeInput();
    },
    inputValue: filterValue,
    onInputValueChange: ({ type, inputValue }) => {
      if (type !== useCombobox.stateChangeTypes.InputChange) return;
      onInputChange(inputValue);
    },
    itemToString: option => (option ? option.label : ''),
  });

  const callingCodeFilterInputRef = useRef<HTMLInputElement>();
  useEffect(
    function focusCallingCodeFilterInputOnOpen() {
      if (isCallingCodeInputOpen && callingCodeFilterInputRef.current) {
        callingCodeFilterInputRef.current.focus();
      }
    },
    [isCallingCodeInputOpen]
  );

  const containerRef = useRef<HTMLDivElement>();
  useOutsideAlerter(containerRef, closeCallingCodeInput);

  return (
    <S.PhoneNumberInputContainer ref={containerRef}>
      <S.TopRow data-invalid={Boolean(error)}>
        <S.CallingCodeInputToggle onClick={toggleIsCallingCodeOpen}>
          +{value.callingCode || callingCodePlaceholder}
          <S.CallingCodeInputOpenIndicator {...getToggleButtonProps()}>
            {isCallingCodeInputOpen ? <ArrowDownIcon /> : <ArrowUpIcon />}
          </S.CallingCodeInputOpenIndicator>
        </S.CallingCodeInputToggle>
        <S.SignificantNumberInput
          value={value.significantNumber || ''}
          onChange={e =>
            onChange({
              ...value,
              significantNumber: e.target.value,
            })
          }
          placeholder={label}
          data-invalid={Boolean(error)}
        />
      </S.TopRow>
      <S.CallingCodeInput
        isOpen={isCallingCodeInputOpen}
        {...getComboboxProps()}
      >
        <S.CallingCodeFilterInput
          {...getInputProps(
            {
              placeholder: callingCodeFilterInputPlaceholder,
            },
            { ...refErrorFix }
          )}
          ref={callingCodeFilterInputRef}
        />
        <S.CallingCodeOptionsList {...getMenuProps()}>
          {callingCodeOptions.map((item, index) => (
            <S.CallingCodeOption
              {...getItemProps({
                item,
                index,
              })}
              key={item.callingCode}
              title={item.label}
            >
              <S.CallingCodeOptionCallingCode>
                +{item.callingCode}
              </S.CallingCodeOptionCallingCode>
              <S.CallingCodeOptionLabel>{item.label}</S.CallingCodeOptionLabel>
            </S.CallingCodeOption>
          ))}
        </S.CallingCodeOptionsList>
      </S.CallingCodeInput>
      <S.Error>{error || null}</S.Error>
    </S.PhoneNumberInputContainer>
  );
};

export interface Props {
  value: PhoneNumber;
  onChange: (value: PhoneNumber) => void;
  error?: ReactNode;
  callingCodeOptions: CallingCodeOption[];
  filterValue?: string | null;
  onInputChange?: (inputValue: string | null) => void;
  isLoadingCallingCodeOptions?: boolean;
  callingCodeInputRootId?: string;
  label: string;
  featuredOptionsLabel: string;
  otherOptionsLabel: string;
  callingCodePlaceholder: string;
  callingCodeFilterInputPlaceholder: string;
  callingCodeNoOptionsLabel: string;
}

export interface PhoneNumber {
  callingCode: number | null;
  significantNumber: string | null;
}

export interface CallingCodeOption {
  label: string;
  callingCode: number;
  isFeatured: boolean;
}
