import React, { Component } from 'react';

import styles from '../css/home.css';
import '../css/navigation.css';

import scatter1 from '../scatter1.png';

import sitting from '../about.png';
import working from '../working.png';
import newmum from '../new.png';

import CardBox from './CardBox';

class Home extends Component {

    render() {
        return (
            <div align='center' className='Home'>
                <header className='Home-header'>
                    <h2 align='left' style={{
                        marginLeft: '15%'
                    }}>Welcome to the Happy Mum Family</h2>
                    <div className='top-text'>
                        <p>
                            Mothers (and fathers) fulfil so many roles within the family. Whether
                            it is being a Comforter, a Friend, a Teacher, a Disciplinarian or even a
                            Chauffer, most people will agree that no matter where they live, no
                            matter their background, mums and dads fulfil all these roles and
                            many more and often all of them all at once!
                        </p>
                        <p>
                            However, we are living in changing times with the world now a much
                            smaller place than before, our children surrounded by all forms of
                            digital technology, we need to rise to these challenges and adapt our
                            parenting methods to find solutions that work best for our children.
                        </p>
                    </div>

                    <h4 align='left' style={{
                        marginLeft: '15%'
                    }}>Our Mission</h4>

                    <div className='top-text'>
                        <p>
                            The team at The Happy Mum Company aims to help families from
                            different cultures, backgrounds and walks of life to adapt their
                            parenting methods to suit their individual situations. As no two
                            people are the same, so no two families are the same. And each
                            family faces its own unique sets of challenges and our aim is to work
                            with you to adapt your parenting technique to bring the best out in
                            yourself, your partner as well as your children. As our world has
                            changed, the challenges families face, has changed, so must the
                            solutions we need to adapt and meet these challenges.
                        </p>
                    </div>


                    <h2 align='left' className='Featured-header'>Featured</h2>
                    <div className='Featured-card-container fffs' align='center'>
                        {StayAtHome()}
                        {ExpectingCard()}
                    </div>
                </header>

                <br />
                <hr />
                <br />

                <h2 align='left' className='Featured-header' style={{
                    color: 'white'
                }}>Topics</h2>
                <div className='Featured-card-container' align='center'>
                    {ExpectingCard()}
                    {NewMumCard()}
                    {WorkingCard()}
                    {StayAtHome()}
                </div>
                <br />
            </div>
        );
    }

}

function ExpectingCard() {
    return <CardBox id='left-card' className='cards left-card' heading='Expecting mum' image={scatter1} onMoreInfoButtonClick={function() {
        localStorage.setItem('toTopic', 'expecting.json');
        window.location = '/find-articles';
    }} />
}

function NewMumCard() {
    return <CardBox className='cards middle-card' heading='New mum' image={newmum} onMoreInfoButtonClick={function() {
        localStorage.setItem('toTopic', 'newMum.json');
        window.location = '/find-articles';
    }} />
}

function WorkingCard() {
    return <CardBox className='cards right-card' heading='Working mum' image={working} onMoreInfoButtonClick={function() {
        localStorage.setItem('toTopic', 'working.json');
        window.location = '/find-articles';
    }} />
}

function StayAtHome() {
    return <CardBox className='cards right-card' heading='Stay-at-home mum' image={sitting} onMoreInfoButtonClick={function() {
        localStorage.setItem('toTopic', 'stayAtHome.json');
        window.location = '/find-articles';
    }} />
}

 
export default Home;
