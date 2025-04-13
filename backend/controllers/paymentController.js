const catchAsyncError = require('../middlewares/catchAsyncError');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

exports.processPayment = catchAsyncError(async (req, res, next) => {
    // Return a fake client secret
    res.status(200).json({
        success: true,
        client_secret: 'pi_fake_client_secret'
    });
});


exports.sendStripeApi  = catchAsyncError(async(req, res, next) => {
    res.status(200).json({
        stripeApiKey: process.env.STRIPE_API_KEY
    })
})

