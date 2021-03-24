import axios from 'axios';

//Post na table produtos adquiridos
const apiCreateOrder = axios.create({
    baseURL: 'https://dd6kzmyf1f.execute-api.us-east-1.amazonaws.com/prod/order'
})

//Envia email de compra
const apiSendOrderEmail = axios.create({
    baseURL: 'https://dd6kzmyf1f.execute-api.us-east-1.amazonaws.com/prod/sendOrder'
})

const apiListOrders = axios.create({
    baseURL: 'https://dd6kzmyf1f.execute-api.us-east-1.amazonaws.com/prod/listOrders'
})

export  {apiCreateOrder, apiSendOrderEmail, apiListOrders};