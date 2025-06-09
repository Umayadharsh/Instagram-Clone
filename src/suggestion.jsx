import React, { useState, useEffect } from 'react';
import './index.css';

function Suggestion() {
  const [profile, setProfile] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetch('/api/profile')
      .then((res) => res.json())
      .then((data) => setProfile(data))
      .catch((err) => console.error(err));

    fetch('/api/suggestions')
      .then((res) => res.json())
      .then((data) => setSuggestions(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="suggest w-70 m-4">
      {profile ? (
        <div className="d-flex align-items-center mb-3">
          <img className="dp rounded-circle" src={profile.profilePic} alt="Profile" />
          <h5 className="text d-flex mx-2">{profile.username}</h5>
          <small className="switch ms-auto text-primary">Switch</small>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}

      <div className="suggest-texts d-flex align-items-center">
        <p className="mb-0">Suggested for you</p>
        <b className="ms-auto">See all</b>
      </div>

      {suggestions.length > 0 ? (
        <div className=" profile-suggestion mt-3">
          {suggestions.map((suggestion) => (
            <div key={suggestion.id} className="head d-flex align-items-center mb-2">
              <img className="dp1 rounded-circle" src={suggestion.profilePic} alt=''  />
              <h5 className="text1 mx-2">{suggestion.username}</h5>
              <p className="follow text-primary ms-auto"> Follow</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-2">Loading suggestions...</div>
      )}
    </div>
  );
}

export default Suggestion;