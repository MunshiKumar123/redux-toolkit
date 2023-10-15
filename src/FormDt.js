import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts, productPost, FormData } from './store/states/product/Product'


function FormDt() {
    const dispatch = useDispatch();
    const product = useSelector((state) => state.product);
    const handleChange = (evt) => {
        const { name, value } = evt.target;
        dispatch(FormData({ prop: name, value: value }))
    }
    const postData = () => {
        let data = {
            noOfPlants: product.noOfPlants,
            noOfOffices: product.noOfOffices,
            InNoOfPlants: product.InNoOfPlants,
            InNoOfOffices: product.InNoOfOffices,
        }
        if (data.noOfPlants) {
            dispatch(productPost(data)).then((resp) => {
                getApi()
            }).catch((error) => {
                console.log(error);
            })
        } else {
            alert('please fill in the value');
        }
    }
    const getApi = () => {
        dispatch(fetchAllProducts())
    }
    useEffect(() => {
        getApi()
    }, [])

    return (
        <div>
            <main>
                <section className="container p-5">
                    <h3>Form Data</h3>
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12">
                            <input
                                type="number"
                                className="form-control"
                                name='noOfPlants'
                                onChange={handleChange}

                            />
                            <input
                                type="number"
                                className="form-control"
                                name="noOfOffices"
                                onChange={handleChange}

                            />
                            <input
                                type="number"
                                className="form-control"
                                name='InNoOfPlants'
                                onChange={handleChange}

                            />
                            <input
                                type="number"
                                className="form-control"
                                name="InNoOfOffices"
                                onChange={handleChange}

                            />
                            <button onClick={postData}> data save </button>
                        </div>
                    </div>

                </section>
            </main>
        </div>
    )
}

export default FormDt
