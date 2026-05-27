#  Next-Gen Learning Dashboard

A futuristic student learning dashboard built with **Next.js App Router**, **Supabase**, **Tailwind CSS**, and **Framer Motion** as part of the Frontend Intern Challenge. The project focuses on high-performance UI interactions, responsive Bento-grid layouts, smooth animations, and server-rendered data fetching.

---

#  Features

- Responsive Bento Grid dashboard layout
- Dynamic course data fetched from Supabase
- Server Component based data fetching
- Animated course progress indicators
- Activity heatmap tile
- Smooth Framer Motion interactions
- Hover glow effects with zero layout shifts
- Sidebar with animated active navigation indicator
- Loading skeletons with pulse animations
- Error handling for failed Supabase requests
- Mobile, tablet, and desktop responsive layouts

---

#  Tech Stack

- **Framework:** Next.js (App Router)
- **Database:** Supabase PostgreSQL
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Language:** TypeScript

---

#  Architecture Decisions

## Server Components for Data Fetching

The dashboard uses **Next.js Server Components** to fetch course data directly from Supabase on the server side. This approach was chosen because it:

- Reduces client-side JavaScript
- Improves performance
- Keeps Supabase credentials secure
- Avoids unnecessary API layers
- Aligns with the challenge requirements

The course data is fetched before rendering the page, allowing the dashboard to load with fully hydrated content.

---

#  Server / Client Component Split

## Server Components
Used for:
- Fetching Supabase data
- Main dashboard rendering
- Passing serialized data to UI components

## Client Components
Used for:
- Framer Motion animations
- Sidebar interactions
- Hover states
- Progress bar animations
- Mobile navigation state

This separation helped keep the application performant while still supporting rich UI interactions.

---

#  UI & Animation Approach

The dashboard follows a dark futuristic design system using:
- Deep blue/black backgrounds
- Radial gradient lighting
- Subtle glow effects
- Rounded Bento cards
- Minimal visual noise

Animations were implemented using Framer Motion with:
- Spring physics
- Staggered tile entrances
- Transform-based hover effects
- Opacity transitions
- Layout animations using `layoutId`

To avoid layout shifts, all hover interactions use:
- `transform`
- `opacity`
- `scale`


---

# 📱 Responsive Design Strategy

## Desktop (>1024px)
- Full sidebar
- Wide Bento grid layout

## Tablet (768px - 1024px)
- Sidebar collapses to icon-only mode
- Grid adjusts into a 2-column structure

## Mobile (<768px)
- Sidebar converts into hamburger navigation
- Dashboard stacks into a single-column scroll layout
- Activity heatmap becomes horizontally scrollable for better usability

---

# 🗄️ Supabase Schema

## `courses` table

| Column | Type |
|---|---|
| id | uuid |
| title | text |
| progress | integer |
| icon_name | text |
| created_at | timestamp |

---

#  Loading States & Error Handling

A custom `loading.tsx` skeleton screen was created to mirror the final Bento layout while data loads.

Features:
- Pulse animations
- Preserved layout structure
- No layout jumping
- Responsive placeholders

Graceful error handling was also implemented for failed Supabase connections.

---

#  Challenges Faced

## 1. Building a Responsive Bento Grid
One of the biggest challenges was maintaining a clean Bento layout across desktop, tablet, and mobile breakpoints without creating uneven spacing or broken card flow.

## 2. Avoiding Layout Shifts
Hover effects initially caused slight visual movement. This was solved by using only transform and opacity-based animations instead of changing dimensions or margins.

## 3. Responsive Activity Heatmap
The activity contribution graph became compressed on smaller screens. The solution involved:
- Dynamic spacing adjustments
- Responsive cell sizing
- Horizontal scrolling fallback on mobile



---

# 📦 Installation

```bash
npm install
