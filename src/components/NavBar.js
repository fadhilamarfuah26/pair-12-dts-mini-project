import { EmojiEmotions, Logout } from '@mui/icons-material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { signOut } from 'firebase/auth';
import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { auth } from '../config/firebase';

const NavBar = () => {
    const navigate = useNavigate();

    const onLogout = async () => {
        try {
            await signOut(auth);
            navigate("/login");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar>
                <Toolbar>
                    <EmojiEmotions sx={{ display: 'flex', mr: 2 }} />
                    <Typography
                        variant="h6"
                        sx={{
                            flexGrow: 1,
                            textAlign: 'left'
                        }}
                    >
                        <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/">
                            Movie
                        </Link>
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            flexGrow: 1,
                            textAlign: 'left'
                        }}
                    >
                        <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/login">
                            Login
                        </Link>
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            flexGrow: 1,
                            textAlign: 'left'
                        }}
                    >
                        <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/login">
                            Sign Up
                        </Link>
                    </Typography>
                    <Box sx={{ display: 'flex' }}>
                        <Box sx={{ padding: 1 }}>
                            <Logout onClick={onLogout} />
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box >
    );
}

export default NavBar;