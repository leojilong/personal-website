import React, { useEffect, useRef, useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Margin } from "@mui/icons-material";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Paper } from "@mui/material";
import CloudTags from "./CloudTags/CloudTags";

const Skills = () => {
   return (
    <Grid container 
    sx={{  height: '100vh' }}
    >
        <Grid item xs={12} >
            <Box  sx={{ height: '95%' }}>
                <CloudTags/>
            </Box>
        </Grid>
        <Grid item xs={12} >
            <Box  sx={{ height: '95%' }}/>
        </Grid>
    </Grid>
    
  );
};
export default Skills