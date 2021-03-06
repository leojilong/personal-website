import React, { useEffect, useRef, useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MusicOffIcon from '@mui/icons-material/MusicOff';
import Link from '@mui/material/Link';
import { COLORS } from '../../style/colors';
import Player from "../Music/Music";

const pages = ['About', 'Experiences', 'Projects', 'Contact'];

const TopBar = () => {
  const [musicStatus, setMusicStatus] = useState<boolean>(true);
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const toggleMusic = (event: React.MouseEvent<HTMLElement>) => {
    setMusicStatus(!musicStatus);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleAnchor = (id: string) => {
    const top = document!.getElementById(id);
    if (top) {
      // window.scrollTo(0, top);
      top.scrollIntoView({ behavior: 'smooth', block: 'center',
      inline: 'center' })
    }
  }

  return (
    
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            color={COLORS.dark}
          >
            Long (Leo) Ji
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="secondary"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} 
                onClick={() => handleAnchor(page)} 
                >
                  <Typography color={COLORS.bold} textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
              
            </Menu>
          </Box>
          <div>
      
    </div>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            color={COLORS.dark}
          >
            Long (Leo) Ji
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleAnchor(page)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
                {/* <Link href= style={{color: 'white'}}>
                  {page}
                </Link> */}
              </Button>
              
              
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Player/>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    
  );
};
export default TopBar