import React from 'react'
import ReactDOM from 'react-dom'
import {Button} from 'antd-mobile'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import Login from './containers/login/login'
import  Register from './containers/register/register'
import  Dashboards from './containers/dashboard/dashboards'
import  store  from './redux/store'



ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path='/login' component={Login}/>
                <Route path='/register' component={Register}/>
                <Route  component={Dashboards}/>
            </Switch>
        </BrowserRouter>
    </Provider>

),document.getElementById('root'));


