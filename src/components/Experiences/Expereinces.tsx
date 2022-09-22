import React, { useEffect, useRef, useState } from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { COLORS } from '../../style/colors';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { Fade } from '@mui/material';
import VizSensor from 'react-visibility-sensor';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const Experiences = () => {
  const [value, setValue] = React.useState(0);
  const [visible, setVisible] = useState(false);
  function getStyle (index: number) {
    return index === value ? {color: COLORS.dark} : {color: COLORS.text}
  }
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <VizSensor
    partialVisibility
            onChange={(isVisible: any) => {
                setVisible(isVisible);
            }}
        >
    <Fade in={visible} timeout={1000}>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} 
        onChange={handleChange} 
        aria-label="basic tabs example"
        indicatorColor="secondary"
        >
          <Tab label="U of T" {...a11yProps(0)} style={getStyle(0)}/>
          <Tab label="Huya" {...a11yProps(1)} style={getStyle(1)}/>
          <Tab label="Centivizer" {...a11yProps(2)} style={getStyle(2)}/>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      
        <Link href="https://www.utoronto.ca/" underline="hover" color={COLORS.dark}>
          <Typography variant="h4">University of Toronto</Typography>
        </Link>
        <Typography color={COLORS.dark}>Sep 2018 - May 2023</Typography>
        <Typography >St. George Campus, Toronto, ON</Typography>
        <Typography >•	Bachelor of Science, Specialist in Computer Science and Minor in Statistics</Typography>
        •	Member of University of Toronto Game Design Club and University of Toronto Application Development Association
        
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Link href="https://ir.huya.com/index.php?s=64" underline="hover" color={COLORS.dark}>
          <Typography variant="h4">Huya Inc.</Typography>
        </Link>
      <Typography color={COLORS.dark}>Jun 2021 - Sep 2021</Typography>
        <Typography >Guangzhou, China</Typography>
        <Typography >•	Maintained a data labeling platform with 1000+ active users and process 1.02M labeling data per month</Typography>
        <Typography >•	Deliver engaging user experience by optimized loading speed and performance of web pages</Typography>
        <Typography >•	Cooperated with other back-end developers and product managers to build, improve, and test new features for web products</Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Link href="https://www.centivizer.com/" underline="hover" color={COLORS.dark}>
          <Typography variant="h4">Centivizer</Typography>
        </Link>
      <Typography color={COLORS.dark}>May 2022 - Sep 2022</Typography>
        <Typography >Toronto, ON</Typography>
        <Typography >•	Manage database with 120+ tables and backend server of two cognitive games and user dashboards</Typography>
        <Typography >•	Implemented JWT token-based authentication for REST API, improve performance by 85%</Typography>
        <Typography >•	Set up remote develop environment and manual doc, increases onboarding and develop efficiency by 90%</Typography>
      </TabPanel>
    </Box>
    </Fade>
    </VizSensor>
  );
}
export default Experiences
