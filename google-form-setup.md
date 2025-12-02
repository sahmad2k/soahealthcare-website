# SOA Healthcare - Google Form Integration Guide

## Your Google Form Information

**Form URL:** https://forms.gle/g99jDpYMsjBMrfA19  
**Direct Form URL:** https://docs.google.com/forms/d/e/1FAIpQLSdc8RllKSY2qMJL3jUUZExGYrJ6mvmn7e9E3H-Tbu43hrEHig/viewform  
**Form ID:** 1FAIpQLSdc8RllKSY2qMJL3jUUZExGYrJ6mvmn7e9E3H-Tbu43hrEHig

## Form Fields Mapping

The website form fields map to Google Form fields as follows:

| Website Field | Google Form Field | Entry Name |
|---------------|-------------------|------------|
| Full Name | Full Name | entry.2005620554 |
| Email Address | Email Address | entry.1045781291 |
| Phone Number | Phone Number | entry.1065046570 |
| Organization Name | Organization Name | entry.1166974658 |
| Services Needed | Services Needed | entry.839337160 |
| Consultation Type | Consultation Type | entry.2133057438 |
| Urgency Level | Urgency Level | entry.478678846 |
| Project Description | Project Description | entry.700790395 |
| Budget Range | Budget Range | entry.1546767685 |
| Expected Timeline | Expected Timeline | entry.920860389 |

## Pre-filled URL Format

To pre-fill the form, use this URL format:

```
https://docs.google.com/forms/d/e/1FAIpQLSdc8RllKSY2qMJL3jUUZExGYrJ6mvmn7e9E3H-Tbu43hrEHig/viewform?usp=pp_url
&entry.2005620554=John+Doe
&entry.1045781291=john@example.com
&entry.1065046570=555-123-4567
&entry.1166974658=Example+Healthcare
&entry.839337160=Strategic+Consulting
&entry.2133057438=Initial+Assessment
&entry.478678846=High
&entry.700790395=Project+description
&entry.1546767685=$25%2C000+-+%2450%2C000
&entry.920860389=1-3+months
```

## Email Notifications Setup

1. In your Google Form, click "Responses" tab
2. Click the three dots menu (⋮) 
3. Select "Get email notifications for new responses"
4. Add ceo@soahealthcare.net as a recipient

## Data Access

- **Google Forms:** forms.google.com → Your form → Responses tab
- **Google Sheets:** Forms → Responses → Click spreadsheet icon
- **Email:** ceo@soahealthcare.net will receive notifications
- **Export:** From Google Sheets: File → Download → Choose format

## Security Notes

- All data is stored in Google's secure infrastructure
- Form responses are automatically saved to Google Drive
- You can restrict access to the Google Sheet
- Consider enabling two-factor authentication on your Google account

## Website Integration Status

✅ **Form ID Updated:** Your actual form ID (1FAIpQLSdc8RllKSY2qMJL3jUUZExGYrJ6mvmn7e9E3H-Tbu43hrEHig) is now in the code
✅ **Iframe Updated:** Website now embeds your actual Google Form
✅ **JavaScript Updated:** Form submission redirects to your Google Form with pre-filled data
✅ **Documentation Updated:** Complete setup guide with your form information