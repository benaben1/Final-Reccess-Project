import { Link } from 'react-router-dom';
import {Container,Row,Col} from 'react-bootstrap';
import './home.css';
import { BsGeoAltFill, BsFillTelephoneFill} from "react-icons/bs";
import { FaFacebook, FaInstagramSquare, FaTwitterSquare,FaEnvelope } from "react-icons/fa";
import { ImWoman } from "react-icons/im";
import Popover from './popover';
import { useEffect } from 'react';

function Home(){

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?_limit=8`)
          .then((response) => {
            // ...
          })
          .then((actualData) => {
            setData(actualData);
            setError(null);
          })
          .catch((err) => {
            setError(err.message);
            setData(null);
          })
          .finally(() => {
            setLoading(false);
          });
      }, []);


    return(
    <div className="home_page">
        <section className='top-head shadow-sm'>
            <Container>
                <Row>
                    <Col md="3">
                    <p style={{fontSize:23}}><BsFillTelephoneFill style={{width:25}}/>+ (256) 392177980</p>
                    </Col>            
                    <Col md="3">            
                    <p style={{fontSize:23}}><FaEnvelope style={{width:25}}/> admin@witi.ac.ug</p>
                    </Col>
                    <Col md="6">
                    <Link to={'/admin'}><ImWoman style={{width:45}}/></Link>
                    </Col>
                </Row>
            </Container>
        </section>

        <section className='first text-black py-5 px-5 shadow'>
            <Container >
                <Row className='header bg-white shadow rounded'>
                    <Col md="4">
                    <img style={{width:400, height:350}} className='witi-logo' src={require('../COMPONENTS/images/img-6.png')} 
                    alt='witi-logo'></img>
                    </Col>
                    <Col  md="6"className=' title  font-weight-bold pt-5'>
                        <h1>WOMEN's INSTITUTE of TECHNOLOGY and INNOVATION</h1>
                    </Col>
                </Row>
            </Container>
        </section>

        <section className='second bg-grey p-5'>
            <Container>
                <Row className='reg-log'>
                    <Col md='4'  className=' bg-danger shadow rounded p-3 m-5'>
                        <Popover/>
                    </Col>
                    <Col md="4" className='  bg-danger shadow rounded p-3 m-5'>
                        <div className=''>
                            <select className='link-program'>
                                <option selected>PROGRAM</option>
                                <option value="Code Girls">Code Girls</option>
                                <option value="Elevate">Elevate</option>
                                <option value="ComputerS">Computer Science</option>
                            </select>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

        <section className='third p-3'>
            <Container>
                <Row className='part-1'>
                    <Col className='d-inline p-3 mb-5 bg-white border'>
                    <p style={{fontSize:35}}>Women's Institute of Technology and Innovation was founded to
                         promote gender equality and the economic empowerment of youth, 
                         especially girls and women, by encouraging greater youth participation in 
                         STEM fields and actively contributing to the budding STEM innovation and 
                         entrepreneurship sectors in Africa. The institute was founded on the pillar;
                          Achieve gender equality and empower all women and girls.</p>
                    </Col>
                </Row>
            </Container>
        </section>

        <section className='forth p-3'>
            <Container>
                <Row className='part-2'>
                    <Col md='6' className='img-1 d-inline shadow-sm p-3 mb-5 bg-white rounded'>
                    <img className='img-fluid ' src={require('../COMPONENTS/images/img-1.png')} 
                    alt='Students in a Discusion'></img>
                    </Col>
                    <Col md='6' className=' sect-1 d-inline shadow-sm p-5 mb-5 bg-white rounded'>
                        <h3>OUR MISSION</h3>
                        <h5>
                            To support young women in local capacity
                             building and skills development for Innovation,
                              technology and leadership in Uganda, offering a 
                              collaborative environment for training, mentor-ship
                               and knowledge sharing leading to a sustainable 
                               socio-economic development in the region.
                        </h5>
                    </Col>
                </Row>
            </Container>
        </section>

        <section className='fifth p-3 shadow'>
            <Container>
                <Row>
                    <Col md='3' className='img-4 d-inline shadow-sm mb-5 bg-white rounded'>
                        <img className='img-fluid h-70' src={require('../COMPONENTS/images/img-4.jpg')} 
                        alt='graduating Girls'></img>
                    </Col>

                    <Col md='5' className=' sect-2 d-inline shadow-sm p-5 mb-5 bg-white rounded'>
                        <h3>OUR GOAL</h3>
                        <h5>Our primary goal is to create employment opportunities 
                            for brilliant young women from underserved communities. 
                            We do this by empowering them with digital and entrepreneurial 
                            skills training and job connection. We use modern teaching 
                            methods like high-speed boot camps where the girls learn by 
                            doing and create real-world projects and systems.
                        </h5>
                    </Col>

                    <Col md='3' className='img-2 d-inline shadow-sm p-3 mb-5 bg-white rounded '>
                        <img className='img-fluid h-80' src={require('../COMPONENTS/images/img-2.png')} 
                        alt='Girl on Codes'></img>
                    </Col>
                </Row>
            </Container>
        </section>

        <section className='sixth pt-5 '>
            <Container>
                <Row className='part-3 p-5'>
                    <Col md="3" className=' sect-3 d-inline shadow p-5 bg-white rounded'>
                    <h3>SUSTAINABILITY</h3>
                    <h5>
                        We provide a transformative learning experience 
                        that equips students with the knowledge, and 
                        tools, and frameworks for complex systems analysis 
                        and giving our graduates a competitive advantage in 
                        their chosen careers.
                    </h5>
                    </Col>

                    <Col md="3" className=' sect-4 d-inline shadow p-5 bg-white rounded'>
                    <h3>RELIABILITY</h3>
                    <h5>We constantly analyze market trends to inform our 
                        interdisciplinary approach and ensure our students gain 
                        access to the foremost academic and career opportunities for our graduates.
                    </h5>
                    </Col>

                    <Col md="4" className=' sect-5 d-inline shadow p-5 bg-white rounded'>
                    <h3>PROFFESSIONALISM</h3>
                    <h5>
                        We have certified professionals with excellent interpersonal 
                        and instructing skills, we offer sustainable solutions that can 
                        be applied to solve all graduate challenges
                    </h5>
                    </Col>
                </Row>
            </Container>
        </section>
        
        <section className='seventh bg-dark text-white p-2'>
            <Container>
                <Row>
                    <Col className='d-inline text-center'>
                    <h4>Women's Institute of Technology and Innovation</h4>
                    </Col>
                </Row>
                
                <Row className='upper-footer'>
                    <Col md='4' className='d-inline'>
                    <h6>Social Media</h6>
                    <div className="FooterLink" >
                        <FaFacebook/>   Facebook
                    </div>
                    <div className="FooterLink" >
                        <FaInstagramSquare/>   Instagram
                    </div>
                    <div className="FooterLink" >
                        <FaTwitterSquare/>   Twitter
                    </div>
                    </Col>

                    <Col md='4' className='d-inline'>
                    <h6>About Us</h6>
                    <div className="FooterLink" href="#">Who We Are</div>
                    <div className="FooterLink" href="#">Mission</div>
                    <div className="FooterLink" href="#">Goal</div>
                    </Col>

                    <Col md='4' className='d-inline'>
                    <h6>Services</h6>
                    <div className="FooterLink" href="#">Internships</div>
                    <div className="FooterLink" href="#">Coding</div>
                    <div className="FooterLink" href="#">Teaching</div>
                    </Col>
                </Row>
            </Container>
        </section>

        <section className='eighth'>
            <Container>
                <Row className='lower-footer'>
                    <Col md='4' className='d-inline text-center p-4'>
                    <p className='locate'>
                       <BsGeoAltFill/> Bukoto Street Plot 19, Kampala, Uganda.</p></Col>
                    <Col md="6" className='d-inline text-center p-4'>
                    <p className='rights'>© Women's Institute of Technology
                    and Innovation. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    </div>
    )
}

export default Home;