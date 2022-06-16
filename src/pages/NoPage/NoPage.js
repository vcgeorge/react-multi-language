import React from 'react'
import * as classes from './NoPage.module.css';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';

const NoPage = (props) => {
    return (
        <>
            <section className={classes.page_404}>
                <Grid contianer sx={{ margin: '0 auto', textAlign: 'center', maxWidth: '800px' }}>

                    <Grid xs={12}>
                        <div className={classes.four_zero_four_bg}>
                            <Typography variant="h1" component="div" gutterBottom >404</Typography>
                        </div>
                        <div className={classes.contant_box_404}>
                            <Typography className={classes.h2} variant="h4" component="div" gutterBottom >Looks like you are lost</Typography>
                            <Typography variant="h5" component="div" gutterBottom >the page you are looking for not avaible!</Typography>
                            <Link to="/" className={[classes.link_404]}>Go to Home</Link>
                        </div>
                    </Grid>
                </Grid>
            </section>
        </>
    )
}

export default NoPage
