import React, { useEffect, useState } from 'react';

import { Button } from '@mui/material';
import toast, { Toaster } from 'react-hot-toast';

import { ReactComponent as LookscoutLogo } from './assets/images/Lookscout.svg';

import { ReactComponent as NextIcon } from './assets/images/next.svg';
import { ReactComponent as BackIcon } from './assets/images/back.svg';

import Stepper from './components/Stepper/Stepper';
import FormStep from './components/FormStep/FormStep';

import './App.css';

function App() {
   const [currentStep, setCurrentStep] = useState(1);

   const handleNext = () => {
      setCurrentStep((prev) => prev + 1);
   };

   const handleBack = () => {
      setCurrentStep((prev) => prev - 1);
   };

   useEffect(() => {
      if (currentStep > 5) {
         setCurrentStep(5);
      } else if (currentStep < 1) {
         setCurrentStep(1);
      }

      if (currentStep >= 4) {
         document.getElementById('next').innerText = 'Submit';
      } else {
         document.getElementById('next').innerText = 'Next';
      }

      if (currentStep === 5) {
         toast.success('Form submitted successfully!', {
            icon: '👏',
         });
      }
   }, [currentStep]);

   return (
      <div className="layout">
         <div className="logo-container">
            <LookscoutLogo />
         </div>
         <div className="card">
            <div className="card-header">
               <Stepper current={currentStep} />
            </div>
            <div className="card-body">
               <FormStep step={currentStep} />
            </div>
            <div className="card-footer">
               <Button disabled={currentStep === 1} onClick={handleBack} className="btn" disableRipple disableElevation variant="contained" color="primary">
                  <BackIcon />
                  <span id="back">Back</span>
               </Button>
               <Button disabled={currentStep === 5} onClick={handleNext} className="btn" disableRipple disableElevation variant="contained" color="primary">
                  <span id="next">Next</span>
                  <NextIcon />
               </Button>
            </div>
         </div>
         <Toaster />
      </div>
   );
}

export default App;
