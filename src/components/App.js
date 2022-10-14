import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './NavBar';
import Home from './Home';
import Feet from './Feet';
import Community from './Community';


import "./Sign-up.css"
import iphone from "./phones/iphoneblack.png"
import macbook from "./phones/system.png"
import ipad from "./phones/ipadblack.png"
import { useHistory } from 'react-router-dom';


function App() {

  const [fName, firstName] = useState("");
  const [lName, lastName] = useState("");
  const [pWord, passWord] = useState("");
  const [cpWord, cpassWord] = useState("");
  const [mail, eMail] = useState("");


  const [pVisible01, pVisibleToggler01] = useState(false);
  const [pVisible02, pVisibleToggler02] = useState(false);

  const history = useHistory();



  const handleCheck01 = () => {
        pVisibleToggler01(prevCheck => 
            {
                return !prevCheck
            }
        )
  }

  const handleCheck02 = () => {
        pVisibleToggler02(prevCheck => 
            {
                return !prevCheck
            }
        )
  }
    
  const updateFname = (e) => {
        return(
            firstName(e.target.value)
        );
  }


  const handleClick = (e) => {
        if (pWord !== cpWord){
            alert("Password doesn't match!")
            e.preventDefault();
        } else {
            e.preventDefault();
            const blog = { fName, lName };// an object for the blog
            console.log(blog.fName);
            history.push('/Community');
        }
  }

  return (
    <Router>
      <body className="App">
        <header >
          <Navbar />
        </header>
        <section>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/SignUp">
              <div className="whiteConnector">
                  <div className="formage">
                      <form>
                          <h2>First Name</h2>
                          <input required onChange={updateFname} type="text" name="" id="" value={fName}/>
                          <h2>Last Name</h2>
                          <input required onChange={(e) => lastName(e.target.value)} type="text" name="" id="" value={lName}/>
                          <h2>Password</h2>
                          <input required onChange={(e) => passWord(e.target.value)} type={pVisible01 === false? "password": "text"} name="" id="" value={pWord}/>
                          <input className='pwtoogle' onClick={handleCheck01} type="checkbox" name="" id="" />
                          <h2>Confirm Password</h2>
                          <input required onChange={(e) => cpassWord(e.target.value)} type={pVisible02 === false? "password": "text"} name="" id="" value={cpWord}/>
                          <input className='pwtoogle' onClick={handleCheck02} type="checkbox" name="" id="" />
                          <h2>Email</h2>
                          <input required onChange={(e) => eMail(e.target.value)} type="email" name="" id="" value={mail}/>
                          <button onClick={handleClick}>
                            Submit
                          </button>
                      </form>
                      <div className='mage'>
                          <img className='mage1' src={iphone} alt="iphone" />
                          <img className='mage2' src={macbook} alt="laptop" />
                          <img className='mage3' src={ipad} alt="ipad" />
                      </div>
                  </div>
              </div>
            </Route>
            <Route path="/Community">
              <Community
              firstName={fName} 
              lastName={lName} 
              />
            </Route>
          </Switch>
        </section>
        <footer>
          <Feet />
        </footer>
      </body>
    </Router>
  );
}

export default App;
