import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Search = () => {
    const[data,setData]=useState(
        {
            "title":"",
        }
    )

    const inputHandler=(event) => {
        setData({...data,[event.target.name]:event.target.value})
    }

    const readValue=() => {
        console.log(data)
        axios.post("http://localhost:8081/search",data).then(
            (response) => {
                console.log(response.data)
            }
        ).catch().finally()
    }

  return (
    <div>
        <Navbar/>
        <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <br></br>
                    <div class="bg-primary p-3">
                        <div class="card">
                        <div class="card-body">
                            <div className="row g-3">

                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12">
                                    <label htmlFor="" className="form-label">COURSE TITLE</label>
                                    <input type="text" className="form-control" name='title' value={data.title} onChange={inputHandler} />
                                </div>
                                
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12">
                                    <button className="btn btn-warning" onClick={readValue}>SEARCH</button>
                                </div>

                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search