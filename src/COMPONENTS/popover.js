import React, { useState } from 'react';
import Popup from './popup'
import Login from './login';
import './popup.css';
 
function Popover() {
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
 
  return <div>
    <input className='log-btn'
      type="button"
      value="LOGIN"
      onClick={togglePopup}
    />
    
    {isOpen && <Popup
      content={<>
        <Login/>
      </>}
      handleClose={togglePopup}
    />}
  </div>
}
 
export default Popover;













































// import Home from './COMPONENTS/home';
// // import Registration from './COMPONENTS/register';
// // import Login from './COMPONENTS/login';
// // import Studentdashboard from "./COMPONENTS/student/dashboard-s";

// function App() {

//   return (
//     <div className="App">
//       <Home/>
//       {/* <Registration/> */}
//       {/* <Login/> */}
//       {/* <Studentdashboard/> */}
//     </div>
//   );
// }

// export default App;
