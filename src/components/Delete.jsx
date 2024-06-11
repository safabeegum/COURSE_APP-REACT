import React from 'react'
import Navbar from './Navbar'

const Delete = () => {
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
                                    <input type="text" className="form-control"/>
                                </div>
                                
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12">
                                    <button className="btn btn-danger" >SEARCH</button>
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

export default Delete