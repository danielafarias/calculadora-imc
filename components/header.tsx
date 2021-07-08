import styles from '../styles/header.module.scss';
import { Container, Grid, Typography } from '@material-ui/core';
import React from 'react';

export default function Header() {
    return (
        <div className={styles.header}>
            <Container fixed>
                <Grid container justify="center" alignItems="center" spacing={5}>

                    <Grid item xs={12} sm={6}>
                        <Typography variant="h3" className={styles.header_title}>
                            Calcule o seu IMC
                        </Typography>

                        <Typography>
                            O IMC é o índice de Massa Corporal e é utilizado para saber
                            se o peso está de acordo com a altura.
                        </Typography>
                    </Grid>
                
                    <Grid item xs={12} sm={6}>
                        <img src="/images/imc.png" alt="Imagem de um médico avaliando paciente." />
                    </Grid>

                </Grid>
            </Container>
            
            
        </div>
    )
}