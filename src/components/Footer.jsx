import React from 'react';
import { Link } from 'react-router-dom';
//SVG
import { ReactComponent as Phone } from '../assets/icons/phone.svg';
import { ReactComponent as Mail } from '../assets/icons/mail.svg';
import { ReactComponent as GitHub } from '../assets/icons/github.svg';
import { ReactComponent as LinkedIn } from '../assets/icons/linkedin.svg';

//CSS
import './Footer.css';

function Footer() {
    return(
        <footer className="pt-3 bg-light">
            <div className="container-fluid container-min-max-width
                            d-flex justify-content-between">
                <div>
                    <h3 className="h5">Links:</h3>
                    <p className="mb-1">
                        <Link to='/about'>About Project</Link>
                    </p>
                    <p className="m-0">
                        <Link to='/t&c'>Terms and Conditions</Link>
                    </p>
                </div>
                <div>
                    <h3 className="h5">Contact me:</h3>
                    <p className="mb-1">
                        <a href="mailto:ignatov.ecaterina@yandex.ru">
                            <Mail className="mr-2 mb-1 footer-icon"/>
                            ignatov.ecaterina@yandex.ru
                        </a>
                    </p>
                    <p className="m-0"><Phone className="mr-2 footer-icon"/>+37379682451</p>
                </div>
                <div>
                    <h3 className="h5">Social Links:</h3>
                    <p className="mb-1">
                        <a href="https://github.com/mermaidsknees">
                            <GitHub className="mr-2 mb-1 footer-icon"/>
                            mermaidsknees
                        </a>
                    </p>
                    <p className="m-0">
                        <a href="https://www.linkedin.com/in/ignatov-ecaterina-a9556019a/">
                            <LinkedIn className="mr-2 mb-1 footer-icon"/>
                            ignatov-ecaterina
                        </a>
                    </p>
                </div>
            </div>
            <div className="text-center py-4 mr-5">
                &copy; Ignatov Ecaterina, 2020
            </div>
        </footer>
    );
}

export default Footer;
