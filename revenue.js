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




// recurring_revenue
{
  "keen": {
    "timestamp": "2015-10-06T01:20:48.906Z",
    "created_at": "2015-10-06T01:20:49.940Z",
    "id": "561321f16f31a21148152baa"
  },
  "net_amount_in_eur": 62,
  "gross_amount_in_eur": 62,
  "start_time": "2015-10-06T01:20:20Z",
  "end_time": "2015-10-06T01:20:20Z",
  "type": "new|returning|recurring|upgrade|refund",
  "order": {
    "id": 28292,
    "discounted": false,
    "currency": "usd",
    "net_amount_in_eur": 123123,
    "gross_amount_in_eur": 123123,
    "start_time": "2015-10-06T01:20:20Z",
    "end_time": "2015-10-06T01:20:20Z"
  },
  "subscription": {
    "id": 45345,
    "created_at": "2015-10-06T01:20:49.940Z",
    "subscription_package": {
      "id": 455,
      "type": "business",
      "slug": "prco_business_yearly",
      "net_amount_in_eur": 123123,
      "gross_amount_in_eur": 123123,
      "description": "pr.co Business yearly",
      "frequency_unit": "year"
    }
  },
  "organisation": {
    "id": 12,
    "country": "US",
    "name": "MentorMe",
    "created_at": "2015-10-06T01:20:20Z",
    "referrer": {
      // Referrer attributed here
      // Include all UTM stuff?
    }
  }
}




// organisation_created
{
  "keen": {
    "timestamp": "2015-10-06T01:20:48.906Z",
    "created_at": "2015-10-06T01:20:49.940Z",
    "id": "561321f16f31a21148152baa"
  },
  "id": 12,
  "country": "US",
  "name": "MentorMe",
  "created_at": "2015-10-06T01:20:20Z",
  "referrer": {
    // Referrer attributed here
    // Include all UTM stuff?
  }
}




// user_visit
{
  "keen": {
    "timestamp": "2015-10-06T01:20:48.906Z",
    "created_at": "2015-10-06T01:20:49.940Z",
    "id": "561321f16f31a21148152baa"
  },
  "id": 14545,
  "first_name": "Jaap",
  "last_name": "de Boer",
  "email": "jaap@pr.co",
  "created_at": "2015-10-06T01:20:20Z",
  "organisation": {
    "id": 12,
    "country": "US",
    "name": "MentorMe",
    "created_at": "2015-10-06T01:20:20Z",
    "referrer": {
      // Referrer attributed here
      // Include all UTM stuff?
    }
  }
}


