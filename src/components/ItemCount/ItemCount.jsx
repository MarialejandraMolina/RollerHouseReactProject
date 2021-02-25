import React, {useState} from 'react';
import Display from './Display/Display';
import Button from './Button/Button';
import Add from './Add/Add';

const style = {
    margin: '80px auto',
    padding: 0,
    height: 100,
    backgroundColor: 'white',
    width: 'fit-content'
}

const upper = {
    display: 'flex',
    padding: 0,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    width: 'fit-content'
    
}

const lower = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
}

export default function ItemCount({ onAdd, stock, inicial}){

    let [counter, setCounter] = useState(inicial);

    const handleClick = (amount) => {
        return(
            () =>{
                let total = (amount < 0) ? 0: amount;
                let limiter = (amount > stock) ? stock : total;
                setCounter(limiter);
            }
        )
    };

    let prop = {counter, setCounter}

    return (
        <>
            <div className="ItemCount" {...{style}}>
                <div className="upper" style={upper}>
                    <Button suma = {false} onClick = {handleClick} {...prop}/> 
                    <Display value = {counter}/> 
                    <Button suma = {true} onClick = {handleClick} {...prop}/>
                </div>
                <div className="lower" style={lower}>
                <Add onAdd = {onAdd} {...{counter}}/>
                </div>
            </div>
        </>
    )
}