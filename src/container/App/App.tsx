import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import Main from 'container/Main/Main'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { type } from 'os'
import { useState } from 'react'

type Props = {}

type CartDataProps = {
    totalCount: number
    totalPrice: number
}
const App = (props: Props) => {
    const [cartData, setCartData] = useState<CartDataProps>({
        totalCount: 0,
        totalPrice: 0,
    })
    const AddProductToCart = (count: number, price: number) => {
        setCartData((prevState) => ({
            totalCount: prevState.totalCount + count,
            totalPrice: prevState.totalPrice + count * price,
        }))
    }
    return (
        <>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <Header cartData={cartData} />
                <button onClick={() => AddProductToCart(5, 500)}>
                    Add to cart (5 count, $ 500 price){' '}
                </button>
                <Main />
                <Footer />
            </StyledEngineProvider>
        </>
    )
}
export default App
