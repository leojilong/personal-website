import React, { useEffect, useRef, useState } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Fade } from '@mui/material';
import VizSensor from 'react-visibility-sensor';
import { COLORS } from "../../style/colors";
import Link from '@mui/material/Link';


const CentivizerProject = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
    <VizSensor
    partialVisibility
          onChange={(isVisible: any) => {
              setVisible(isVisible);
          }}
      >
    <Fade in={visible} timeout={1000}>
    <Link href="https://www.centivizer.com/2racewithme/">
      <Card
      sx={{
        '&:hover': {
          boxShadow: 20, // theme.shadows[20]
        },
        minWidth: 275
      }}
      style={{backgroundColor: COLORS.bold}}
    >
      <CardContent>
        <Typography variant="h5" component="div" color={COLORS.dark}>
          Exercise and Cognitive Game
        </Typography>
        <Typography >
          •	Toronto, ON (May 2022 - Present)
        </Typography>
        <Typography >
          •	Progressive Web Application
        </Typography>
        <Typography color={COLORS.dark}>
          •	Express, Sequelize, MySQL, Redis
        </Typography>
      
      </CardContent>
      </Card>
    </Link>
    </Fade>
  </VizSensor>
  </>
  );
};
export default CentivizerProject