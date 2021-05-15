import React, { Component } from 'react';

class AccessRestricted extends Component {

    render() { 
        return (
            <div style={{
                marginLeft: '10%',
                marginRight: '10%',
                paddingBottom: '25%',
                color: 'rgba(212, 244, 233)'
            }}>
                <h1 style={{
                    paddingTop: '20vh'
                }}>Error! <br />Access Restricted! You are not allowed to access this page!</h1>
                <br />
                <p>This usually happens when this site is using this page for other things to make the website performance better. Please go <a href='http://thehappymumcompany.com/home'>here</a> instead...<br />Many thanks...</p>
            </div>
        );
    }
}
 
export default AccessRestricted;