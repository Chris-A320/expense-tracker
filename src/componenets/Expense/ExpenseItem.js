import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import React, {useState} from 'react';

const ExpenseItem= (props) => {
   
   
   return(
      <li>
         <div className='expense-item'> 
         
         <ExpenseDate date={props.date}></ExpenseDate>
            <div classname='expene-item__description'>
               <h2>{props.title} </h2>
               <div className='expense-item__price'>${props.amount}</div>
            </div>
            
         </div> 
    </li>
    );
}

export default ExpenseItem;