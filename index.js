import React from 'react'

function Home() {

    return {
        <div>Home</div>
    }

    const listItems = [1,2,3,4]

    const addItem = () => {
        const variableA = 1;
        const variableB = 3;
        const variableC = 2;

        return variableA*3 + variableC*variableB
    }
    return (
        <><div>Home</div>
        <p>hola mundo</p>
        <buttom onclick={addItem} /></>
    ) 
}

export default Home
