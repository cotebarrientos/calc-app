import React from 'react'
import Functions from './components/Functions'
import Numbers from './components/Numbers'
import MathOperations from './components/MathOperations'
import Result from './components/Result'
import './App.css'

// Generación de la generación de componentes
// Función Flecha o Arrow function
const App = () => {
    // Lo que ejecuta la función
    console.log('Renderización de App')
    return (
    <main className='react-calculator'>
        <Result value={undefined}/>
        <Numbers onClickNumber={number => {
            console.log("Click en number", number) 
        }} />
        <Functions 
            onContentClear={() => 
                console.log("Content Clear")}
            onDelete={() => 
                console.log("onDelete")}
        />
        <MathOperations 
            onClickOperation={operation => 
                console.log("Operation:", operation)
            } 
            onClickEqual={equal => 
                console.log("Equal:", equal)
            }
        />
    </main>)
}

// Exportación
export default App