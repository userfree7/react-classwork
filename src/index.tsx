import { type } from '@testing-library/user-event/dist/type'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { isPropertySignature } from 'typescript'
import { Content1 } from './Content'
import Title from './Title'

function App() {
    return (
        <>
            <Title text="React" />
            <Title text="TS" />
            <Content1
                text1={
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, in eligendi placeat numquam asperiores optio ipsa quos corrupti qui atque magni eos vitae pariatur dolor dicta laboriosam eum quia unde!'
                }
                text2={
                    'qui atque magni eos vitae pariatur dolor dicta laboriosam eum quia unde!'
                }
                year={2023}
            />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
