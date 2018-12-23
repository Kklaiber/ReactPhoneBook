import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import Header from './components/Header';
import ContactList from './components/ContactList';
import Form from './components/Form';

const style = {
    bodyWrap: {
        display: 'flex',
        height: '100vh',
        backgroundColor: '#FEFEFE',
    }
}

const app = () => {
    return (
        <BrowserRouter>
            <div className= "App">
                <Header/>
                
                <div style= {style.bodyWrap}>
                    <ContactList/>
                    
                    <Switch>
                        <Route path='/:listId' component={Form} />
                        <Redirect from ='/' to ='/1'/>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default app;