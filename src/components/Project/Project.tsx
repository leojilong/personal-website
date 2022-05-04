import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export type ProjectInfo = {
  title: string,
  content: string;
};
const Project = (props: ProjectInfo) => {
   
    return (
      
      <Card
      sx={{
        '&:hover': {
          boxShadow: 20, // theme.shadows[20]
        },
        minWidth: 275
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2">
          {props.content}
        </Typography>
      </CardContent>
      </Card>
    );
  };
  export default Project