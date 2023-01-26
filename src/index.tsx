import React from 'react'
import ReactDOM from 'react-dom/client'

function Title() {
    return <h1>Hello Title</h1>
}
function Content() {
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
            <Title />
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
