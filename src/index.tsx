import { type } from '@testing-library/user-event/dist/type'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { isPropertySignature } from 'typescript'
import Content from './Content'

interface ITitleProps {
    text: string
}

const Title = (props: ITitleProps) => {
    console.log(props)

    return <h1>Hello {props.text}</h1>
}

function App() {
    return (
        <>
            <Title text="React" />
            <Title text="TS" />
            <Content
                text1={'Hello world 1'}
                text2={'Hello world 2'}
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
