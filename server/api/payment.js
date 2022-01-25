const stripeAPI = require("../stripe");



async function createCheckoutSession (req, res) {
    const domainURL = process.env.WEB_URL;
    const { line_items } = req.body;
    const email = req.user.email
    // check req body has line items and email
    if(!line_items || !email) {
        return res.status(400).send("missing required session parameters")
    }

    let session;

    try {
        session = await stripeAPI.checkout.sessions.create({
            payment_method_types: ["card", "alipay", "klarna"],
            mode: "payment",
            line_items,
            customer_email: email,
            success_url: `${domainURL}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${domainURL}/cancelled`,
        });
        res.status(200).json({ sessionId: session.id });    
    }
    catch (error) {
        console.log(error);
        res.status(400).json( { error: "Error, unable to create session" })
    }
}

module.exports = createCheckoutSession;