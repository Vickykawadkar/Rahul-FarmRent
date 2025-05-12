import React, { useState, useEffect } from "react";
import {
  useElements,
  useStripe,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";
import { orderCompleted } from "../../slices/cartSlice";
import { createOrder } from "../../actions/orderActions";
import { validateShipping } from "../cart/Shipping";
import { clearError as clearOrderError } from "../../slices/orderSlice";

export default function Payment() {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
  const { user } = useSelector((state) => state.authState);
  const { items: cartItems, shippingInfo } = useSelector(
    (state) => state.cartState
  );
  const { error: orderError } = useSelector((state) => state.orderState);

  const [method, setMethod] = useState("");
  const [cardNumberComplete, setCardNumberComplete] = useState(false);
  const [cardExpiryComplete, setCardExpiryComplete] = useState(false);
  const [cardCvcComplete, setCardCvcComplete] = useState(false);

  const isFormComplete =
    cardNumberComplete && cardExpiryComplete && cardCvcComplete;

  const upiApps = ["Paytm", "Google Pay", "PhonePe"];

  const order = {
    orderItems: cartItems,
    shippingInfo,
    itemsPrice: orderInfo.itemsPrice,
    shippingPrice: orderInfo.shippingPrice,
    taxPrice: orderInfo.taxPrice,
    totalPrice: orderInfo.totalPrice,
  };

  useEffect(() => {
    validateShipping(shippingInfo, navigate);
    if (orderError) {
      toast(orderError, {
        position: toast.POSITION.BOTTOM_CENTER,
        type: "error",
        onOpen: () => dispatch(clearOrderError()),
      });
    }
  }, []);

  const handleSuccess = (methodName) => {
    const fakePaymentIntent = {
      id: `${methodName}_123456`,
      status: "succeeded",
    };
    order.paymentInfo = {
      id: fakePaymentIntent.id,
      status: fakePaymentIntent.status,
    };

    toast(`${methodName} payment successful!`, {
      type: "success",
      position: toast.POSITION.BOTTOM_CENTER,
    });

    dispatch(orderCompleted());
    dispatch(createOrder(order));
    navigate("/order/success");
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!isFormComplete) {
      toast("Please fill all card details.", {
        type: "error",
        position: toast.POSITION.BOTTOM_CENTER,
      });
      return;
    }
    document.querySelector("#pay_btn").disabled = true;
    try {
      await new Promise((res) => setTimeout(res, 500));
      handleSuccess("Card");
    } catch {
      toast("Something went wrong", {
        type: "error",
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
  };

  return (
    <div className="container mt-5">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-5 text-center fw-bold"
      >
        Choose Your Payment Method
      </motion.h2>

      <motion.div
        className="d-flex justify-content-center flex-wrap gap-4 mb-5"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`btn btn-lg px-4 py-2 fw-semibold shadow-sm border-2 border-primary ${
            method === "card" ? "btn-primary text-white" : "btn-outline-primary"
          }`}
          onClick={() => setMethod("card")}
        >
          💳 Card
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`btn btn-lg px-4 py-2 fw-semibold shadow-sm border-2 border-success ${
            method === "upi" ? "btn-success text-white" : "btn-outline-success"
          }`}
          onClick={() => setMethod("upi")}
        >
          🪙 UPI
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="btn btn-lg px-4 py-2 fw-semibold shadow-sm border-2 btn-outline-dark"
          onClick={() => handleSuccess("CashOnDelivery")}
        >
          🚚 Cash on Delivery
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {method === "card" && (
          <motion.div
            className="row justify-content-center"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="col-12 col-md-6">
              <form onSubmit={submitHandler} className="shadow-lg p-4 rounded bg-white">
                <h4 className="mb-4 text-center">Card Information</h4>

                <div className="form-group mb-3">
                  <label htmlFor="card_num_field">Card Number</label>
                  <CardNumberElement
                    id="card_num_field"
                    className={`form-control ${!cardNumberComplete ? "is-invalid" : ""}`}
                    onChange={(e) => setCardNumberComplete(e.complete)}
                  />
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="card_exp_field">Card Expiry</label>
                  <CardExpiryElement
                    id="card_exp_field"
                    className={`form-control ${!cardExpiryComplete ? "is-invalid" : ""}`}
                    onChange={(e) => setCardExpiryComplete(e.complete)}
                  />
                </div>

                <div className="form-group mb-4">
                  <label htmlFor="card_cvc_field">Card CVC</label>
                  <CardCvcElement
                    id="card_cvc_field"
                    className={`form-control ${!cardCvcComplete ? "is-invalid" : ""}`}
                    onChange={(e) => setCardCvcComplete(e.complete)}
                  />
                </div>

                <button
                  id="pay_btn"
                  type="submit"
                  className="btn btn-primary btn-block w-100 py-2 fw-bold"
                  disabled={!isFormComplete}
                >
                  Pay ₹{orderInfo && orderInfo.totalPrice}
                </button>
              </form>
            </div>
          </motion.div>
        )}

        {method === "upi" && (
          <motion.div
            className="row justify-content-center"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="col-12 col-md-6">
              <div className="shadow-lg p-4 rounded bg-light">
                <h4 className="mb-4 text-center">Choose UPI App</h4>
                <div className="d-grid gap-4">
                  {upiApps.map((app) => (
                    <motion.button
                      key={app}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      className="btn btn-outline-success btn-lg fw-semibold py-2 shadow-sm"
                      onClick={() => handleSuccess(app.replace(" ", ""))}
                    >
                      📱 {app}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
