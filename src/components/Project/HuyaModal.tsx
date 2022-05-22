import React, { useEffect, useRef, useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Link from '@mui/material/Link';
import { COLORS } from "../../style/colors";

type modalProps = {
  isOpen: boolean;
  handleClose: () => void;
};

const HuyaModal = (props: modalProps) => {
  return (
    <Dialog
    fullWidth
    maxWidth='lg'
    onClose={props.handleClose} open={props.isOpen}
      >
        <DialogContent>
          <DialogContentText >
          
            Still preparing detail description with images for this project, you can check my resume if interested 
            <Link href="https://docs.google.com/document/d/1YcPzcf5JXFOUxC4HddXeV6NwunMNQPiJ/edit?usp=sharing&ouid=109976699635638579701&rtpof=true&sd=true" underline="hover" color={COLORS.dark}>
        <Typography variant="h4" >Resume Link</Typography>
      </Link>          
          </DialogContentText>
        </DialogContent>
      
    </Dialog>
    
    
  );
};
export default HuyaModal