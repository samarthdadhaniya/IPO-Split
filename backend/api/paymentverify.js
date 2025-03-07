// backend/api/paymentverify.js

import crypto from "crypto";

export const verifyPayment = (req, res) => {
  const { razorpay_payment_id, razorpay_order_id, razorpay_signature, orderId } = req.body;

  const secret = process.env.RAZORPAY_KEY_SECRET;

  const hmac = crypto.createHmac("sha256", secret);
  const generatedSignature = hmac.update(razorpay_order_id + "|" + razorpay_payment_id).digest("hex");

  if (generatedSignature === razorpay_signature) {
    // Payment is successful, proceed with further actions (e.g., updating user balance)
    return res.json({ status: "success" });
  } else {
    // Payment verification failed
    return res.status(400).json({ error: "Payment verification failed" });
  }
};
