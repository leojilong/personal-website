import React, { useEffect, useRef, useState } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Fade } from '@mui/material';
import VizSensor from 'react-visibility-sensor';

export type ProjectInfo = {
  title: string,
  content: string;
};
const Project = (props: ProjectInfo) => {
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
      </Fade>
    </VizSensor>
    );
  };
  export default Project