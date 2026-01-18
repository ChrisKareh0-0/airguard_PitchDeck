/**
 * Export AirGuard pitch deck to PowerPoint
 *
 * This script:
 * 1. Takes screenshots of each slide
 * 2. Creates a PPTX presentation with those screenshots
 *
 * Usage: node scripts/export-to-pptx.js
 */

const puppeteer = require('puppeteer');
const pptxgen = require('pptxgenjs');
const fs = require('fs');
const path = require('path');

// Helper function for delays (replaces deprecated waitForTimeout)
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const SLIDES = [
  { id: "hero", title: "AirGuard" },
  { id: "road", title: "Road Analogy" },
  { id: "network", title: "Network Visualization" },
  { id: "interference", title: "Interference" },
  { id: "environmental", title: "Environmental Impact" },
  { id: "what-we-sell", title: "What We Sell" },
  { id: "supported-team", title: "Supported By & Team" },
  { id: "vision", title: "Vision & Roadmap" },
  { id: "ask", title: "The Ask" },
];

const OUTPUT_DIR = path.join(__dirname, '../exports');
const SCREENSHOTS_DIR = path.join(OUTPUT_DIR, 'screenshots');

async function exportToPPTX() {
  console.log('🚀 Starting export to PowerPoint...\n');

  // Create output directories
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }
  if (!fs.existsSync(SCREENSHOTS_DIR)) {
    fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });
  }

  // Launch browser
  console.log('📸 Launching browser...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // Set viewport to 16:9 aspect ratio (1920x1080)
  await page.setViewport({
    width: 1920,
    height: 1080,
    deviceScaleFactor: 2, // Retina quality
  });

  // Navigate to the deck
  const url = 'http://localhost:3001/new_deck';
  console.log(`🌐 Navigating to ${url}...\n`);

  try {
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
  } catch (error) {
    console.error('❌ Error: Could not load the page. Make sure the dev server is running on http://localhost:3001');
    await browser.close();
    process.exit(1);
  }

  // Wait for initial render
  await delay(2000);

  // Take screenshots of each slide
  console.log('📸 Capturing slides...\n');

  for (let i = 0; i < SLIDES.length; i++) {
    const slide = SLIDES[i];
    const screenshotPath = path.join(SCREENSHOTS_DIR, `slide-${i + 1}-${slide.id}.png`);

    console.log(`  ${i + 1}/${SLIDES.length} - ${slide.title}`);

    // Wait for any animations to complete
    await delay(1500);

    // Take screenshot
    await page.screenshot({
      path: screenshotPath,
      fullPage: false,
    });

    // Navigate to next slide by clicking the next arrow button (except for the last one)
    if (i < SLIDES.length - 1) {
      // Click the next arrow button instead of using keyboard
      await page.evaluate(() => {
        // Find and click the next button (right arrow in the bottom navigation)
        const buttons = document.querySelectorAll('button');
        for (const button of buttons) {
          // Find the button with the right arrow SVG path
          const svg = button.querySelector('svg path[d*="M9 5l7 7-7 7"]');
          if (svg && !button.disabled) {
            button.click();
            return true;
          }
        }
        return false;
      });
      
      // Wait for slide transition to complete
      await delay(1200);
    }
  }

  await browser.close();
  console.log('\n✅ Screenshots captured!\n');

  // Create PowerPoint presentation
  console.log('📊 Creating PowerPoint presentation...\n');

  const pptx = new pptxgen();

  // Set presentation properties
  pptx.author = 'AirGuard';
  pptx.company = 'AirGuard';
  pptx.subject = 'AirGuard Pitch Deck';
  pptx.title = 'AirGuard - The New Internet';

  // Add slides
  for (let i = 0; i < SLIDES.length; i++) {
    const slide = SLIDES[i];
    const screenshotPath = path.join(SCREENSHOTS_DIR, `slide-${i + 1}-${slide.id}.png`);

    const pptxSlide = pptx.addSlide();

    // Add screenshot as background image (full slide)
    pptxSlide.addImage({
      path: screenshotPath,
      x: 0,
      y: 0,
      w: '100%',
      h: '100%',
    });

    console.log(`  ✓ Added slide ${i + 1}: ${slide.title}`);
  }

  // Save presentation
  const outputPath = path.join(OUTPUT_DIR, 'AirGuard-Pitch-Deck.pptx');
  await pptx.writeFile({ fileName: outputPath });

  console.log(`\n✅ PowerPoint presentation created successfully!`);
  console.log(`📁 Location: ${outputPath}\n`);
  console.log('🎉 Export complete!\n');
}

// Run the export
exportToPPTX().catch((error) => {
  console.error('❌ Error during export:', error);
  process.exit(1);
});
