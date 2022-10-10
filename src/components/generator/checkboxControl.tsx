import { Checkbox, FormControlLabel, Grid } from '@mui/material';
import { ChangeEvent } from 'react';

type Props = {
  label: string;
  checked: boolean;
  disabled: boolean;
  handleChecked: (l: string, c: boolean) => void;
};

const CheckboxControl = (props: Props) => {
  const { label, checked, disabled, handleChecked } = props;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleChecked(e.target.id, e.target.checked);
  };
  return (
    <>
      <Grid item xs>
        <FormControlLabel
          control={
            <Checkbox
              id={label}
              checked={checked}
              disabled={disabled}
              onChange={handleChange}
            />
          }
          label={label}
        />
      </Grid>
    </>
  );
};

export default CheckboxControl;
