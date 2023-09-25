import React, { useEffect, useState } from 'react'
import '../../App.css'
import { Menu } from 'antd'
import { AppstoreOutlined, ShopOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons'
import { useLocation, useNavigate } from 'react-router-dom'
function SideMenu() {
  const location = useLocation()
  const [selectedKeys ,setSelectedKeys]= useState('/')
  useEffect(()=>{
      const pathName = location.pathname
      setSelectedKeys(pathName)
  },[location.pathname])
    const navigate = useNavigate();
  return (
    <div className='SideMenu'>
      <Menu className='SideMenuVertical'
      mode='vertical'
      onClick={(items)=>{
        navigate(items.key)
      }}
      selectedKeys={[selectedKeys]}
       items={[
        {
            label:'Dashboard',
            icon :<AppstoreOutlined/>,
            key:'/dashboard'
        },
        {
            label:'Inventory',
            icon :<ShopOutlined/>,
            key:'/inventory'
        },
        {
            label:'Orders',
            icon :<ShoppingCartOutlined/>,
            key:'/orders'
        },
        {
            label:'Customers',
            icon :<UserOutlined/>,
            key:'/customers'
        },
      ]}></Menu>
    </div>
  )
}

export default SideMenu
