import React, { Component } from 'react'
import Product from '../Product/Product'
import Title from '../Title'
import {storeProducts} from '../../data';
import {ProductConsumer} from '../../context'

export class ProductList extends Component {
    state = {
        products: storeProducts
    }
    render() {
        console.log(this.state.products);

        return (
            // <div>
            //     {/* <h1>Hello from ProductList</h1> */}
            //     <Product />
            // </div>
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="Our" title="Products" />
                        <div className="row">
                            <ProductConsumer>
                                {(value)=>{
                                        return value.products.map(product=>{
                                            return <Product key={product.id} product={product}/>;
                                        })
                                         
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ProductList;
