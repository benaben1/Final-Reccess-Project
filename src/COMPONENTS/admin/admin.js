import Topbar from "./topbar";
import Sidebar from "./sidebar ";
import Center from "./center";
import { Row, Col} from "react-bootstrap";

function Admindash() {

    return(
        <>
        <Topbar/>

        <Row>
            <Col md="4"><Sidebar/></Col>
            <Col md="8"><Center/></Col>
        </Row>
        
        </>
    )
    
}
export default Admindash