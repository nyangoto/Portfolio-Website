# Portfolio Personalization Implementation Plan

## Phase 1: Core Configuration Update

### Step 1: Update Site Configuration
**File**: `src/config.js`
- Replace all Chandrika Deb references with Patrick Orangi
- Update location from "Jamshedpur, India" to "Nairobi, Kenya"  
- Update email to "patricknyangoto@outlook.com"
- Update GitHub username to your actual GitHub profile
- Update LinkedIn to "https://www.linkedin.com/in/patrick-orangi/"
- Update site title and description for SEO
- Update social media handles

### Step 2: Update Meta Information
**Files**: 
- `src/components/head.js` - Update meta tags
- `package.json` - Update author information
- `README.md` - Update project description

## Phase 2: Content Personalization

### Step 3: Hero Section Update
**File**: `content/hero/index.md`
- Change name from "Chandrika Deb" to "Patrick Orangi"
- Update subtitle to reflect your Full Stack Engineer role
- Rewrite intro paragraph focusing on your LSE background and current work
- Update button text if needed

### Step 4: About Section Overhaul
**File**: `content/about/index.md`
- Replace avatar image with your professional photo
- Rewrite bio focusing on:
  - Full Stack development & AI Solutions Architect expertise
  - Nairobi-based location
  - Technology interests
- Update skills list to match your resume:
  - JavaScript/TypeScript
  - React/Node.js
  - Python
  - Cloud platforms (AWS/Azure)
  - Databases (PostgreSQL, MongoDB, Pinecone)
  - Docker/DevOps tools
  - NLP - NLTK
  - SciKitLearn
  - YOLOv5 CNNs
  - Tensorflow
  - MLOps
  - LLM INtegration
  - RAG & GraphRAG
  - Webscraping
  - Selenium
  - AUtomated Testing

### Step 5: Experience Section Complete Rewrite
**Directory**: `content/jobs/`
- Delete existing job files (Amdocs, XLRI, iSmile Tech, CCL)
- Create new job files based on your resume:

**Current Role** (if applicable):
- Company: Your current company
- Title: Full Stack Software Engineer
- Date range and responsibilities

**Previous Roles**:
- Add previous positions from your resume
- Include specific technologies used
- Highlight key achievements

### Step 6: Featured Projects Update
**Directory**: `content/featured/`
- Replace existing featured project (CaimConsulting) with your main projects
- Based on your resume, create featured projects for:
  - Your most significant web applications
  - AI/ML projects you've worked on
  - Any major full-stack applications

### Step 7: Projects Portfolio Update  
**Directory**: `content/projects/`
- Remove all existing project files
- Add your projects from resume/GitHub:
  - Web applications
  - Python projects
  - JavaScript/React applications
  - Any open-source contributions
- Ensure each project has:
  - Proper tech stack
  - GitHub links
  - Live demo links (if available)
  - Clear descriptions

### Step 8: Contact Information Update
**File**: `content/contact/index.md`
- Update contact message to reflect your current situation
- Mention you're based in Nairobi, Kenya
- Update any specific requirements or preferences

## Phase 3: Visual Assets Update

### Step 9: Images and Branding
**Files to replace**:
- `content/about/me.jpg` - Add your professional headshot
- `src/images/logo.png` - Create/add your personal logo
- `static/resume.pdf` - Replace with your actual resume
- Add project screenshots to featured project folders

### Step 10: Favicon and Manifest
**File**: `gatsby-config.js`
- Update site manifest with your information
- Update favicon if you have a personal logo

## Phase 4: Design System Implementation (Zona Pro + Color Scheme)

### Step 11: Font Integration
**Based on designplan.md**:
- Source Zona Pro font family
- Update `src/styles/fonts.js` or equivalent
- Apply Zona Pro across all text elements
- Set proper font weights and sizes

### Step 12: Color Scheme Update
**Files**: `src/styles/theme.js`, `src/styles/GlobalStyle.js`
- Replace current color palette with:
  - Near-Black (#0b0b0b) - Primary background
  - Dark Gray (#272727) - Secondary background  
  - Light Mint (#b7dbe1) - Primary accent
  - Bright Blue (#60d0ff) - Secondary accent
- Update all component styles to use new colors

## Phase 5: Technical Cleanup

### Step 13: Remove Template-Specific Content
**Files to clean up**:
- Remove any Chandrika-specific blog posts from `content/posts/`
- Update pensieve page title and references
- Update archive page references
- Clean up any hardcoded references in components

### Step 14: SEO and Analytics
**Files**: 
- Update Google Analytics ID in config (if you have one)
- Update all page titles and meta descriptions
- Update canonical URLs
- Update sitemap information

### Step 15: Deployment Configuration
**Files**:
- Update deployment scripts if needed
- Configure for your hosting platform
- Update domain references

## Phase 6: Content Enhancement

### Step 16: Professional Polish
- Ensure all project descriptions are well-written
- Add proper tech stack icons/logos
- Verify all external links work
- Check responsive design on all devices
- Test accessibility features

### Step 17: Performance Optimization
- Optimize images (use gatsby-image for photos)
- Ensure font loading is optimized
- Minimize bundle size
- Test loading speeds

## Phase 7: Testing and Launch

### Step 18: Comprehensive Testing
- Test all navigation links
- Verify contact form functionality (if present)
- Check responsive design across devices
- Test in multiple browsers
- Validate accessibility compliance

### Step 19: Final Review
- Proofread all content
- Verify all personal information is accurate
- Check that resume PDF matches website content
- Ensure consistent branding throughout

## Implementation Priority

### Week 1: Core Personalization
- Steps 1-8 (Configuration and content updates)
- Priority: Get your personal information and content in place

### Week 2: Visual Updates  
- Steps 9-12 (Assets and design system)
- Priority: Apply new design language and branding

### Week 3: Technical Polish
- Steps 13-17 (Cleanup and optimization)
- Priority: Remove template artifacts and optimize

### Week 4: Launch Preparation
- Steps 18-19 (Testing and final review)
- Priority: Ensure everything works perfectly

## Key Files Checklist

### Configuration Files
- [ ] `src/config.js` - Update all personal information
- [ ] `package.json` - Update author and description
- [ ] `gatsby-config.js` - Update site metadata

### Content Files  
- [ ] `content/hero/index.md` - Personal intro
- [ ] `content/about/index.md` - Professional bio and skills
- [ ] `content/jobs/` - All work experience
- [ ] `content/featured/` - Main project showcases
- [ ] `content/projects/` - Additional projects
- [ ] `content/contact/index.md` - Contact information

### Asset Files
- [ ] `content/about/me.jpg` - Professional photo
- [ ] `static/resume.pdf` - Current resume
- [ ] `src/images/logo.png` - Personal branding
- [ ] Project screenshots in featured folders

### Style Files (Design System)
- [ ] `src/styles/theme.js` - Color palette update
- [ ] `src/styles/GlobalStyle.js` - Typography and global styles
- [ ] `src/styles/fonts.js` - Zona Pro integration

## Notes
- Keep the existing site structure and functionality
- Focus on content personalization first, then design updates
- Test thoroughly at each phase
- Consider backing up the original template before major changes
- Ensure all external links and references are updated