import React, { Component } from 'react';
import { connect } from 'react-redux';

const styles = {
    updateBox: {
        backgroundColor:'#FEFEFE',
        display:'flex',
        justifyContent: 'center',
        alignItems:'center',
        width:'66%',
        height: '50vh',
       
    },
    innerBox: {
        padding: '100%',
        border:'1px solid black',
    },
    update: {
        backgroundColor:  '#70AC47',
        borderRadius: 15,
    },
    delete: {
        backgroundColor: '#C00001',
        borderRadius: 15,
    },
    add: {
        backgroundColor: '#FFD966',
        borderRadius: 15,
    }
}

class Form extends Component {
    componentDidMount(){
        this.props.onListChange(this.props.match.params.listId)
    }

    componentWillReceiveProps(newProps) {
        if(this.props.match.params.listId !== newProps.match.params.listId){
            this.props.onListChange(newProps.match.params.listId);
        }
    }

    componentDidUpdate(prevProps){
        if(this.props.redirectTo !== prevProps.redirectTo) {
            this.props.history.push(this.props.redirectTo);
        }
    }

    submit(e) {
        e.preventDefault();
    }

    focus(e) {
        e.target.value = '';
    }
    render() {
        const {listId} = this.props.match.params,
            {name, email, phone, onInputChange, onUpdate, onDelete, onAdd} = this.props;
            console.log(name,email,phone);
        return(
            <form style={styles.updateBox} onSubmit={this.submit}>
                <div style={styles.innerBox}>
                    <div>
                        <label>Name: <input 
                            type='text' 
                            name= 'name'
                            value= {name} 
                            onFocus = {this.focus}
                            onChange = {(e) => onInputChange(e.target.name, e.target.value)}/></label><br/>
                        <label>Email: <input
                             type='text' 
                             name='email'
                             value= {email} 
                             onFocus = {this.focus}
                             onChange = {(e) => onInputChange(e.target.name, e.target.value)}/></label><br/>
                        <label>Phone: <input 
                            type='text'
                            name='phone'
                            value= {phone}
                            onFocus = {this.focus}
                            onChange = {(e) => onInputChange(e.target.name, e.target.value)}/></label>
                    </div>
                    <div >
                        <input style={styles.update} type="button" value= 'Update' onClick = {() => onUpdate(listId)}/>
                        <input style={styles.delete} type='button' value= 'Delete' onClick = {() => onDelete(listId)}/>
                        <input style={styles.add} type= 'button' value= 'Add New Contact' onClick = {onAdd}/>
                    </div>
                </div>
            </form>

        );
    }
}

const mapStateToProps = state => {
    return {
       myContacts: state.list,
       name: state.name,
       email: state.email,
       phone: state.phone,
       redirectTo: state.redirectTo
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onListChange: (id) => dispatch({type: 'CHANGE_CONTACT',id}),
        onInputChange: (name,value) => dispatch({type: 'CAPTURE_INPUT', payload: {name,value}}),
        onUpdate: (id) => dispatch({type: 'UPDATE',id}),
        onDelete: (id) => dispatch({type: 'DELETE', id}),
        onAdd: () => dispatch({type: 'ADD'})

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Form);