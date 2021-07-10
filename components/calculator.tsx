import React, { useState } from 'react';
import styles from '../styles/calculator.module.scss';
import { Container, Typography, Grid, Button, TextField } from '@material-ui/core';

export default function Calculator() {

    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [imc, setImc] = useState(0);

    function calcularImc() {
        const alturaEmMetros = altura / 100;
        const calculoDoImc = peso / (alturaEmMetros * alturaEmMetros);
        setImc(Number(calculoDoImc.toFixed(2)));
        console.log(imc);
    }

    function tipoDoImc() {
        if (imc < 18.5) return (
            <strong className={styles.sub}>Abaixo do peso</strong>
        )
        if (imc < 24.9) return (
            <strong className={styles.normal}>Peso Normal</strong>
        )
        if (imc < 29.9) return (
            <strong className={styles.med}>Sobrepeso</strong>
        )
        if (imc < 34.9) return (
            <strong className={styles.grau1}>Obesidade grau 1</strong>
        )
        if (imc < 39.9) return (
            <strong className={styles.grau2}>Obesidade grau 2</strong>
        )
        if (imc >= 40.0) return (
            <strong className={styles.grau3}>Obesidade grau 3</strong>
        )
    }

    return (
        <div className={styles.calculator_area}>
            <Container maxWidth='xs'>
                <Grid container direction='column' spacing={2} alignItems='center'>

                    <Grid item>
                        <TextField
                            label="Altura em cm"
                            variant='filled'
                            fullWidth
                            type='number'
                            onChange={ ({target}) => setAltura(Number(target.value)) }
                        />
                    </Grid>

                    <Grid item>
                    <TextField
                            label="Peso em kg"
                            variant='filled'
                            fullWidth
                            type='number'
                            onChange={ ({target}) => setPeso(Number(target.value)) }
                        />
                    </Grid>

                    <Grid item>
                        <Button
                            variant='contained'
                            color='primary'
                            fullWidth
                            onClick={ () => calcularImc() }
                        >
                            Calcular
                        </Button>
                    </Grid>

                    <div className={styles.result}>
                        {
                            imc === 0 ? ("") : (

                                <Typography>
                                    O IMC é: {imc} Kg/m² <br />
                                    Classificação: {tipoDoImc()}
                                </Typography>

                            )
                        }
                    </div>

                    <Grid item xs={12} sm={6}>
                        <a href="https://github.com/danielafarias" target='_blank' rel='noreferrer'>
                            <img className={styles.github} src='/images/github.png' alt='github logo'/>
                        </a>
                    </Grid>

                </Grid>
            </Container>
        </div>
    )
}