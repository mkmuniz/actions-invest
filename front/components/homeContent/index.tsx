import React from 'react';
import PaidIcon from '@mui/icons-material/Paid';
import HelpIcon from '@mui/icons-material/Help';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import { BoxStyle, ContainerStyle, HeaderStyle } from './style';
import { Container, Grid, Box, Card, Paper, CardContent, CardMedia, Typography } from '@mui/material';

export default function HomeContent() {
    return (
        <Box sx={BoxStyle}>
            <Paper
                sx={HeaderStyle}
            />
            <Container>
                <Grid sx={ContainerStyle} alignItems='center' container spacing={3}>
                    <Grid xs={4} item>
                        <Card sx={{ maxWidth: '70%' }}>
                            <CardMedia sx={{ m: 'auto' }}>
                                <HelpIcon sx={{ width: '100%', pt: '15px', height: '80px' }} />
                            </CardMedia>
                            <CardContent>
                                <Typography align='center'>
                                    <h1>Quem somos?</h1>
                                    <p>Somos um serviço para auxiliar investidores de startups e criptomoedas</p>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={4}>
                        <Card sx={{ maxWidth: '70%' }}>
                            <CardMedia sx={{ m: 'auto' }}>
                                <PaidIcon sx={{ width: '100%', pt: '15px', height: '90px' }} />
                            </CardMedia>
                            <CardContent>
                                <Typography align='center'>
                                    <h1>Serviços</h1>
                                    <p>Informações sobre as criptomoedas do mercado e das melhores startups para se investir</p>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={4}>
                        <Card sx={{ maxWidth: '70%' }}>
                            <CardMedia sx={{ m: 'auto' }}>
                                <Diversity3Icon sx={{ width: '100%', pt: '15px', height: '80px' }} />
                            </CardMedia>
                            <CardContent>
                                <Typography align='center'>
                                    <h1>Equipe</h1>
                                    <p>Site administrado por um único usuário e atualizado pelo o mesmo.</p>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Box sx={{ bgcolor: 'white', borderRadius: '10px' }} boxShadow={2}>
                    <Typography align='center' sx={{ m: '4px' }}>
                        <h1>Missão</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in lacinia libero. Proin quis felis vitae nunc tempor faucibus. Ut tellus neque, suscipit eget libero sed, finibus porta elit. Quisque ultricies non tellus non hendrerit. Morbi eu lectus condimentum, fermentum tortor vestibulum, euismod urna. Donec commodo semper lobortis. Cras venenatis augue eu arcu facilisis fermentum. Suspendisse et elit sit amet neque auctor consequat a a neque. Vivamus vehicula ornare augue in facilisis. Praesent placerat, arcu vel tincidunt blandit, justo purus ultrices nisl, et tincidunt lectus mi ac velit. Quisque sollicitudin accumsan turpis.</p>
                        <p>Nullam eros nulla, ornare vel volutpat eu, dapibus ac lacus. Duis sem ipsum, lobortis vitae sagittis non, convallis ac nulla. Donec pulvinar at nisi scelerisque ultrices. Donec ut lorem a tellus porttitor sodales. Sed tellus mi, vulputate nec orci vitae, varius rhoncus dui. Maecenas eros eros, mattis vitae sem ut, consectetur congue velit. Nulla facilisi. Morbi maximus sapien vel dolor sollicitudin, sed auctor purus varius. Mauris lacus massa, suscipit nec tincidunt id, vestibulum eu turpis. Curabitur sollicitudin, metus non ultrices sollicitudin, nulla arcu lobortis diam, sit amet feugiat ante lorem auctor purus. Nunc nunc eros, fringilla a tempus at, sagittis sit amet odio. Quisque molestie tortor at libero molestie, eu interdum diam pharetra.
                        </p>
                    </Typography>
                </Box>
                <Box>
                    <Typography align='center'>
                        <h1>Contato</h1>
                        <p>Entre em contato conosco pelo e-mail:
                            <a>
                                mikaelmuniz2001@gmail.com
                            </a>
                        </p>
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}