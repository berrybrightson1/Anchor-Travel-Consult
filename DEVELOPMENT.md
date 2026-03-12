# Development Guide - Anchor Travel Consult

This guide covers local development setup, common tasks, and debugging.

## 🚀 Quick Start (5 minutes)

### 1. Install Dependencies
```bash
npm install
```

### 2. Create Environment File
```bash
cp .env.example .env.local
```

### 3. Start Development Server
```bash
npm run dev
```

### 4. Open in Browser
```
http://localhost:3000
```

## 📱 Testing Responsive Design

### Built-in Browser DevTools
```
Chrome/Edge: F12 → Ctrl+Shift+M (Toggle Device Toolbar)
Firefox: F12 → Ctrl+Shift+M
Safari: Cmd+Option+U → Develop menu
```

### Test Breakpoints
- **Mobile**: 375px (iPhone SE)
- **Tablet**: 768px (iPad)
- **Desktop**: 1440px (Full HD)

## 🎨 Styling & Customization

### Modify Brand Colors
Edit `tailwind.config.ts` → `theme.extend.colors`:
```typescript
navy: {
  500: "#1e3a5f",  // Primary brand color
  600: "#1a3454",  // Darker shade
},
orange: {
  500: "#f97316",  // Accent color
  600: "#ea580c",
}
```

### Add Global Styles
Edit `app/globals.css` to add base, component, or utility styles.

### Component Styling
All UI components use Tailwind utility classes:
```typescript
className="px-4 py-2 bg-navy-600 text-white rounded-lg"
```

## 🔧 Common Development Tasks

### Add a New Page
1. Create folder: `app/new-page/`
2. Create file: `app/new-page/page.tsx`
3. Add "use client" if interactive
4. Import components and styles
5. Add route to navbar if needed

Example:
```typescript
"use client";
export default function NewPage() {
  return <main>New Page Content</main>;
}
```

### Add a New Component
1. Create file: `components/my-component.tsx`
2. Use TypeScript for props: `interface MyComponentProps { }`
3. Export component: `export default function MyComponent() {}`
4. Import in pages as needed

### Modify Opportunities Data
Edit `app/opportunities/page.tsx`:
```typescript
const PROGRAMS = [
  {
    id: "unique-id",
    name: "Program Name",
    university: "University Name",
    // ... more fields
  }
];
```

### Update Contact Information
- **Email**: `app/contact/page.tsx` line ~80
- **Phone**: `app/contact/actions.ts` and `components/whatsapp-fab.tsx`
- **WhatsApp**: `components/whatsapp-fab.tsx` line ~8

### Change Animations
1. Modify animation timing in `tailwind.config.ts` → `theme.extend.keyframes`
2. Adjust component animation variants in `page.tsx` files
3. Key properties:
   - `duration`: How long (0.3s - 1s)
   - `delay`: Start time (0s - 0.6s)
   - `staggerChildren`: Delay between children

## 🧪 Testing

### Run Linter
```bash
npm run lint
```

### Manual Testing Checklist
- [ ] All pages load without errors
- [ ] Mobile responsive on 375px width
- [ ] Animations smooth on 60fps
- [ ] Focus rings visible on keyboard navigation
- [ ] Form validation works (submit empty form)
- [ ] Links navigate correctly
- [ ] Images load and display properly
- [ ] WhatsApp/Email links open correctly

## 🐛 Debugging

### Debug React Components
1. Open DevTools (F12)
2. Install [React DevTools](https://react-devtools-tutorial.vercel.app/)
3. Inspect component tree and props

### Debug Performance
```bash
# Build and analyze bundle
npm run build

# Check which packages are large
npx bundle-analyzer .next/static
```

### Debug TypeScript Errors
```bash
# Show all TS errors
npm run build

# Type checking with tsc
npx tsc --noEmit
```

## 📝 Code Style Guidelines

### File Naming
- **Folders**: kebab-case (`my-component/`)
- **Files**: kebab-case (`my-component.tsx`)
- **Components**: PascalCase export (`MyComponent`)

### Component Structure
```typescript
"use client";  // Only if needed

import { useState } from "react";
import { SomeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MyComponentProps {
  title: string;
  onClick?: () => void;
}

export default function MyComponent({
  title,
  onClick,
}: MyComponentProps) {
  return <button onClick={onClick}>{title}</button>;
}
```

### TypeScript Best Practices
- Always type component props
- Use strict null checks (enabled in tsconfig.json)
- Avoid `any` type
- Use `const` not `let` when possible

## 🚀 Deployment Checklists

### Before Pushing to Main
- [ ] All pages render without errors
- [ ] Mobile responsive design works
- [ ] Form submissions working
- [ ] No console errors or warnings
- [ ] Linter passes: `npm run lint`
- [ ] Built successfully: `npm run build`

### Before Production Deployment
- [ ] Update `.env.production` with real values
- [ ] Test on staging environment first
- [ ] Update contact information (email, phone, WhatsApp)
- [ ] Update office locations in contact page
- [ ] Setup email service integration
- [ ] Configure analytics tracking
- [ ] SSL certificate configured
- [ ] CDN/caching headers set properly

## 📚 Useful Resources

### Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Radix UI](https://www.radix-ui.com/docs/primitives/overview/introduction)

### Tools
- [Tailwind IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - VS Code extension
- [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
- [Thunder Client](https://www.thunderclient.com/) - API testing
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Performance audit

## 💡 Tips & Tricks

### Fast Reload
- Edit `app/globals.css` → Instant reload
- Edit `.tsx` → Fast refresh
- Edit `tailwind.config.ts` → Requires restart

### Dark Mode Testing (if added later)
```bash
# View in dark mode
# Browser DevTools → Rendering tab → Emulate CSS media feature preference
```

### TypeScript Quick Tips
```typescript
// Type props as interface
interface PageProps {
  params: { id: string };
  searchParams: Record<string, string>;
}

// Use Record for object types
const config: Record<string, string> = {};

// Const assertions
const array = ["a", "b"] as const; // Literal type
```

### Framer Motion Tips
```typescript
// Stagger children smoothly
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,  // Delay between children
      delayChildren: 0.2,    // Initial delay
    },
  },
};

// Trigger animation on scroll
initial="hidden"
whileInView="visible"
viewport={{ once: true, margin: "-100px" }}
```

## 🆘 Getting Help

### Common Issues

**Issue: Port 3000 already in use**
```bash
# Kill process on port 3000
# macOS/Linux: lsof -ti:3000 | xargs kill -9
# Windows: netstat -ano | findstr :3000
```

**Issue: Dependencies won't install**
```bash
# Clear npm cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Issue: TypeScript errors after update**
```bash
# Rebuild TypeScript
npx tsc --noEmit
```

---

**Need help?** Check the main [README.md](./README.md) or contact the development team.
