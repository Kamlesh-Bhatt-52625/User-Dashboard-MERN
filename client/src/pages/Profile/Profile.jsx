import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/esm/Row";

// Profile CSS
import "./profile.css";

const Profile = () => {
  return (
    <>
      <div className='container'>
        <Card className='card-profile shadow col-lg-6 mx-auto mt-5'>
          <Card.Body>
            <Row>
              <div className='col'>
                <div className='card-profile-stats d-flex justify-content-center'>
                  <img src='/man.png' alt='img' />
                </div>
              </div>
            </Row>
            <div className='text-center'>
              <h3>Kamlesh Bhatt</h3>
              <h4>
                <i className='fa-solid fa-envelope email'></i>&nbsp;:-{" "}
                <span>kamleshbhatt3103@gmail.com</span>
              </h4>
              <h5>
                <i className='fa-solid fa-mobile mobile'></i>&nbsp;:-{" "}
                <span>6398481446</span>
              </h5>
              <h4>
                <i className='fa-solid fa-user gender'></i>&nbsp;:-{" "}
                <span>Male</span>
              </h4>
              <h4>
                <i className='fa-solid fa-location-dot location'></i>&nbsp;:-{" "}
                <span>Nainital</span>
              </h4>
              <h4>
                Status&nbsp;:- <span>Active</span>
              </h4>
              <h4>
                <i className='fa-solid fa-calendar-days calendar'></i> Date
                Created&nbsp;:- <span>today</span>
              </h4>
              <h4>
                <i className='fa-solid fa-calendar-days calendar'></i> Date
                Updated&nbsp;:- <span>today</span>
              </h4>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Profile;
