# Portfolio Design Implementation Plan

## Overview
This document outlines the implementation plan for updating the portfolio website with the Zona Pro font family and a custom color palette while maintaining the existing structure and functionality.

## Design Reference
The design update is based on the Finstat dashboard design language, featuring:
- **Font:** Zona Pro font family
- **Colors:** 
  - Light Mint (#b7dbe1)
  - Near-Black (#0b0b0b)
  - Dark Gray (#272727)
  - Bright Blue (#60d0ff)

## 1. Font Implementation

### Primary Font: Zona Pro
- **Implementation Locations:**
  - Add to `src/styles/fonts.js` or equivalent font configuration file
  - Update the font stack in `src/styles/GlobalStyle.js`
  - Modify typography settings throughout component styles

### Font Weights to Include:
- Light (300) - For subtle, secondary content
- Regular (400) - For body text and general content
- Medium (500) - For semi-emphasized content, navigation items
- Bold (700) - For headings and important emphasized text

### Typography Applications:
- **Main Headings:** Zona Pro Bold (700), 32-48px
- **Section Headers:** Zona Pro Bold (700), 24-32px, possible uppercase treatment
- **Navigation:** Zona Pro Medium (500), 16px
- **Body Text:** Zona Pro Regular (400), 16-18px
- **Small Text/Captions:** Zona Pro Light (300), 14px
- **Buttons/CTAs:** Zona Pro Medium (500), 16px
- **Project Titles:** Zona Pro Bold (700), 20-24px
- **Code Snippets:** Consider a complementary monospace font

### Font Integration Steps:
1. Source Zona Pro font files (purchase license or use a service like Adobe Fonts)
2. Configure font loading in the project
3. Create font mixins or helper classes for consistent typography
4. Update component-specific typography

## 2. Color Scheme Implementation

### Primary Colors:
- **Near-Black (#0b0b0b):** Primary background color (replacing current navy)
- **Dark Gray (#272727):** Secondary background, card backgrounds, content areas
- **Light Mint (#b7dbe1):** Primary accent color (replacing current green)
- **Bright Blue (#60d0ff):** Secondary accent color for highlights and interactive elements

### Supporting Colors:
- **White (#ffffff):** Primary text color on dark backgrounds
- **Light Gray (#f8f8f8):** Secondary text, subtle backgrounds
- **Medium Gray (#a8a8a8):** Tertiary text, disabled states

### Color Application Map:

#### Navigation & Header
- Background: #0b0b0b
- Logo: #b7dbe1 or #60d0ff for emphasis
- Active links: #60d0ff
- Inactive links: #ffffff (with 70-80% opacity)
- Hover states: #b7dbe1
- Mobile menu background: #272727
- Hamburger icon: #b7dbe1

#### Hero Section
- Background: #0b0b0b
- Name highlight: #b7dbe1
- Subtitle: #ffffff
- Description text: #ffffff (with 85% opacity)
- Button background: #60d0ff
- Button text: #0b0b0b
- Button hover: Slight darkening of #60d0ff
- Decorative elements/accents: #b7dbe1

#### About Section
- Background: #272727
- Section title: #b7dbe1
- Text: #ffffff
- Emphasis text: #60d0ff or #b7dbe1
- Skill tags background: #60d0ff (20% opacity)
- Skill tags text: #60d0ff
- Photo border/highlight: #b7dbe1
- List item markers: #b7dbe1

#### Experience Section
- Background: #0b0b0b
- Tab active background: #272727
- Tab inactive background: transparent
- Tab active indicator/border: #60d0ff
- Tab hover state: #b7dbe1 (subtle)
- Company name: #b7dbe1
- Job title: #ffffff
- Date text: #60d0ff or lighter gray (#a8a8a8)
- Body text: #ffffff (85% opacity)
- Bullet points: #b7dbe1

#### Projects Section
- Card background: #272727
- Card hover state: Subtle box-shadow with #b7dbe1
- Featured project highlight/border: #b7dbe1
- Project title: #ffffff
- Project description background: #272727 (90% opacity)
- Project description text: #ffffff
- Tech stack tags background: #0b0b0b or transparent
- Tech stack tags text: #60d0ff
- Links/icons: #b7dbe1
- Icons hover: #60d0ff
- Featured image overlay: #0b0b0b (50% opacity)

#### Contact Section
- Background: #272727 or gradient from #0b0b0b to #272727
- Section title: #b7dbe1
- Description text: #ffffff
- Form input background: #0b0b0b
- Form input text: #ffffff
- Form input border: #b7dbe1
- Form input focus: #60d0ff border or glow
- Button: #60d0ff background with #0b0b0b text
- Button hover: Slight darkening of #60d0ff
- Success messages: Green variant (#40c057)
- Error messages: Red variant (#fa5252)

#### Footer
- Background: #0b0b0b
- Text: #ffffff (70% opacity)
- Social icons: #b7dbe1
- Social icons hover: #60d0ff
- Links: #b7dbe1
- Links hover: #60d0ff
- Credits/copyright: #a8a8a8

## 3. Implementation Strategy

### CSS Variables Update
Update in `src/styles/theme.js` or equivalent:
```
colors: {
  background: '#0b0b0b',
  backgroundSecondary: '#272727',
  primary: '#b7dbe1',
  accent: '#60d0ff',
  text: '#ffffff',
  textSecondary: 'rgba(255, 255, 255, 0.7)',
}
```

### Global Styles Update
Update in `src/styles/GlobalStyle.js`:
- Background colors
- Text colors
- Link styles
- Selection highlight colors
- Scrollbar styling
- Base typography

### Component-Specific Styling
1. **Navigation Component:**
   - Update background, text colors
   - Adjust active/inactive states
   - Modify mobile menu styling

2. **Section Components:**
   - Update section titles styling
   - Adjust background colors
   - Modify content containers

3. **Button Components:**
   - Update primary/secondary button styles
   - Adjust hover/focus states
   - Modify disabled states

4. **Card Components:**
   - Update background colors
   - Adjust shadows and borders
   - Modify hover effects

### Special Effects
- **Gradients:**
  - Subtle gradient from #0b0b0b to #272727 for section transitions
  - Accent gradient from #b7dbe1 to #60d0ff for special highlights
  
- **Shadows:**
  - Card shadows: rgba(11, 11, 11, 0.2) for subtle dimension
  - Highlight shadows: rgba(183, 219, 225, 0.15) for accent elements
  
- **Transitions & Animations:**
  - Color transitions: 0.3s ease for hover states
  - Background transitions: 0.4s ease-in-out
  - Scaling effects on cards: transform: scale(1.03) on hover

## 4. Visual Hierarchy Adjustments

### Primary Focus Elements
- Use #b7dbe1 for:
  - Section headers
  - Key information
  - Navigation elements
  - Decorative accents

### Secondary Focus Elements
- Use #60d0ff for:
  - Call-to-action buttons
  - Interactive elements
  - Highlight information
  - Progress indicators
  - Links on hover

### Background Layering
- Base layer: #0b0b0b
- Content cards/sections: #272727
- Add subtle shadows between layers for depth perception

### Content Emphasis
- Important content: Higher contrast, larger font size, accent colors
- Secondary content: Lower contrast, smaller font size, neutral colors
- Use whitespace strategically between content blocks
- Add subtle border accents (#b7dbe1) to group related information

## 5. Responsive Design Considerations

### Mobile Adjustments
- Simplify color usage on smaller screens
- Increase contrast for better readability
- Adjust font sizes appropriately
- Maintain color consistency across breakpoints

### Dark Mode Support
- Current scheme is already dark mode focused
- Consider light mode alternative if needed
- Ensure smooth transitions between modes

## 6. Accessibility Considerations

### Color Contrast
- Ensure text meets WCAG 2.1 AA standards:
  - Small text (below 18pt): 4.5:1 minimum contrast ratio
  - Large text (18pt+): 3:1 minimum contrast ratio
- Test #60d0ff and #b7dbe1 against dark backgrounds
- Adjust opacity/shade as needed for readability

### Focus States
- Create visible focus indicators with #60d0ff
- Ensure all interactive elements have proper focus states
- Test keyboard navigation with updated styles

### Text Legibility
- Maintain minimum 16px font size for body text
- Ensure line height is at least 1.5x font size
- Use proper heading hierarchy with Zona Pro weights

## 7. Implementation Checklist

- [ ] Source and integrate Zona Pro font family
- [ ] Update global color variables
- [ ] Modify global styles with new typography and colors
- [ ] Update component-specific styling
- [ ] Test responsive behavior across breakpoints
- [ ] Verify accessibility compliance
- [ ] Create documentation for color and typography system
- [ ] Optimize performance (font loading, etc.)
- [ ] Final review across browsers and devices