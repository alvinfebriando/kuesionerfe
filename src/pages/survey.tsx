import { useState } from 'react';
import Question from '../components/question';
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

  return (
    <div>
      {question.map(q => (
        <Question
          value={answer[q.id - 1].score}
          onValueChanged={handleAnswerChange}
          key={q.id}
          id={q.id}
          desc={toTitleCase(q.title)}
        ></Question>
      ))}
    </div>
  );
};

export default Survey;
