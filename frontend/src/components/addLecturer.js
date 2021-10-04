import React, { Component } from 'react'
import axios from 'axios'
import './style.css'


export default class addLecturer extends Component {
    
    constructor(props){
        super(props);
        this.state={
            lecId:"LEC"+this.rand(9999, 99999),
            lecFname:"",
            lecLname:"",
            nic:"",
            dob:"",
            email:"",
            cNumber:"",
            address:"",
            username:"LU"+this.rand(99999, 999999),
            password:"R"+this.rand(9999999,99999999),
            summary:"",
            aQualification:"",
            Rmembership:"",
            Rdate:""
        }
    }

    

handleInputChange =(e) =>{
    const {name,value} =e.target;



    this.setState({
        ...this.state,
        [name]:value
    })
}
onsubmit = (e) =>{
    e.preventDefault();
    const {lecId,lecFname,lecLname,nic,dob,email,cNumber,address,username,password,summary,aQualification,Rmembership,Rdate} = this.state;
    const data ={
        lecId : lecId,
        lecFname:lecFname,
        lecLname:lecLname,
        nic:nic,
        dob:dob,
        email:email,
        cNumber:cNumber,
        address:address,
        username :username,
        password :password,
        summary:summary,
        aQualification:aQualification,
        Rmembership:Rmembership,
        Rdate:Rdate
    }
    console.log(data)
    axios.post("/lecturer/save",data).then((res) =>{
        if(res.data.success){
            alert("New Lecturer added Succesfully!")
            this.setState({
            lecId:"",   
            lecFname:"",
            lecLname:"",
            nic:"",
            dob:"",
            email:"",
            cNumber:"",
            address:"",
            username:"",
            password:"",
            summary:"",
            aQualification:"",
            Rmembership:"",
            Rdate:""
            })
        }
    })
}

componentDidMount(){
    const id = this.props.match.params.id;

    axios.get(`/reviewer/${id}`).then((res)=>{
        if(res.data.success){
            this.setState({
                
                lecFname:res.data.post.lecFname,
                lecLname:res.data.post.lecLname,
                nic:res.data.post.nic,
                dob:res.data.post.dob,
                email:res.data.post.email,
                cNumber:res.data.post.cNumber,
                address:res.data.post.address,
                Rdate:res.data.post.Rdate
            });

            console.log(this.state.post);
        }
    });
}

rand=(min, max)=>{
    return Math.floor(Math.random()*max-min+1)+min;
  }


render(){
    return (
        <div 
        style={{
         width: '1500px',
         border: '1px solid black',
         marginRight:'250px',
         marginLeft:'200px'
         }}>
       <div className = "container" >
           <br></br>
       <center><h3><b>Add New Lecturer</b></h3></center>
          
       <form className="needs-validation" noValidate>

<div className="col-md-12">
<label className="form-label"><b>Lecturer ID</b></label>
<input style={{color:'red',fontWeight:'bold'}}className="form-control" name="lecId" value={this.state.lecId} onChange={this.handleInputChange}></input>
</div><br/>

<div className="col-md-12">
<label className="form-label"><b>First Name</b></label>
<input className="form-control" name="lecFname" value={this.state.lecFname} onChange={this.handleInputChange}></input>
</div><br/>


<div className="col-md-12">
<label  className="form-label"><b>Last Name</b></label>
<input className="form-control" name="lecLname" value={this.state.lecLname} onChange={this.handleInputChange}></input>
</div><br/>

<div className="col-md-12">
<label  className="form-label"><b>NIC number</b></label>
<input className="form-control" name="nic" value={this.state.nic} onChange={this.handleInputChange}></input>
</div><br/>

<div className="col-md-12">
<label  className="form-label"><b>Date of birth</b></label>
<input  className="form-control" name="dob" value={this.state.dob} onChange={this.handleInputChange}/>
</div><br/>

<div className="col-md-12">
<label  className="form-label"><b>E-mail</b></label>
<input className="form-control" name="email" value={this.state.email} onChange={this.handleInputChange}></input>
</div><br/>

<div className="col-md-12">
<label  className="form-label"><b>Contact number</b></label>
<input className="form-control" name="cNumber" value={this.state.cNumber} onChange={this.handleInputChange}></input>
</div><br/>

<div className="col-md-12">
<label  className="form-label"><b>Address</b></label>
<input className="form-control" name="address" value={this.state.address} onChange={this.handleInputChange}></input>
</div><br/>

<div className="col-md-12">
<label className="form-label"><b>Username</b></label>
<input style={{color:'red',fontWeight:'bold'}} className="form-control" name="username" value={this.state.username} onChange={this.handleInputChange}></input>
</div><br/>

<div className="col-md-12">
<label className="form-label"><b>Password</b></label>
<input style={{color:'red',fontWeight:'bold'}} className="form-control" name="password" value={this.state.password} onChange={this.handleInputChange}></input>
</div><br/>


<div className="col-md-12">
<label  className="form-label"><b>Career Summary</b></label>
<textarea className="form-control" name="summary" cols="25" rows="5" value={this.state.summary} onChange={this.handleInputChange}></textarea>
</div><br/>


<div className="col-md-12">
<label  className="form-label"><b>Acedemic qualifications</b></label>
<textarea className="form-control" name="aQualification" cols="25" rows="5" value={this.state.aQualification} onChange={this.handleInputChange}></textarea>
</div><br/>


<div className="col-md-12">
<label className="form-label"><b>Research interests and memberships</b></label>
<textarea className="form-control" name="Rmembership" cols="25" rows="5" value={this.state.Rmembership} onChange={this.handleInputChange}></textarea>
</div><br/>

<div className="col-md-12">
<label  className="form-label"><b>Registration Date</b></label>
<input className="form-control" name="Rdate" value={this.state.Rdate} onChange={this.handleInputChange}/>
</div><br/>


<center>
    <button type="submit" className="btn btn-primary" onClick={this.onsubmit}>Save Details</button>
</center>
<br></br>
</form>
</div>
</div>
)
}
}