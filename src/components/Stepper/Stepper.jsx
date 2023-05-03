import React, { useEffect, useState } from 'react';

import { ReactComponent as Done } from '../../assets/images/done.svg';
import { ReactComponent as Billing } from '../../assets/images/billing.svg';
import { ReactComponent as Personal } from '../../assets/images/personal.svg';
import { ReactComponent as Account } from '../../assets/images/account.svg';
import { ReactComponent as Tick } from '../../assets/images/tick.svg';

import styles from './Stepper.module.css';

function Stepper({ current }) {
   const [items, setItems] = useState([
      {
         id: 1,
         title: 'Account',
         icon: <Account />,
         active: true,
         completed: false,
      },
      {
         id: 2,
         title: 'Personal',
         icon: <Personal />,
         active: false,
         completed: false,
      },
      {
         id: 3,
         title: 'Billing',
         icon: <Billing />,
         active: false,
         completed: false,
      },
      {
         id: 4,
         title: 'Done',
         icon: <Done />,
         active: false,
         completed: false,
      },
   ]);

   useEffect(() => {
      const newItems = [...items];
      newItems.forEach((item, index) => {
         if (index + 1< current) {
            item.completed = true;
            item.active = false;
         } else if (index + 1 === current) {
            item.completed = false;
            item.active = true;
         } else {
            item.completed = false;
            item.active = false;
         }
      });

      setItems(newItems);
   }, [current]);

   return (
      <div className={styles.stepperContainer}>
         <div
            key={items[0].id}
            className={`${styles.stepperItem} ${items[0].active ? styles.stepperItemActive : ''} ${items[0].completed ? styles.stepperItemCompleted : ''}`}
         >
            <div className={styles.stepperItemIcon}>{items[0].completed ? <Tick /> : items[0].icon}</div>
            <h2>{items[0].title}</h2>
         </div>

         {items.map((item, index, arr) => {
            if (index === 0) return null;
            return (
               <>
                  <div
                     key={item.id}
                     className={`${styles.stepperItem} ${item.active ? styles.stepperItemActive : ''} ${item.completed ? styles.stepperItemCompleted : ''}`}
                  >
                     <div className={styles.stepperItemIcon}>{item.completed ? <Tick /> : item.icon}</div>
                     <h2>{item.title}</h2>
                  </div>
               </>
            );
         })}
      </div>
   );
}

export default Stepper;
