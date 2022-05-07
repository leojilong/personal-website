import AboutMe from '../AboutMe/AboutMe';
import TopBar from '../TopBar/TopBar';
import MyDivider from '../MyDivider/MyDivider';
import Experiences from '../Experiences/Expereinces';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Skills from '../Skills/Skills';
import Project from '../Project/Project';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { COLORS } from '../../style/colors';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: COLORS.bg,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        
      },
    },
  },
  palette: {
    primary: {
      main: COLORS.bold,
    },
    secondary: {
      main: '#edf2ff',
    },
    text: {
      primary: COLORS.text,
    },
  },
  
});

const MainPage = () => {

  return (
      <>
    <ThemeProvider theme={theme}>
      <CssBaseline /> 
    <TopBar/>
    
    <Container maxWidth="lg" style={{ marginTop: 30 }}>
      <Grid container 
            rowSpacing={1} 
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} >
            <div id="About">
            <MyDivider text="About Me" />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <AboutMe />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Skills />
          </Grid>
          <Grid item xs={12} >
            <div id="Experiences">
            <MyDivider text="Experiences"/>
            </div>
          </Grid>
          <Grid item xs={12} >
            <Experiences/>
          </Grid>
          <Grid item xs={12} >
            <div id="Projects">
            <MyDivider text="Projects" />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Project title="tt" content="asd"/>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Project title="tt" content="asd"/>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Project title="tt" content="asd"/>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Project title="tt" content="asd"/>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Project title="tt" content="asd"/>
          </Grid>
      </Grid>
        
    </Container>
    </ThemeProvider>
    
    </>
  );
};
export default MainPage;
