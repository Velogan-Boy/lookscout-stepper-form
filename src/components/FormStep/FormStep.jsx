import React from 'react';
import { Checkbox, Grid } from '@mui/material';

import FormGroup from '../FormGroup/FormGroup';

import styles from './FormStep.module.css';

function FormStep({ step, user, setUser }) {
   function setValue(e) {
      
      setUser({ ...user, [e.target.name]: e.target.value });
   }

   return (
      <>
         <Grid container spacing={2} className={styles.container}>
            <Grid item xs={12} sm={12} md={12}>
               <FormGroup name={'name'} placeholder={'Enter your name'} isRequired={false} errorMsg={'Please enter real name'} setValue={setValue} />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
               <FormGroup name={'email'} placeholder={'Enter your email'} isRequired={true} errorMsg={'Please enter real email'} setValue={setValue} />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
               <FormGroup name={'password'} placeholder={'Enter your password'} isRequired={true} errorMsg={'Please enter real password'} setValue={setValue} />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
               <FormGroup name={'confirmPassword'} placeholder={'Confirm your password'} isRequired={true} errorMsg={'Please enter real password'} setValue={setValue} />
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
