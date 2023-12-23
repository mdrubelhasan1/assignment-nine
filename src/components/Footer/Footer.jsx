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
                <div>
                    <h1>Companey</h1>
                    <p>About Us</p>
                    <p>Work</p>
                    <p>Latest News</p>
                    <p>Carrers</p>
                </div>
                <div>
                    <h1>Companey</h1>
                    <p>About Us</p>
                    <p>Work</p>
                    <p>Latest News</p>
                    <p>Carrers</p>
                </div>
                <div>
                    <h1>Companey</h1>
                    <p>About Us</p>
                    <p>Work</p>
                    <p>Latest News</p>
                    <p>Carrers</p>
                </div>
                <div>
                    <h1>Companey</h1>
                    <p>About Us</p>
                    <p>Work</p>
                    <p>Latest News</p>
                    <p>Carrers</p>
                </div>

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