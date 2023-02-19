import productsArray, { getProductsObject, Product } from 'utils/productsArray'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productObject?: {
        [id: number]: Product
    }
}

const CartHeader = ({
    productsInCart,
    productObject = getProductsObject(productsArray),
}: Props) => {
    console.log(productObject)
    return (
        <div>
            <div>
                {Object.keys(productsInCart).map((productId) => (
                    <div key={productId}>
                        {productObject[parseInt(productId)].title}:
                        {productsInCart[parseInt(productId)]}
                    </div>
                ))}
            </div>
        </div>
    )
}
export default CartHeader
