# Astroyogi Homepage - Component Architecture

## Overview
The homepage has been built using **reusable React components** following a modern, clean architecture pattern. Each component handles a specific section of the page and can be easily customized or reused.

## Project Structure

```
components/
├── Navbar.js          # Navigation bar with logo and links
├── Hero.js            # Hero section with CTA
├── ZodiacSigns.js     # Zodiac signs showcase & stats
├── Services.js        # Service offerings grid
├── Consultation.js    # Consultation options
├── Blog.js            # Blog posts section
├── Subscription.js    # Pricing plans
├── FAQ.js             # Frequently asked questions (expandable)
├── Testimonials.js    # Client testimonials
└── Footer.js          # Footer with links

styles/components/
├── Navbar.module.css
├── Hero.module.css
├── ZodiacSigns.module.css
├── Services.module.css
├── Consultation.module.css
├── Blog.module.css
├── Subscription.module.css
├── FAQ.module.css
├── Testimonials.module.css
└── Footer.module.css

pages/
├── _app.js           # App wrapper (imports globals.css)
├── _document.js      # HTML document template
└── index.js          # Main homepage (uses all components)

styles/
├── globals.css       # Global styles with color scheme
└── Home.module.css   # (legacy, can be removed)
```

## Component Details

### 1. **Navbar** (`Navbar.js`)
- Sticky navigation bar with logo
- Navigation links (Home, Services, Blog, About, Contact)
- "Get Started" CTA button
- Responsive design for mobile

### 2. **Hero** (`Hero.js`)
- Large headline with main value proposition
- Subtitle and description
- Call-to-action button
- Feature badges (Kundli, Numerology, Match Making, Remedies)
- Responsive layout (2-column on desktop, 1-column on mobile)

### 3. **Zodiac Signs** (`ZodiacSigns.js`)
- Zodiac signs selection grid (4 main signs displayed)
- Statistics section showing:
  - Zodiac Signs Count
  - Types of Insights
  - Active Users
  - Success Stories
  - Rating

### 4. **Services** (`Services.js`)
- 4 main services displayed in a grid:
  - Kundli
  - Numerology
  - Match Making
  - Remedies
- Hover effects for better interactivity

### 5. **Consultation** (`Consultation.js`)
- 6 consultation types with icons
- 2-column layout on desktop
- Responsive button grid

### 6. **Blog** (`Blog.js`)
- Blog post cards with:
  - Image/emoji placeholder
  - Title, description
  - Date and "Read More" link
- Hover animations

### 7. **Subscription** (`Subscription.js`)
- 3 pricing tiers:
  - Basic (₹300)
  - Premium (₹1500) - highlighted
  - VIP (₹12000)
- Feature lists for each plan
- Subscribe buttons

### 8. **FAQ** (`FAQ.js`)
- Expandable/collapsible questions
- 5 common questions with answers
- Smooth animations
- Interactive state management

### 9. **Testimonials** (`Testimonials.js`)
- Client testimonials cards
- 5-star ratings
- Client names
- Quote styling

### 10. **Footer** (`Footer.js`)
- 4 columns:
  - About/Logo
  - Useful Links
  - Services Links
  - Connect Links
- Bottom footer with copyright
- Privacy & Terms links

## Styling Features

### Color Scheme
- **Primary Color**: Gold (#ffd700)
- **Primary Light**: Light Gold (#ffed4e)
- **Background**: Dark blue gradient (#0f0f1e to #16213e)
- **Text**: White & Light gray
- **Borders**: Semi-transparent gold

### Responsive Design
- Mobile-first approach
- Breakpoints at 768px for tablet/desktop
- Flexible grids using CSS Grid & Flexbox
- Touch-friendly button sizes

### Animations
- Smooth hover transitions (0.3s)
- Transform effects on hover (translateY)
- Box shadow enhancements
- Slide-down animation for FAQ answers

## Usage

### To modify a component:
1. Edit the component file in `components/` folder
2. Update corresponding CSS module if needed
3. Changes will be hot-reloaded in development

### To reorder sections:
Edit `pages/index.js` and rearrange the component imports/usage.

### To customize colors:
1. Update CSS variables in `styles/globals.css`
2. All components use these variables

### To add new sections:
1. Create new component in `components/` folder
2. Create corresponding CSS module
3. Import and add to `pages/index.js`

## Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Color Variables

All colors are defined in `styles/globals.css`:

```css
--primary-color: #ffd700
--primary-light: #ffed4e
--background-dark: #0f0f1e
--background-secondary: #1a1a2e
--background-tertiary: #16213e
--text-primary: #ffffff
--text-secondary: #b0b0b0
--text-muted: #808080
--border-color: rgba(255, 215, 0, 0.2)
```

## Notes

- All components are fully responsive
- Using Next.js CSS Modules for styling isolation
- Components use modern React patterns (hooks, state management)
- Font: 'Poppins' (imported from Google Fonts)
- Typography scale follows design best practices
