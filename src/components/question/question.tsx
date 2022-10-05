import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import RadioControl from './radioControl';

interface Props {
  id: number;
  desc: string;
  value: number;
  onValueChanged: (id: number, score: number) => void;
}

const Question = (props: Props) => {
  // const { value } = props;

  return (
    <Card sx={{ minWidth: 275, mb: 5 }}>
      <CardContent>
        <Typography fontSize={16}>{props.desc}</Typography>
        <Grid
          container
          mt={2}
          justifyContent='space-around'
          alignItems='center'
        >
          <Grid item xs={2}>
            <Typography fontSize={14} align='right'>
              Sangat Tidak Setuju
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Grid container justifyContent='space-evenly' alignItems='center'>
              <Grid item>
                <RadioControl {...props} label={1}></RadioControl>
              </Grid>
              <Grid item>
                <RadioControl {...props} label={2}></RadioControl>
              </Grid>
              <Grid item>
                <RadioControl {...props} label={3}></RadioControl>
              </Grid>
              <Grid item>
                <RadioControl {...props} label={4}></RadioControl>
              </Grid>
              <Grid item>
                <RadioControl {...props} label={5}></RadioControl>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <Typography fontSize={14} align='left'>
              Sangat Setuju
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Question;
