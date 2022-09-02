import React from 'react';
import { Box, Container, Typography, Grid, Link } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import { FooterStyle } from './style';

export default function Footer() {
    return <>
        <Box sx={FooterStyle} >
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" color="#FFFF00" gutterBottom>
                            Sobre
                        </Typography>
                        <ul>
                            <li><Link href="#" sx={{ textDecoration: 'none' }} variant="subtitle1" color="#FFFFFF">
                                Sobre nós
                            </Link></li>
                            <li><Link href="#" sx={{ textDecoration: 'none' }} variant="subtitle1" color="#FFFFFF">
                                Contato
                            </Link></li>
                            <li><Link href="#" sx={{ textDecoration: 'none' }} variant="subtitle1" color="#FFFFFF">
                                Termos de uso
                            </Link></li>
                            <li><Link href="#" sx={{ textDecoration: 'none' }} variant="subtitle1" color="#FFFFFF">
                                Política de privacidade
                            </Link></li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" color="#FFFF00" gutterBottom>
                            Tópicos
                        </Typography>
                        <ul>
                            <li><Link href="#" sx={{ textDecoration: 'none' }} variant="subtitle1" color="#FFFFFF">
                                Tópico um
                            </Link></li>
                            <li><Link href="#" sx={{ textDecoration: 'none' }} variant="subtitle1" color="#FFFFFF">
                                Tópico dois
                            </Link></li>
                            <li><Link href="#" sx={{ textDecoration: 'none' }} variant="subtitle1" color="#FFFFFF">
                                Tópico três
                            </Link></li>
                            <li><Link href="#" sx={{ textDecoration: 'none' }} variant="subtitle1" color="#FFFFFF">
                                Tópico quatro
                            </Link></li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" color="#FFFF00" gutterBottom>
                            Tópicos
                        </Typography>
                        <ul>
                            <li><Link href="#" sx={{ textDecoration: 'none' }} variant="subtitle1" color="#FFFFFF">
                                Tópico um
                            </Link></li>
                            <li><Link href="#" sx={{ textDecoration: 'none' }} variant="subtitle1" color="#FFFFFF">
                                Tópico dois
                            </Link></li>
                            <li><Link href="#" sx={{ textDecoration: 'none' }} variant="subtitle1" color="#FFFFFF">
                                Tópico três
                            </Link></li>
                            <li><Link href="#" sx={{ textDecoration: 'none' }} variant="subtitle1" color="#FFFFFF">
                                Tópico quatro
                            </Link></li>
                        </ul>
                    </Grid>
                    <Box sx={{ borderLeft: '1px solid white', minHeight: '20vh', height: '100%', mt: '2.5%' }} />
                    <Grid item xs={12} sm={6} md={2} sx={{ m: 'auto'}}>
                        <BusinessIcon sx={{ fontSize: 100, color: '#FFFF00' }} />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    </>
}