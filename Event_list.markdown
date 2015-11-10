# Events to be tracked

We're going to track 17 events:

## Implemented:

1. Signed-up user:
	* trigger: "first|invited"
	* referral: user.source
	* was_referred: referral.present? (boolean) (Keen.io referral plugin?)

2. Created Organisation

3. Created Newsroom
 

4. Created Campaign
	* type: "freeform|classic"

5. Published Release
	* type: "freeform|classic"
	* has_distributions: distribution.count > 0 (boolean)
	* distribution_count: distribution.count
	* has_uploaded_header: featured_image.present? (boolean)
	* was_scheduled: !release.publish_immediately? (boolean)
	* time_between_creation_and_publish: release_date - creation_date (DateTime)
	* language: language (String)

6. Created Contactlist
 	* type: "presslist|segment"

7. Logged-in User (still need to work out implementation details)

8. Added Contact
	* part_of_import: uploaded as part of an import? (boolean)
 	* added_to_presslist: Uploaded to a presslist, rather than a segment (boolean)

9. Added Distribution
	* type: "email|facebook|linkedin" etc (currently only email supported)
	* embargo: distribution.embargo? (boolean)
	* number_of_recipients: recipients.count (integer)
	* sent_test_email: boolean

10. Finalised Campaign
	* type: "freeform|classic"
	* scheduled: publish_immediately? (boolean)
	* has_distributions: distributions.not_deleted.count > 0 (boolean)
	* distribution_count: distributions.not_deleted.count
	* has_uploaded_header: featured_image.present? (boolean)
	* time_between_creation_and_finalised: Time.now - creation_date (DateTime)
	* split_stage_distributions: distributions occurring now and later (boolean)
	* early_distribution_count: integer
	* late_distribution_count: integer

11. Sent distribution
	* type: "email|facebook|linkedin" (currently only email supported)
	* recipient_count: emails.count (integer)
	* was_sent_under_embargo: embargo? (boolean)
	* release_type: "classic|freeform"
	* time_between_creation_and_send: Time.now - created_at (DateTime)

12. Viewed Report
	* was_anonymous: anonymous? (boolean)
	* were_emails_sent: release.campaigns.emails.count > 0 (boolean)
	* emails_sent_count: release.campaigns.emails.count
	* share_count: release.total_share_count
	* open_count: release.opens.count
	* open_percentage: release.opens.count / emails_sent_count
	* click_count: release.clicks.count
	* click_percentage: release.clicks.count / emails_sent_count
	* pageview_count: release.pageviews
	* has_clippings: release.clippings.count > 0
	* clippings_count: release.clippings.count

13. Upgraded Subscription
	* old_plan: parent.subscription_package.slug (eg "prco_business_monthly")
	* new_plan: subscription_package.slug (eg "prco_enterprise_monthly")
	* old_plan_frequency: "month|year"
	* new_plan_frequency: "month|year"
	* frequency_change: old_plan_frequency > new_plan_frequency ? "longer" : "shorter"
	* old_amount: parent.cost
	* new_amount: cost
	* old_plan_type: "startup|business|enterprise|custom|oneoff"
	* new_plan_type: "startup|business|enterprise|custom|oneoff"

14. Cancelled Subscription
	* plan: slug (eg "prco_enterprise_monthly")
	* frequency: "month|year"
	* number_of_orders: orders.count (eg 3)
	* time_until_next_payment: next_payment_at - Time.now (eg 3 days)
	* percentage_through_payment_period: (next_payment_at - Time.now) / "month|year"
	* payment_amount: orders.last.amount (integer)
	* has_valid_payment_method: (boolean)
	* payment_method_type: "credit_card|direct_debit|paypal" (String)

15. Charged Payment
	* plan: subscription.subscription_package.slug (eg "prco_business_monthly")
	* plan_type: "startup|business|enterprise|custom|oneoff"
	* amount: amount (eg 50)
	* has_vat: tax_amount.present? (boolean)
	* location: subscription.billing_country (eg "The Netherlands")

16. Created Clipping
	* has_pressdoc: pressdoc.present? (boolean)
	* language: language (eg "Dutch")
	* is_private: private? (boolean)
	* does_show_live_webpage: show_live_webpage? (boolean)
	* source: source (eg "www.theguardian.com")

17. Stopped Subscription
	* has_valid_payment_method: (boolean)
	* payment_method_type: "credit_card|direct_debit|paypal"
	* in_grace_period: in_grace_period? (boolean)
	* was_stopped_because_of_refused_payment: (boolean)
	* was_stopped_because_of_overdue_payment: (boolean)


## Fields to send with every event:

For each event we'll send the user and organisation objects, this so that we can cohort users / organisations for each of the events and see changes over time. They'll have the following properties:

```ruby
# user properties

user_properties: {
	firstName:						first_name,
	lastName:						last_name,
	email:							email,
	createdAt:						created_at != nil ? created_at.to_datetime : Time.now,
	has_pressrooms:					self.companies.count >= 1,
	has_pressdocs:					self.companies.map(&:pressdocs).flatten.count >= 1,
	has_contacts:					self.contacts.count >= 1,
	has_campaigns:					self.campaigns.count >= 1,
	has_pressmarks:					self.companies.map(&:pressmarks).flatten.count >= 1,
	last_login:						self.current_sign_in_at,
	owner:							self.organisations.any?{|o| o.email == self.email},
	system_notifications_enabled:	self.system_notifications_enabled,
	subscriber:						self.subscriber?
}

# organisation properties

organisation_properties: {
	remote_created_at:				created_at != nil ? created_at.to_i : Time.now.to_i,
	name:							self.name,
	monthlySpend:					monthly_payment_amount,
	plan:							self.active_subscription.present? ? self.active_subscription.subscription_package.slug : "No subscription",
	company_id:						self.id,
	email:							email,
	has_pressrooms:					self.companies.count >= 1,
	has_pressdocs:					self.companies.map(&:pressdocs).flatten.count >= 1,
	total_revenue:					self.orders.invoiced.sum(:net_amount).to_f/100,
	has_orders:						self.orders.count >= 1,
	has_subscriptions:				self.subscriptions.active.count >= 1,
	has_trial_subscription:			self.active_subscription != nil ? self.active_subscription.trial? : false,
	default_currency:				self.currency,
	trial_days_left:				active_subscription != nil && active_subscription.trial? == true ? active_subscription.trial_days_left : 0,
	part_of_subscription:			self.part_of_subscription?,
	currency:						self.currency,
}
```
