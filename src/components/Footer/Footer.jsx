import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faSquareInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <div className=' bg-black pl-10 pr-10'>
            <div className='grid grid-cols-5 gap-4 content-between text-white pt-20 pb-10'>
                <div>
                    <h1>JobPortal</h1>
                    <p>There are many variations of passages of lorem Ipsum, but the majority have suffered alteration in some form.</p>
                    <div className='grid grid-cols-5'>
                        <div><FontAwesomeIcon icon={faFacebook} /></div>
                        <div><FontAwesomeIcon icon={faTwitter} /></div>
                        <div><FontAwesomeIcon icon={faSquareInstagram} /></div>
                    </div>
                </div>
                <nav>
                    <header className="text-lg font-bold">Company</header>
                    <a >About us</a> <br />
                    <a>Contact</a> <br />
                    <a >Jobs</a>
                </nav>
                <nav>
                    <header className="text-lg font-bold">Product</header>
                    <a >Prototype</a> <br />
                    <a>Plans & Pricing</a> <br />
                    <a >Customers</a> <br />
                    <a>Integrations</a>
                </nav>
                <nav>
                    <header className="text-lg font-bold">Support</header>
                    <a >Help Desk</a> <br />
                    <a >Become a Partner</a> <br />
                    <a>Developers</a>
                </nav>
                <nav>
                    <header className="text-lg font-bold">Contact</header>
                    <a >Dhaka, Bangladesh</a> <br />
                    <a >+0880296555487</a> <br />
                    
                </nav>
                
            </div>
            <div className='bg-zinc-300'>
                <hr />
            </div>
            <div className='flex text-white justify-between pb-10 pt-5'>
                <h5 className=''>All Right Reserved</h5>
                <h4>Powered By Jobportal</h4>
            </div>
        </div>
    );
};

export default Footer;