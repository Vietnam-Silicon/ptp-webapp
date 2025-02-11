import { FormControl, InputLabel, OutlinedInput, OutlinedInputProps } from '@mui/material';
import { FC } from 'react';

const OutlineInput: FC<OutlinedInputProps> = (props) => {
  return (
    <FormControl fullWidth>
      <InputLabel htmlFor={props.id}>{props.label}</InputLabel>
      <OutlinedInput id={props.id} {...props} />
    </FormControl>
  );
};

export { OutlineInput as Input };
