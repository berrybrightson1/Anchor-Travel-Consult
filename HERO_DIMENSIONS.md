# Hero Section & Image Slider Dimensions Guide

## 📐 **Image Slider Dimensions**

### Current Implementation

#### **Desktop (1024px and above)**
```
Width:  100% (full viewport width)
Height: 600px (min-h-[600px])
Aspect Ratio: Wide format
Resolution Recommended: 1920x1080px or wider
```

#### **Mobile (640px - 1023px)**
```
Width:  100% (full viewport width)
Height: 100vh (full viewport height)
Aspect Ratio: Full screen
Resolution Recommended: 1080x1920px or wider
```

#### **Small Mobile (< 640px)**
```
Width:  100% (full viewport width)
Height: 100vh (full viewport height)
Aspect Ratio: Portrait/full screen
Resolution Recommended: 540x960px or wider
```

---

## 🖼️ **Image Specifications**

### **Recommended Image Dimensions**
For the best quality and performance:

| Use Case | Dimension | File Format | File Size |
|----------|-----------|-------------|-----------|
| **Desktop Hero** | 1920 x 1080 px | WebP / JPEG | 200-400 KB |
| **Tablet** | 1280 x 720 px | WebP / JPEG | 150-300 KB |
| **Mobile** | 1080 x 1920 px | WebP / JPEG | 150-300 KB |
| **Thumbnail** | 800 x 600 px | WebP / JPEG | 80-150 KB |

### **Current Image URLs (Unsplash)**
```
1. Oxford: https://images.unsplash.com/photo-1498940336341-2f4235bb2d74?w=1200&h=400&fit=crop
   (1200x400 - landscape)

2. Cambridge: https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=1200&h=400&fit=crop
   (1200x400 - landscape)

3. London: https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=400&fit=crop
   (1200x400 - landscape)
```

---

## 🎨 **Hero Section Layout**

### **Full-Width Background Setup**
```
┌─────────────────────────────────────────┐
│  Image Slider Background (Full Width)   │
│  ┌───────────────────────────────────┐  │
│  │  Semi-transparent Overlay         │  │
│  │  (rgba(0, 0, 0, 0.4))            │  │
│  │                                   │  │
│  │  ┌─────────────────────────────┐ │  │
│  │  │  Content Overlay            │ │  │
│  │  │  - Badge                    │ │  │
│  │  │  - Title                    │ │  │
│  │  │  - Description              │ │  │
│  │  │  - Buttons                  │ │  │
│  │  └─────────────────────────────┘ │  │
│  │                                   │  │
│  └───────────────────────────────────┘  │
└─────────────────────────────────────────┘
```

### **Height Breakpoints**
```javascript
// Tailwind class: min-h-screen sm:min-h-[600px]

Mobile (< 640px):     100vh (full viewport height)
Tablet (640-1024px):  600px (fixed height)
Desktop (>1024px):    600px (fixed height)
```

---

## 🎬 **Slider Controls & Indicators**

### **Navigation Arrows**
- **Visibility**: Hidden by default, appear on hover
- **Position**: Absolutely positioned at left/right center
- **Size**: 32x32 px (p-2, w-6 h-6 icon)
- **Background**: White with 80% opacity `bg-white/80`
- **Color**: Navy-600 `text-navy-600`

### **Indicator Dots**
- **Position**: Bottom center of slider
- **Style**: Small circles with smooth transitions
- **Active Dot**: Orange (#f97316), wider (w-8)
- **Inactive Dots**: White/semi-transparent (w-2)
- **Spacing**: Gap of 0.5rem (8px)
- **Responsive**: Visible on all screen sizes

### **Slide Transition**
- **Animation**: Fade in/out
- **Duration**: 0.5 seconds
- **Easing**: Linear
- **Auto-play Interval**: 5 seconds
- **Pause on Hover**: Yes (navigation arrows)
- **Pause on Click**: Yes (indicator dots)

---

## 🎯 **Content Overlay Styling**

### **Badge**
```
Background: rgba(255, 255, 255, 0.2) + backdrop blur
Text Color: White
Padding: 8px 16px (px-4 py-2)
Border: 1px solid rgba(255, 255, 255, 0.3)
Border Radius: 9999px (full)
Font Size: 14px
Font Weight: 600 (semibold)
```

### **Title (h1)**
```
Font Family: Playfair Display (serif)
Font Size:
  - Mobile:  2.25rem (36px)
  - Tablet:  3rem (48px)
  - Desktop: 4.5rem (72px)
Font Weight: 700 (bold)
Color: White
Accent Color: #fed7aa (orange-300)
Line Height: 1.2 (tight)
Margin Bottom: 24px
```

### **Description (p)**
```
Font Family: Poppins (sans-serif)
Font Size:
  - Mobile: 1.125rem (18px)
  - Desktop: 1.25rem (20px)
Font Weight: 400 (regular)
Color: #f3f4f6 (gray-100)
Max Width: 42rem (672px)
Margin Bottom: 32px
Line Height: 1.6
```

### **Buttons**
```
Primary Button (Explore):
- Background: #f97316 (orange-500)
- Hover: #ea580c (orange-600)
- Text: White
- Padding: 12px 32px
- Border Radius: 8px

Secondary Button (Consultation):
- Background: rgba(255, 255, 255, 0.2)
- Hover: rgba(255, 255, 255, 0.3)
- Text: White
- Border: 1px solid rgba(255, 255, 255, 0.5)
- Backdrop: blur(8px)
- Padding: 12px 32px
- Border Radius: 8px
```

---

## 📱 **Responsive Behavior**

### **Mobile (< 640px)**
- Full viewport height (100vh)
- Content centered vertically and horizontally
- Button stacked vertically (flex-col)
- Title font: 36px
- Arrows hidden (opacity-0)

### **Tablet (640px - 1024px)**
- Fixed height: 600px
- Content centered
- Buttons side-by-side when space allows
- Title font: 48px
- Arrows hidden by default

### **Desktop (> 1024px)**
- Fixed height: 600px
- Content centered
- Buttons side-by-side
- Title font: 72px
- Arrows visible on hover

---

## 🎨 **Color Palette**

| Element | Color | Hex | Usage |
|---------|-------|-----|-------|
| Overlay | Black (40% opacity) | `rgba(0,0,0,0.4)` | Dark background for text readability |
| Badge Background | White (20% opacity) | `rgba(255,255,255,0.2)` | Subtle background with blur |
| Badge Border | White (30% opacity) | `rgba(255,255,255,0.3)` | Subtle outline |
| Title (accent) | Orange-300 | `#fed7aa` | Highlight important words |
| Text | White | `#ffffff` | Main text color |
| Subtext | Gray-100 | `#f3f4f6` | Secondary text |
| Button (Primary) | Orange-500 | `#f97316` | Call-to-action |
| Button (Secondary) | White (20% opacity) | `rgba(255,255,255,0.2)` | Alternative action |
| Button Border | White (50% opacity) | `rgba(255,255,255,0.5)` | Subtle outline |

---

## 🚀 **Performance Optimization**

### **Image Loading Strategy**
```
1. Lazy loading: Images load only when needed
2. Format: WebP with JPEG fallback
3. Responsive images: Different sizes for different devices
4. Compression: Optimized for web (80-120 KB per image)
```

### **CSS Optimization**
```
1. Transition: duration-500 (0.5s fade)
2. Transform: gpu-accelerated (will-change: transform)
3. Animations: 60fps smooth (using Framer Motion)
4. No jank: All animations GPU accelerated
```

---

## 📐 **Exact Tailwind Classes Used**

```tsx
// Container
<div className="relative w-full min-h-screen sm:min-h-[600px]">

// Background Image
<div className="w-full h-full bg-cover bg-center"
     style={{backgroundImage: `url(...)`}}>

// Overlay
<div className="absolute inset-0 bg-black/40">

// Content Container
<div className="flex items-center justify-center h-full px-4">

// Content Box
<div className="text-center text-white max-w-3xl">

// Badge
<span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm
                 text-white rounded-full text-sm font-semibold
                 border border-white/30">

// Title
<h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif
              font-bold mb-6 leading-tight">

// Subtext
<p className="text-lg sm:text-xl text-gray-100 mb-8
             max-w-2xl mx-auto">

// Button Container
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

// Indicators
<div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
```

---

## 💡 **To Change Image Sizes**

### **Option 1: Make Taller on Desktop**
```typescript
height="min-h-screen sm:min-h-[800px]"  // Change 600 to 800
```

### **Option 2: Make Shorter**
```typescript
height="min-h-screen sm:min-h-[500px]"  // Change 600 to 500
```

### **Option 3: Custom Responsive Heights**
```typescript
height="h-screen sm:h-[600px] md:h-[700px] lg:h-[800px]"
```

### **Option 4: Aspect Ratio (if not full height)**
```typescript
height="aspect-video"  // 16:9 ratio
height="aspect-square"  // 1:1 ratio
```

---

## 🔧 **How to Customize**

### **Update Slider Images**
Edit `sliderImages` array in `app/page.tsx`:
```typescript
const sliderImages = [
  {
    id: 1,
    title: "Your Title",
    description: "Your description",
    image: "https://your-image-url.com/image.jpg",
  },
  // ... more slides
];
```

### **Change Auto-play Speed**
In `app/page.tsx`:
```typescript
<ImageSlider
  slides={sliderImages}
  interval={3000}  // Change to 3 seconds instead of 5
/>
```

### **Disable Auto-play**
```typescript
<ImageSlider
  slides={sliderImages}
  autoPlay={false}  // Turn off auto-play
/>
```

---

**The hero section now spans full width with the image slider as the background, with content overlaid on top!** 🎉
