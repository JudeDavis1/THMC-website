import React, { Component } from 'react';

import '../css/footer.css';

class Footer extends Component {
    state = {  }

    render() {
        return ( 
            <footer className='Page-footer'>
                <hr />
                <h3>Find us on Instagram:</h3>
                <hr />
                <br />
                <br />
                <a href='https://www.instagram.com/the_happy_mum_company/' target='_blank'><img className='instagramIcon' src='https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg' /></a>
                <br />
                <p className='Footer-text' align='center'>If you would like to contact us, please DM me on instagram...</p>
            </footer>
         );
    }
}

export default Footer;