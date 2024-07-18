import { useState } from "react";
import HomepageInterface from "../Component/HomePageComponent/HomepageInterface";
import RegistrationForm from "../Component/RegistrationPageComponent/RegistrationForm";

function Homepage() {
  return (
    <>
   <div><HomepageInterface/></div>
   <RegistrationForm/>
    </>
  )
}


export default Homepage;