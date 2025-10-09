# Design Quick Reference - Stewart Striping

## 🎨 At a Glance

### Color Palette
- **Primary:** Blue (#3B82F6)
- **Background:** White / Dark Navy
- **Text:** Near Black / Near White
- **Accent:** Light Gray

### Typography
- **Font:** Inter (Google Fonts)
- **Headings:** 2xl-5xl, semibold-bold
- **Body:** base-lg, regular

### Key Spacing
- Section padding: `py-12 lg:py-16`
- Card padding: `p-6` or `p-8`
- Grid gaps: `gap-6` or `gap-8`

---

## 🎬 Animations Summary

| Component | Type | Location |
|-----------|------|----------|
| Hero background | SVG lines + circles | `components/animated-background.tsx` |
| Dashboard cards | Framer Motion | `components/dashboard/*.tsx` |
| Dropdowns | Radix UI built-in | All UI components |
| Hover effects | CSS transitions | Throughout |
| Parallax | CSS background-attachment | `parallax-bg` class |

**Animation Timing:** 200-300ms for most transitions

---

## 🎨 Icon Summary

**Total Icons:** 50+
**Library:** Lucide React v0.446.0
**Most Used:**
- Brush (brand)
- ArrowRight (CTAs)
- CheckCircle (success)
- TrendingUp (analytics)
- Mail, Phone (contact)

**All icons are code-based, no image files needed.**

---

## 📦 What's in Git vs External

### ✅ In Git Repository (Ready to Push)
- 103 code files
- All animations (code)
- All icons (code)
- All styles (CSS/Tailwind)
- Color system
- Typography setup
- UI components
- Documentation

### 🌐 External (CDN/URLs)
- Inter font (Google Fonts)
- 16 images (various websites)

---

## 📊 Design System Structure

```
Design Tokens (globals.css)
├── Colors (HSL variables)
├── Border radius (0.5rem)
└── CSS resets

Components (shadcn/ui)
├── Buttons
├── Cards
├── Forms
├── Dialogs
├── Dropdowns
└── 30+ more

Custom Components
├── Animated background
├── Dashboard sections
├── Service cards
└── Contact forms

Pages
├── Homepage (/)
├── Services (/services)
├── Automation (/automation)
├── Contact (/contact)
├── Dashboard (/dashboard)
└── Login/Portal
```

---

## 🎯 Quick Stats

- **Total Icons:** 50+ unique icons
- **Animation Components:** 3 main, 20+ UI
- **Color Variables:** 24 (light + dark)
- **Font Sizes:** 7 main sizes
- **Spacing Values:** 12 common values
- **Shadow Levels:** 6 depths
- **Responsive Breakpoints:** 5

---

## 📋 Component Inventory

### Layout
- Navbar (sticky, mobile responsive)
- Footer (links, contact info)
- Container (max-w-7xl)

### Homepage Sections
- Hero (animated background)
- Services overview (3 cards)
- Value proposition (4 features)
- Stats (count-up numbers)
- Pricing (3 tiers)
- CTA (call-to-action)

### Dashboard Components
- Analytics (charts, metrics)
- Revenue tracking (stats cards)
- Invoices (table, actions)
- Email signups (list, filters)
- Tasks (kanban-style)
- Chat (messaging UI)
- Resume viewer (PDF-like)

### UI Components (shadcn/ui)
- Accordion, Alert, Avatar
- Badge, Breadcrumb, Button
- Calendar, Card, Carousel
- Checkbox, Command, Dialog
- Dropdown, Form, Input
- Label, Menubar, Navigation
- Pagination, Popover, Progress
- Radio, Select, Separator
- Sheet, Skeleton, Slider
- Switch, Table, Tabs
- Textarea, Toast, Tooltip
- Toggle, and more...

---

## 🔧 Tech Stack Summary

**Framework:** Next.js 14 (App Router)
**Styling:** Tailwind CSS 3.3
**Components:** Radix UI + shadcn/ui
**Animation:** Framer Motion
**Icons:** Lucide React
**Database:** Prisma + PostgreSQL
**Auth:** NextAuth.js
**Forms:** React Hook Form + Zod
**Charts:** Chart.js + React Chartjs 2

---

## 📁 Files Created

1. **COMPLETE_ASSETS_LIST.md** - All 16 external images with URLs
2. **COMPLETE_DESIGN_ELEMENTS.md** - Comprehensive design guide (12KB)
3. **DESIGN_QUICK_REFERENCE.md** - This file (quick lookup)

---

## ✅ Ready to Push to GitHub

Everything is committed and ready. Run:

```bash
cd /home/ubuntu/stewart-striping/app
git branch -M main
git push -u origin main
```

After creating the repository at: https://github.com/new
