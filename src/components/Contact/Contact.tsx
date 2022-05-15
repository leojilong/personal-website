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
const Contact = () => {
 
  return (
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

    
    
  );
};
export default Contact