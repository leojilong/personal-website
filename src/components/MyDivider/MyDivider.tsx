import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


export type DividerInfo = {
  text: string;
};
const MyDivider = (props: DividerInfo) => {
   
    return (
      
        <Divider
        style={{ marginTop: 50 }}
        textAlign="center"
        sx={{
          "&::before, &::after": {
            borderColor: "secondary.light",
          },
        }}>
            <Typography>{props.text}</Typography>
        </Divider>
    );
  };
  export default MyDivider