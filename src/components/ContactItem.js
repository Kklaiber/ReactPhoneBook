import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const styles= {
    contactBoxes: {
        border: '2px solid black',
        padding: 10,
        overflow: 'hidden',
        backgroundColor: '#FF9900',
        fontSize: 20,
        borderRadius: 18,
        color: 'white',
        textDecoration: 'none'
        
       },
       bold: {
           fontWeight: 'bold'
       }
}
const contactItem = props => {
    const list = props.myContacts.map(item =>{
        console.log(item);
        return (
        <Link to={`${item.id}`} key = {item.id}>
        <div style={styles.contactBoxes}>
            <p><span style={styles.bold}>Name: </span>{item.name}</p>
            <p><span style={styles.bold}>Email: </span>{item.email}</p>
            <p><span style={styles.bold}>Phone: </span>{item.phone}</p>
        </div>
        </Link>
       
        )
    });
    return <div>{list}</div>
}

const mapStateToProps = state => {
    return {
        myContacts: state.list
    }
}

export default connect(mapStateToProps, null)(contactItem);