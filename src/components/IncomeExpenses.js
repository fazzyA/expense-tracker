import React, { PureComponent } from 'react'

export const IncomeExpenses = () => {
    const income =0;
    const expense=0;
    return (
        <div className="inc-exp-container">
            <div>
              <h4>Income</h4>
      <p className="money plus">{income}</p>
            </div>
            <div>
              <h4>Expense</h4>
      <p className="money minus">{expense}</p>
            </div>
          </div>
      )
    
}