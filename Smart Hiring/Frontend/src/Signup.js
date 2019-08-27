// import React, { Component } from 'react';
// // import './Signup.css';
// import { Link } from 'react-router-dom';

// class Signup extends Component {
//   render() {
//     return (
//       <div className="App"><br/><br/>
//       <div className="t"><h3> Sign Up</h3></div>
//       <form>
//       <div>
//       <input type="text" placeholder=" Rackf ID" name="rackf"  maxLength ="7" size="30" required></input>
//       </div>
//       <br/>
//       <div>
//       <input type="email" placeholder="Email ID (xyz@abcd.com)" name="email"size ="30" required></input>
//       </div><br/>
//       <div>      
//     <input type="password" placeholder="Password" name="psw" size ="30" required></input>
//     </div><br/>
//       <div>
//       <input type="email" placeholder="Verifier Email ID (xyz@abcd.com)" name="email" size ="30" required></input>
//       </div><br/>

//       <button class="button1">Sign Up</button>
//       <Link to="/Login"><button className="button2 btn btn-primary"> Back to Login</button></Link>
//       </form>

//       </div>
//     );
//   }
// }

// export default Signup;


// import React, { Component } from 'react';
// // import './Signup.css';
// import { Link } from 'react-router-dom';

// class Signup extends Component {
//   render() {
//     return (
//       <div className="App"><br/><br/>
//       <div className="t"><h3> Sign Up</h3></div>
//       <form>
//       <div>
//       <input type="text" placeholder=" Rackf ID" name="rackf"  maxLength ="7" size="30" required></input>
//       </div>
//       <br/>
//       <div>
//       <input type="email" placeholder="Email ID (xyz@abcd.com)" name="email"size ="30" required></input>
//       </div><br/>
//       <div>      
//     <input type="password" placeholder="Password" name="psw" size ="30" required></input>
//     </div><br/>
//       <div>
//       <input type="email" placeholder="Verifier Email ID (xyz@abcd.com)" name="email" size ="30" required></input>
//       </div><br/>

//       <button class="button1">Sign Up</button>
//       <Link to="/Login"><button className="button2 btn btn-primary"> Back to Login</button></Link>
//       </form>

//       </div>
//     );
//   }
// }

// export default Signup;



import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Header from './Header';


export class SignUp extends Component {

    constructor(props) {
        super(props)
        this.state = {

            racfId: null,
            email: null,
            designation : null,
            password: null,
            verifierEmail: null

        }
      //  this.handleInputChange = this.handleInputChange.bind(this)
      //  this.handleSubmit = this.handleSubmit.bind(this) 
    }

    handleSubmit = (event) => {
      event.preventDefault()
      const data = this.state
      console.log("Final data is: ", data)

      fetch('http://127.0.0.1:8000/api/users/signup', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }) 
         .then((response) => response.json())
         .then((responseJson) => {
             console.log(responseJson);
         })
         .catch((error) => {
             console.log("reset client error-------",error);
        });
      
  }

  handleInputChange = (event) => {
      event.preventDefault()
      this.setState({
          [event.target.name]: event.target.value
      })
  }
    render() {
        const { racfId } = this.state
        const { password } = this.state
        const { email } = this.state
        const { verifierEmail } = this.state
        const { designation } =this.state;
        return (

            <div className="App"><br /><br />
                <div className="t"><h3> Sign Up</h3></div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text" value={ racfId } placeholder=" Racf ID" name="racfId" maxLength="7" size="30" onChange={ this.handleInputChange } required></input>
                    </div>
                    <br />
                    <div>
                        <input type="email" value={ email } placeholder="Email ID (xyz@abcd.com)" name="email" size="30" onChange={ this.handleInputChange } required></input>
                    </div><br />
                    <div>
                        <input type="password" value={ password } placeholder="Password" name="password" size="30" onChange={ this.handleInputChange } required></input>
                    </div><br />
                    <div>
                        <input type="text" value={ designation } placeholder="Designation" name="designation" size="30" onChange={ this.handleInputChange } required></input>
                    </div><br />
                    <div>
                        <input type="text" value={ verifierEmail } placeholder="Security Key" name="verifierEmail" size="30" onChange={ this.handleInputChange } required></input>
                    </div><br />

                    {/* <Link to = "/Login" ><button className="button1">Sign Up</button></Link> */}
                    <p><button className="btn btn-success">SignUp</button></p>
                    {/* <Link to="/Login"><button className="button2 btn btn-primary"> Back to Login</button></Link> */}
                </form>

            </div>
        );
    }
}

export default SignUp;