import { FormControl, InputLabel, Select as MUISelect, SelectProps, MenuItem } from '@mui/material';
import { FC } from 'react';

type Props = SelectProps & {
  allowNone: boolean,
}

const Select: FC<Props> = ({ size, allowNone, children, ...props }) => {
  return (
    <FormControl fullWidth>
      <InputLabel size={size === 'medium' ? 'normal' : 'small'} htmlFor={props.id}>{props.label}</InputLabel>
      <MUISelect size={size} id={props.id} {...props} >
        {allowNone ?
          <MenuItem key="" value="">None</MenuItem> : null
        }
        {children}
      </MUISelect>
    </FormControl>
  );
};

export { Select, MenuItem }