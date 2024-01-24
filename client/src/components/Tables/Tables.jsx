import React from "react";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";
import Badge from "react-bootstrap/Badge";

// Table CSS
import "./table.css";

const Tables = () => {
  return (
    <>
      <div className='container'>
        <Row>
          <div className='col mt-0'>
            <Card className='shadow'>
              <Table className='align-items-center' responsive='sm'>
                <thead className='thead-dark'>
                  <tr className='table-dark'>
                    <th>ID</th>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Status</th>
                    <th>Profile</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Kamlesh Bhatt</td>
                    <td>kamleshbhatt3103@gmail.com</td>
                    <td>M</td>
                    <td className='d-flex align-items-center'>
                      <Dropdown className='text-center'>
                        <Dropdown.Toggle
                          className='dropdown_btn'
                          variant='success'
                          id='dropdown-basic'>
                          <Badge bg='primary'>
                            Active <i className='fa-solid fa-angle-down'></i>
                          </Badge>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item>Active</Dropdown.Item>
                          <Dropdown.Item>Inactive</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                    <td className='img_parent'>
                      <img src='./man.png' alt='' />
                    </td>
                    <td>
                      <Dropdown className='text-center'>
                        <Dropdown.Toggle
                          className='action'
                          variant='light'
                          id='dropdown-basic'>
                          <i className='fa-solid fa-ellipsis-vertical'></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item>
                            <i
                              className='fa-solid fa-eye'
                              style={{ color: "green" }}></i>
                            <span>View</span>
                          </Dropdown.Item>

                          <Dropdown.Item>
                            <i
                              className='fa-solid fa-edit'
                              style={{ color: "blue" }}></i>
                            <span>Edit</span>
                          </Dropdown.Item>

                          <Dropdown.Item>
                            <i
                              className='fa-solid fa-trash'
                              style={{ color: "red" }}></i>
                            <span>Delete</span>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </div>
        </Row>
      </div>
    </>
  );
};

export default Tables;
