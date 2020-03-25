import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Row, Col } from 'reactstrap'

import ProductCard from './ProductCard'

const Products = () => {
    const [products, setProducts] = useState([])

    const loadData = async () => {
        const { data } = await axios.get('/api/products')

        setProducts(data)
    }

    const handleDelete = async productId => {
        try {
            await axios.delete(`/api/products/${productId}`)

            await loadData()
        } catch (error) {
            // TODO: Catch error
        }
    }

    // Load products when mounted
    useEffect(() => {
        loadData()
    }, [])

    return (
        <Row>
            {products.map(product => (
                <Col key={product.id} xs={4}>
                    <ProductCard product={product} onDelete={handleDelete} />
                </Col>
            ))}
        </Row>
    )
}

export default Products
