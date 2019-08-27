import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './myComponents/Header';
 

class RequestListView extends Component {
    state = {  }
    render() { 
        return ( 
        <div>
        <div className="row">
            <div className="col"><Header/></div>
        </div>

          <div className="container">
          <div class="row">
            <div className="col-12" >
            <Link to="/newRequest">
            <button class="btn btn-success" style={{float:'right'}}>New Request</button>
            </Link>
            </div>
          </div>
           <div class="container" style={{"width": "1300px", "height": "450px"}}>
             <br/>
             <div class="row justify-content-center" style={{"float": "right", "width": "950px"}}>
               <input class="form-control" id="myInput" type="text" placeholder="Search by Req ID, project, role title..."/>
               <br/>
               <br/>
               <br/>
               <table class="table table-bordered table-striped">

                
                 <thead  style={{"backgroundColor": "royalblue", "text-align": "center"}} >
                   <tr >
                     <th>Sr No</th>
                     <th>Req ID</th>
                     <th>Req type</th>
                     <th >BU</th>
                     <th>Team</th>
                     <th>Role title</th>
                     <th>Duration</th>
                     <th>Line Manager ID</th>
                     <th>Project</th>
                     <th>Location</th>
                    </tr>
                  </thead>
                  
                  <tbody id="myTable" style={{"text-align": "center"}}>
               
                    <tr>
                     <td>1</td>
                     <td><Link to="/track">1231</Link></td>
                     <td>Extension</td>
                     <td>CPB</td>
                     <td>A</td>
                     <td>Developer</td>
                     <td>3 months</td>
                     <td>54321</td>
                     <td>Prg-A</td>
                     <td>Gurugram</td>
                    </tr>
                    <tr>
                    
                     <td>2</td>
                     <td>1232</td>
                     <td>Extension</td>
                     <td>CPB</td>
                     <td>B</td>
                     <td>Developer</td>
                     <td>3 months</td>
                     <td>54322</td>
                     <td>Prg-B</td>
                     <td>Gurugram</td>
                    </tr>
                    <tr>
                     <td>3</td>
                     <td>1233</td>
                     <td>Extension</td>
                     <td>CPB</td>
                     <td>C</td>
                     <td>Developer</td>
                     <td>3 months</td>
                     <td>54321</td>
                     <td>Prg-3</td>
                     <td>Gurugram</td>
                    </tr>
                    <tr>
                     <td>4</td>
                     <td>1234</td>
                     <td>Extension</td>
                     <td>NatWest Markets</td>
                     <td>D</td>
                     <td>Developer</td>
                     <td>3 months</td>
                     <td>54324</td>
                     <td>Prg-D</td>
                     <td>Gurugram</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="col-sm-2" style={{"float": "left", "width": "200px"}}>
               <p><strong>FILTER BY:</strong></p>
               <div>
                <label><input type="radio" name="colorRadio" value="appr"/>APPROVED </label><br/>
                <label><input type="radio" name="colorRadio" value="rej"/>REJECTED</label><br/>
                <label><input type="radio" name="colorRadio" value="pend"/>PENDING</label>
               </div>
               <p><strong>LOCATION</strong></p>
               <div class="checkbox">
                <label><input type="checkbox" value=""/>Gurugram</label>
               </div>
               <div class="checkbox">
                <label><input type="checkbox" value=""/>Chennai</label>
               </div>
               <div class="checkbox">
                <label><input type="checkbox" value="" />Bangalore</label>
               </div>
               <p><strong>BUSINESS UNIT</strong></p>
               <div class="checkbox">
                <label><input type="checkbox" value=""/>CPB</label>
               </div>
               <div class="checkbox">
                <label><input type="checkbox" value=""/>PBB</label>
               </div>
               <div class="checkbox">
                <label><input type="checkbox" value="" />NatWest Markets</label>
               </div>
              </div>
             </div>
             <div style={{"margin": "0 0 0 500px"}}>
              <nav aria-label="Page navigation example">
               <ul class="pagination">
                <li class="page-item">
                 <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                  <span class="sr-only">Previous</span>
                 </a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                 <a class="page-link" href="#" aria-label="Next">
                   <span aria-hidden="true">&raquo;</span>
                   <span class="sr-only">Next</span>
                 </a>
                </li>
               </ul>
              </nav>
             </div>
            </div>
            </div>
                                
        );
    }
}
 
export default RequestListView;