import React, { Component } from 'react'
import lecturerProfile from '../images/profile1.png'

export default class registrationAdd extends Component {
    render() {
        return (
            <div style={{
                width: '1000px',
                border: '1px solid black',
                marginRight:'100px',
                marginLeft:'450px'
                }}>
                    <div className = "container" >
                    <br></br>
       <center><h3><b>Lectuer Profile</b></h3>

       <a href=''><img src={lecturerProfile} style={{width:200 , marginTop:'40px', marginLeft:'40px', marginRight:'40px'}}></img></a><br/>
       <p>Lecturer ID
LEC5764 
First Name
Nethmi
Last Name
Prabodhika
NIC number
987165541V
Date Of Birth
1998-08-07
E-mail
prabodhikanethmi@gmail.com
Contact Number
0712234567
Address
No:45, galle road, Matara
Username
LU757631
Password
R70275122
Career Summary
Passionate analyst with a strong background in management and communication.
Acedemic qualifications
Bachelor's degree in Marketing Management
Research interests and memberships
Internet Security Engineering Mobile
Registration Date
2021-10-03</p>
       </center>

                    </div>
                
            </div>
        )
    }
}
