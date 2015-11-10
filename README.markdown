# Tracking plan for pr.co 

This README outlines the key events in tracking the success of how pr.co is used by it's customers.

## Goal

1. Understand how customers use our software so that we can make better decisions about marketing, pricing and product improvements.
2. Track value of pr.co to customers and show that value back to our customers.

## Deliverables

1. Revenue dashboard
	- Dashboard to give understanding about:
		- MRR, ARPU, LTV and Churn.
		- Retention / cohort activity of key events
		- Aimed at showing growth over time.
	- Using profitwell
		- Transactions added via their API
		- Comes from server side 'Charged Payment' events
		- Profitwell handles MRR calculations (we only send transactions)

2. Marketing dashboard
	- Marketing analysis to compare acquisition costs with LTV.
	- Signup funnels: acquisition -> activation -> revenue.
	- Using Simplyinsight as our dashboard (formerly Datayak)
	- Use to track Acquisition campaigns and decide on marketing spend

3. Enable in depth analysis
	- Understand specific customer behaviour better:
		- e.g. funnels, drip campaigns, content marketing 
	- Use keen.io to track mostly everything
	- Use keen.io explorer + API to analyze.
	- Retention campaigns - drip / retention emails / retargeting

4. Provide customer facing analytics
	- TBD - ETA Feb 2016
	- Goal is to provide customers with better statistics
	- Show stats per newsroom (not just per campaign)
	- Make it super fast (cached keen.io ?)


## Current setup

1. Tracking everything through Segment.com then to:
	- Keen.io
	- Google Analytics
	- Intercom
	- Adroll
2. Most events are tracked server side - page views and order events for Adroll are tracked client side.
3. Dashboards / admins to view data:
	- Keen.io explorer
	- Google Analytics
	- Intercom for customer support + drip campaigns
	- pr.co Admin - orders / charging middleware to interface with Adyen

## Event list

Find the [event list here](/Event_list.markdown).



## Notes on MRR tracking

Ability to Track MRR using cohorts by organization signup date and user signup date. Be able to filter per country, referring channel and package type ( business, startup, enterprise, agency, event) and payment frequency (monthly,  yearly) and group by new, recurring, returned (returning customers that have churned for a few months), upgraded (customers getting a more expensive package) and churned/downgraded.
