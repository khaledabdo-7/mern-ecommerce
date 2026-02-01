import express from "express";
import {
  placeOrder,
  userOrders,
  allOrders,
  updateStatus,
} from "../controllers/orderController.js";
import authUser from "../middleware/auth.js";
import adminAuth from "../middleware/adminAuth.js"; // لازم يكون عندك الملف ده

const orderRouter = express.Router();

// 1. روابط خاصة بالأدمن (Admin Panel)
orderRouter.post("/list", adminAuth, allOrders); // ده اللي كان عامل 404
orderRouter.post("/status", adminAuth, updateStatus); // ده عشان تغيير حالة الطلب

// 2. روابط خاصة بالمستخدم (Payment Features)
orderRouter.post("/place", authUser, placeOrder);

// 3. روابط استعراض طلبات المستخدم
orderRouter.post("/userorders", authUser, userOrders);

export default orderRouter;
