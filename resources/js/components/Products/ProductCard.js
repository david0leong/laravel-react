import React from 'react'
import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardText,
    Button,
} from 'reactstrap'

const ProductCard = ({ product, onDelete }) => {
    const handleDelete = () => {
        onDelete(product.id)
    }

    return (
        <Card className="mb-4">
            <CardImg
                top
                width="100%"
                src="https://media2.s-nbcnews.com/i/newscms/2019_17/1429855/banana-main-fruit-peel_a7a8c6ce60a36207efcc44ab86788d4f.jpg"
                alt="Card image cap"
            />
            <CardBody>
                <CardTitle>{product.name}</CardTitle>
                <CardText>{product.description}</CardText>
            </CardBody>

            <CardBody className="d-flex justify-content-between">
                <CardText>${product.price}</CardText>

                <Button color="danger" onClick={handleDelete}>
                    Delete
                </Button>
            </CardBody>
        </Card>
    )
}

export default ProductCard
