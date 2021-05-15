import React, { Component } from 'react';

class ErrorNotFound extends Component {

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
                }}>Error! <br />404 Not Found...</h1>
                <br />
                <p>This usually happens when there is an incomplete request, or you typed in the wrong URL. Try reloading, and if that doesn't work, then check the URL. If you are confident that the URL is correct, then E-mail us at: <a href='mailto:info@thehappymumcompany.com' target='_blank'>info@thehappymumcompany.com</a>...</p>
            </div>
        );
    }
}
 
export default ErrorNotFound;