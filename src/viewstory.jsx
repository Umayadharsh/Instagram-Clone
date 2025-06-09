import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './index.css';

function ViewStory() {
  const { id} = useParams();
  const [story, setStory] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/api/Story/${id}`)
      .then(res => res.json())
      .then(data => setStory(data))
      .catch(err => console.log(err));
  }, [id]);

  console.log(story)

  return (
    <div className='d-flex justify-content-center'>
      {story ? (
        <div >
         <Link to={`/api/Story/${Number(id)-1}`}><i class="bi bi-arrow-left-circle-fill"></i></Link>
          <img className='sto' src={story.image} alt='s'/>
          <Link to={`/api/Story/${Number(id)+1}`}><i class="bi bi-arrow-right-circle-fill"></i></Link>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default ViewStory;
