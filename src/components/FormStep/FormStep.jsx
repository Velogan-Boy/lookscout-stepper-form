import React from 'react';
import { Checkbox, Grid } from '@mui/material';

import FormGroup from '../FormGroup/FormGroup';

import styles from './FormStep.module.css';

function FormStep({ step }) {
   return (
      <>
         <Grid container spacing={2} className={styles.container}>
            <Grid item xs={12} sm={12} md={12}>
               <FormGroup name={'Name'} placeholder={'Enter your name'} isRequired={false} errorMsg={'Please enter real name'} />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
               <FormGroup name={'Email'} placeholder={'Enter your email'} isRequired={true} errorMsg={'Please enter real email'} />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
               <FormGroup name={'Password'} placeholder={'Enter your password'} isRequired={true} errorMsg={'Please enter real password'} />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
               <FormGroup name={'Confirm Password'} placeholder={'Confirm your password'} isRequired={true} errorMsg={'Please enter real password'} />
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
               <Checkbox className={styles.checkbox} disableRipple />
               <label className={styles.checkboxLabel} htmlFor="checkbox">
                  I accept the Terms and Privacy Policy
               </label>
            </Grid>
         </Grid>
      </>
   );
}
export default FormStep;
