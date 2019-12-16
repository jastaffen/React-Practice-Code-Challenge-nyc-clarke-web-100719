import React, { Fragment } from 'react';


const MoneyForm = (props) => {
    return(
        <Fragment>
            <h2 className="money-header">How much Money Do You Want To Bring?</h2>
            <div className="wallet-form">
                <form>
                    <input type="number" value={props.money} onChange={props.handleMoneyChange} /> 
                </form>
            </div>
            
        </Fragment>
    )
}

export default MoneyForm