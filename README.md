# Anchor Travel Consult - UK Education Consultancy Portal

A high-fidelity, professional education consultancy portal built with Next.js, Tailwind CSS, and Framer Motion. Designed to showcase UK education opportunities and facilitate student inquiries.

## 🎯 Project Overview

**Anchor Travel Consult** is a UK Education Specialists consultancy platform offering guidance for:
- **Undergraduate Programs** - 3-year bachelor's degrees
- **Master's Programs** - 1-2 year postgraduate programs
- **PhD Programs** - 3-4 year research doctorates

The portal features a modern, responsive design with smooth animations and zero-compromise on user experience.

## 🛠 Tech Stack

### Core Framework
- **Next.js 15** - React App Router for modern, server-first architecture
- **React 19** - Latest React features and hooks
- **TypeScript** - Strict typing for type safety and better DX

### Styling & Components
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **Shadcn/UI** - High-quality, accessible React components
- **Lucide Icons** - Clean, consistent icon library
- **Framer Motion** - Production-grade animation library

### UI & Interactions
- **Radix UI** - Unstyled, accessible primitives for dialogs, popovers, and drawers
- **Sonner** - Beautiful toast notifications (replaces window.alert/confirm)
- **Zod** - TypeScript-first schema validation for forms

### Development Tools
- **ESLint** - Code quality and consistency
- **Tailwind Forms** - Better form styling support

## 📁 Project Structure

```
anchor-travel-consult/
├── app/
│   ├── layout.tsx              # Root layout with navbar & FAB
│   ├── page.tsx                # Home page with hero & animations
│   ├── globals.css             # Global styles & zero-defaults
│   ├── opportunities/
│   │   └── page.tsx            # Filterable opportunities grid
│   ├── about/
│   │   └── page.tsx            # Mission & values content
│   └── contact/
│       ├── page.tsx            # Multi-channel contact form
│       └── actions.ts          # Server actions for form submission
├── components/
│   ├── navbar.tsx              # Navigation with mobile menu
│   ├── whatsapp-fab.tsx        # Pulsing WhatsApp button
│   └── ui/
│       ├── button.tsx          # Styled button component
│       ├── input.tsx           # Form input component
│       ├── card.tsx            # Card layout component
│       ├── combobox.tsx        # Custom searchable select
│       ├── dialog.tsx          # Modal dialog
│       ├── popover.tsx         # Popover trigger
│       └── responsive-modal.tsx # Desktop/mobile modal
├── lib/
│   ├── utils.ts                # Class name merge utility
│   └── hooks/
│       └── use-media-query.ts  # Responsive hook
├── public/                      # Static assets
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind design tokens
├── postcss.config.mjs          # PostCSS configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies & scripts
```

## 🎨 Design System: Zero-Default Rule Implementation

### 1. Custom Scrollbars
- **CSS Target**: `::-webkit-scrollbar`, `::-webkit-scrollbar-track`, `::-webkit-scrollbar-thumb`
- **Design**: Thin (8px), rounded navy blue (#1e3a5f) with light gray track
- **Firefox Support**: `scrollbar-color` and `scrollbar-width` properties

```css
::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-thumb { background: #1e3a5f; border-radius: 4px; }
```

### 2. Focus Rings
- **Replaces**: Default browser outline
- **Implementation**: Orange ring (`ring-2 ring-orange-500`) with 2px offset
- **Applied To**: All interactive elements (buttons, inputs, links)

```css
button:focus-visible, input:focus-visible {
  ring: 2px orange-500 with offset
}
```

### 3. Autofill Styling
- **Issue**: Browser auto-fill styles override custom styling
- **Solution**: Override with transparent backgrounds and custom text colors
```css
input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0 30px white inset;
  -webkit-text-fill-color: #1f2937;
}
```

### 4. Text Selection
- **Color**: Orange background (#f97316) with white text
- **Applied To**: Entire document (::selection, ::-moz-selection)
- **Purpose**: Brand consistency even in selected text

### 5. Browser Defaults Removed
- ✅ Window.alert/confirm → Sonner toast notifications
- ✅ Native <select> → Custom Combobox with search
- ✅ Default outlines → Custom focus rings
- ✅ Browser scrollbars → Styled navy scrollbars
- ✅ Input autofill → Custom styling

## 🎬 Animation Strategies

### Entrance Animations
- **Staggered children**: Each element animates in sequence
- **Duration**: 0.4-0.6s with ease-out timing
- **Direction**: Fade in + slide up (translateY -20px to 0)

### Interaction Animations
- **Hover effects**: Subtle scale (1 → 1.1) and shadow elevation
- **Tap feedback**: Scale down (1 → 0.95) for tactile feel
- **Page transitions**: Fade in + slide up on route change

### Special Effects
- **WhatsApp FAB**: Pulsing ring animation (scale 1 → 1.2 → 1)
- **Navigation mobile**: Smooth height animation for menu collapse
- **Modal entrance**: Zoom in (scale 0.95 → 1) with fade

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### Responsive Modal
- **Desktop**: Centered Dialog component
- **Mobile**: Bottom-sheet style drawer (full width)
- **Hook**: `useMediaQuery("(min-width: 768px)")`

## 🔐 Security Implementation

### Server Actions
All form submissions are handled via **Server Actions** (not client-side API calls):
- **Location**: `app/contact/actions.ts`
- **Validation**: Zod schema validation on server
- **No sensitive data**: Client → Server → Email service only

### Input Validation
```typescript
const ContactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  country: z.string().min(2),
  subject: z.enum([...]),
  message: z.string().min(10),
});
```

### CSRF Protection
Built-in with Next.js 15 Server Actions (automatic token validation)

## 🚀 Pages & Routes

### Home (`/`)
- Hero section with gradient text
- Why UK section with 4 value propositions
- Stats showcase (130+ universities, 50k+ students)
- Call-to-action sections
- Sweet entrance animations with staggered timing

### Opportunities (`/opportunities`)
- Filterable grid of 8 sample programs
- Search by university or program name
- Filter by: Level (Undergrad/Masters/PhD), Duration
- Custom combobox dropdowns (no native <select>)
- Card layout with hover effects

### About (`/about`)
- Mission statement with branded highlighting
- Core values (4 cards with icons)
- Journey timeline (4 milestone years)
- Stats section with navy background
- Team philosophy section

### Contact (`/contact`)
- Multi-channel contact options (WhatsApp, Email, Phone)
- Contact form with validation
- Server action form submission
- Office locations (London & New Delhi)
- Toast notifications for success/error

## 🛠 Installation & Setup

### Prerequisites
- Node.js 18.17+
- npm or yarn

### Quick Start
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open in browser
# http://localhost:3000
```

### Build for Production
```bash
# Create optimized build
npm run build

# Start production server
npm start
```

## 📦 Key Dependencies

| Package | Purpose | Version |
|---------|---------|---------|
| next | React framework | 15.0+ |
| react | UI library | 19.0+ |
| framer-motion | Animations | 11.0+ |
| tailwindcss | Styling | 3.4+ |
| @radix-ui/react-dialog | Modal component | 1.1+ |
| sonner | Toast notifications | 1.4+ |
| zod | Form validation | 3.22+ |
| lucide-react | Icons | 0.341+ |

## 🌐 Deployment

### GCP Deployment (Recommended)

#### Using Cloud Run
```bash
# Install gcloud CLI: https://cloud.google.com/sdk/docs/install

# Authenticate
gcloud auth login

# Set project
gcloud config set project YOUR_PROJECT_ID

# Build and deploy
gcloud run deploy anchor-travel-consult \
  --source . \
  --region us-central1 \
  --platform managed

# Or using Cloud Build with Git integration:
gcloud builds submit --region=us-central1 \
  --config=cloudbuild.yaml
```

#### Using Cloud Build (Git Integration)
Create `cloudbuild.yaml`:
```yaml
steps:
  - name: 'gcr.io/cloud-builders/npm'
    args: ['install']

  - name: 'gcr.io/cloud-builders/npm'
    args: ['run', 'build']

  - name: 'gcr.io/cloud-builders/docker'
    args: ['build', '-t', 'gcr.io/$PROJECT_ID/anchor-travel-consult', '.']

  - name: 'gcr.io/cloud-builders/docker'
    args: ['push', 'gcr.io/$PROJECT_ID/anchor-travel-consult']
```

### Hostinger Deployment

#### Option 1: Git Integration
1. Connect your Git repository (GitHub, GitLab, Bitbucket)
2. Hostinger auto-deploys on push to main branch
3. Configure environment variables in Hostinger panel

#### Option 2: Manual Deployment
```bash
# Build locally
npm run build

# Upload `out/` directory via FTP/SFTP to Hostinger
# Set up Node.js environment on Hostinger
# Configure .env variables
# Restart application server
```

#### Hostinger Environment Variables
```env
NEXT_PUBLIC_API_URL=https://your-domain.com
DATABASE_URL=your_database_url
EMAIL_SERVICE_KEY=your_email_api_key
```

### Vercel Deployment (Easiest)
1. Push code to GitHub
2. Connect to Vercel at https://vercel.com
3. Import project and deploy
4. Auto-deploys on push
5. Built-in Next.js optimization

## 🎯 Best Practices Implemented

✅ **Server Components by Default** - Only use "use client" for interactive elements
✅ **Image Optimization** - All images use next/image with WebP/AVIF formats
✅ **Type Safety** - Strict TypeScript throughout
✅ **Accessibility** - Radix UI primitives, proper ARIA labels
✅ **Performance** - Code splitting, lazy loading, image optimization
✅ **Mobile-First** - Responsive design from 320px upward
✅ **SEO** - Metadata, structured markup, semantic HTML
✅ **Security** - Server actions, input validation, no secrets in client code

## 📝 Environment Variables

Create `.env.local`:
```env
# Email Service (when integrated)
NEXT_PUBLIC_EMAIL_SERVICE=sendgrid
EMAIL_API_KEY=your_api_key

# WhatsApp Business API (optional)
WHATSAPP_API_KEY=your_key

# Analytics
NEXT_PUBLIC_GA_ID=your_ga_id
```

## 🔄 Content Management

To modify content without code changes:

1. **Programs**: Edit `PROGRAMS` array in `app/opportunities/page.tsx`
2. **Features**: Edit `features` array in `app/page.tsx`
3. **Contact Info**: Update WhatsApp/Email/Phone in `components/whatsapp-fab.tsx` and `app/contact/page.tsx`
4. **Colors**: Modify Tailwind tokens in `tailwind.config.ts`

## 🐛 Troubleshooting

### Animations Not Playing
- Ensure Framer Motion is installed: `npm install framer-motion`
- Check `motion` components are imported: `import { motion } from "framer-motion"`

### Focus Ring Not Showing
- Verify focus-visible pseudo-class in tailwind.config.ts
- Check browser supports `:focus-visible` (all modern browsers)

### Combobox Dropdown Positioning
- Ensure parent has `z-50` or higher
- Check for overflow: hidden on parent containers

### WhatsApp Link Not Working
- Update phone number in: `components/whatsapp-fab.tsx`, `app/contact/page.tsx`
- Format: `447700900000` (UK +44 without +)

## 📞 Contact & Support

**Anchor Travel Consult**
- 📧 Email: info@anchortravelconsult.com
- 💬 WhatsApp: +44 7700 900000
- 📍 London Office: 123 Oxford Street, London
- 📍 Delhi Office: 456 Connaught Place, New Delhi

## 📄 License

This project is proprietary and confidential to Anchor Travel Consult.

---

**Built with ❤️ by Anchor Travel Consult - UK Education Specialists**
