import React, { useEffect,useState } from 'react'
import{ useParams, useNavigate}from "react-router-dom";



function EditEmployee() {

  const{empid}=useParams();

  //const[empdata,empdatachange]=useState({});

  useEffect(()=>{
       fetch("/employee/"+empid).then((res)=>{
        return res.json();
       }).then((resp)=>{
        idchange(resp.id);
        firstNamechange(resp.firstName);
       }).catch((err)=>{
        console.log(err.message);
       })


  },[]);

  const[id,idchange]=useState("");
  const[firstName,firstNamechange]=useState("");
  const[LastName,LastNamechange]=useState("");
  const[EmailAddress,EmailAddresschange]=useState("");
  const[PhoneNumber,PhoneNumberchange]=useState("");
  const[Gender,Genderchange]=useState(""); 
  const navigate =useNavigate();
  
  
  const handlesubmit=(e)=>{
    e.preventDefault();
    const empdata={id,firstName,LastName,EmailAddress,PhoneNumber,Gender};
   
    fetch("/employee",{
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(empdata)
    }).then((res)=>{
       alert('saved successfully.')
       navigate('/');
    }).catch((err)=>{
      console.log(err.message);
    })
   }
   
         
    


  return (
    <div className="row">
      <div className="offset-lg3 col-lg-6">
        <form className="container" onSubmit={handlesubmit}>
          <div className="card">
            <div className="card-title">
              <h2>Edit Employee</h2>
            </div>
            <div className="card-body">
              <div className="row" >

              <div className="col-lg-12">
                  <div className="form-group">
                    <label>Id</label>
                    <input value={id} disabled="disabled" className="form-control"></input>
                  </div>
                  </div>
                
                <div className="col-lg-12">
                  <div className="form-group">
                    <label key="firstName-label">firstName</label>
                    <input required value={firstName} onChange={e=>firstNamechange(e.target.value)} className="form-control"  key="name-input"></input>
                    
                  </div>
                  </div>

                  <div className="col-lg-12">
                  <div className="form-group">
                    <label key="LastName-label">LastName</label>
                    <input required value={LastName} onChange={e=>LastNamechange(e.target.value)} className="form-control"  key="name-input"></input>
                  </div>
                  </div>

                  <div className="col-lg-12">
                  <div className="form-group">
                    <label key="EmailAddress-label">EmailAddress</label>
                    <input value={EmailAddress} onChange={e=>EmailAddresschange(e.target.value)} className="form-control"   key="name-input"></input>
                  </div>
                  </div>

                  <div className="col-lg-12">
                  <div className="form-group">
                    <label key="PhoneNember-label">PhoneNumber</label>
                    <input value={PhoneNumber} onChange={e=>PhoneNumberchange(e.target.value)} className="form-control"   key="name-input"></input>
                  </div>
                  </div>

                  <div className="col-lg-12">
                  <div className="form-group">
                    <label key="Gender-label">Gender</label>
                    <input value={Gender} onChange={e=>Genderchange(e.target.value)} className="form-control"   key="name-input"></input>
                  </div>
                  </div>

                  <div className="col-lg-12">
                    <div className= "form-group">
                      <button className="btn btn-success" type="submit">Save</button>
                    </div>
                  </div>

                  
              </div>
            </div>
          </div>
        </form>
      </div>

    </div>
  )
}

export default EditEmployee
