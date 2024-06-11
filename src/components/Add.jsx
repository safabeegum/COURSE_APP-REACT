import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Add = () => {
        const[data,setData]=useState(
            {
                "title":"",
                "description":"",
                "date":"",
                "duration":"",
                "venue":"",
                "trainer":""
            }
        )
    
        const inputHandler=(event) => {
            setData({...data,[event.target.name]:event.target.value})
        }
    
        const readValue=() => {
            console.log(data)
            axios.post("http://localhost:8081/add",data).then(
                (response) => {
                    console.log(response.data)
                    if (response.data.status=="success") {
                        alert("Successfully Added")
                    } else {
                        alert("Error")
                    }
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
                        
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">COURSE TITLE</label>
                            <input type="text" className="form-control" name='title' value={data.title} onChange={inputHandler} />
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">DESCRIPTION</label>
                            <input type="text" className="form-control" name='description' value={data.description} onChange={inputHandler}/>
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">DATE</label>
                            <input type="date" name="date" id="" className="form-control" value={data.date} onChange={inputHandler}/>
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">DURATION</label>
                            <input type="text" className="form-control" name='duration' value={data.duration} onChange={inputHandler}/>
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">VENUE</label>
                            <input type="text" className="form-control" name='venue' value={data.venue} onChange={inputHandler}/>
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">TRAINER NAME</label>
                            <input type="text" className="form-control" name='trainer' value={data.trainer} onChange={inputHandler}/>
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValue}>SUCCESS</button>
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-secondary">RESET</button>
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

export default Add