import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { COLORS } from '../../style/colors';
import { Fade } from '@mui/material';
import VizSensor from 'react-visibility-sensor';
import React, { useEffect, useRef, useState } from "react";

export type DividerInfo = {
  text: string;
};
const MyDivider = (props: DividerInfo) => {
    const [visible, setVisible] = useState(false);
    return (
      <VizSensor
      partialVisibility
            onChange={(isVisible: any) => {
                setVisible(isVisible);
            }}
        >
      <Fade in={visible} timeout={1000}>
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
        </Fade>
    </VizSensor>
    );
  };
  export default MyDivider