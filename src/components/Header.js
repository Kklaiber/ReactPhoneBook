import React from 'react';

const styles = {
    headerBox: {
        width:'100%',
        display: 'flex',
        backgroundColor:'#FF9900',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        fontSize: 60,
        border: '1px solid black',
        color: 'white',
        fontFamily: 'verdana'

    }
}

const header = () => 
<div style={styles.headerBox}>Contact List</div>;

export default header;