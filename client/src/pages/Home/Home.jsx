import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Tables from "../../components/Tables/Tables";
import { useNavigate } from "react-router-dom";

// Home CSS
import "./home.css";
import Spiner from "../../components/Spiner/Spiner";

const Home = () => {
  const [showSpin, setShowSpin] = useState(true);

  // For Navigation
  const navigate = useNavigate();

  const addUser = () => {
    navigate("/register");
  };

  useEffect(() => {
    setTimeout(() => {
      setShowSpin(false);
    }, 1200);
  }, []);

  return (
    <>
      <div className='container'>
        <div className='main_div'>
          {/* Search Button */}
          <div className='serach_add mt-4 d-flex justify-content-between'>
            <div className='search col-lg-4'>
              <Form className='d-flex'>
                <Form.Control
                  type='search'
                  placeholder='Search'
                  className='me-2'
                  aria-label='Search'
                />
                <Button variant='success' className='search_btn'>
                  Search
                </Button>
              </Form>
            </div>

            <div className='add_btn'>
              <Button variant='primary' className='' onClick={addUser}>
                <i class='fa-solid fa-plus'></i>&nbsp; Add User
              </Button>
            </div>
          </div>

          {/* Export to Csv, Gender, Status */}
          <div className='filter_div mt-5 d-flex justify-content-between flex-wrap'>
            <div className='export_csv'>
              <Button className='export_btn'>Export to CSV</Button>
            </div>
            <div className='filter_gender'>
              <div className='filte'>
                <h3>Filter by Gender</h3>
                <div className='gender d-flex justify-content-around'>
                  <Form.Check
                    type={"radio"}
                    label={"All"}
                    name='gender'
                    value={"All"}
                    defaultChecked
                  />
                  <Form.Check
                    type={"radio"}
                    label={"Male"}
                    name='gender'
                    value={"Male"}
                  />
                  <Form.Check
                    type={"radio"}
                    label={"Female"}
                    name='gender'
                    value={"Female"}
                  />
                  <Form.Check
                    type={"radio"}
                    label={"Others"}
                    name='gender'
                    value={"Others"}
                  />
                </div>
              </div>
            </div>

            {/* Sort by Value */}
            <div className='filter_newold'>
              <h3>Sort By Value</h3>
              <Dropdown className='text-center'>
                <Dropdown.Toggle
                  className='dropdown_btn'
                  variant='success'
                  id='dropdown-basic'>
                  <i class='fa-solid fa-sort'></i>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>New</Dropdown.Item>
                  <Dropdown.Item>Old</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            {/* Filter by Status */}
            <div className='filter_status'>
              <div className='status'>
                <h3>Filter by Status</h3>
                <div className='status_radiol d-flex justify-content-around flex-wrap'>
                  <Form.Check
                    type={"radio"}
                    label={"All"}
                    name='status'
                    value={"All"}
                    defaultChecked
                  />
                  <Form.Check
                    type={"radio"}
                    label={"Active"}
                    name='status'
                    value={"Active"}
                  />
                  <Form.Check
                    type={"radio"}
                    label={"InActive"}
                    name='status'
                    value={"InActive"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {showSpin ? <Spiner /> : <Tables />}
      </div>
    </>
  );
};

export default Home;
