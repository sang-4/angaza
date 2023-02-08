import React from 'react'


const followupViews = [
    {
      id: 1,
      Name: "Full-Stack Developer",
      Appointments: 150,
    },
    {
      id: 2,
      Name: "Mobile Android Developer",
      Appointments: 25,
    },
    {
      id: 3,
      Name: "JavaScript Developer",
      Appointments: 69,
    },
    {
      id: 4,
      Name: "Python Developer",
      Appointments: 45,
    },
  ];
  
  const FollowUp = props => {
    return (
      <div>
        <div className="">
          <ul className="followUpGrid">
            {followupViews.map((user) => {
              return (
                <li className="followUpsBlock" key={user.id}>
                  <span className="clients">{user.user}</span>
  
                  <div className="followUpsContainer">
                    <span className="followUpcount">{user.Appointments}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  };
  
  export default FollowUp;
