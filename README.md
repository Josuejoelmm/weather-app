# Weather app
This is a Weather application, which will allow you to know information about the weather of the city.

### STEPS:
##### 1. GET API KEY:
Create a new account from https://home.openweathermap.org/users/sign_up and follow the steps to get your API KEY.
##### 2. Set your API KEY in to axios.js file located in /src/app/helper/axios.js, then save changes.

```
export default axios.create({
    baseURL: BASE_URL,
    params: {
        API_KEY: 'YOUR API KEY HERE'
    }
});
```
##### 3. Install dependencies
`npm install`
##### 4. Run app
`npm start`

### `API Doc`
* https://openweathermap.org/current
* https://openweathermap.org/forecast5

### `Tech`

* [ReactJS](https://reactjs.org/) - React JS / Hooks / Context
* [Axios](https://www.npmjs.com/package/axios)
* [Bootstrap](https://getbootstrap.com/)
* [React-Bootstrap](https://react-bootstrap.netlify.app/)

###Thanks for your visit