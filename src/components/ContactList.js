import React from 'react';

import ContactItem from './ContactItem';

const styles = {
    previewBoxList: {
        width: '33%',
        border: '1px solid black',
        padding: '50px 33px',
        overflow: 'scroll',
        backgroundColor: '#D9D9D9',
        textDecoration: 'none',
        // display: 'flex',
        // height: '100vh',

    }
}

const contactList = () => 
    <div style= {styles.previewBoxList}><ContactItem/></div>
    


export default contactList;