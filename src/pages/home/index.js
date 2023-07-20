import React, { useState } from 'react'
import Header from '../../Components/Common/header';
import TabOption from '../../Components/Common/tabOption';
import Footer from '../../Components/Common/footer';
import Delivery from '../../Components/delivery';
import DiningOut from '../../Components/dining out';
import Nightlife from '../../Components/Nightlife';

const HomePage = () => {
    const [activetab,setActivetab]= useState("Delivery")
  return (
    <div>
     <Header/>
     <TabOption activetab={activetab} setActivetab= {setActivetab}/>
     {getCorrectScreen(activetab)}
     <Footer/>
    </div>
  )
}
const getCorrectScreen=(tab)=>{
    switch(tab){
        case "delivery":
            return <Delivery/>
        case "Dining Out":
            return <DiningOut/>
        case "Nightlife":
            return <Nightlife/>
            default:
                return <Delivery/>
    }
}

export default HomePage;
