import { Button, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { ChangeEvent, FormEvent, useState } from 'react';
import CheckboxControlGroup from '../components/generator/checkboxControlGroup';
import { question } from '../data/question';

type QuestionScore = {
  question: string;
  score: string[];
};

const Generator = () => {
  const [numberOfRespondent, setNumberOfRespondent] = useState('0');

  const handleRespondentChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) >= 0) {
      setNumberOfRespondent(Number(e.target.value).toString());
    }
  };

  const [scores, setScores] = useState<QuestionScore[]>([
    { question: 'rencana kontrak kuliah', score: [] },
    { question: 'kesempatan bertanya', score: [] },
    { question: 'feedback transparansi nilai', score: [] },
    { question: 'kedisiplinan waktu', score: [] },
    { question: 'penguasaan materi', score: [] },
    { question: 'penguasaan e-learning', score: [] },
  ]);

  const handleScoreChanged = (q: string, score: string[]) => {
    let newArr = [...scores];
    newArr = newArr.map(v => {
      if (v.question === q) {
        v.score = score;
      }
      return v;
    });
    setScores(newArr);
  };

  const questions = question.map(q => (
    <CheckboxControlGroup
      key={q.id}
      question={q.title}
      labels={['1', '2', '3', '4', '5']}
      handleScoreChanged={handleScoreChanged}
    />
  ));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert(JSON.stringify(scores));
  };

  return (
    <>
      <Typography>Generator</Typography>
      <Box mt={2} mb={2}>
        <form onSubmit={handleSubmit}>
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
