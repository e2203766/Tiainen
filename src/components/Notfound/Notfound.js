import { Box, Container, Button, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <>
            <Container className='content-container App' sx={{ mx: 'auto', my: '20px' }} maxWidth="xl">
                <Box
                    component="img"
                    sx={{
                        height: 350,
                        width: 450,
                        maxHeight: { xs: 233, md: 300 },
                        maxWidth: { xs: 250, md: 400 },
                    }}
                    src="https://images.ctfassets.net/mazyb2z3tcjk/k6PF6AMf6NFG3FxDTphqF/36566e19060e5bb7ec457e80d4557614/Xnip2023-04-07_13-59-51.jpg"
                    alt='404 image'
                />
                <Typography sx={{ mx: 'auto' }}>404 Page is not found Please check the url</Typography>


                <Button variant="contained" startIcon={<HomeIcon />}
                    to='/home'
                    component={Link}
                    sx={{ mb: 5, mt: 5 }}
                >
                    Back to Home
                </Button>


            </Container>

        </>
    );
};

export default Notfound;