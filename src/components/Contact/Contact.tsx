import React, { useEffect, useRef, useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Paper } from "@mui/material";
import { styled } from '@mui/material/styles';
import MyDivider from '../MyDivider/MyDivider';
import { COLORS } from '../../style/colors';
import { Link } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/IconButton';
import { Fade } from '@mui/material';
import VizSensor from 'react-visibility-sensor';
const Contact = () => {
  const [visible, setVisible] = useState(false);
  return (
    <VizSensor
    partialVisibility
    onChange={(isVisible: any) => {
        setVisible(isVisible);
    }}
        >
    <Fade in={visible} timeout={1000}>
    <Box sx={{ display: 'flex',
    justifyContent: 'center' }} style={{ marginBottom: 30 }} >
      <IconButton href="mailto:longjileo@gmail.com" color="secondary">
        <EmailIcon />
      </IconButton>
      <IconButton href="https://github.com/leojilong" color="secondary">
        <GitHubIcon />
      </IconButton>
      <IconButton href="https://www.linkedin.com/in/long-ji/" color="secondary">
        <LinkedInIcon />
      </IconButton>
    </Box>
    </Fade>
    </VizSensor>
    
    
  );
};
export default Contact