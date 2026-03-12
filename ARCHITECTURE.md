# Architecture - Anchor Travel Consult Portal

## 🏗 System Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                         CDN / Browser                           │
│              (Vercel, GCP Cloud Run, or Hostinger)             │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────────┐
│                    Next.js 15 Server                            │
│                   (App Router Pattern)                          │
├─────────────────────────────────────────────────────────────────┤
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────┐  │
│  │   Route Pages    │  │   Server Actions │  │  Middleware  │  │
│  │  ├─ /            │  │  ├─ Form Submit  │  │  ├─ Auth     │  │
│  │  ├─ /about       │  │  └─ Validation   │  │  └─ Logging  │  │
│  │  ├─ /opp         │  │                  │  └──────────────┘  │
│  │  └─ /contact     │  │                  │                    │
│  └──────────────────┘  └──────────────────┘                    │
└────────────────────────┬────────────────────────────────────────┘
                         │
         ┌───────────────┼───────────────┐
         │               │               │
         ▼               ▼               ▼
    ┌─────────┐   ┌────────────┐   ┌──────────┐
    │ Browser │   │ Email API  │   │ Analytics│
    │  (React)│   │ (SendGrid) │   │ (GA)     │
    └─────────┘   └────────────┘   └──────────┘
```

---

## 📁 Layered Architecture

### Layer 1: Presentation (Client Components)
```
components/
├── navbar.tsx                    # Navigation (use client)
├── whatsapp-fab.tsx             # Floating button (use client)
└── ui/                          # Reusable UI (mixed)
    ├── button.tsx               # Server by default
    ├── input.tsx                # Server by default
    ├── combobox.tsx             # Client (stateful)
    └── dialog.tsx               # Server (Radix primitive)
```

### Layer 2: Pages (Route Handlers)
```
app/
├── layout.tsx                   # Server (Global shell)
├── page.tsx                     # Server (Hero content)
├── opportunities/page.tsx       # Client (Filters)
├── about/page.tsx               # Server (Static content)
└── contact/page.tsx             # Client (Form)
```

### Layer 3: Business Logic (Server Actions)
```
app/contact/actions.ts           # Form submission logic
- Zod validation
- Error handling
- Response formatting
```

### Layer 4: Data & Styling
```
lib/
├── utils.ts                     # Shared utilities
└── hooks/
    └── use-media-query.ts       # Custom hooks

tailwind.config.ts               # Design tokens
globals.css                      # Base styles
```

---

## 🔄 Data Flow

### Page Load Flow
```
User visits /opportunities
         │
         ▼
Browser requests page from server
         │
         ▼
Next.js Server:
  ├─ Renders React tree
  ├─ Loads Framer Motion
  ├─ Applies Tailwind CSS
  └─ Sends optimized HTML
         │
         ▼
Browser receives HTML
         │
         ├─ Parse & display (fast!)
         ├─ Load React (hydration)
         └─ Enable interactivity
         │
         ▼
User sees page with animations ready
```

### Form Submission Flow
```
User fills contact form
         │
         ▼
User clicks "Send Message"
         │
         ▼
React captures form data
         │
         ▼
Calls Server Action: submitContactForm()
         │
         ▼
Server validates with Zod schema
         ├─ Valid? ─────> Process & send email
         └─ Invalid? ──> Return validation errors
         │
         ▼
Toast notification shows result
         │
         ├─ Success: "Message sent!" (green)
         └─ Error: "Invalid email" (red)
```

### Filter Flow (Opportunities)
```
User clicks Level dropdown
         │
         ▼
Combobox opens with search
         │
         ▼
User types "Masters"
         │
         ▼
React (client) filters locally:
  - ProgramList = PROGRAMS.filter(p => p.level === "Masters")
         │
         ▼
Grid re-renders with matching cards
```

---

## 🎯 Component Hierarchy

```
<RootLayout>
  ├── Navbar
  │   ├── Logo
  │   ├── Nav Links (Desktop)
  │   ├── Mobile Menu
  │   └── CTA Button
  │
  ├── <Page Routes>
  │   ├── Home
  │   │   ├── Hero Section
  │   │   ├── Features Grid
  │   │   ├── Stats Section
  │   │   └── CTA Banner
  │   │
  │   ├── Opportunities
  │   │   ├── Filters
  │   │   │   ├── Search Input
  │   │   │   ├── Level Combobox
  │   │   │   └── Duration Combobox
  │   │   └── Programs Grid
  │   │       └── [Program Card] x 8
  │   │
  │   ├── About
  │   │   ├── Mission Banner
  │   │   ├── Values Grid
  │   │   ├── Timeline
  │   │   └── Stats Section
  │   │
  │   └── Contact
  │       ├── Contact Options
  │       │   ├── WhatsApp Card
  │       │   ├── Email Card
  │       │   └── Phone Card
  │       ├── Contact Form
  │       └── Office Locations
  │
  ├── WhatsAppFAB
  │
  └── Toaster (notifications)
```

---

## 🔐 Security Architecture

### Client-Side Security
```
Browser
  ├─ No secrets in code
  ├─ Form data validation (client feedback)
  ├─ XSS prevention (React escapes)
  └─ CSRF protection (Next.js handled)
```

### Server-Side Security
```
Next.js Server
  ├─ Zod schema validation
  │   ├─ String min/max lengths
  │   ├─ Email format validation
  │   ├─ Enum validation (subject)
  │   └─ Type coercion
  │
  ├─ Input sanitization
  │   ├─ Trim whitespace
  │   └─ Validate against schema
  │
  ├─ Error handling
  │   ├─ User-friendly messages
  │   └─ Log actual errors
  │
  └─ Rate limiting (when integrated)
      └─ Prevent form spam
```

### Deployment Security
```
Production
  ├─ HTTPS/SSL enforced
  ├─ Security headers
  │   ├─ X-Frame-Options: DENY
  │   ├─ X-Content-Type-Options: nosniff
  │   ├─ X-XSS-Protection: 1; mode=block
  │   └─ Strict-Transport-Security
  │
  ├─ Environment variables
  │   ├─ Secrets in .env.production
  │   └─ Never committed to git
  │
  └─ CORS configured
      └─ Restrict cross-origin requests
```

---

## 🎨 Styling Architecture

### Design Token Hierarchy
```
tailwind.config.ts
  ├─ Colors
  │   ├─ navy (primary, 5 shades)
  │   └─ orange (accent, 5 shades)
  │
  ├─ Spacing
  │   └─ Tailwind defaults + custom
  │
  ├─ Typography
  │   ├─ Font family
  │   └─ Line height scales
  │
  ├─ Animations
  │   ├─ fadeIn
  │   ├─ slideUp
  │   └─ scaleIn
  │
  └─ Plugins
      ├─ Tailwind Forms
      └─ Custom scrollbar styles
```

### CSS Specificity
```
1. Tailwind utility classes (applied in components)
2. Component-scoped styles (via tailwind classes)
3. Global base styles (globals.css)
4. Browser defaults (overridden by base)

Priority: Utilities > Components > Base > Browser
```

### Responsive Strategy
```
Breakpoints:
  ├─ mobile:   < 640px   (default styles)
  ├─ sm:       ≥ 640px   (small devices)
  ├─ md:       ≥ 768px   (tablets)
  ├─ lg:       ≥ 1024px  (laptops)
  └─ xl:       ≥ 1280px  (desktops)

Pattern: Mobile-first
  ├─ Write base styles for mobile
  ├─ Use sm:, md:, lg: prefixes for larger screens
  └─ Fewer media queries, less CSS bloat
```

---

## 🚀 Deployment Architecture

### Development
```
npm run dev
  ├─ Fast refresh enabled
  ├─ Source maps included
  ├─ Hot module reload
  └─ http://localhost:3000
```

### Production Build
```
npm run build
  ├─ TypeScript check
  ├─ Code splitting
  ├─ Image optimization
  ├─ CSS purging (unused classes removed)
  ├─ JavaScript minification
  └─ .next/ folder created
```

### Deployment Targets
```
┌──────────────────────────────────────────────┐
│     Choose Your Deployment Platform          │
├──────────────────────────────────────────────┤
│                                              │
│  Vercel (Easiest)                           │
│  ├─ Git push → Auto deploy                  │
│  ├─ Edge functions for API routes           │
│  └─ Free tier sufficient                    │
│                                              │
│  GCP Cloud Run (Scalable)                   │
│  ├─ Docker container                        │
│  ├─ Auto-scaling                            │
│  └─ Pay per request                         │
│                                              │
│  Hostinger (Budget)                         │
│  ├─ Git integration                         │
│  ├─ Shared hosting                          │
│  └─ $3-5/month                              │
│                                              │
│  AWS Amplify (Full AWS)                     │
│  ├─ Native AWS integration                  │
│  ├─ CI/CD pipeline                          │
│  └─ Multiple services                       │
│                                              │
└──────────────────────────────────────────────┘
```

---

## 📊 Performance Optimization

### Code Splitting
```
app/
├─ page.tsx              (loaded first)
├─ opportunities/page.tsx (lazy loaded when navigated to)
├─ about/page.tsx        (lazy loaded when navigated to)
└─ contact/page.tsx      (lazy loaded when navigated to)

Each page only ships its required code
```

### Image Optimization
```
<Image from="next/image">
  ├─ Lazy loading by default
  ├─ Automatic format selection
  │   ├─ WebP (modern browsers)
  │   └─ PNG (fallback)
  ├─ Responsive sizing
  └─ Blur placeholder (optional)
```

### Bundle Analysis
```
npm run build
  │
  └─ .next/static/
      ├─ app/              (pages, ~150KB total)
      ├─ chunks/           (shared code, ~80KB)
      └─ media/            (images, ~5KB)

Total JS: ~200KB (gzip: ~60KB)
```

---

## 🧪 Testing Architecture

### Unit Testing (Ready to add)
```
__tests__/
├─ components/
│   ├─ button.test.tsx
│   └─ input.test.tsx
└─ lib/
    └─ utils.test.ts
```

### E2E Testing (Ready to add)
```
e2e/
├─ home.spec.ts         (test navigation, animations)
├─ opportunities.spec.ts (test filtering)
└─ contact.spec.ts      (test form submission)
```

### Manual Testing
```
Checklist:
  ├─ Desktop Chrome
  ├─ Mobile Safari (iPhone)
  ├─ Mobile Chrome (Android)
  ├─ Firefox
  ├─ Edge
  └─ Lighthouse score > 90
```

---

## 📈 Scalability Path

### MVP (Current) ✅
```
Single Next.js application
Static pages + dynamic form
No database required
```

### Phase 2 (Add Database)
```
PostgreSQL + Prisma ORM
├─ User accounts
├─ Application tracking
└─ Admin dashboard
```

### Phase 3 (Add Services)
```
Microservices architecture
├─ Auth service
├─ Email service (SendGrid)
├─ Analytics service
└─ File storage (S3)
```

### Phase 4 (Add Advanced Features)
```
├─ Real-time notifications (WebSockets)
├─ AI chatbot (OpenAI API)
├─ Video consultations (Zoom API)
└─ Payment processing (Stripe)
```

---

## 🔄 CI/CD Pipeline

### GitHub Actions (When Integrated)
```
Push to main
  │
  ├─ Linting (ESLint)
  ├─ Type checking (TypeScript)
  ├─ Build test (npm run build)
  └─ Deploy to Vercel/GCP
```

### Cloud Build (GCP)
```
Git push
  │
  ├─ Install dependencies
  ├─ Run linter
  ├─ Build Next.js app
  ├─ Build Docker image
  ├─ Push to Container Registry
  └─ Deploy to Cloud Run
```

---

## 📚 Technology Stack Summary

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Framework** | Next.js 15 | React framework |
| **Language** | TypeScript | Type safety |
| **Styling** | Tailwind CSS | Utility CSS |
| **UI Lib** | Radix UI | Accessible primitives |
| **Components** | Shadcn/UI | Pre-built components |
| **Animations** | Framer Motion | Smooth effects |
| **Icons** | Lucide React | Icon library |
| **Forms** | Zod | Validation |
| **Notifications** | Sonner | Toast messages |
| **Deployment** | Vercel/GCP/Hostinger | Hosting |
| **Version Control** | Git | Source control |

---

## 🎯 Key Architectural Decisions

### 1. Server Components by Default
**Why**: Faster page loads, better SEO, secure by default
**Trade-off**: Limited to server capabilities (no useState, etc.)

### 2. Tailwind CSS over CSS-in-JS
**Why**: Better performance, simpler styling, no bundle overhead
**Trade-off**: Can't use dynamic values (use CSS variables instead)

### 3. Server Actions over API Routes
**Why**: Simpler form handling, automatic CSRF protection
**Trade-off**: Can't use for complex business logic (yet)

### 4. Custom Combobox over Native Select
**Why**: Full control over styling, matches design system
**Trade-off**: More code, must test accessibility

### 5. Framer Motion for Animations
**Why**: Smooth, performant, great DX
**Trade-off**: Adds to bundle (but worth it for UX)

---

## ✅ Architecture Review

- ✅ Scalable: Designed to grow from MVP to full app
- ✅ Secure: Server-side validation, no secrets exposed
- ✅ Performant: Code splitting, image optimization
- ✅ Maintainable: Clear folder structure, TypeScript
- ✅ Accessible: Semantic HTML, ARIA labels, keyboard nav
- ✅ SEO-friendly: Server-rendered, proper metadata
- ✅ Developer-friendly: Fast feedback loops, good tooling

---

**Built on proven patterns from industry leaders** 🏆
