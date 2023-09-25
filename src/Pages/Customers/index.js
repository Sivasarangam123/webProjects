import { Table, Typography,Space, Avatar } from 'antd'
import React, { useEffect, useState } from 'react'
import { getCustomers, } from '../../API';
import './index.css'
import { Link, Outlet } from 'react-router-dom';
function Customers() {
  const [loading,setLoading]=useState(false);
  const [datasource,setDatasource]=useState([])
  useEffect(()=>{
    setLoading(true)
    getCustomers().then(res=>{setDatasource(res.users)})
    setLoading(false)
  },[])
  return (
    <Space size={20} direction='vertical'>
     <Typography.Title level={4}>Customers</Typography.Title>
     <Table 
     loading ={loading}
     columns={[
       {
        title:'Photo',
        dataIndex:'image',
        render: (link)=>{
          return <Avatar src={link}/>;
        }
      },
      {
        title:'FirstName',
        dataIndex:'firstName'
      },
      {
        title:'LastName',
        dataIndex:'lastName',
        render: (value) =><span>{value}</span>
      },
      {
        title:'Email',
        dataIndex:'email',
       
      },
      {
        title:'Phone',
        dataIndex:'phone'
      },
     
      {
        title:'Address',
        dataIndex:'address',
        render: (address)=>{
          return <span>{address.address} , {address.city}</span>
        }
      }
     
     ]}
     dataSource={datasource}
     pagination ={{pageSize:5}}
     >

     </Table>
     <ul className='customerbuttons'>
      <li className='customerAdd'><Link to={'add'}>add</Link></li>
      <li  className='customerAdd'><Link to={'sub'}>Sub</Link></li>
     </ul>
     <Outlet/>
    </Space>
  )
}

export default  Customers