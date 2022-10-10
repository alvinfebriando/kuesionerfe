import { Button, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { ChangeEvent, useState } from 'react';
import CheckboxControlGroup from '../components/generator/checkboxControlGroup';
import { question } from '../data/question';

const Generator = () => {
  const [numberOfRespondent, setNumberOfRespondent] = useState('0');

  const handleRespondentChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) >= 0) {
      setNumberOfRespondent(Number(e.target.value).toString());
    }
  };

  const questions = question.map(q => (
    <CheckboxControlGroup
      key={q.id}
      question={q.title}
      labels={['1', '2', '3', '4', '5']}
    />
  ));

  return (
    <>
      <Typography>Generator</Typography>
      <Box mt={2} mb={2}>
        <form>
          <TextField
            margin='normal'
            fullWidth
            type='number'
            id='standard-basic'
            label='Jumlah responden'
            variant='standard'
            value={numberOfRespondent}
            onChange={handleRespondentChange}
          />
          <Typography mt={2}>
            Untuk pertanyaan berikut, tentukan maksimal 2 nilai yang diinginkan
          </Typography>
          {questions}
          <Grid container justifyContent='flex-end' mt={2}>
            <Grid item>
              <Button type='submit' variant='contained'>
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </>
  );
};

export default Generator;
