const axios = require('axios');
let apiUrl = "http://3.133.87.196:4040/api";
const getContactList = async () => {
    try {
        let response = await axios.get(`${apiUrl}/contact`);
        return response;
    } catch (err) {
        throw err;
    }
}
const addContact = async (data) => {
    try {
        let response = await axios.post(`${apiUrl}/contact`,data);
        return response;
    } catch (err) {
        throw err;
    }
}
const updateContact = async (data) => {
    try {
        let response = await axios.put(`${apiUrl}/contact`,data);
        return response;
    } catch (err) {
        throw err;
    }
}
const getContactById = async (id) => {
    try {
        let response = await axios.get(`${apiUrl}/contact/${id}`);
        return response;
    } catch (err) {
        throw err;
    }
}
const sendMessageToContact = async (data) => {
    try {
        let response = await axios.post(`${apiUrl}/message`,data);
        return response;
    } catch (err) {
        throw err;
    }
}
const getMessages = async () =>{
    try {
        let response = await axios.get(`${apiUrl}/message`);
        return response;
    } catch (err) {
        throw err;
    }
}
export { getContactList, addContact, updateContact,getContactById,sendMessageToContact,getMessages};