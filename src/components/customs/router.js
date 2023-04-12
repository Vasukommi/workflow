import Express from "express";
import { createOrder, getOrder, updateOrder } from "../controllers/printavo/order.js";
import { createSession } from "../controllers/printavo/session.js"
const Router = Express.Router();

//Create session
Router.post('session/createSession', createSession);

// Orders
Router.post('orders/createOrder', createOrder);
Router.post('orders/getOrder', getOrder);
Router.post('orders/updateOrder', updateOrder);