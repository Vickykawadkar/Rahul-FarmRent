import { useElements, useStripe, CardNumberElement, CardExpiryElement, CardCvcElement } from "@stripe/react-stripe-js";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { orderCompleted } from "../../slices/cartSlice";
import { validateShipping } from '../cart/Shipping';
import { createOrder } from '../../actions/orderActions';
import { clearError as clearOrderError } from "../../slices/orderSlice";

export default function Payment() {
    const stripe = useStripe();
    const elements = useElements();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const orderInfo = JSON.parse(sessionStorage.getItem('orderInfo'));
    const { user } = useSelector(state => state.authState);
    const { items: cartItems, shippingInfo } = useSelector(state => state.cartState);
    const { error: orderError } = useSelector(state => state.orderState);

    const [cardNumberComplete, setCardNumberComplete] = useState(false);
    const [cardExpiryComplete, setCardExpiryComplete] = useState(false);
    const [cardCvcComplete, setCardCvcComplete] = useState(false);

    const isFormComplete = cardNumberComplete && cardExpiryComplete && cardCvcComplete;

    const paymentData = {
        amount: Math.round(orderInfo.totalPrice * 100),
        shipping: {
            name: user.name,
            address: {
                city: shippingInfo.city,
                postal_code: shippingInfo.postalCode,
                country: shippingInfo.country,
                state: shippingInfo.state,
                line1: shippingInfo.address
            },
            phone: shippingInfo.phoneNo
        }
    };

    const order = {
        orderItems: cartItems,
        shippingInfo,
        itemsPrice: orderInfo.itemsPrice,
        shippingPrice: orderInfo.shippingPrice,
        taxPrice: orderInfo.taxPrice,
        totalPrice: orderInfo.totalPrice
    };

    useEffect(() => {
        validateShipping(shippingInfo, navigate);
        if (orderError) {
            toast(orderError, {
                position: toast.POSITION.BOTTOM_CENTER,
                type: 'error',
                onOpen: () => dispatch(clearOrderError())
            });
        }
    }, []);

    const submitHandler = async (e) => {
        e.preventDefault();

        if (!isFormComplete) {
            toast("Please fill out all card details correctly.", {
                type: "error",
                position: toast.POSITION.BOTTOM_CENTER
            });
            return;
        }

        document.querySelector('#pay_btn').disabled = true;

        try {
            await new Promise((res) => setTimeout(res, 500)); // Simulate delay

            const fakePaymentIntent = {
                id: "pi_fake_123456789",
                status: "succeeded"
            };

            toast('Payment Success! (Simulated)', {
                type: 'success',
                position: toast.POSITION.BOTTOM_CENTER
            });

            order.paymentInfo = {
                id: fakePaymentIntent.id,
                status: fakePaymentIntent.status
            };

            dispatch(orderCompleted());
            dispatch(createOrder(order));
            navigate('/order/success');

        } catch (error) {
            toast('Something went wrong', {
                type: 'error',
                position: toast.POSITION.BOTTOM_CENTER
            });
            document.querySelector('#pay_btn').disabled = false;
        }
    };

    return (
        <div className="row wrapper">
            <div className="col-10 col-lg-5">
                <form onSubmit={submitHandler} className="shadow-lg">
                    <h1 className="mb-4">Card Info</h1>

                    <div className="form-group">
                        <label htmlFor="card_num_field">Card Number</label>
                        <CardNumberElement
                            id="card_num_field"
                            className={`form-control ${!cardNumberComplete ? 'is-invalid' : ''}`}
                            onChange={(e) => setCardNumberComplete(e.complete)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="card_exp_field">Card Expiry</label>
                        <CardExpiryElement
                            id="card_exp_field"
                            className={`form-control ${!cardExpiryComplete ? 'is-invalid' : ''}`}
                            onChange={(e) => setCardExpiryComplete(e.complete)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="card_cvc_field">Card CVC</label>
                        <CardCvcElement
                            id="card_cvc_field"
                            className={`form-control ${!cardCvcComplete ? 'is-invalid' : ''}`}
                            onChange={(e) => setCardCvcComplete(e.complete)}
                        />
                    </div>

                    <button
                        id="pay_btn"
                        type="submit"
                        className="btn btn-block py-3"
                        disabled={!isFormComplete}
                    >
                        Pay - {`₹${orderInfo && orderInfo.totalPrice}`}
                    </button>
                </form>
            </div>
        </div>
    );
}
