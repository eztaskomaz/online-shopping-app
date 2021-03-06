import React from 'react';
import { Grid } from '@material-ui/core';

import Product from "./product/Product";

const products = [
    {id: 1, name: 'Shoes', description: 'Running shoes.', price: '$5', image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hand-holding-pair-of-shoe-royalty-free-image-643196884-1563808125.jpg?crop=0.670xw:1.00xh;0.308xw,0&resize=980:*'},
    {id: 2, name: 'Macbook', description: 'Apple macbook.', price: '$10', image:'https://productimages.hepsiburada.net/s/18/550/9800017707058.jpg/format:webp'}
]

const Products = () => {
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map(product => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products;