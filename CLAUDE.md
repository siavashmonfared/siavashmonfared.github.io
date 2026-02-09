# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is an academic personal website for Siavash Monfared, built as a static HTML site and hosted on GitHub Pages. The site focuses on computational physics research, particularly active matter, biological tissues, and soft matter mechanics.

**Live Site:** https://siavashmonfared.github.io

## Architecture

### Pure HTML Approach

This site deliberately uses **no build process** - it's pure HTML/CSS/JavaScript. This design choice ensures:
- Instant deployment to GitHub Pages
- No Jekyll/Ruby dependencies
- No plugin conflicts
- Simple content updates via JSON files

### Content Management System

The site uses a hybrid approach:
- **Static HTML**: Main structure, styling, and navigation in individual `.html` files
- **Dynamic JSON**: Publications and news loaded from JSON files for easy updates

Key files:
- `index.html` - Home page with about, research interests, and news feed
- `research.html` - Publications list (hardcoded, not JSON-driven)
- `projects.html` - Project showcase
- `service.html` - Professional service and outreach
- `content/publications.json` - Publications data (currently unused, hardcoded in HTML instead)
- `content/news.json` - News items data structure

### Layout Structure

The site uses a **fixed side panel** design on desktop:
- Left sidebar (300px wide): Profile photo, name, affiliations, social links
- Main content area: Offset by 300px, contains page content
- Fixed header: Navigation bar
- Mobile responsive (collapses side panel)

### Assets Organization

```
assets/
├── img/        # Images (figures, profile picture, graphics)
├── video/      # Video files and GIFs (simulations, demos)
└── pdf/        # PDF files (papers, supplementary materials, resume)
```

## Common Commands

### Viewing Locally

Since this is static HTML, simply open any `.html` file in a browser:
```bash
open index.html
# or
python3 -m http.server 8000  # Then visit http://localhost:8000
```

### Git Operations

The site auto-deploys to GitHub Pages on push to `main` branch:

```bash
# Add changes
git add .

# Commit with descriptive message
git commit -m "Add new publication"

# Push to GitHub (triggers automatic deployment)
git push origin main
```

Changes go live automatically at https://siavashmonfared.github.io within 1-2 minutes.

### Adding Content

**Add a news item:**
Edit `content/news.json` and add to the array:
```json
{
  "date": "Month Day, Year",
  "title": "News Title",
  "content": "Description text...",
  "link": "https://optional-link.com",
  "media": "assets/video/example.gif"
}
```

**Add a publication:**
Publications are currently **hardcoded in `research.html`** (not loaded from `publications.json`). To add a publication:
1. Edit `research.html` directly
2. Find the appropriate year section
3. Add a new `<div class="publication">` block following the existing pattern
4. Include: title, authors (bold your name with `<strong>`), journal, DOI link, PDF link

**Add media files:**
```bash
# Images
cp image.png assets/img/

# Videos/GIFs (for simulations)
cp simulation.gif assets/video/

# PDFs (papers, supplementary info)
cp paper.pdf assets/pdf/
```

Reference in HTML:
```html
<img src="assets/img/image.png" alt="Description">
<video controls><source src="assets/video/demo.mp4"></video>
<a href="assets/pdf/paper.pdf">PDF</a>
```

### Updating Profile

- **Profile photo**: Replace `assets/img/prof_pic.jpg`
- **Personal info**: Edit side panel section in each HTML file (search for name/affiliations)
- **Resume**: Replace `resume_10012025_public.pdf` in root directory

## Styling and Theming

All CSS is embedded in `<style>` tags within each HTML file (no external CSS files).

**Color scheme:**
- Primary accent: `#2d5016` (dark green) - used for links, borders, hover states
- Secondary: `#3498db` (blue) - used for social media buttons
- Background: `#fdfdfd` (off-white)
- Text: `#666` (gray) for body, `#333` (dark gray) for headings

**To change colors**: Edit the `<style>` section in each HTML file. Key selectors:
- `.nav-links a:hover { color: #2d5016; }` - Navigation hover color
- `.section h2 { border-bottom: 2px solid #2d5016; }` - Section heading underline
- `.social-links a:hover { background: #1e3a0f; }` - Social button hover

## GitHub Workflows

The repository includes several automated workflows:

- **deploy.yml**: Main deployment (triggers on push to main)
- **prettier.yml**: Code formatting checks
- **prettier-html.yml**: HTML formatting
- **broken-links.yml**: Link validation
- **lighthouse-badger.yml**: Performance monitoring
- **axe.yml**: Accessibility testing
- **codeql.yml**: Security scanning

Most workflows are inherited from a template and may reference Jekyll/Ruby despite this being a pure HTML site.

## Important Notes

### JSON Files Not Used for Publications

Despite `content/publications.json` existing, **publications are hardcoded in `research.html`**. The JSON file appears to be a remnant from an earlier design. To update publications, edit `research.html` directly.

### News Feed May Not Be Dynamic

Check if `index.html` actually loads `news.json` via JavaScript. If news items are hardcoded, edit `index.html` directly instead of the JSON file.

### Git Configuration

- Remote: `git@github.com:siavashmonfared/siavashmonfared.github.io.git`
- Branch: `main`
- User: `siavashmonfared <siavashmonfared@users.noreply.github.com>`

### Media File Naming

Follow existing conventions:
- Papers: `AuthorName_et_al_Journal_Year.pdf`
- Supplementary: `AuthorName_et_al_Journal_SI_Year.pdf`
- Simulations: Descriptive names like `mixture_sim.gif`, `stress_chains.gif`

## Research Focus

The website showcases research in:
- Active matter physics applied to biological systems
- Multi-phase-field modeling of tissues
- Mechanical cell competition and elimination
- Stress transmission in soft, dense cellular matter
- Computational biophysics and mechanics
