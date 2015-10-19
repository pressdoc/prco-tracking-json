// Revenue metrics:
// Primary goal: Capture events correctly so we can accurately calculate Monthly Recurring Revenue (MRR)

// Do later:
// - Bookings
// - Recognized Revenue (which should be almost identical to MRR)
// - Cash collections (payments)

// *********
// JSON for revenue event 

/**
 * Track MRR:
 * 1. cohorts:
 *    - organization signup date
 *    - user signup date
 * 2. filter per:
 *    - country
 *    - referrering channel
 *    - package type: startup | business | enterprise | agency | event
 *    - payment frequency: monthly | yearly
 * 3. group by:
 *    - new
 *    - recurring
 *    - returned (returning customers that have churned for a few months)
 *    - upgraded (customers getting a more expensive package)
 *    - churned????
 *
 *
 * OPEN QUESTIONS:
 * - How to track churned customers?
 * - How to handle refunds and chargebacks? (Right now we are firing negative copies of the same revenue event.)
 *
 *
 */



{
    // Keep Keen event at the top.
    "keen": {
        "timestamp": "2015-10-06T01:20:48.906Z",
        "created_at": "2015-10-06T01:20:49.940Z",
        "id": "561321f16f31a21148152baa"
    },
    // Store organization details so we can easily cohort these events (by organization and user signup date)
    "organisation": {
        "id": 12,
        "name": "MentorMe",
        "country": "US",
        "signup_date": "2015-10-06T01:20:48.906Z",
        "referrer": {
            // Referrer attributed here
            // Include all UTM stuff?
        }
    },

    // Store event attributes so we can easily filter by revenue type, plan type, order type, 
    "revenue": {
        "net_amount_in_eur": 62,
        "gross_amount_in_eur": 62,
        "type": "new|returning|recurring|upgrade|one-time|refund",
        "order": {
            "start_time": "2015-10-06T01:20:20Z",
            "end_time": "2015-10-06T01:20:20Z",
            "id": 28292,
            "discounted": false, // should this be a % in stead of a boolean?
            "payment_method": {
                "id": 12567123,
                "type": "mastercard | visa | paypal | SEPA | etc."
            },
            "currency": "usd",
            "net_amount_in_eur": 123123,
            "gross_amount_in_eur": 123123,
            "package": {
                "id": 207,
                "slug": "prco_business_yearly",
                "type": "business",
                "description": "pr.co Business yearly",
                "frequency_unit": "year"
            }
        }
    }
}
