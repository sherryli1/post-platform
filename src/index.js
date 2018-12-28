import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

//setting default configuration which will be used application-wide;
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'Auth Token';
axios.defaults.headers.post['content-type'] = 'application/json';

//Adding interceptors to execute code globally
axios.interceptors.request.use(request => {
  console.log(request);
  //Edit request config if needed
  return request;
}, error => {
  console.log(error);
  return Promise.reject(error);
});

//Ways to remove interceptors:
// var myInterceptor = axios.interceptors.request.use(function () {/*...*/});
// axios.interceptors.request.eject(myInterceptor);
axios.interceptors.response.use(response => {
  console.log(response);
  //Edit respose if needed
  return response;
}, error => {
  console.log(error);
  return Promise.reject(error);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
