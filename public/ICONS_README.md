# Favicon Setup Instructions

## Required Icon Files

Place these files in the `public/` folder:

1. **favicon.ico** (48x48) - Already exists ✓
2. **icon-192.png** (192x192) - TODO: Generate from favicon.ico
3. **icon-512.png** (512x512) - TODO: Generate from favicon.ico
4. **apple-touch-icon.png** (180x180) - TODO: Generate from favicon.ico

## How to Generate Icons

### Option 1: Online Tool (Recommended)
1. Visit: https://realfavicongenerator.net/
2. Upload your `favicon.ico`
3. Download the generated package
4. Extract and place files in `public/` folder

### Option 2: Using ImageMagick
```bash
magick favicon.ico -resize 192x192 icon-192.png
magick favicon.ico -resize 512x512 icon-512.png
magick favicon.ico -resize 180x180 apple-touch-icon.png
```

### Option 3: Using Photoshop/GIMP
- Open favicon.ico
- Resize canvas to required dimensions
- Export as PNG with transparency

## Testing
After adding icons:
1. Restart dev server: `npm run dev`
2. Hard refresh browser: Ctrl+Shift+R
3. Check browser tab for favicon
4. Test on mobile devices for apple-touch-icon

## Browser Cache
If favicon doesn't update:
- Clear browser cache
- Open in incognito/private mode
- Check DevTools > Application > Manifest
