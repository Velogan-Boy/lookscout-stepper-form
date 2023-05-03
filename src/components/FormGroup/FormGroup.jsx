import React, { useState } from 'react';

import { ReactComponent as InfoBtn } from '../../assets/images/info.svg';

import styles from './FormGroup.module.css';

function FormGroup({ type, name, placeholder, isRequired, errorMsg }) {
   const [display, setDisplay] = useState(false);

   return (
      <div className={styles.formGroup}>
         <label htmlFor={name}>
            {name[0].toUpperCase() + name.slice(1)}
            {isRequired && '*'}
         </label>
         <input type={type} id={name} name={name} placeholder={placeholder} />
         <span className={styles.ibtn} onClick={() => setDisplay(!display)}>
            <InfoBtn />
         </span>

         <p style={{ opacity: display ? '1' : '0' }}>{errorMsg}</p>
      </div>
   );
}

export default FormGroup;
