'use client';

import * as React from 'react';
import { berkleyFont } from '@/fonts';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { createTheme, alpha, getContrastRatio, ThemeProvider } from '@mui/material/styles';

type Page = {
  title: string;
  path: string;
}

const pages: Page[] = [
  { title: 'Projetos', path: '/projects' },
  { title: 'Serviços', path: '/services' },
  { title: 'Blog', path: '/blog' }
];

const violetBase = '#7F00FF';
const violetMain = alpha(violetBase, 0.7);

const theme = createTheme({
  palette: {
    primary: {
      main: violetMain,
      light: alpha(violetBase, 0.5),
      dark: alpha(violetBase, 0.9),
      contrastText: getContrastRatio(violetMain, '#fff') > 4.5 ? '#fff' : '#111',
    },
    secondary: {
      main: '#FF00FF',
      light: alpha('#FF00FF', 0.5),
      dark: alpha('#FF00FF', 0.9),
      contrastText: getContrastRatio('#FF00FF', '#fff') > 4.5 ? '#fff' : '#111',
    },
  },
});

interface ResponsiveAppBarProps {
  className?: string;
}

function ResponsiveAppBar({ className }: ResponsiveAppBarProps) {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  // const [_, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
  //     setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //     setAnchorElUser(null);
  // };

  return (
    <ThemeProvider theme={theme}>
      <AppBar className={`bg-black rounded-[20px] ${className || ''}`} position="relative" color='primary' enableColorOnDark={true}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              className='underline-effect'
              variant='h6'
              component='a'
              href='/'
              noWrap
              style={berkleyFont.style}
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'inline-block' },
                overflow: 'visible',
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'inherit',
              }}
            >
              GabeDev
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size='large'
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
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
                  display: { xs: 'block', md: 'none' },
                  '& .MuiMenuItem-root': {
                    backgroundColor: 'rgb(42, 42, 42)',
                    color: 'white',
                  },
                  '& .MuiMenu-paper': {
                    backgroundColor: 'rgb(42, 42, 42)',
                    color: 'white',
                  },
                  '& .MuiMenuItem-root:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                  },
                }}
              >
                {pages.map((page: Page) => (
                  <MenuItem className='bg-black' key={page.title}>
                    <Typography style={berkleyFont.style}
                      href={page.path}
                      component='a'
                      sx={{ textAlign: 'center' }}>
                      {page.title}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              component='a'
              href='/'
              noWrap
              style={berkleyFont.style}
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                overflow: 'visible',
                flexGrow: 1,
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              GabeDev
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  style={berkleyFont.style}
                  key={page.title}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  <Typography
                    style={berkleyFont.style}
                    component="a"
                    href={page.path}
                    className="underline-effect"
                    sx={{
                      fontWeight: 400,
                      color: 'inherit',
                      textDecoration: 'none',
                    }}>
                    {page.title}
                  </Typography>
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
export default ResponsiveAppBar;
