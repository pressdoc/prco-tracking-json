# Tracking plan for pr.co 

This README outlines the various json events we want to track for pr.co. Currently we are tracking many events but we are not confident about the accuracy and completeness of the events. This document outlines the key events we want to track in order to make better decisions on our business.

## Goals

**Goal:** Be able to make better decisions trough seeing the right information that is based on the correct data.

**Deliverables:**

Dashboards that enables us to instantly see the following:
*(And know with confidence that the data is correct.)*

1. MRR, ARPU, LTV and Churn. And corresponding growth.
2. Retention and activity of key events and cohorts.
3. Marketing analysis to compare acquisition costs with LTV.
4. Signup funnels: acquisition -> activation -> revenue.

**Enable decisions:**

1. Where to spend Marketing €'s
2. Know where our bottle necks are and optimize them (onboarding)

## Current setup

1. Tracking directly to Google Analytics.
2. Tracking directly to Segment.com 
	A. From Segment.com we are sending all events to Intercom, Keen.io.
	B. And we tracking pixels for Adroll.
3. Revenue events sent from our backend through segment asynchronously


## Key events

We distinguish different kinds of events - those that describe usage of our customers in our application (app metrics) and events that describe usage of visitors in the public facing newsroom (public metrics) and events with a backend trigger (recurring payments, credit card expired).


### App metrics

We'll track the following customer actions in our app:

1. Signed-up user
2. Created Organisation
3. Created Newsroom
4. Created Campaign
5. Published Release
6. Created Contactlist
7. Logged-in User
8. Added Contact 
9. Added Distribution
10. Finalised Campaign
11. Sent distribution
12. Viewed Report
13. Upgraded Subscription
14. Cancelled Subscription
15. Stopped Subscription
16. Charged Payment
17. Created Clipping

Ignoring for now:

* Imported contact-list
* Edited contact


### Public facing metrics

The key events for visitors to public newsrooms are:

1. Opened Email (measured through Mandrill)
2. Clicked Email (measured through Mandrill)
3. Viewed Release


### Time-triggered metrics

Some events are triggered by time or other external factors:

1. Recurred Revenue - event (recognized revenue - usually triggered by user buying a new account / upgrading account)
2. Expired Creditcard (incl. downgrade account)


## Events attributes

We'll be implenting the different events in the order in which they are listed here. Click through for JSON:

- Unknown what order / priorities of any events.
- Recurring revenue now through profitwell.
- Other events -> Analytics?
- And payment details are important as well as should go to GA too.



OLD -->

### 1. Recurring revenue

Ability to Track MRR using cohorts by organization signup date and user signup date. Be able to filter per country, referring channel and package type ( business, startup, enterprise, agency, event) and payment frequency (monthly,  yearly) and group by new, recurring, returned (returning customers that have churned for a few months), upgraded (customers getting a more expensive package) and churned/downgraded.
 
How do we track correctly churned customers?
How to handle refunds and chargebacks? (Right now we are firing negative copies of the same revenue event.)

