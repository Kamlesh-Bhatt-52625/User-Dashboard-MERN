import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// Home CSS
import "./home.css";

const Home = () => {
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
              <Button variant='primary' className=''>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
