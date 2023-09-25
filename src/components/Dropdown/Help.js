import React from 'react'

const Help = () => {
    return (
        <div className='helpcontainer'>
            <h3>HELP</h3>
            <div className='helpheader'>
                <i className="fa-solid fa-book" />
                <div className='content'>
                    <h4>Help Center</h4>
                    <p>Learn how to sign up, install and use our products.</p>
                </div>
            </div>
            <div className='Coimmunityheader'>
            <i class="fa fa-users" aria-hidden="true"></i>
                <div className='content'>
                    <h4>Coimmunity Forum</h4>
                    <p>Learn, share and connect with other users.</p>
                </div>
            </div>
        </div>
    )
}

export default Help