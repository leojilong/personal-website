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



const DistributedProject = () => {
  const [visible, setVisible] = useState(false);
  return (
    <VizSensor
    partialVisibility
          onChange={(isVisible: any) => {
              setVisible(isVisible);
          }}
      >
    <Fade in={visible} timeout={1000}>
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
        Scalable Key-Value Storage Service
      </Typography>
      <Typography >
        •	Toronto, ON (Jan 2022 - May 2022)
      </Typography>
      <Typography >
        •	Distributed System Project
      </Typography>
      <Typography color={COLORS.dark}>
        •	Java, Apache Zookeeper, Gson, Log4j, Apache Maven
      </Typography>
     
    </CardContent>
    </Card>
    </Fade>
  </VizSensor>
  );
};
export default DistributedProject