import { Grid, Typography } from '@mui/material';
import { useState } from 'react';
import CheckboxControl from './checkboxControl';

type Props = {
  labels: string[];
  question: string;
  handleScoreChanged: (q: string, scores: string[]) => void;
};

type CheckboxAttr = {
  checked: boolean;
  disabled: boolean;
};

const CheckboxControlGroup = (props: Props) => {
  const { labels, handleScoreChanged, question } = props;

  const attributes: CheckboxAttr[] = labels.map(l => {
    return { checked: false, disabled: false };
  });

  const [attribute, setAttribute] = useState<CheckboxAttr[]>(attributes);

  const handleChecked = (l: string, c: boolean) => {
    let newArr = [...attribute];
    newArr[labels.indexOf(l)].checked = c;
    setAttribute(newArr);

    handleScoreChanged(
      question,
      newArr
        .map((v, i) => {
          if (v.checked === true) {
            return (i + 1).toString();
          }
          return '';
        })
        .filter(v => v !== '')
    );

    let trueCheck = attribute.filter(v => v.checked === true);
    newArr = [...attribute];
    if (trueCheck.length >= 2) {
      newArr = newArr.map((v, i) => {
        if (v.checked === false) {
          newArr[i].disabled = true;
        }
        return newArr[i];
      });
    } else {
      newArr = newArr.map((v, i) => {
        if (v.checked === false) {
          newArr[i].disabled = false;
        }
        return newArr[i];
      });
    }
    setAttribute(newArr);
  };

  const checkboxes = labels.map((l, i) => (
    <CheckboxControl
      key={i}
      label={l}
      checked={attribute[i].checked}
      disabled={attribute[i].disabled}
      handleChecked={handleChecked}
    />
  ));

  return (
    <>
      <Grid container alignItems='center'>
        <Grid item xs={4}>
          <Typography>{question}</Typography>
        </Grid>
        {checkboxes}
      </Grid>
    </>
  );
};

export default CheckboxControlGroup;
