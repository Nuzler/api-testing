import React, {useEffect,useState} from 'react'

import {Route, useNavigate,Routes,Link,n} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Modal} from 'react-bootstrap';



function Employee() {
    const[backendData,setBackendData] = useState([{}])
    const[RowData,setRowData]=useState([{}])
    const[viewShow,setViewShow]=useState(false)
    const handleViewShow=()=>(setViewShow(true))
    const handleViewClose=()=>(setViewShow(false))
   
     //Navigate to another page
     const navigate=useNavigate();

     const LoadEdit=(id)=>{
      navigate("/employee/edit/"+id);
     }
  
     const Removefunction = (id)=>{
      if(window.confirm('do you want to remove?')){
        fetch("/employee/"+id,{
          method:"DELETE"
        }).then((res)=>{
          alert('Removed Successfully')
          window.location.reload();
        }).catch((err)=>{
          console.log(err.message)
        })
      }
     }
  
    useEffect(()=>{
      fetch("/employee").then(
      response => response.json()
        
      ).then(
        data=>{
          setBackendData(data)
          console.log(data)
        }
      )
    },[])
  

  return (
    <div className= "container">
      <div className="card">
        <div className="card title">
          <h1>Employee list</h1>
        </div>
        <div className="card-body">
          <div className="divbtn">
            <Link to="/employee/add" className="btn btn-success">Add New</Link>
          </div>
          <table className="table table-border">
            <thead className="big-dark text-white">
              <tr>
                <td>id</td>
                <td>firstName</td>
                <td>LastName</td>
                <td>EmailAddress</td>
                <td>PhoneNumber</td>
                <td>Gender</td>
                
              </tr>
            </thead>
            <tbody>
                {backendData.map((item)=>
                <tr>
                  <td>{item.id}</td>
                  <td>{item.firstName}</td>
                  <td>{item.LastName}</td>
                  <td>{item.EmailAddress}</td>
                  <td>{item.PhoneNumber}</td>
                  <td>{item.Gender}</td>
                  
                  <td style={{minWidth:190}}>
                    <a onClick={()=>{handleViewShow(setRowData(item))}}className="btn btn-primary">view</a>
                    <a onClick={()=>{LoadEdit(item.id)}}className="btn btn-success">Edit</a>
                    <a onClick={()=>{Removefunction(item.id)}}className='btn btn-danger'>Delete</a>
                  </td>
                </tr>
                )}
              </tbody>
          </table>
        </div>
      </div>
      <div className='model-box-view'>
          <Modal
              show={viewShow}
              onHide={handleViewClose}
              backdrop="static"
              keyboard= {false}
              >
                <Modal.Header closeButton>
                  <Modal.Title>View Employee Data</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div>
                    <div className='form-group'>
                      <input type ="text" className='form-control' value={RowData.firstName}readonly/>
                    </div>
                    <div className='form-group mt-3'>
                      <input type ="text" className='form-control' value={RowData.LastName}readonly/>
                    </div>
                    <div className='form-group mt-3'>
                      <input type ="text" className='form-control' value={RowData.EmailAddress}readonly/>
                    </div>
                    <div className='form-group mt-3'>
                      <input type ="text" className='form-control' value={RowData.PhoneNumber}readonly/>
                    </div>
                    <div className='form-group mt-3'>
                      <input type ="text" className='form-control' value={RowData.Gender}readonly/>
                    </div>
                    <div className='form-group mt-3'>
                      <input type ="text" className='form-control' value={RowData.id}readonly/>
                    </div>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button varient='secondary' onClick={handleViewClose}>Close</Button>
                </Modal.Footer>
              </Modal>
        </div>
        
    </div>
  );
  
}

export default Employee;