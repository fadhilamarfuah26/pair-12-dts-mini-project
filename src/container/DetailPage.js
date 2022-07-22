import * as React from 'react';
import { Box, CardMedia } from '@mui/material';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";
const DetailPage = ({movie}) => {
    return (
    <Box>
    <Card id={movie.id} sx={{ display: 'flex', width: 400, margin: 5 }}>
      <CardMedia
        component="img"
        sx={{ width: 150, height: 225 }}
        image={`${BASE_IMAGE_URL}${movie.poster_path}`}
        alt="Movie poster"
      />
      </Card>
      <Box sx={{display: 'flex'}}>
        <Typography component="div" variant="h6">
            helooo
        </Typography>
      </Box>
    </Box>
    )
}
export default DetailPage;