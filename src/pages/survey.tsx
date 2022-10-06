import { Button, Grid, Typography } from '@mui/material';
import { SyntheticEvent, useState } from 'react';
import Question from '../components/question/question';
import { question } from '../data/question';

const toTitleCase = (sentence: string) => {
  return sentence.charAt(0).toUpperCase() + sentence.substring(1);
};

interface Answer {
  id: number;
  score: number;
}

const Survey = () => {
  const [answer, setAnswer] = useState<Answer[]>([
    { id: 1, score: 0 },
    { id: 2, score: 0 },
    { id: 3, score: 0 },
    { id: 4, score: 0 },
    { id: 5, score: 0 },
    { id: 6, score: 0 },
  ]);

  const handleAnswerChange = (id: number, score: number) => {
    const newArr = [...answer];
    newArr[id - 1].score = score;
    setAnswer(newArr);
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    alert(JSON.stringify(answer));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Typography mb={2}>Pertanyaan: </Typography>
        {question.map(q => (
          <Question
            value={answer[q.id - 1].score}
            onValueChanged={handleAnswerChange}
            key={q.id}
            id={q.id}
            desc={toTitleCase(q.title)}
          ></Question>
        ))}
        <Grid container justifyContent='flex-end'>
          <Grid item>
            <Button type='submit' variant='contained'>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default Survey;
