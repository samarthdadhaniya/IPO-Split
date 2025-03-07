// backend/api/create-order.js (for example)
import Razorpay from 'razorpay';

const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export const createRazorpayOrder = async (req, res) => {
  const { amount } = req.body;

  try {
    const order = await razorpayInstance.orders.create({
      amount: amount * 100, // Convert amount to paise
      currency: 'INR',
      receipt: `order_rcptid_${Math.random() * 1000}`,
    });

    return res.json({ orderId: order.id, amount: order.amount });
  } catch (error) {
    return res.status(500).json({ error: 'Payment order creation failed' });
  }
};
