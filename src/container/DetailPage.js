import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const DetailPage = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            margin: 5,
        }}>
            <Typography component="div" variant="h4" align="center" sx={{ margin: 5 }}>
                Who are we?
            </Typography>
            
        </Box>
    )
};

export default DetailPage;