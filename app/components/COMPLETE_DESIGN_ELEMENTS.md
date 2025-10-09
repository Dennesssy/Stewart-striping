# Complete Design Elements Guide - Stewart Striping

## 📐 Table of Contents
1. [Animations](#animations)
2. [Icons](#icons)
3. [Color Scheme](#color-scheme)
4. [Typography](#typography)
5. [Spacing & Layout](#spacing--layout)
6. [Shadows & Effects](#shadows--effects)
7. [Interactive States](#interactive-states)

---

## 🎬 ANIMATIONS

### Custom Background Animation
**Location:** `components/animated-background.tsx`
**Type:** Framer Motion SVG Animation
**Features:**
- 16 animated lines entering from all 4 edges (top, bottom, left, right)
- 4 decorative circles that scale in
- Gradient overlay for depth
- Staggered entrance with delays (0-4 seconds)
- Used on: Homepage hero section

**Technical Details:**
- Duration: 2 seconds per line
- Easing: easeInOut
- Lines: 0.5px width, white with 30% opacity
- Circles: White with 40% opacity

### Dashboard Animations
**Locations:**
- `components/dashboard/resume-section.tsx` - Resume cards fade in
- `components/dashboard/revenue-section.tsx` - Revenue stats animation

**Type:** Framer Motion components with motion.div

### UI Component Animations
**Built-in Radix UI Animations:**
- Dropdown menus: fade-in, zoom-in, slide-in
- Dialogs: fade-in, zoom-in, translate
- Sheets: slide-in from sides
- Accordions: expand/collapse
- Toasts: slide-in from corners
- Tooltips: fade-in with slight scale
- Select menus: fade and zoom

**Animation Classes (Tailwind):**
- `animate-in` - Element enters
- `animate-out` - Element exits
- `fade-in-0` to `fade-in-100` - Fade animations
- `zoom-in-90` to `zoom-in-95` - Zoom animations
- `slide-in-from-*` - Directional slides
- `data-[state=open]:animate-in` - State-based animations

### Hover Animations
- Cards: `hover:shadow-xl transition-all duration-300`
- Buttons: `transition-colors duration-300`
- Links: `transition-all hover:underline`
- Images: `hover:-translate-y-1 transition-transform`
- Groups: `group-hover:scale-105 transition-transform`

### CSS Animations
**Global CSS (`app/globals.css`):**
- Parallax backgrounds: `parallax-bg` class
- Smooth scroll: `scroll-behavior: smooth`
- Count-up numbers: `count-up` class with tabular-nums

---

## 🎨 ICONS

### Icon Library
**Package:** Lucide React (v0.446.0)
**Type:** SVG icons as React components
**Installation:** Included in package.json

### Complete Icon Inventory (50+ Icons)

#### Navigation & UI
- **Menu, X** - Mobile navigation toggle
- **ArrowLeft, ArrowRight** - Navigation arrows
- **ChevronDown, ChevronUp, ChevronLeft, ChevronRight** - Dropdown indicators
- **MoreHorizontal, MoreVertical** - Menu options
- **Search** - Search functionality
- **Filter** - Filtering options
- **GripVertical** - Drag handles
- **Dot, Circle** - Status indicators

#### Business & Services
- **Brush** - Striping services (brand icon)
- **Droplets** - Power washing
- **Calendar** - Scheduling
- **Shield** - ADA compliance
- **Building2** - Commercial services

#### Actions & Status
- **Check, CheckCircle** - Completion/success
- **Plus** - Add new items
- **Pencil** - Edit
- **Trash2** - Delete
- **Download** - Download files
- **Upload** - Upload files
- **Eye** - View/preview
- **AlertCircle** - Warnings

#### Communication
- **Phone** - Phone contact
- **Mail** - Email contact
- **MessageSquare** - Messages/chat
- **Send** - Send message
- **Video** - Video call
- **Paperclip** - Attachments

#### Location & Time
- **MapPin** - Location/address
- **Clock** - Time/scheduling
- **Calendar** - Date selection

#### Analytics & Business
- **TrendingUp, TrendingDown** - Trends
- **DollarSign** - Money/pricing
- **CreditCard** - Payments
- **PiggyBank** - Savings
- **Receipt** - Invoices
- **FileText** - Documents

#### Automation & SEO
- **Bot** - Automation
- **Target** - Targeting
- **Zap** - Speed/quick actions
- **Search** - SEO

#### Users & Authentication
- **User, Users** - User management
- **LogIn** - Login
- **Star** - Ratings/favorites

### Icon Usage by Page

**Homepage:**
- Brush, Droplets, Calendar, Shield - Services overview
- ArrowRight, CheckCircle - CTAs
- Building2, DollarSign, Clock, Users - Value props
- Check, Star - Pricing features

**Services Page:**
- Brush, Droplets, Calendar, Shield - Service cards

**Automation Page:**
- Bot, Search, Target, TrendingUp, Zap, Clock - Features

**Contact Page:**
- Phone, Mail, MapPin, Clock, MessageSquare - Contact info

**Dashboard:**
- TrendingUp, Users, Eye, MousePointer - Analytics
- DollarSign, CreditCard, PiggyBank, Receipt - Revenue
- Mail, Download, Filter, Calendar - Email signups
- Plus, Filter, CheckCircle, AlertCircle - Tasks
- FileText, Download, Eye, User - Invoices/resumes
- Send, Search, Phone, Video, Paperclip - Chat

**Navigation:**
- Menu, X, Brush - Navbar

---

## 🎨 COLOR SCHEME

### Primary Brand Colors
**Light Mode:**
- **Primary Blue:** `hsl(221.2, 83.2%, 53.3%)` - #3B82F6 (bright blue)
- **Background:** `hsl(0, 0%, 100%)` - White
- **Foreground:** `hsl(222.2, 84%, 4.9%)` - Near black

**Dark Mode:**
- **Primary Blue:** `hsl(217.2, 91.2%, 59.8%)` - #60A5FA (lighter blue)
- **Background:** `hsl(222.2, 84%, 4.9%)` - Near black
- **Foreground:** `hsl(210, 40%, 98%)` - Near white

### Semantic Colors

#### Light Mode
- **Secondary:** `hsl(210, 40%, 96%)` - Light gray
- **Muted:** `hsl(210, 40%, 96%)` - Subtle gray
- **Accent:** `hsl(210, 40%, 96%)` - Accent gray
- **Destructive:** `hsl(0, 84.2%, 60.2%)` - Red for errors
- **Border:** `hsl(214.3, 31.8%, 91.4%)` - Light border
- **Input:** `hsl(214.3, 31.8%, 91.4%)` - Input border

#### Dark Mode
- **Secondary:** `hsl(217.2, 32.6%, 17.5%)` - Dark blue-gray
- **Muted:** `hsl(217.2, 32.6%, 17.5%)` - Muted dark
- **Accent:** `hsl(217.2, 32.6%, 17.5%)` - Accent dark
- **Destructive:** `hsl(0, 62.8%, 30.6%)` - Dark red
- **Border:** `hsl(217.2, 32.6%, 17.5%)` - Dark border
- **Input:** `hsl(217.2, 32.6%, 17.5%)` - Dark input

### Additional Colors (Tailwind)
- Blue shades: `blue-50` through `blue-950`
- Gray shades: `gray-50` through `gray-950`
- Green (success): Various shades
- Red (errors): Various shades
- White/Black: For contrast

### Gradient Effects
- Blue gradient overlay: `from-transparent via-blue-900/5 to-transparent`
- Card gradients: Used in hero sections
- Opacity variations: 5%, 10%, 30%, 40%, 80%

---

## 📝 TYPOGRAPHY

### Font Family
**Primary Font:** Inter
**Source:** Google Fonts
**Loaded in:** `app/layout.tsx`
**Fallback:** System sans-serif

### Font Weights
- Regular: 400 (default)
- Medium: 500 (buttons, headings)
- Semibold: 600 (emphasis)
- Bold: 700 (major headings)

### Font Sizes (Most Common)

**Headings:**
- `text-5xl` - Hero titles (3rem)
- `text-4xl` - Major headings (2.25rem)
- `text-3xl` - Section headings (1.875rem)
- `text-2xl` - Subsections (1.5rem)
- `text-xl` - Card titles (1.25rem)
- `text-lg` - Large body (1.125rem)

**Body Text:**
- `text-base` - Default body (1rem)
- `text-sm` - Small text (0.875rem)
- `text-xs` - Captions/labels (0.75rem)

### Text Colors
- `text-foreground` - Primary text
- `text-muted-foreground` - Secondary text
- `text-gray-600` - Tertiary text
- `text-white` - Light text on dark backgrounds
- `text-blue-600` - Links and accents
- `text-green-600` - Success messages
- `text-red-600` - Error messages

### Text Alignment
- `text-left` - Default
- `text-center` - Centered content
- `text-right` - Right-aligned (rare)

### Special Typography
- **Tabular Numbers:** `count-up` class for animated counters
- **Line Height:** Auto-adjusted by Tailwind
- **Letter Spacing:** Default, tight on headings

---

## 📏 SPACING & LAYOUT

### Grid System
**Container Widths:**
- `max-w-7xl` - Main content (1280px)
- `max-w-4xl` - Narrow content (896px)
- `max-w-lg` - Modals/forms (512px)

**Breakpoints:**
- `sm:` - 640px
- `md:` - 768px
- `lg:` - 1024px
- `xl:` - 1280px
- `2xl:` - 1536px

### Common Spacing Values

**Padding/Margin:**
- `p-1, m-1` - 0.25rem (4px)
- `p-2, m-2` - 0.5rem (8px)
- `p-3, m-3` - 0.75rem (12px)
- `p-4, m-4` - 1rem (16px)
- `p-6, m-6` - 1.5rem (24px)
- `p-8, m-8` - 2rem (32px)
- `p-12, m-12` - 3rem (48px)

**Gap (Flexbox/Grid):**
- `gap-1` through `gap-12` - Same as above
- Most common: `gap-4` (16px), `gap-6` (24px)

**Border Radius:**
- `rounded-sm` - 0.125rem (2px)
- `rounded` - 0.25rem (4px)
- `rounded-md` - 0.375rem (6px)
- `rounded-lg` - 0.5rem (8px)
- `rounded-xl` - 0.75rem (12px)
- `rounded-2xl` - 1rem (16px)
- `rounded-full` - 9999px (circle)

### Layout Patterns
- **Cards:** `rounded-lg shadow-lg p-6`
- **Sections:** `py-12 lg:py-16 px-4`
- **Containers:** `max-w-7xl mx-auto px-4`
- **Grids:** `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`

---

## ☁️ SHADOWS & EFFECTS

### Shadow Hierarchy
- `shadow-sm` - Subtle (0 1px 2px)
- `shadow` - Default (0 1px 3px)
- `shadow-md` - Medium (0 4px 6px)
- `shadow-lg` - Large (0 10px 15px)
- `shadow-xl` - Extra large (0 20px 25px)
- `shadow-2xl` - Maximum (0 25px 50px)

### Common Shadow Uses
- **Cards:** `shadow-lg hover:shadow-xl`
- **Buttons:** `shadow-md`
- **Dropdowns:** `shadow-md`
- **Modals:** `shadow-lg`
- **Floating elements:** `shadow-2xl`

### Ring Effects
- `ring-1` - 1px ring
- `ring-2` - 2px ring
- `ring-blue-500` - Blue ring color
- `ring-offset-2` - Offset from element
- Used for: Focus states, selection indicators

### Blur Effects
- `blur-sm` - Subtle blur (4px)
- Used in: Backgrounds, overlays

### Opacity
- Text: `text-opacity-50, text-opacity-80`
- Background: `bg-opacity-5, bg-opacity-10, bg-opacity-80`
- Common: 5%, 10%, 30%, 40%, 50%, 80%, 100%

---

## 🎭 INTERACTIVE STATES

### Hover Effects
- **Links:** `hover:underline`
- **Buttons:** `hover:bg-blue-700 transition-colors`
- **Cards:** `hover:shadow-xl hover:-translate-y-1`
- **Images:** `hover:scale-105 transition-transform`
- **Text:** `hover:text-blue-600`

### Focus Effects
- **Inputs:** `focus:ring-2 focus:ring-blue-500 focus:border-transparent`
- **Buttons:** `focus:outline-none focus:ring-2 focus:ring-ring`
- **Links:** `focus:ring-2 focus:ring-offset-2`

### Active Effects
- **Buttons:** `active:scale-95`
- **Links:** `active:opacity-80`

### Disabled States
- **Opacity:** `disabled:opacity-50`
- **Cursor:** `disabled:cursor-not-allowed`
- **Pointer:** `disabled:pointer-events-none`

### Group Hover
- **Parent:** `group` class
- **Child:** `group-hover:translate-x-1`
- **Use case:** Card hover effects affecting child elements

### Data States (Radix UI)
- `data-[state=open]:*` - When component is open
- `data-[state=closed]:*` - When component is closed
- `data-[state=active]:*` - When tab/item is active
- Used in: Accordions, Tabs, Dropdowns, Dialogs

### Transition Timings
- `transition` - Default (150ms)
- `transition-colors` - Color transitions
- `transition-all` - All properties
- `duration-200` - 200ms
- `duration-300` - 300ms (most common)
- `ease-in-out` - Smooth easing

---

## 📦 ADDITIONAL DESIGN ELEMENTS

### Borders
- Width: `border, border-2, border-4`
- Color: `border-gray-200, border-blue-500`
- Sides: `border-t, border-b, border-l, border-r`

### Backgrounds
- Solid: `bg-white, bg-blue-600`
- Gradients: `bg-gradient-to-r from-blue-600 to-blue-800`
- Images: Background images in hero sections
- Patterns: SVG patterns in animated background

### Z-Index Layers
- `z-0` - Base layer
- `z-10` - Above content
- `z-20` - Dropdowns
- `z-30` - Fixed headers
- `z-40` - Overlays
- `z-50` - Modals/dialogs

### Aspect Ratios
- `aspect-video` - 16:9
- `aspect-square` - 1:1
- Used for: Image containers, video embeds

### Overflow
- `overflow-hidden` - Hide overflow
- `overflow-auto` - Scrollable
- `overflow-y-auto` - Vertical scroll

---

## 🎯 SUMMARY

### What's Included in Git:
✅ All animations (code-based)
✅ All icons (Lucide React)
✅ Color system (CSS variables)
✅ Typography (Google Fonts)
✅ Spacing system (Tailwind)
✅ Shadow effects (CSS)
✅ Interactive states (CSS)
✅ All UI components

### External Dependencies:
🌐 Google Fonts (Inter) - Loads from CDN
🌐 16 images - Load from external URLs

### Design System:
- **Consistent:** Uses Tailwind + shadcn/ui
- **Responsive:** Mobile-first approach
- **Accessible:** ARIA labels, focus states
- **Theme-aware:** Light & dark mode support
- **Performant:** CSS-based animations
