import React from 'react'

function Sidebar() {
  return (
    <div className='m-3 position-fixed'>
    <div className="d-flex flex-column gap-4 mr-5">
         <img src="/Instagram-text-logo.png" alt="Text-logo" className='text-logo' />
         <div><i className="bi bi-house-door-fill"></i> Home </div>
         <div><i className="bi bi-search"></i> Search</div>
         <div><i className="bi bi-compass-fill"></i>Explore</div>
         <div><i className="bi bi-play-btn-fill"></i> Reels</div>
         <div><i className="bi bi-chat-left-fill"></i> Messages</div>
         <div> <i className="bi bi-suit-heart-fill"></i> Notification</div>
         <div> <i className="bi bi-file-plus"></i>Create</div>
         <div> <i className="bi bi-person-fill"></i> Profile</div>
    </div>
    <div className='position-fixed bottom-0 mb-3'>
        <i className="bi bi-list"></i> 
        More</div>
    </div>
  )
}

export default Sidebar