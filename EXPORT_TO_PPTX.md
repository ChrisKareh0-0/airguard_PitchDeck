# Export Pitch Deck to PowerPoint

This guide explains how to export your AirGuard pitch deck website to a PowerPoint (.pptx) presentation.

## Quick Start

### Step 1: Make sure the dev server is running

```bash
npm run dev
```

The site should be accessible at http://localhost:3000/new_deck

### Step 2: Run the export script (in a new terminal)

```bash
npm run export:pptx
```

### Step 3: Find your presentation

The exported PowerPoint file will be saved to:
```
exports/AirGuard-Pitch-Deck.pptx
```

Screenshots of each slide will also be saved in:
```
exports/screenshots/
```

## How It Works

The export script:

1. **Launches a headless browser** (Puppeteer) to load your website
2. **Navigates through each slide** by simulating keyboard arrow presses
3. **Takes high-quality screenshots** (1920x1080 @ 2x resolution) of each slide
4. **Creates a PowerPoint presentation** with each screenshot as a full-slide image

## Output Details

- **Resolution**: 1920x1080 pixels (16:9 aspect ratio)
- **Quality**: Retina quality (2x device scale factor)
- **Format**: Microsoft PowerPoint (.pptx)
- **Slides included**:
  1. AirGuard (Hero)
  2. Road Analogy
  3. Network Visualization
  4. Interference
  5. Environmental Impact
  6. What We Sell
  7. Supported By & Team
  8. Vision & Roadmap
  9. The Ask

## Customization

To modify which slides are exported, edit the `SLIDES` array in:
```
scripts/export-to-pptx.js
```

To change the resolution or quality, modify the viewport settings:
```javascript
await page.setViewport({
  width: 1920,        // Width in pixels
  height: 1080,       // Height in pixels
  deviceScaleFactor: 2, // 1 = normal, 2 = retina
});
```

## Troubleshooting

### Error: "Could not load the page"
- Make sure `npm run dev` is running in another terminal
- Verify the site is accessible at http://localhost:3000/new_deck
- Check if port 3000 is not blocked by firewall

### Low quality screenshots
- Increase `deviceScaleFactor` to 3 or 4 for higher quality
- Note: Higher values will increase file size and processing time

### Missing slides
- Make sure all animations have completed before screenshot
- Increase `waitForTimeout` values in the script if needed

### Puppeteer installation issues
If Puppeteer fails to download Chromium:
```bash
npm install puppeteer --force
```

Or use system Chrome:
```bash
PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true npm install puppeteer
```

## Alternative Methods

### Option 2: Manual Export (Browser Print)

1. Open http://localhost:3000/new_deck in Chrome
2. Press `F` to enter fullscreen mode
3. Navigate through each slide and use:
   - **Mac**: `Cmd + Shift + 3` (screenshot)
   - **Windows**: `Win + Shift + S` (snipping tool)
4. Import screenshots into PowerPoint manually

### Option 3: Browser Print to PDF

1. Open http://localhost:3000/new_deck
2. Print each slide (`Cmd/Ctrl + P`)
3. Select "Save as PDF"
4. Use a PDF to PPTX converter (e.g., Adobe Acrobat, online converters)

### Option 4: Use Reveal.js Export Plugin

If you want to convert to Reveal.js format and use their export plugins:
- Export as PDF: Built-in Reveal.js feature
- Convert PDF → PPTX using Adobe Acrobat or similar tools

## File Sizes

Typical output sizes:
- **Each screenshot**: ~100-500 KB (PNG, Retina quality)
- **Final PPTX**: ~3-5 MB (9 slides)

To reduce file size:
- Lower `deviceScaleFactor` to 1
- Compress images after export
- Use JPEG instead of PNG (modify script)

## Notes

- The exported PPTX contains **static images** of your slides, not interactive HTML
- Animations, videos, and interactive elements will not work in the PowerPoint
- You can edit the PowerPoint after export to add animations, speaker notes, etc.
- Consider using this for client presentations or sending to investors who prefer PowerPoint

## Advanced: Add Speaker Notes

To add speaker notes to the PowerPoint, modify the script:

```javascript
const pptxSlide = pptx.addSlide();
pptxSlide.addImage({
  path: screenshotPath,
  x: 0,
  y: 0,
  w: '100%',
  h: '100%',
});

// Add speaker notes
pptxSlide.addNotes('Your speaker notes here for this slide.');
```

## Support

If you encounter issues:
1. Check that Node.js version is 18+ (`node --version`)
2. Clear exports folder and try again
3. Review console output for specific error messages
4. Ensure sufficient disk space for screenshots

---

**Pro Tip**: Export your deck before important presentations as a backup, in case internet or local server fails during your pitch!
