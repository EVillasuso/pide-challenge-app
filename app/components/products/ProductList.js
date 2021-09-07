import React from 'react'
import { ScrollView } from 'react-native'
import ProductCard from './ProductCard'

export default function ProductList({ products, catKet }) {
    return (
        <ScrollView key={catKet}>

            {products.map((product) => {
                return (
                    <ProductCard product={product} key={product.key} />
                )
            })}

        </ScrollView>
    )
}


