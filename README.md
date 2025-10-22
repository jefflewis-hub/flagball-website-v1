# FLAGBALL Website

Official website for FLAGBALL - Coming June 2026

![FLAGBALL](https://img.shields.io/badge/Launch-June%202026-blue)
![Next.js](https://img.shields.io/badge/Next.js-15.5.5-black)
![React](https://img.shields.io/badge/React-19.1.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)

## 🏈 About

FLAGBALL is revolutionizing the sport of football. This website serves as the digital presence for the league launching in June 2026.

## 🚀 Quick Start

### Prerequisites

- Node.js 20+ installed
- npm or yarn package manager

### Installation

```bash
# Clone the repository (if applicable)
git clone [your-repo-url]

# Navigate to project directory
cd flagball-website-v1

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the website.

## 📁 Project Structure

```
flagball-website-v1/
├── app/
│   ├── page.tsx                 # Home page (hero with video)
│   ├── layout.tsx               # Root layout with metadata
│   ├── globals.css              # Global styles
│   ├── watch/
│   │   └── page.tsx            # Full-screen video player
│   ├── rules/
│   │   └── page.tsx            # Interactive rules viewer
│   ├── partner/
│   │   └── page.tsx            # Partnership form
│   └── faq/
│       └── page.tsx            # FAQ with accordions
├── components/
│   ├── Navigation.tsx           # Sticky navigation bar
│   ├── RulesModule.tsx          # Rules table of contents & viewer
│   └── FAQAccordion.tsx         # FAQ accordion component
├── public/
│   └── flagball_landing_video.mp4
└── package.json
```

## 🎨 Features

### Home Page (`/`)
- Full-screen video background (looping)
- Dark overlay for readability
- Centered FLAGBALL branding
- "Coming June 2026" subtitle
- Sticky transparent navigation

### Watch Page (`/watch`)
- Full-screen video player
- Auto-plays on load
- Returns to home on video end or close button click
- Native video controls

### Rules Page (`/rules`)
- Interactive table of contents (left panel)
- Scrollable content area (right panel)
- Navigation arrows for page-by-page viewing
- 17 comprehensive rule sections including:
  - Field specifications
  - Equipment requirements
  - Game play rules
  - Penalties and remedies
  - Referee signals

### Partner Page (`/partner`)
- Clean, centered form design
- Fields: First Name, Email, Organization, Organization Website
- Direct email delivery via Resend API
- Real-time validation and error handling
- Success confirmation messaging
- Responsive design

### FAQ Page (`/faq`)
- Accordion-style interface
- Three main sections:
  - League Format
  - Rules
  - Players
- Smooth expand/collapse animations
- Scrollable content area

## 🎯 Navigation

All pages include a sticky navigation bar with:
- FLAGBALL logo (links to home)
- Watch
- Rules
- Partner
- FAQ

Navigation has transparent background and white text for visibility over video/gradient backgrounds.

## 🎨 Design System

### Colors
- **Primary**: Dark gradients and overlays
- **Text**: White on dark backgrounds
- **Accents**: Modern gradient backgrounds per page
  - Partner: Purple gradient (#667eea → #764ba2)
  - Rules: Blue gradient (#1e3c72 → #2a5298)
  - FAQ: Dark teal gradient (#0f2027 → #2c5364)

### Typography
- **Primary Font**: Geist Sans
- **Monospace Font**: Geist Mono
- **Headers**: Bold, extra-large tracking
- **Body**: Clean, readable sans-serif

### Layout
- Responsive design
- Full-screen sections
- Centered content
- Maximum width constraints for readability

## 📦 Tech Stack

- **Framework**: Next.js 15.5.5 (App Router)
- **UI Library**: React 19.1.0
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Email**: Resend API
- **Video Hosting**: Vercel Blob Storage
- **Deployment**: Vercel (recommended)

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file with the following variables:

```env
# Required for sending partnership inquiry emails
RESEND_API_KEY=your_resend_api_key_here

# Optional for Vercel Blob operations
BLOB_READ_WRITE_TOKEN=your_token_here
```

**Setting up Resend:**
1. Sign up at [https://resend.com](https://resend.com)
2. Create an API key at [https://resend.com/api-keys](https://resend.com/api-keys)
3. Add your API key to `.env.local`
4. For production, add the environment variable to your hosting provider (e.g., Vercel)

### Package Scripts

```bash
# Development with Turbopack
npm run dev

# Production build
npm run build

# Start production server
npm start
```

## 🎥 Media Assets

### Current Assets

✅ **flagball_landing_video.mp4** - Hero background video (downloaded from Vercel Blob)

### Vercel Blob Storage

The website uses Vercel Blob for video hosting:
- CDN-optimized delivery
- Automatic compression
- Global distribution

Video URL: `https://mdvxiezrgfyljoqh.public.blob.vercel-storage.com/flagball_landing_video.mp4`

### Adding New Media

1. Upload to Vercel Blob Storage
2. Update component paths
3. Or place files in `/public` directory

## 📧 Contact Form

The partnership form (`/partner`) automatically sends email inquiries to:

**josh@grovehillresearch.com**

Form submissions are sent directly through the website using Resend API:
- Subject: "New Partnership Inquiry - Flagball"
- From: Flagball Partnership Form
- Reply-To: User's email address
- Content: Name, email, organization, and website

The form includes validation, loading states, and success/error messaging for a seamless user experience.

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import repository in Vercel
3. Configure environment variables (if needed)
4. Deploy!

Vercel automatically:
- Builds the Next.js app
- Optimizes assets
- Provides CDN distribution
- Enables automatic deployments on push

### Manual Deployment

```bash
# Build for production
npm run build

# Output will be in .next/ directory
# Deploy .next/ folder to your hosting provider
```

## 📱 Responsive Design

The website is fully responsive:
- Mobile: Stacked layouts, touch-friendly navigation
- Tablet: Optimized spacing and typography
- Desktop: Full multi-column layouts

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Screen reader friendly
- High contrast text
- Focus indicators

## 🐛 Troubleshooting

### Video not playing?
- Check browser compatibility (modern browsers required)
- Ensure video URL is accessible
- Check autoplay policies in your browser

### Build errors?
- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`
- Check Node.js version (20+ required)

### Styling issues?
- Tailwind CSS 4 uses a new engine
- Check for conflicting CSS
- Verify `globals.css` is imported in `layout.tsx`

## 📝 License

© 2026 FLAGBALL. All rights reserved.

## 🤝 Contributing

For partnership opportunities or inquiries:
- Email: josh@grovehillresearch.com
- Website: [Use Partner Form](/partner)

## 📞 Support

For technical support or questions about this website, please contact the development team.

---

**Built with ❤️ for the future of football**

*FLAGBALL - Coming June 2026*
