import React from 'react'
import { Row, Col } from 'react-bootstrap'

function FirstFooter() {
    return (
        <div className='bg-dark text-secondary pt-5 pb-1 ps-4 pe-4'>
            <Row  className='p-5'>
                <Col lg={12} md={12} sm={12} xl={12}>
                    <Row>
                        <Col>
                            <div className='d-flex flex-column'>
                                <h6 className='text-white-50'>About</h6>
                                <a href="" className='text-decoration-none text-secondary'>Contact Us</a>
                                <a href=""className='text-decoration-none text-secondary'>About Us</a>
                                <a href=""className='text-decoration-none text-secondary'>Careers</a>
                                <a href=""className='text-decoration-none text-secondary'>Flipkart Stories</a>
                                <a href=""className='text-decoration-none text-secondary'>Press</a>
                                <a href=""className='text-decoration-none text-secondary'>Flipkart Wholesale</a>
                                <a href=""className='text-decoration-none text-secondary'>Cleartrip</a>
                                <a href=""className='text-decoration-none text-secondary'>Corporate Information</a>
                            </div>
                        </Col>
                        <Col>
                            <div className='d-flex flex-column'>
                                <h6 className='text-white-50'> HELP</h6>
                                <a href=""className='text-decoration-none text-secondary'>Payments</a>
                                <a href=""className='text-decoration-none text-secondary'>Shipping</a>
                                <a href=""className='text-decoration-none text-secondary'>Cancellation & Returns</a>
                                <a href=""className='text-decoration-none text-secondary'>FAQ</a>
                                <a href=""className='text-decoration-none text-secondary'>Report Infringement</a>
                            </div>
                        </Col>
                        <Col>
                            <div className='d-flex flex-column'>
                                <h6 className='text-white-50'>CONSUMER POLICY</h6>
                                <a href=""className='text-decoration-none text-secondary'>Cancellation & Returns</a>
                                <a href=""className='text-decoration-none text-secondary'>Terms Of Use</a>
                                <a href=""className='text-decoration-none text-secondary'>Privacy</a>
                                <a href=""className='text-decoration-none text-secondary'>Sitemap</a>
                                <a href=""className='text-decoration-none text-secondary'>Grievance Redressal</a>
                                <a href=""className='text-decoration-none text-secondary'>EPR Compliance</a>
                            </div>
                        </Col>
                        <Col>
                            <div className='d-flex flex-column'>
                                <h6 className='text-white-50'>SOCIAL</h6>
                                <a href=""className='text-decoration-none text-secondary'>Facebook</a>
                                <a href=""className='text-decoration-none text-secondary'>Twitter</a>
                                <a href=""className='text-decoration-none text-secondary'>YouTube</a>
                            </div>
                        </Col>
                        <Col>
                            <div className='d-flex flex-column'>
                                <h6 className='text-white-50'>Mail as :</h6>
                                <p>Flipkart Internet Private Limited,

                                    Buildings Alyssa, Begonia &

                                    Clove Embassy Tech Village,

                                    Outer Ring Road, Devarabeesanahalli Village,

                                    Bengaluru, 560103,

                                    Karnataka, India</p>
                            </div>
                        </Col>
                        <Col>
                            <div className='d-flex flex-column'>
                                <h6 className='text-white-50'>Registred Office Address</h6>
                                <p>
                                    Flipkart Internet Private Limited,

                                    Buildings Alyssa, Begonia &

                                    Clove Embassy Tech Village,

                                    Outer Ring Road, Devarabeesanahalli Village,

                                    Bengaluru, 560103,

                                    Karnataka, India

                                    CIN : U51109KA2012PTC066107

                                    Telephone: 044-45614700
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <hr></hr>
            <Row>
                <Col lg={12}>
                    <Row style={{fontSize:'15px'}}>
                        <Col><i className="fa-solid fa-bag-shopping pe-2" style={{color: '#ffd43b'}}></i>Become a Seller</Col>
                        <Col><i class="fa-solid fa-star pe-2" style={{color: '#ffd43b'}}></i>Advertise</Col>
                        <Col><i class="fa-solid fa-gift pe-2"  style={{color: '#ffd43b'}}></i>Gift Cards</Col>
                        <Col><i class="fa-solid fa-question pe-2"  style={{color: '#ffd43b'}}></i>Help Center</Col>
                        <Col>© 2007-2023 Flipkart.com</Col>
                        <Col>
                        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg" alt="" />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default FirstFooter