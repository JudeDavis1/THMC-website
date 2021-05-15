import '../css/about.css';

import React, { Component } from 'react';

class About extends Component {
    state = { }
    render() { 
        return (
            <div className='About'>
                <header className='About-header'>
                <h1>About Us</h1>
                <br />
                </header>

                <p className='body-text'>
                    <p>The Happy mum company was almost born by fluke you could say! 
                        There were so many parents, particularly working mothers, 
                        who were regularly in need of some practical tips and non-judgemental 
                        guidance and support in helping them manage their work with their 
                        families and children. </p>
                    <p>They struggled to find a reliable digital support system with advice, tips, 
                        videos, and many more to help them manage a good work-life balance. As a working 
                        mother myself, and after working with children and their families for more than a 
                        decade, we jointly decided that this was the perfect time to pull in resources 
                        from all over our digital network.   </p>
                    <p>Priya and her stronghold family team of 3 have helped set this up. You will find 
                        advice and tips from anything to do with pregnancy to when your children finish 
                        high school, from home schooling tips to family-friendly recipes, from dealing 
                        with baby blues to dealing with toddler tantrums and many more. We hope you have 
                        fun browsing through our digital Parenting platform and getting the advice and tips 
                        you need to help you on your way to becoming a supermom! </p>
                </p>
            </div>
        );
    }
}
 
export default About;
