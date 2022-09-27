import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from '@mui/material/Typography';
import React from 'react';

interface Props {
  id: number;
  desc: string;
  value: number;
  onValueChanged: (id: number, score: number) => void;
}

const Question = (props: Props) => {
  const { value, onValueChanged } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onValueChanged(props.id, Number(event.target.value));
  };

  return (
    <Card sx={{ minWidth: 275, mb: 5 }}>
      <CardContent>
        <FormControl sx={{ mb: 3 }}>
          <FormLabel>
            <Typography variant='h6'>{props.desc}</Typography>
          </FormLabel>
          <RadioGroup row value={value} onChange={handleChange}>
            <FormControlLabel
              value='1'
              control={<Radio />}
              label='Sangat tidak setuju'
            />
            <FormControlLabel
              value='2'
              control={<Radio />}
              label='Tidak setuju'
            />
            <FormControlLabel
              value='3'
              control={<Radio />}
              label='Tidak tahu'
            />
            <FormControlLabel value='4' control={<Radio />} label='Setuju' />
            <FormControlLabel
              value='5'
              control={<Radio />}
              label='Sangat setuju'
            />
          </RadioGroup>
        </FormControl>
      </CardContent>
    </Card>
  );
};

export default Question;
