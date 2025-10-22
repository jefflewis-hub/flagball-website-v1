# Flagball Website - Setup Guide

## Project Overview

This is the official website for Flagball, launching June 2026. The website includes:

- **Home (/)** - Hero page with video background
- **/watch** - Full-screen video player for trailer
- **/rules** - Interactive rules viewer with table of contents
- **/partner** - Partnership inquiry form
- **/faq** - Frequently asked questions with accordion interface

## Getting Started

### Installation

```bash
npm install
```

### Environment Setup

Create a `.env.local` file in the root directory with the following variables:

```env
# Required for partnership form email functionality
RESEND_API_KEY=your_resend_api_key_here

# Optional for Vercel Blob operations
BLOB_READ_WRITE_TOKEN=your_blob_token_here
```

**To get your Resend API Key:**
1. Sign up at [https://resend.com](https://resend.com)
2. Create an API key at [https://resend.com/api-keys](https://resend.com/api-keys)
3. Copy the key and paste it into your `.env.local` file

**Note:** The partnership form will not work without a valid Resend API key.

### Development

```bash
npm run dev
```

Visit `http://localhost:3000` to see the website.

### Build for Production

```bash
npm run build
npm start
```

## Media Assets

### Current Status

The following media assets are configured:

✅ **flagball_landing_video.mp4** - Downloaded from Vercel Blob
- Used on homepage background
- Also used as trailer placeholder in /watch page

⏳ **Missing Assets** (using gradient fallbacks):
- flagball_trailer.mp4 (currently using landing video)
- partner_background.webp (using purple gradient)
- rules_background.webp (using blue gradient)
- faq_background.webp (using dark blue/teal gradient)

### Uploading Missing Assets

To upload missing assets to Vercel Blob:

1. Make sure you have the `.env.local` file with your BLOB_READ_WRITE_TOKEN
2. Upload files to Vercel Blob Storage
3. Update the URLs in the respective page components

Alternatively, you can place image files directly in the `/public` folder and update the component paths.

## Project Structure

```
flagball-website-v1/
├── app/
│   ├── page.tsx              # Home page
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Global styles
│   ├── watch/
│   │   └── page.tsx          # Watch page
│   ├── rules/
│   │   └── page.tsx          # Rules page
│   ├── partner/
│   │   └── page.tsx          # Partner form page
│   └── faq/
│       └── page.tsx          # FAQ page
├── components/
│   ├── Navigation.tsx        # Sticky navigation bar
│   ├── RulesModule.tsx       # Rules viewer component
│   └── FAQAccordion.tsx      # FAQ accordion component
├── public/
│   └── flagball_landing_video.mp4
└── download-assets.js        # Script to download media from Vercel Blob
```

## Customization

### Updating FAQ Content

Edit `/components/FAQAccordion.tsx` and modify the `faqData` array.

### Updating Rules Content

Edit `/components/RulesModule.tsx` and modify the `ruleSections` array.

### Changing Colors/Themes

- Navigation: Edit `/components/Navigation.tsx`
- Background gradients: Edit respective page files in `/app`
- Global styles: Edit `/app/globals.css`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables:
   - `RESEND_API_KEY` (required for partnership form)
   - `BLOB_READ_WRITE_TOKEN` (optional for media)
4. Deploy!

**Important:** Make sure to add your Resend API key in the Vercel project settings under Environment Variables.

### Manual Deployment

```bash
npm run build
```

Then deploy the `.next` folder to your hosting provider.

## Contact

The partnership form (`/partner`) automatically sends inquiries to: **josh@grovehillresearch.com**

The form uses the Resend API to deliver emails directly, including:
- User's contact information
- Organization details
- Reply-to set to the user's email for easy responses

## Technologies Used

- **Next.js 15.5.5** - React framework
- **React 19.1.0** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Resend** - Email delivery API
- **Vercel Blob** - Media storage


