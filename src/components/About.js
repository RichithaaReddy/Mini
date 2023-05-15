import React from 'react'

const About = () => {
        const backgroundImageUrl =
        "https://img.freepik.com/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-63452.jpg?w=996&t=st=1684062209~exp=1684062809~hmac=37661f5b0fb9e477edd8adc0bc52cc7fa8b6a79488c6244eec22e56b48c238c6";
        const style = {
            backgroundImage: `url(${backgroundImageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            width: "100%",
          };   
        return (
            <div className='min-h-screen'>
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
                <div style={style}>
            
              {/* <h1 className="text-3xl font-semibold text-center text-black-700 pt-[30px]">
                ABOUT US
              </h1> */}
              <div className="flex">
                
              <div className=" mx-5 p-5  justify-start w-full pt-[140px]">
              <p className='text-6xl mt-[-50px]'>Who we are?</p>
              <p className='pt-[30px]'>While preparing for placements, students will search for various websites to know the test
patterns of a particular company. To put Test patterns in a single place we have come up with a
solution. It is a website that helps the user to prepare for placements.
It has 2 sections – view test patterns, take mock test and two types of users – Admin and Student.
As a student, the user will be able to access test patterns which are posted by the admin. In the
test section, the student will be able to go through test patterns of different companies and take a
mock test. After the test attempt, the user will be given a test report. As an admin, the user will be
able to track the progress of all the students, and offer support to them. They can update the tests
by adding/removing questions.</p>
              </div>
              <div className=" mx-5 p-5 flex justify-end w-full">
              <img src="https://img.freepik.com/free-vector/teamwork-concept-landing-page_52683-21300.jpg?size=626&ext=jpg&uid=R102801938&ga=GA1.1.1420470692.1684061754&semt=ais" alt="placement" className="rounded-2xl shadow-2xl" />
            </div>
            </div>
              </div>
              </div>
              </div>
        
            
       
       
       
       
       
       
       //   <>
        //   <div style={{backgroundImage:`url("https://img.freepik.com/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-63452.jpg?w=996&t=st=1684062209~exp=1684062809~hmac=37661f5b0fb9e477edd8adc0bc52cc7fa8b6a79488c6244eec22e56b48c238c6")`,backgroundSize:'cover',backgroundPosition:'center'}}>
        //   <h1 align="center">About Us</h1>
      
        //   <div style={{margin: "40px",display:"flex", justifyContent:"end" }}>
        //     <img src="https://img.freepik.com/free-vector/teamwork-concept-landing-page_52683-21300.jpg?size=626&ext=jpg&uid=R102801938&ga=GA1.1.1420470692.1684061754&semt=ais" class="img-fluid" alt="No-image" width="320" height="550 style={{alignSelf:'center'}}"></img>
      
            
        //     </div>
      
        //   </div>
        //   </>
          
        );
      
    
}

export default About