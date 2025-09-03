# Image Setup Instructions

## Profile Photo Setup

1. **Save your profile photo** as `images/profile-photo.jpg`
   - Use the photo you provided in the conversation
   - Recommended size: 300x300 pixels or larger
   - Format: JPG or PNG
   - Make sure it's optimized for web (under 500KB)

## Favicon Creation

Create the following favicon files from your profile photo:

### Required Favicon Files:
1. **`images/favicon.ico`** - 32x32 pixels, ICO format
2. **`images/favicon-16x16.png`** - 16x16 pixels, PNG format  
3. **`images/favicon-32x32.png`** - 32x32 pixels, PNG format
4. **`images/apple-touch-icon.png`** - 180x180 pixels, PNG format

### How to Create Favicons:

#### Option 1: Online Favicon Generator (Recommended)
1. Go to https://favicon.io/favicon-converter/
2. Upload your profile photo
3. Download the generated favicon package
4. Extract and copy the required files to the `images/` folder

#### Option 2: Manual Creation
1. Resize your profile photo to the required dimensions
2. Save in the appropriate formats
3. Name them exactly as listed above

### File Structure After Setup:
```
portfolio/
├── images/
│   ├── profile-photo.jpg
│   ├── favicon.ico
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   └── apple-touch-icon.png
├── index.html
├── styles.css
├── script.js
└── README.md
```

## Testing
After adding the images:
1. Open `index.html` in a browser locally
2. Check if the profile photo appears in the hero section
3. Check if the favicon appears in the browser tab
4. Commit and push the changes to see them live

## Alternative: Using GitHub Issues for Image Upload
If you need help uploading images to GitHub:
1. Go to your repository's Issues tab
2. Create a new issue
3. Drag and drop your images into the issue description
4. GitHub will provide direct URLs
5. Update the HTML with these URLs instead of local paths

## Next Steps
Once you've added the images:
1. Test locally
2. Commit the changes: `git add . && git commit -m "Add profile photo and favicon"`
3. Push to GitHub: `git push origin main`
4. Check the live site at https://jackming1225.github.io/sunny-kumar-portfolio/
