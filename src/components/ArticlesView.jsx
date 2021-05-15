import React, { Component } from 'react';

import '../css/ArticlesView.css';
import CardBox from './CardBox';

class ArticlesView extends Component {
    
    constructor() {
        super();

        this.state = {
            url: '/api/' + localStorage.getItem('toTopic')
        }

        fetch(this.state.url)
            .then(res => res.json())
            .then(result => {
                console.log(result);
                this.setState({data: result});
            },
            error => {
                console.log(error);
            });
    }

    render() {
        if(this.state.data == undefined) {
            return (
                <div>
                    <header>
                        <h1 style={{marginTop: '50%', color: 'white'}}>Loading...</h1>
                        <br />
                    </header>
                </div>
            );
        }

        return (
            <div align='center' className='Articles'>
                <header className='Articles-header'>
                    <h2 className='Articles-header' style={{
                        paddingTop: '20vh',
                        color: 'white'
                    }}>{this.state.data.title}</h2>
                    <br />
                </header>
                <div className='Articles-card-container'>
                    {this.state.data.articles.map((article, i) => (
                        <CardBox className='Article-cards' heading={article.title} image={article.image} imageClassName='card-image' />
                    ))}
                </div>
            </div>
        );
    }
}

function getImage(url) {
    var headers = new Headers({'X-Mashape-Key': 'API_KEY'});
    var options = {
        method: 'GET',
        headers: headers,
        mode: 'cors',
        cache: 'default'
    };
    var request = new Request(url);

    fetch(request, options)
        .then((response) => {
            response.arrayBuffer()
                .then((buffer) => {
                    var base64Flags = 'data:image/jpeg;base64,';
                    var imageStr = arrayBufferToBase64(buffer);

                    return base64Flags + imageStr;
                })
        });
}

function arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));

    bytes.forEach((b) => binary += String.fromCharCode(b));

    return window.btoa(binary);
}

export default ArticlesView;