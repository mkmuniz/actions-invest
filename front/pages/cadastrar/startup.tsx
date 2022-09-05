import { Button, Card, CardContent, CardMedia, FormControl, TextField, Grid, Box } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import Footer from '../../components/footer';
import SearchAppBar from '../../components/navbar';


export default function Startup() {

    const sendForm = () => {
        console.log('enviando');
    };

    return <>
        <div style={{ backgroundColor: 'yellow' }}>
            <SearchAppBar />
            <Grid container>
                <Grid item md={8}>
                    <Card sx={{ width: '80%', m: '40px', textAlign: 'center' }}>
                        <CardMedia>
                            <h1>Cadastre a sua startup</h1>
                        </CardMedia>
                        <CardContent>
                            <FormControl>
                                <TextField
                                    label="Company's name"
                                    id="outlined-start-adornment"
                                    sx={{ m: 1, width: '25ch' }}
                                />
                                <TextField
                                    label="Email"
                                    id="outlined-start-adornment"
                                    sx={{ m: 1, width: '25ch' }}
                                />
                                <TextField
                                    label="Description"
                                    id="outlined-start-adornment"
                                    sx={{ m: 1, width: '25ch' }}
                                />
                            </FormControl>
                            <Box sx={{ m: '15px' }}>
                                <Button onClick={sendForm} variant="outlined">Enviar</Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item md={3}>
                    <Card sx={{ width: '100%', m: '40px', textAlign: 'center' }}>
                        <CardMedia>
                            <h1>Como funciona?</h1>
                        </CardMedia>
                        <CardContent>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut
                                aliquam
                                tincidunt, nunc nisl aliquam massa, eget aliquam nisl nunc vel mauris. Nulla
                                facilisi.
                                Donec
                                euismod, nunc ut aliquam tincidunt, nunc nisl aliquam massa, eget aliquam nisl
                                nunc vel
                                mauris.
                                Nulla facilisi. Donec euismod, nunc ut aliquam tincidunt, nunc nisl aliquam
                            </p>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Footer />
        </div>
    </>
}