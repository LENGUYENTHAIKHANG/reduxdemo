import React from 'react'
import { useSelector } from "react-redux"
import { Link } from 'react-router-dom';
import './Product.css'

function ProductComponents() {
    const products = useSelector((state) => state.allProduct.products);
    console.log(products);

    const renderList = products.map((product) => {
        const { id, title, category, image, price } = product;
        return (

            <div className='bodys' key={id}>
                <Link to={`/product/${id}`}>
                    <div className="ui link cards">

                        <div className="card">
                            <div className='imagea'>

                                <img className="images" src={image} alt={title} />
                            </div>
                            <div className="content">
                                <div className="header">{title}</div>
                                <div className="meta price">{price}$</div>
                                <div className="mate">{category}</div>
                            </div>
                        </div>

                    </div>
                </Link>
            </div>

        )
    })




    return (
        <div className="list">{renderList}</div>
    )
}

export default ProductComponents
