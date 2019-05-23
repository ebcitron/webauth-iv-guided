import React from 'react'
import axios from 'axios';

// tell axios where to find the api
axios.defaults.baseURL = "http://localhost:5000/api";

// Interceptors can execute code before a request happens or when a request comes in
axios.interceptors.request.use(
function(options) {
    // this function has access to the request options passed to axios
    // if we do a axios.get('/api', reqOptions)
    // than axios will pass the reqOptions object as the first arguement to this function
    // will read the token from local storage and attatch it to the request as authorization header

    options.headers.authorization = localStorage.getItem('jwt');
    // now any component rendered with this HOC will atatch the token automatically
    return options;

},
function(error){
    return Promise.reject(error);
}
);

export default function(Component) {
    return class Authenticated extends React.Component {
        
    render() {
        const token = localStorage.getItem('jwt');
        const notLoggedIn = <div>Please Log In To See The Users</div>
        // if there is no token, then show a message to the user
        return<>{token ? <Component {...this.props} /> :  notLoggedIn }</>
    };
};
};
