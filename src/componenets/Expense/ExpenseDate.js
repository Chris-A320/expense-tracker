import './ExpenseDate.css';
function ExpenseDate(props) {
    const month=props.date.toLocaleString('en-US',{month: 'long'});
   const day= props.date.toLocaleString('en-US', {day: '2-digit'});
    const year=props.date.getFullYear();
    return (
    <div className='expense-date'>
       <div class="expense-date__month">{month}</div>
       <div class="expense-date__year">{day}</div>
       <div class="expense-date__day">{year}</div>
    </div>
    );
}

export default ExpenseDate;