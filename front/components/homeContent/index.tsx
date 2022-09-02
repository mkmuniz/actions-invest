import React from 'react';
import PaidIcon from '@mui/icons-material/Paid';
import HelpIcon from '@mui/icons-material/Help';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import Button from '@mui/material/Button';
import BusinessIcon from '@mui/icons-material/Business';
import { BoxStyle, ContainerBottomStyle, ContainerHeaderStyle, ContainerStyle, HeaderStyle } from './style';
import { Container, Grid, Box, Card, CardContent, CardMedia, Typography } from '@mui/material';

export default function HomeContent() {
    return (
        <Box sx={BoxStyle}>
            <Box sx={HeaderStyle}>
                <Container sx={ContainerHeaderStyle}>
                    <Grid alignItems='center' textAlign='center' container spacing={5}>
                        <Grid item xs={12} md={6}>
                            <Typography textAlign='left' variant="h3" component="h3" gutterBottom>
                                <strong>
                                    Pesquise e fique atualizado sobre
                                    <br /> bolsas e startups
                                    <br /> para investir
                                </strong>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Card sx={{ maxWidth: '70%' }}>
                                <CardMedia sx={{ m: 'auto', height: "100px" }} image="https://br.advfn.com/p.php?pid=staticchart&s=BOV%5EIBOV&t=37&p=0&dm=0&vol=0&width=280&height=200&min_pre=0&min_after=0" />
                                <CardContent sx={{ textAlign: 'center' }}>
                                    <h1>IBOV</h1>
                                    <p>Gráfico Índice Bovespa</p>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Card sx={{ maxWidth: '70%', mb: '20px' }}>
                                <CardMedia sx={{ m: 'auto', height: "100px" }} image="https://cdn-www.infobip.com/wp-content/uploads/2021/04/06120509/logo-gupy-horizontal.png" />
                                <CardContent sx={{ textAlign: 'center' }}>
                                    <h1>Gupy</h1>
                                    <p>Startup destaque de 2022</p>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <h1>US$ 76 bilhões</h1>
                            <p>Volume de trading diário </p>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <h1>350+</h1>
                            <p>Startups e bolsas listadas</p>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <h1>90 milhões</h1>
                            <p>Nao sei, muita gente</p>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <h1>0,10%</h1>
                            <p>Chance de ganhar de mim com o Batman</p>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Container sx={{ textAlign: 'center' }}>
                <Grid sx={ContainerStyle} alignItems='center' container spacing={3}>
                    <Grid xs={4} item>
                        <Card sx={{ maxWidth: '70%' }}>
                            <CardMedia sx={{ m: 'auto' }}>
                                <HelpIcon sx={{ width: '100%', pt: '15px', height: '80px' }} />
                            </CardMedia>
                            <CardContent sx={{ textAlign: 'center' }}>
                                <h1>Quem somos?</h1>
                                <p>Somos um serviço para auxiliar investidores de startups e criptomoedas</p>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={4}>
                        <Card sx={{ maxWidth: '70%' }}>
                            <CardMedia sx={{ m: 'auto' }}>
                                <PaidIcon sx={{ width: '100%', pt: '15px', height: '90px' }} />
                            </CardMedia>
                            <CardContent sx={{ textAlign: 'center' }}>
                                <h1>Serviços</h1>
                                <p>Informações sobre as criptomoedas do mercado e das melhores startups para se investir</p>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={4}>
                        <Card sx={{ maxWidth: '70%' }}>
                            <CardMedia sx={{ m: 'auto' }}>
                                <Diversity3Icon sx={{ width: '100%', pt: '15px', height: '80px' }} />
                            </CardMedia>
                            <CardContent sx={{ textAlign: 'center' }}>
                                <h1>Equipe</h1>
                                <p>Site administrado por um único usuário e atualizado pelo o mesmo.</p>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
            <Container sx={ContainerBottomStyle}>
                <Card>
                    <CardMedia>
                        <BusinessIcon sx={{ width: '100%', pt: '15px', height: '80px' }} />
                    </CardMedia>
                    <CardContent sx={{ textAlign: 'center' }}>
                        <h1>Quer cadastrar sua startup?</h1>
                        <Button variant="outlined">Cadastrar</Button>
                    </CardContent>
                </Card>
            </Container>
        </Box>
    );
}