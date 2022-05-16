import React, { useEffect, useRef, useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Margin } from "@mui/icons-material";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Paper } from "@mui/material";
import CloudTags from "./CloudTags/CloudTags";
import { Fade } from '@mui/material';
import VizSensor from 'react-visibility-sensor';
const Skills = () => {
  const [visible, setVisible] = useState(false);
  return (
    <VizSensor
    partialVisibility
            onChange={(isVisible: any) => {
                setVisible(isVisible);
            }}
        >
    <Fade in={visible} timeout={1000}>
    <Box sx={{ display: 'flex' }}>
                <CloudTags/>
            </Box>
    </Fade>
    </VizSensor>
    
  );
};
export default Skills