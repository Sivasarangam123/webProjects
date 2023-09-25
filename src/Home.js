import React from 'react'
import './App.css';
import AppHeader from "./components/AppHeader/Index";
import SideMenu from "./components/SideMenu/Index";
import PageContent from "./components/PageContent/Index";
import AppFooter from "./components/AppFooter/Index";
function Home() {
  return (
    <div className='App'>
       <AppHeader/>
     <div className="SideMenuandPageContent">
      <SideMenu></SideMenu>
      <PageContent></PageContent>
     </div>
     <AppFooter/>
    </div>
  )
}

export default Home
