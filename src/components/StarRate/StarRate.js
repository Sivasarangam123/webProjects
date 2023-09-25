import { StarFilled, StarOutlined ,LeftOutlined , PlusCircleOutlined } from '@ant-design/icons'

import React from 'react'
import '../../App.css'

function StarRate() {
  return (
    <div>
      <div className='cardbg'>
             <div className='card'>
                         <div className='card1'>
                              <div className='toprow'>
                            <LeftOutlined style={{color:'white' , marginLeft:'10px' ,marginTop:'20px',fontSize:'25px' }}/>
                            <p style={{color:'white',marginTop:'20px',fontSize:'20px'}}>Reviews</p>
                            <PlusCircleOutlined style={{color:'white' ,marginRight:'10px',marginTop:'20px',fontSize:'25px'}}/>
                            </div>
                         </div>
                         <div className='card2'>
                           < div className='bigstar'>
                         <div class="star">4.5</div>
                         <h4 style={{fontSize:'13px'}}>Average  Rating</h4>
                         <p>Based on 23.980 ratings</p>
                         </div>
    <div className='progressbar1'>
                         <div className='progressbar'>
                          
                         <div class="side">
    <div className='left'>5 star</div>
  </div>
  <div class="middle">
    <div class="bar-container">
      <div class="bar-5"></div>
    </div>
  </div>
  <div class="side right">
    <div>14.764</div>
  </div>
                         
                         </div>
                         <div className='progressbar'>
                          
                         <div class="side">
    <div className='left'>4 star</div>
  </div>
  <div class="middle">
    <div class="bar-container">
      <div class="bar-4"></div>
    </div>
  </div>
  <div class="side right">
    <div>9480</div>
  </div>
  </div>
  <div className='progressbar'>
                          
                          <div class="side">
     <div className='left'>3 star</div>
   </div>
   <div class="middle">
     <div class="bar-container">
       <div class="bar-3"></div>
     </div>
   </div>
   <div class="side right">
     <div>1240</div>
   </div>
                          
                          </div>
                          <div className='progressbar'>
                          
                          <div class="side">
     <div className='left'>2 star</div>
   </div>
   <div class="middle">
     <div class="bar-container">
       <div class="bar-2"></div>
     </div>
   </div>
   <div class="side right">
     <div>340</div>
   </div>
                          
                          </div>
                          <div className='progressbar'>
                          
                          <div class="side">
     <div className='left'>1 star</div>
   </div>
   <div class="middle">
     <div class="bar-container">
       <div class="bar-1"></div>
     </div>
   </div>
   <div class="side right">
     <div>170</div>
   </div>
                          
                          </div>
                         </div>
                         
  
                         </div>
                         <div className='card3'>
                               <div>
                                    <div className='details'>
                                       <div>
                                          <img src={'https://th.bing.com/th/id/R.ae87891b3dde7b28712b75d14342f1a5?rik=2ZT%2baXLkZYcxWg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-wallpaper-27.jpg&ehk=jIVFSOxLN%2fQKs4hEfZHNWAeXoeXkeEXooP%2fTy9Vwkek%3d&risl=&pid=ImgRaw&r=0'} alt='' className='sidebarFriendImg'/>
                                       </div> 
                                       <div className='sidebarFriend'>
                                         
                                          <p className='sidebarFriendName' >Barbara hines</p>
                                          <span class="heading">
                                                 <span class="fa fa-star checked"></span>
                                                 <span class="fa fa-star checked"></span>
                                                 <span class="fa fa-star checked"></span>
                                                 <span class="fa fa-star checked"></span>
                                                 <span class="fa fa-star lost"></span>
                                                 </span>
                                           {/* <Rate  defaultValue={3}/> */}
                                          <p >Ac neque quam, eiusbf StarFilled' is defined but never used 'StarOutlined' is defined but never used </p>
                                         
                                       </div>  
                                       
                                    </div>
                                    <hr className='sidebarHr'/>
                                    <div className='details'>
                                       <div>
                                          <img src={'https://th.bing.com/th/id/R.ae87891b3dde7b28712b75d14342f1a5?rik=2ZT%2baXLkZYcxWg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-wallpaper-27.jpg&ehk=jIVFSOxLN%2fQKs4hEfZHNWAeXoeXkeEXooP%2fTy9Vwkek%3d&risl=&pid=ImgRaw&r=0'} alt='' className='sidebarFriendImg'/>
                                       </div> 
                                       <div className='sidebarFriend'>
                                         
                                          <p className='sidebarFriendName' >Troy I. Kyles</p>
                                          <span class="heading">
                                                 <span class="fa fa-star checked"></span>
                                                 <span class="fa fa-star checked"></span>
                                                 <span class="fa fa-star checked"></span>
                                                 <span class="fa fa-star checked"></span>
                                                 <span class="fa fa-star lost"></span>
                                                 </span>
                                           {/* <Rate  defaultValue={3}/> */}
                                          <p >Et tempus ullamcorper mi fringilla donec diam.  </p>
                                         
                                       </div>  
                                       
                                    </div>
                                    <hr className='sidebarHr'/>
                                    <div className='details'>
                                       <div>
                                          <img src={'https://th.bing.com/th/id/R.ae87891b3dde7b28712b75d14342f1a5?rik=2ZT%2baXLkZYcxWg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-wallpaper-27.jpg&ehk=jIVFSOxLN%2fQKs4hEfZHNWAeXoeXkeEXooP%2fTy9Vwkek%3d&risl=&pid=ImgRaw&r=0'} alt='' className='sidebarFriendImg'/>
                                       </div> 
                                       <div className='sidebarFriend'>
                                         
                                          <p className='sidebarFriendName' >Nancy Shepardson</p>
                                          <span class="heading">
                                                 <span class="fa fa-star checked"></span>
                                                 <span class="fa fa-star checked"></span>
                                                 <span class="fa fa-star checked"></span>
                                                 <span class="fa fa-star checked"></span>
                                                 <span class="fa fa-star lost"></span>
                                                 </span>
                                           {/* <Rate  defaultValue={3}/> */}
                                          <p >iAculis pedhe mollis, ipsumelit. Aliquam quam lorem maecenas fusce, justo in et a qusque cursus et, leo risus magnis sem aliquet maecenas a.</p>
                                         
                                       </div>  
                                       
                                    </div>
                                    
                                </div>
                                
                         </div>
              </div>
       </div>
       
     </div>
    
  )
}

export default StarRate;

