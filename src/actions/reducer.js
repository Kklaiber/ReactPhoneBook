const initialState = {
    list: [
        {
            id:1,
            name: 'Michael Scott',
            email: 'worldsbestboss@dundermifflin.com',
            phone:'(345)444-5668'
        },
        {
            id:2,
            name: 'Dwight Schrute',
            email: 'ass2thereg.manager@dundermifflin.com',
            phone: '(999)555-4444'
        },
        {
            id:3,
            name: 'Toby Flenderson',
            email: 'everyoneloveshr@dundermifflin.com',
            phone: '(222)333-4444'
        },
    ],
    name:'',
    email:'',
    phone: '',
    redirectTo: null
}

const reducer = (state= initialState, action) => {

switch(action.type) {
    case 'CHANGE_CONTACT':
        const contactItem = state.list.filter(item => item.id === parseInt(action.id, 10));
        return{
            ...state,
            name: contactItem[0] ? contactItem[0].name : '',
            email: contactItem[0] ? contactItem[0].email : '',
            phone: contactItem[0] ? contactItem[0].phone : '',
        }

    case 'CAPTURE_INPUT':
    console.log('[NAME]', action.payload.name)
    console.log('[VALUE]',action.payload.value)
        return{
            ...state,
            [action.payload.name]: action.payload.value
        }
    case 'UPDATE':
        const updatedContact = state.list.map(item => {
            if(item.id ===parseInt(action.id, 10)) {
                item.name = state.name;
                item.email= state.email;
                item.phone= state.phone
            }
            return item;
            
        })
        return {
            ...state,
            list: updatedContact
        
        }
    case 'DELETE':
        const deleteContact = state.list.filter(item => item.id !== parseInt(action.id, 10))
        return {
            ...state,
            list: deleteContact,
            name : deleteContact[0] ? deleteContact[0].name : '',
            email : deleteContact[0] ? deleteContact[0].email : '',
            phone : deleteContact[0] ? deleteContact[0].phone : '',
            redirectTo: deleteContact.length > 0 ? '/${deleteContact{0}.id}' : '/1'
        }
    case 'ADD':
        let id;
        state.list.length > 0 ? id = state.list[state.list.length - 1].id + 1: id = 1;
        const AddContact = {id, name: state.name, email: state.email, phone: state.phone}
        return {
            ...state,
            list: state.list.concat(AddContact)
        }
    default:
     return state;
}
    
}

export default reducer;