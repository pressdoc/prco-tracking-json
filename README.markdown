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
3. Revenue events sent from our backend through segment using a daily cron job(?)


## Key events

We distuingish two kinds of events - those that describe usage of our customers in our application (app metrics) and events that describe usage of visitors in the public facing newsroom (public metrics).

### App metrics
The key user events for our app are:

- create organization account
- create user account
- create newsroom
- publish a news release
- add / update contacts
- send email about release (create 1 or multiple)
- login
- create clipping of news
- make payment
- upgrade / downgrade account
- delete account


### Public metrics

The key events for visitors to public newsrooms are:

- news release activity 
- open / click on email (measured through Mandrill)

### Automatic metrics

Some events are triggered by time or other external factors:

- revenue event (recognized revenue - usually triggered by user buying a new account / upgrading account)
- credit card expired (incl. downgrade account)


## Events attributes

We'll be implenting the different events in the order in which they are listed here. Click through for JSON:

1. [Revenue](/revenue.json)
2. [Create organization](/create_organization.json)
3. [Log in](/log_in.json)
4. [Publish news release](/publish_news_release.json)

