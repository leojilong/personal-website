import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { COLORS } from '../../style/colors';

export type DividerInfo = {
  text: string;
};
const MyDivider = (props: DividerInfo) => {
   
    return (
      
        <Divider
        style={{ marginTop: 70 }}
        textAlign="center"
        sx={{
          "&::before, &::after": {
            borderColor: COLORS.text,
          },
        }}>
            <Typography variant="h3">{props.text}</Typography>
        </Divider>
    );
  };
  export default MyDivider