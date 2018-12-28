import React, { Component } from 'react';
// import axios from '../../axios';
import Posts from './Posts/Posts'
import './Blog.css';

class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                  <nav>
                    <ul>
                      <li><a href='/'>HOME</a></li>
                      <li><a href='/new-post'>NEW POST</a></li>
                    </ul>
                  </nav>
                </header>
                <Posts />
            </div>
        );
    }
}

export default Blog;
