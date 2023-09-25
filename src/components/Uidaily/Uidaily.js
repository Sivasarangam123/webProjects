import React from 'react'
import './Uidaily.css';
import { Divider } from 'antd';

function Uidaily() {
  return (
    <div className='uibackground'>
        <div className='topcircle'></div>
        <div className='topdowncircle'></div>
        <div className='downtopcircle'></div>
         <div className='downcircle'></div>
        <div className='circle1'>
        <div className='circle2'>
            <div className='heading'>The Barebones Of An Accordian</div>
            <p className='boxpara'>Highlithing important details of a section and revealing more details upon a topor click, if necessary. </p>
            <div className='whenused'>
                <div style={{fontSize:'small',color:'rgb(120, 120, 193)'}}>when and how it should be used?</div>
                <div style={{width:'25px',height:'25px',borderRadius:'50%',border:'1px solid #e8f0f7'}}>
                <div style={{fontSize:'medium',marginLeft:'7px' , marginTop:'3px'}}>+</div>
                </div>
            </div>
            <Divider style={{width:'350px'}}/>
            <div className='what'>
                <div style={{fontSize:'14px',fontWeight:500}}>what's an accotdian?</div>
                <div style={{width:'25px',height:'25px',borderRadius:'50%',border:'1px solid #e8f0f7'}}>
                <div style={{fontSize:'medium',marginLeft:'9px' , marginTop:'2px'}}>-</div>
                </div>
            </div>
            <p style={{width:'320px',fontSize:'12px' , fontWeight:500 , marginTop:'15px'}}>The accordian is a graphical control element comprising a verticaly stacked list of items , such as lables or thumbnails. An according is similar in purpose to a tabbed interface, a list of items where exactly one item is expended into a panel</p>
            <div className='readmore'><div style={{marginTop:'5px',marginLeft:'29px' ,fontSize:'11px',fontWeight:800}}>Read more</div></div>
            <Divider style={{width:'350px'}}/>
            <div className='whatif'>
                <div style={{fontSize:'small',color:'rgb(120, 120, 193)'}}>What if the user clicks on a collapse card while another card is open?</div>
                <div style={{width:'34px',height:'25px',borderRadius:'50%',border:'1px solid #e8f0f7'}}>
                <div style={{fontSize:'medium',marginLeft:'8px' , marginTop:'3px'}}>+</div>
                </div>
            </div>
            
            <Divider style={{width:'350px'}}/>
            <div className='whatif'>
                <div style={{fontSize:'small',color:'rgb(120, 120, 193)'}}>How to choose an icon to indicate expansion?</div>
                <div style={{width:'25px',height:'25px',borderRadius:'50%',border:'1px solid #e8f0f7'}}>
                <div style={{fontSize:'medium',marginLeft:'7px' , marginTop:'3px'}}>+</div>
                </div>
            </div>
           
        </div>
        
        </div>
    </div>
  )
}

export default Uidaily
