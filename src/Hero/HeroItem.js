import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import chart from '../Hero/chart.svg';
import pie from '../Hero/pie.svg';
import expenses from '../Hero/expenses.svg';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';

const BOXES_DATA = [
    { icon: chart, text: 'Συμπληρώστε την φορολογική δήλωση με την βοήθεια των ειδικών για να έχετε το κεφάλι σας ήσυχο.', title: 'ΦΟΡΟΛΟΓΙΚΕΣ ΔΗΛΩΣΕΙΣ' },
    { icon: pie, text: 'Όλα όσα πρέπει να γνωρίζετε πριν ξεκινήσετε την νέα σας επιχείρηση. Νόμοι, φορολογία, υποχρεώσεις.', title: 'ΕΝΑΡΞΗ ΕΠΙΧΕΙΡΗΣΗΣ' },
    { icon: expenses, text: 'Αφήστε την χρονοβόρα διαδικασία των εσόδων και εξόδων της επιχείρησής σας στους επαγγελματίες.', title: 'ΕΣΟΔΑ ΕΞΟΔΑ' },

]

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2),

    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
    },
    image: {
        width: 138,
        height: 138,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    title:{
        fontWeight:'bold'
    }
}));

export default function HeroItem() {
    const classes = useStyles();


    return (
        <>
            {
                BOXES_DATA.map(({ title, text, icon }) => (
                    <div className={classes.root}>
                        <Paper className={classes.paper}>
                            <Grid container spacing={2} className={classes.container}>
                                <Grid item>
                                    <ButtonBase className={classes.image}>
                                        <img src={icon} alt='' />
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography gutterBottom variant="subtitle1" className={classes.title}>
                                                {title}
                                            </Typography>
                                            <Typography variant="body2" gutterBottom>
                                                {text}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </div>
                ))
            }

        </>
    )
}