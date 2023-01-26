import React from 'react'
import ReactDOM from 'react-dom/client'
import { isPropertySignature } from 'typescript'

interface ITitleProps {
    text: string
}
const Title = (props: ITitleProps) => {
    console.log(props)

    return <h1>Hello {props.text}Title</h1>
}
const Content = () => {
    return (
        <React.Fragment>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                qui velit necessitatibus facere unde itaque, ipsam aspernatur
                placeat ratione et, at, quia officia suscipit quasi? Odit esse
                ex quia accusamus!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Corrupti placeat asperiores saepe libero animi accusamus
                eligendi laboriosam. Debitis consequatur quidem expedita facere
                ex eligendi, libero nisi impedit ut suscipit reiciendis.
            </p>
        </React.Fragment>
    )
}
function App() {
    return (
        <>
            <Title text="React" />
            <Title text="TS" />
            <Content />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
