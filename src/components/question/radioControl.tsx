import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import Typography from '@mui/material/Typography';
import React from 'react';

interface Props {
  id: number;
  value: number;
  desc: string;
  label: number;
  onValueChanged: (id: number, score: number) => void;
}

const RadioControl = (props: Props) => {
  const { value, onValueChanged, label } = props;
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onValueChanged(props.id, Number(event.target.value));
  };

  return (
    <Grid
      container
      direction='column'
      justifyContent='center'
      alignItems='center'
    >
      <Grid item>
        <Typography fontSize={13}>{label}</Typography>
      </Grid>
      <Grid item>
        <Radio
          checked={value === label}
          onChange={handleChange}
          value={label}
          name={props.desc}
          required
        />
      </Grid>
    </Grid>
  );
};

export default RadioControl;
