import { FormControl, MenuItem, TextField, TextFieldProps } from '@mui/material';
import { FC } from 'react';

type DropdownProps = TextFieldProps & {
  menuItems: Array<{ value: string; label: string }>;
};

export const Dropdown: FC<DropdownProps> = ({ menuItems, ...props }) => {
  return (
    <FormControl fullWidth>
      <TextField id={props.id} select {...props}>
        {menuItems.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </FormControl>
  );
};
