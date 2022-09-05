import { Button, Card, CardContent, CardMedia, FormControl, TextField, Grid, Box } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import Footer from '../../components/footer';
import SearchAppBar from '../../components/navbar';
import { insertOne } from '../../requests/startup';


export default function Startup() {
    const [form, setForm] = React.useState({
        name: '',
        description: '',
        website: '',
        email: '',
    });

    const getFormValues = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };

    const sendForm = async () => {
        try {
            await insertOne(form);

            return console.log("Success!")
        } catch (err) {
            console.log(err);
            return console.log(err);
        }

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
                                    name="name"
                                    onChange={e => getFormValues(e)}
                                />
                                <TextField
                                    label="Email"
                                    id="outlined-start-adornment"
                                    sx={{ m: 1, width: '25ch' }}
                                    name="email"
                                    onChange={e => getFormValues(e)}
                                />
                                <TextField
                                    label="Website"
                                    id="outlined-start-adornment"
                                    sx={{ m: 1, width: '25ch' }}
                                    name="website"
                                    onChange={e => getFormValues(e)}
                                />
                                <TextField
                                    label="Description"
                                    id="outlined-start-adornment"
                                    sx={{ m: 1, width: '25ch' }}
                                    name="description"
                                    onChange={e => getFormValues(e)}
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