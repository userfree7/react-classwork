import { Grid, Typography } from '@mui/material'
import ProductListItem from './ProductListItem'

type Props = {}

const ProductsList = (props: Props) => {
    return (
        <>
            <Typography variant="h4" align="center" component="h2">
                ProductsList
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem
                        title="iPhone 14 pro"
                        description="This is iPhone 14 pro"
                        type="phone"
                        capacity="256"
                        price={1200}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem
                        title="iPhone 13 pro"
                        description="This is iPhone 13 pro"
                        type="phone"
                        capacity="240"
                        price={1000}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem
                        title="iPhone 12 pro"
                        description="This is iPhone 12 pro"
                        type="phone"
                        capacity="150"
                        price={800}
                    />
                </Grid>
            </Grid>
        </>
    )
}
export default ProductsList
