import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectedProduct } from '../redux/actions/productActions';
import './Productde.css'

function ProductDetail() {
  const product = useSelector((state) => state.product);
  const { productId } = useParams();

  const dispatch = useDispatch();
  console.log(product);
  const fetchproDe = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch(err => {
        console.log(err);
      });
    dispatch(selectedProduct(response.data));

  };
  useEffect(() => {
    if (productId && productId !== "") fetchproDe();
  }, [productId])

  return (
    <div className='detail'>
      <img className='imgde' src={product.image} alt={product.title} />
      <div className='info'>
        <span className="titlede">{product.title}</span>

        <div className="pricede"><h3 className="gia">{product.price}$</h3></div>
        <div className="rate">
          
          
        </div>
        <div className="typede"><p className="loai">#{product.category}</p></div>
        <div className="des"><p className="dess">#{product.description}</p></div>
        <div className="nut">
          <button className="button"><p className='buttons'>Add to Card</p></button>
        </div>
      </div>
    </div>
  )

}
export default ProductDetail
