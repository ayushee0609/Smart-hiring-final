import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class RequestViewForm extends Component {
    state = {  }
    render() { 
        return ( 
          <div>
           
            <div className="container">
          <div className="row">
            <table className="table">
              <thead>
                <tr>
                  <th>Information Field</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>CEO Approval</td>
                  <td />
                </tr>
                <tr>
                  <td>Buisiness Area</td>
                  <td />
                </tr>
                <tr>
                  <td>Team</td>
                  <td>ABC</td>
                </tr>
                <tr>
                  <td>Requester</td>
                  <td>Yash</td>
                </tr>
                <tr>
                  <td>Role Title</td>
                  <td>Buisiness Analyst</td>
                </tr>
                <tr>
                  <td>Duration Of Engagement</td>
                  <td>6</td>
                </tr>
                <tr>
                  <td>Resource Type</td>
                  <td />
                </tr>
                <tr>
                  <td>Location</td>
                  <td>Gurugram</td>
                </tr>
                <tr>
                  <td>Job Requirement</td>
                  <td>Experience 5+ Years</td>
                </tr>
                <tr>
                  <td>Line Manager ID</td>
                  <td>454210</td>
                </tr>
                <tr>
                  <td>Project</td>
                  <td>Smart Hiring</td>
                </tr>
                <tr>
                  <td>Project</td>
                  <td />
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row">
            <div className="col-2">
              <button type="button" className="btn btn-success btn-block">
                Accept
              </button>
            </div>
            <div className="col-2">
              <button type="button" className="btn btn-danger btn-block">
                Reject
              </button>
            </div>
            <div className="col-2">
              <button type="button" className="btn btn-info btn-block">
                Modify
              </button>
            </div>
            <div className="col-2">
              <button type="button" className="btn btn-warning btn-block">
                Send Back
              </button>
            </div>
            <div className=" col-4 ">
              <Link to="/home">
              <button  className="float-right btn btn-primary" >
                Back <i className="fas fa-arrow-alt-circle-left" />
              </button></Link>
            </div>
          </div>
        </div>
        </div>
         );
    }
}
 
export default RequestViewForm;