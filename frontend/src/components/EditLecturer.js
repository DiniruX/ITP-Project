import React, { Component } from 'react'
import axios from 'axios'


export default class EditLecturer extends Component {

    constructor(props){
        super(props);
        this.state={
            lecId:"",
            lecFname:"",
            lecLname:"",
            nic:"",
            dob:"",
            email:"",
            cNumber:"",
            address:"",
            summary:"",
            username:"",
            password:"",
            aQualification:"",
            Rmembership:"",
            Rdate:""
        }
        this.handleInputChange=this.handleInputChange.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
    }


    handleInputChange = (e)=>{
        const{name, value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit = (e)=>{
        
        e.preventDefault();

        const id = this.props.match.params.id;
        const {lecId,lecFname,lecLname,nic,dob,email,cNumber,address,username,password,summary,aQualification,Rmembership,Rdate} = this.state;

        const data ={
            lecId:lecId,
            lecFname:lecFname,
            lecLname:lecLname,
            nic:nic,
            dob:dob,
            email:email,
            cNumber:cNumber,
            address:address,
            username:username,
            password:password,
            summary:summary,
            aQualification:aQualification,
            Rmembership:Rmembership,
            Rdate:Rdate
        }



        console.log(data)

        axios.put(`/lecturer/update/${id}`, data).then((res)=>{
            if(res.data.success){
                alert("Details Updated Succesfully!")
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

        axios.get(`/lecturer/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    lecId:res.data.lecturer.lecId,
                    lecFname:res.data.lecturer.lecFname,
                    lecLname:res.data.lecturer.lecLname,
                    nic:res.data.lecturer.nic,
                    dob:res.data.lecturer.dob,
                    email:res.data.lecturer.email,
                    cNumber:res.data.lecturer.cNumber,
                    address:res.data.lecturer.address,
                    username:res.data.lecturer.username,
                    password:res.data.lecturer.password,
                    summary:res.data.lecturer.summary,
                    aQualification:res.data.lecturer.aQualification,
                    Rmembership:res.data.lecturer.Rmembership,
                    Rdate:res.data.lecturer.Rdate
                });

                console.log(this.state.lecturer);
            }
        });
    }
    
    render() {
        return (
            <div className ="container">
  <div  className ="addLecturerheader">              
<center><h3><b>Update Lecturer Details</b></h3></center>
</div>
<br></br>
               
            <form className="needs-validation" noValidate>
            
    <div className = "container"></div>

    <div className="mb-3">
<label className="form-label"><b>Lecturer ID</b></label>
<textarea class="textField" name="lecId" cols="25" rows="2" value={this.state.lecId} onChange={this.handleInputChange}></textarea>
</div>

<div className="mb-3">
<label className="form-label"><b>First Name</b></label>
<textarea class="textField" name="lecFname" cols="25" rows="2" value={this.state.lecFname} onChange={this.handleInputChange}></textarea>
</div>


<div className="mb-3">
<label  className="form-label"><b>Last Name</b></label>
<textarea class="textField" name="lecLname" cols="25" rows="2" value={this.state.lecLname} onChange={this.handleInputChange}></textarea>
</div>

<div className="mb-3">
<label  className="form-label"><b>NIC number</b></label>
<textarea class="textField" name="nic" cols="25" rows="2" value={this.state.nic} onChange={this.handleInputChange}></textarea>
</div>

<div className="mb-3">
<label  className="form-label"><b>Date of birth</b></label>
<input type="date" className="form-control" placeholder ="D/M/Y"name="dob" value={this.state.dob} onChange={this.handleInputChange}/>
</div>

<div className="mb-3">
<label  className="form-label"><b>E-mail</b></label>
<textarea class="textField" name="email" cols="25" rows="2" value={this.state.email} onChange={this.handleInputChange}></textarea>
</div>

<div className="mb-3">
<label  className="form-label"><b>Contact number</b></label>
<textarea class="textField" name="cNumber" cols="25" rows="2" value={this.state.cNumber} onChange={this.handleInputChange}></textarea>
</div>

<div className="mb-3">
<label  className="form-label"><b>Address</b></label>
<textarea class="textField" name="address" cols="25" rows="2" value={this.state.address} onChange={this.handleInputChange}></textarea>
</div>

<div className="mb-3">
<label className="form-label"><b>Username</b></label>
<textarea class="textField" name="username" cols="25" rows="2" value={this.state.username} onChange={this.handleInputChange}></textarea>
</div>

<div className="mb-3">
<label className="form-label"><b>Password</b></label>
<textarea class="textField" name="password" cols="25" rows="2" value={this.state.password} onChange={this.handleInputChange}></textarea>
</div>


<div className="mb-3">
<label  className="form-label"><b>Career Summary</b></label>
<textarea class="textField" name="summary" cols="25" rows="5" value={this.state.summary} onChange={this.handleInputChange}></textarea>
</div>


<div className="mb-3">
<label  className="form-label"><b>Acedemic qualifications</b></label>
<textarea class="textField" name="aQualification" cols="25" rows="5" value={this.state.aQualification} onChange={this.handleInputChange}></textarea>
</div>


<div className ="alpex-003"></div>
<div className="mb-3">
<label className="form-label"><b>Research interests and memberships</b></label>
<textarea class="textField" name="Rmembership" cols="25" rows="5" value={this.state.Rmembership} onChange={this.handleInputChange}></textarea>
</div>

<div className="mb-3">
<label  className="form-label"><b>Registration Date</b></label>
<input type="date" className="form-control" name="Rdate" value={this.state.Rdate} onChange={this.handleInputChange}/>
</div>


<center><button type="submit" className="btn btn-primary" onClick={this.onSubmit}>Update</button></center>
<br></br>
</form>

</div>
        )
    }
}