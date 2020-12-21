import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HeroItem from '../Hero/HeroItem';

const useStyles = makeStyles((theme) => ({
 title: {
     textAlign:'center',
     marginBottom:'40px',
     marginTop:'60px',
     color:'#0088cc',
 },
 
}));
export default function Hero(){
    const classes = useStyles();
    const [spacing, setSpacing] = React.useState(2);
    return(
        <>
        <Typography component='h1' className={classes.title} variant='h4'>Τι Υπηρεσίες Προσφέρουμε;</Typography>
        <Grid container direction='row'>
            <HeroItem/>
        </Grid>
        </>
    )
}