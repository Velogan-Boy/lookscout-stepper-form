import React, { useEffect, useState, ReactComponentElement } from 'react';

import { Button } from '@mui/material';
import toast, { Toaster } from 'react-hot-toast';

import { ReactComponent as NextIcon } from './assets/images/next.svg';
import { ReactComponent as BackIcon } from './assets/images/back.svg';

import Stepper from './components/Stepper/Stepper';
import FormStep from './components/FormStep/FormStep';

import './App.css';

import { createUserApi, getTextApi } from './api/allApis';

function App() {
   const [currentStep, setCurrentStep] = useState(1);
   const [text, setText] = useState('Next');
   const [userData, setUserData] = useState({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
   });

   useEffect(() => {
      async function getText() {
         const { text, error } = await getTextApi();

         console.log(text);

         if (error) return alert(error);

         setText(text);
      }

      getText();
   }, []);

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
         if (!userData.email || !userData.name || !userData.password || !userData.confirmPassword) {
            setCurrentStep(4);
            return alert('Please fill all the fields');
         }
         const { user, error } = createUserApi({
            name: userData.name,
            email: userData.email,
         });

         if (error) return alert(error);

         toast.success('Form submitted successfully!', {
            icon: '👏',
         });
      }
   }, [currentStep]);

   return (
      <div className="layout">
         <div className="logo-container">
            <img src="https://digilabs-admin-panel.onrender.com/logo.svg" alt="Lookscout Logo" />
         </div>
         <div className="card">
            <div className="card-header">
               <Stepper current={currentStep} />
            </div>
            <div className="card-body">
               <FormStep step={currentStep} user={userData} setUser={setUserData} />
            </div>
            <div className="card-footer">
               <Button disabled={currentStep === 1} onClick={handleBack} className="btn" disableRipple disableElevation variant="contained" color="primary">
                  <BackIcon />
                  <span id="back">Back</span>
               </Button>
               <Button disabled={currentStep === 5} onClick={handleNext} className="btn" disableRipple disableElevation variant="contained" color="primary">
                  <span id="next">{text}</span>
                  <NextIcon />
               </Button>
            </div>
         </div>
         <Toaster />
      </div>
   );
}

export default App;
