import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import '../src/assets/css/style.css'
import '../src/assets/css/responsive.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import $ from "jquery";
import Login from './component/login/Login'
import Createaccount from './component/login/Createaccount';
import Otp from './component/login/Otp';
import Confirmotp from './component/login/Confirmotp';
import Verification from './component/verification/Verification';
import Newuser from './component/verification/Newuser';
import Profile from './component/userdashboard/Profile';
import Peoplelist from './component/userdashboard/Peoplelist';
import Flat01 from './component/houseprofile/Flat01';
import Visitorlist from './component/userdashboard/Visitorlist';
import Selectcountry from './component/property/Selectcountry';
import House from './component/property/House';
import Flat from './component/property/Flat';
import Forgotpassword from './component/login/Forgotpassword';
import Registrationsuccess from './component/login/Registrationsuccess';
import Propertydetails from './component/property/Propertydetails';
import Addhouse from './component/property/Addhouse';
import Amenities from './component/property/Amenities';
import Congralution from './component/Congralution';
import Welcome from './component/Welcome';
import VerificationHome from './component/verification/VerificationHome';
import CaptureFace from './component/verification/CaptureFace';
import Mainhome from './component/Mainhome';
import Frame from './component/Frame'


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/create-account" component={Createaccount} />
        <Route exact path="/otp" component={Otp} />
        <Route exact path="/confirm-otp" component={Confirmotp} />
        <Route exact path="/forgot-password" component={Forgotpassword} />
        <Route exact path="/verification" component={Verification} />
        <Route exact path="/verification-home" component={VerificationHome} />
        <Route exact path="/register-success" component={Registrationsuccess} />
        <Route exact path="/newuser" component={Newuser} />
        <Route exact path="/capture-face" component={CaptureFace} />
        <Route exact path="/user-profile" component={Profile} />
        <Route exact path="/people-list" component={Peoplelist} />
        <Route exact path="/flat-01" component={Flat01} />
        <Route exact path="/visitorlist" component={Visitorlist} />
        <Route exact path="/selectcountry" component={Selectcountry} /> 
        <Route exact path="/house" component={House} />
        <Route exact path="/flat" component={Flat} />
        <Route exact path="/property-detail" component={Propertydetails} />
        <Route exact path="/add-house" component={Addhouse} />
        <Route exact path="/amenities" component={Amenities} />
        <Route exact path="/congralution" component={Congralution} />
        <Route exact path="/welcome" component={Welcome} />
        <Route exact path="/" component={Mainhome} />
        <Route exact path="/frame" component={Frame} />
        
        </Switch>
    </Router>
  );
}

export default App;
