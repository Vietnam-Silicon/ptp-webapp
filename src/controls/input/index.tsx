'use client';

import { FormControl, InputLabel, OutlinedInput, OutlinedInputProps } from '@mui/material';
import { debounce } from 'lodash-es';
import { FC, useEffect, useMemo, useState } from 'react';

const DEBOUNCE_TIME = 500;

const OutlineInput: FC<OutlinedInputProps> = ({ size, ...props }) => (
  <FormControl fullWidth>
    <InputLabel size={size === 'medium' ? 'normal' : 'small'} htmlFor={props.id}>
      {props.label}
    </InputLabel>
    <OutlinedInput sx={{ height: '40px' }} size={size} id={props.id} {...props} />
  </FormControl>
);

const DebounceInput: FC<OutlinedInputProps> = ({ value, defaultValue, onChange, ...props }) => {
  const [displayValue, setDisplayValue] = useState(defaultValue ?? value);
  const debounceChange = useMemo(
    () => debounce((event) => onChange?.(event), DEBOUNCE_TIME),
    [onChange],
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDisplayValue(event.target.value);
    debounceChange(event);
  };

  useEffect(() => {
    setDisplayValue(value);
  }, [value]);
  return <OutlineInput value={displayValue} onChange={handleChange} {...props} />;
};

export { OutlineInput as Input, DebounceInput };
