import React from 'react'
import Image from 'next/image'
import "@/css/home/fourth_home.css"
const Profile = ({profilePic, fullName, des}) => {
  return (
   <>
   
 <div className="container" style={{
display : "flex",
flexDirection : "column",
alignItems : "center",
gap : "10px",
backgroundColor : "#82505f",
width: "13vw",
height: "35vh",
padding: "1rem",
borderRadius : "20px",


 }}>
<div className={"profileImage"}>
<Image
alt=""
src={profilePic}
fill
style={{"borderRadius":"50%"}}
/>
</div>
<h4>{fullName}</h4>

<p style={{
    fontSize: "10px"
}}>
{des} 
</p>



 </div>
   
   
   </>
  )
}

export default Profile