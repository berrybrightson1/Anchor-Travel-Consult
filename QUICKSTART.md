# Quick Start Guide - Anchor Travel Consult

**Get the portal running in 5 minutes!**

## ✅ Prerequisites
- Node.js 18+ (download from [nodejs.org](https://nodejs.org))
- npm (comes with Node.js)
- Git (optional, for version control)

## 🚀 Installation & Launch

### 1️⃣ Install Dependencies (2 minutes)
```bash
npm install
```

**What this does**: Downloads all required packages (Next.js, Tailwind, Framer Motion, etc.)

### 2️⃣ Start Development Server (1 minute)
```bash
npm run dev
```

**What this does**: Starts the local development server

### 3️⃣ Open in Browser (30 seconds)
```
http://localhost:3000
```

**You should see**:
- Navigation bar at the top
- Hero section with "Your Path to Elite UK Universities"
- Animated cards with value propositions
- Statistics section
- WhatsApp chat button (bottom right, pulsing)

## ✨ What's Included

### 📄 Pages (All Fully Functional)
- **Home** (`/`) - Hero, animations, statistics
- **Opportunities** (`/opportunities`) - Searchable 8-program grid with filters
- **About** (`/about`) - Mission, values, team timeline
- **Contact** (`/contact`) - Form submission, multi-channel contact, office locations

### 🎨 Design Features
- ✅ Navy blue & orange brand colors
- ✅ Custom scrollbars (thin, rounded, navy)
- ✅ No default browser UI (custom focus rings, no native select)
- ✅ Smooth Framer Motion animations
- ✅ Responsive mobile/tablet/desktop
- ✅ Sonner toast notifications

### 🔧 Components Ready to Use
- Navbar with mobile menu
- WhatsApp floating action button
- Responsive combobox (searchable dropdown)
- Animated cards with hover effects
- Contact form with validation
- Custom buttons, inputs, modals

## 🎯 Customization Quick Tips

### Change Brand Colors
Edit `tailwind.config.ts` → search for `navy:` and `orange:`

### Update Contact Information
1. **WhatsApp Number**: `components/whatsapp-fab.tsx` line 8
2. **Email**: `app/contact/page.tsx` around line 80
3. **Phone**: Same files as above
4. **Office Addresses**: `app/contact/page.tsx` around line 130

### Modify Programs List
Edit `app/opportunities/page.tsx` → `PROGRAMS` array (lines ~10-80)

### Change Animations Speed
Edit `tailwind.config.ts` → look for `keyframes` section

### Update Text & Copy
Simply edit the text in `.tsx` files where you see it displayed

## 🛠 Common Commands

| Command | What it does |
|---------|-------------|
| `npm run dev` | Start dev server (http://localhost:3000) |
| `npm run build` | Build for production |
| `npm start` | Run production build |
| `npm run lint` | Check code quality |

## 📱 Mobile Testing

### Test on Different Screen Sizes
1. Open DevTools: `F12` or `Cmd+Option+I`
2. Click device icon (top left of DevTools)
3. Try different devices (iPhone SE, iPad, Desktop)
4. Should be fully functional on all sizes

## 🚀 Deploy to Production

### Option 1: Vercel (Easiest - 5 minutes)
```bash
# 1. Push code to GitHub
git push origin main

# 2. Go to https://vercel.com/new
# 3. Import from GitHub
# 4. Deploy!
# Your app is live in 2 minutes
```

### Option 2: GCP Cloud Run (Scalable - 10 minutes)
```bash
# See DEPLOYMENT.md for full guide
gcloud run deploy anchor-travel-consult \
  --source . \
  --region us-central1 \
  --allow-unauthenticated
```

### Option 3: Hostinger (Budget-Friendly - 15 minutes)
See DEPLOYMENT.md for full guide

## 📚 Learning the Code

### Understanding the Structure
```
app/
  ├── page.tsx              # Home page (animations)
  ├── layout.tsx            # Global navbar & setup
  ├── contact/
  │   ├── page.tsx          # Contact page & form
  │   └── actions.ts        # Form validation (Server Action)
  ├── opportunities/
  │   └── page.tsx          # Filterable program grid
  └── about/
      └── page.tsx          # Mission & values

components/
  ├── navbar.tsx            # Top navigation
  ├── whatsapp-fab.tsx      # Floating WhatsApp button
  └── ui/                   # Reusable UI components
      ├── button.tsx
      ├── input.tsx
      ├── card.tsx
      ├── combobox.tsx      # Custom searchable dropdown
      └── ...
```

### Key Concepts

**Server vs Client Components**
- Pages are **server** by default (fast)
- Add `"use client"` only when you need interactivity (buttons, forms, animations)

**Framer Motion Animations**
```typescript
// Fade in + slide up
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}

// Stagger children
transition={{ staggerChildren: 0.1 }}
```

**Tailwind CSS Classes**
```typescript
// Padding, margin, colors, spacing
className="px-4 py-2 bg-navy-600 text-white rounded-lg"
```

## 🆘 Troubleshooting

### Port 3000 is already in use?
```bash
# Kill the process
# macOS/Linux: lsof -ti:3000 | xargs kill -9
# Windows: netstat -ano | findstr :3000

# Or use a different port
npm run dev -- -p 3001
```

### Dependencies won't install?
```bash
# Delete and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Animations not showing?
- Check browser supports Framer Motion
- Ensure `"use client"` is at top of component
- Restart dev server

### Form not submitting?
- Check browser console (F12) for errors
- Verify all form fields have `required` attribute
- Check toast notification for validation errors

## 📖 Documentation

| Document | Purpose |
|----------|---------|
| [README.md](./README.md) | Full technical documentation |
| [DEVELOPMENT.md](./DEVELOPMENT.md) | Local development guide |
| [DEPLOYMENT.md](./DEPLOYMENT.md) | Production deployment guide |
| [QUICKSTART.md](./QUICKSTART.md) | This file - quick overview |

## ✨ Next Steps

1. **Customize Colors** - Update brand colors in tailwind.config.ts
2. **Update Content** - Change programs, text, contact info
3. **Add Logo** - Place image in `public/` and import to navbar
4. **Setup Email** - Integrate SendGrid or similar for contact form
5. **Deploy** - Push to Vercel, GCP, or Hostinger

## 🎉 You're Ready!

Your Next.js education consultancy portal is **fully functional and production-ready**. All pages are wired, animations smooth, and responsive design tested.

### Need Help?
- **Questions**: Check README.md or DEVELOPMENT.md
- **Deploy**: See DEPLOYMENT.md
- **Customize**: Edit components and tailwind.config.ts

---

**Happy coding!** 🚀

Built with ❤️ by Anchor Travel Consult - UK Education Specialists
