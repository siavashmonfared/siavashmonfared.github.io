# Website Update Guide

## Quick Updates

### 1. Add New Publication
Edit `content/publications.json`:
```json
{
  "title": "Your New Paper",
  "authors": "Author List", 
  "journal": "Journal Name, Year",
  "link": "https://doi.org/..."
}
```

### 2. Add News Item
Edit `content/news.json`:
```json
{
  "date": "Month Day, Year",
  "title": "News Title",
  "content": "Description...",
  "link": "https://optional-link.com"
}
```

### 3. Add Media Files

**Create folders:**
```bash
mkdir -p assets/img assets/video assets/docs assets/data
```

**Add files:**
- Images: `assets/img/figure1.png`
- Videos: `assets/video/demo.mp4` 
- PDFs: `assets/docs/paper.pdf`
- Any file: `assets/data/dataset.csv`

**Use in HTML:**
```html
<img src="assets/img/figure1.png" alt="Figure 1">
<video controls><source src="assets/video/demo.mp4"></video>
<a href="assets/docs/paper.pdf">View PDF</a>
```

### 4. Update Profile
- Replace `assets/img/prof_pic.jpg` with your photo
- Edit personal info in `index.html` (search for your name)

### 5. Change Colors/Style
Edit the `<style>` section in `index.html`:
```css
/* Main color theme */
color: #3498db; /* Blue links/accents */
background: #fdfdfd; /* Light background */
```

## No Build Process Needed!
Just edit files and push to GitHub. Changes appear instantly at:
https://yourusername.github.io