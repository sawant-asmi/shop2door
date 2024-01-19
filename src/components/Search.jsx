import React, { useState } from 'react';
import SearchData from './SearchData';
import { Link } from "react-router-dom";

const Search = () => {
    const [filter, setFilter] = useState('');

    const searchText = (event) => {
        setFilter(event.target.value);
    }
    let dataSearch = SearchData.cardData.filter(item => {
        return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
            )
    })
    return (
        <section className='py-4 container'>
            <div className='row justify-content-center'>

                <div className='col-12 mb-5'>
                    <div className='mb-3 col-4 mx-auto text-center'>
                        <label className='form-label h2 font-bold tracking-wide'>Search</label>
                        <input 
                            type="text" 
                            className='from-control'
                            value={filter}
                            onChange={searchText.bind(this)}
                        />
                    </div>
                </div>

                {dataSearch.map((item, index) => {
                    return(
                        <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>
                            <div className='card p-20 overflow-hidden h-100 w-100 shadow-lg justify-between'>
                            <Link to = {"/"} className="hover:shadow-lg transition-all ease-in-out duration-100"><img src={item.img} className='card-img-top' /></Link>
                                <br></br>
                                <div className='card-body'>
                                    <h5 className='card-title font-bold tracking-wide'>{item.title}</h5>
                                    <h5 className='card-text font-bold tracking-wide'>{item.city}</h5>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </section>
  );
};

export default Search;