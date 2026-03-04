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
import { createTheme, alpha, ThemeProvider } from '@mui/material/styles';
import { useTranslations, useLocale } from 'next-intl';

type Page = {
  title: string;
  path: string;
};

const grayBase = '#8A8A8E';
const grayMain = alpha(grayBase, 0.2);

const theme = createTheme({
  palette: {
    primary: {
      main: grayMain,
      light: alpha(grayBase, 0.5),
      dark: alpha(grayBase, 0.9),
      contrastText: '#fff',
    },
    secondary: {
      main: '#A0A0A5',
      light: alpha('#A0A0A5', 0.5),
      dark: alpha('#A0A0A5', 0.9),
      contrastText: '#fff',
    },
  },
});

interface ResponsiveAppBarProps {
  className?: string;
}

function ResponsiveAppBar({ className }: ResponsiveAppBarProps) {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const t = useTranslations('nav');
  const locale = useLocale();
  const pages: Page[] = [
    { title: t('projects'), path: `/${locale}/projects` },
    { title: t('services'), path: `/${locale}/services` },
    { title: t('blog'), path: `/${locale}/blog` },
  ];

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        className={`rounded-[26px] ${className || ''}`}
        position="relative"
        color='primary'
        enableColorOnDark={true}
        sx={{
          backdropFilter: 'blur(40px) saturate(180%)',
          WebkitBackdropFilter: 'blur(40px) saturate(180%)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              className='underline-effect'
              variant='h6'
              component='a'
              href={`/${locale}`}
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
                    backgroundColor: 'transparent',
                    color: 'white',
                  },
                  '& .MuiMenu-paper': {
                    backgroundColor: 'rgba(40, 40, 42, 0.75)',
                    backdropFilter: 'blur(40px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(40px) saturate(180%)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '16px',
                    color: 'white',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                  },
                  '& .MuiMenuItem-root:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    color: 'white',
                  },
                }}
              >
                {pages.map((page: Page) => (
                  <MenuItem className='bg-transparent' key={page.title}>
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
              href={`/${locale}`}
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
