import React from 'react';

let style = {
    width: 70,
    height: 30,
    // textAlign: 'center',
    backgroundColor: 'white',
    color: 'black',
    cursor: 'pointer',
}

export default function Add({onAdd, counter}){
    return(
        <button {...{style}} onClick = {onAdd(counter)} >Agregar</button>
    )

}