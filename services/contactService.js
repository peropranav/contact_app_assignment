const axios = require('axios');

const getContactList = async () => {
    try {
        let response = await axios.get('http://localhost:4040/api/contact');
        return response;
    } catch (err) {
        throw err;
    }
}
const addContact = async (data) => {
    try {
        let response = await axios.post('http://localhost:4040/api/contact',data);
        return response;
    } catch (err) {
        throw err;
    }
}
const updateContact = async (data) => {
    try {
        let response = await axios.put('http://localhost:4040/api/contact',data);
        return response;
    } catch (err) {
        throw err;
    }
}
const getContactById = async (id) => {
    try {
        let response = await axios.get(`http://localhost:4040/api/contact/${id}`);
        return response;
    } catch (err) {
        throw err;
    }
}
const sendMessageToContact = async (data) => {
    try {
        let response = await axios.post(`http://localhost:4040/api/message`,data);
        return response;
    } catch (err) {
        throw err;
    }
}
const getMessages = async () =>{
    try {
        let response = await axios.get(`http://localhost:4040/api/message`);
        return response;
    } catch (err) {
        throw err;
    }
}
export { getContactList, addContact, updateContact,getContactById,sendMessageToContact,getMessages};