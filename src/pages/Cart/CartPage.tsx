import CartProductList from 'components/CartProductList/CartProductList'
import { Typography, Grid } from '@mui/material'
import CartTotal from 'components/CartTotal/CartTotal'
import CartProductListItemExtended from 'components/CartProductList/CartProductListItemExtended'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    removeProductFromCart: (id: number) => void
}
const CartPage = ({ productsInCart, removeProductFromCart }: Props) => {
    return (
        <div>
            <Typography
                variant="h4"
                component="h1"
                sx={{
                    marginBottom: '30px',
                }}
            >
                Cart
            </Typography>
            <Grid container spacing={4}>
                <CartProductList
                    productsInCart={productsInCart}
                    CartItem={CartProductListItemExtended}
                    removeProductFromCart={removeProductFromCart}
                />
            </Grid>

            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}
export default CartPage
