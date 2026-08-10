/**
 * Batch image optimization script for SS Coaching Classes website.
 * Uses the already-installed `sharp` dependency.
 * 
 * Writes optimized files to a temp directory, then uses a simple copy approach.
 * This works around OneDrive file locking issues.
 * 
 * Usage: node scripts/optimize-images.js
 */
import sharp from 'sharp';
import { readdir, stat, mkdir, copyFile } from 'fs/promises';
import { join, basename, dirname } from 'path';
import { fileURLToPath } from 'url';
import { existsSync } from 'fs';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const PUBLIC = join(__dirname, '..', 'public');
const TEMP_DIR = join(__dirname, '..', '_optimized_temp');

// Config
const GALLERY_MAX_WIDTH = 800;
const GALLERY_QUALITY = 78;
const STAFF_MAX_WIDTH = 400;
const STAFF_QUALITY = 80;
const RESULTS_MAX_WIDTH = 1000;
const RESULTS_QUALITY = 80;

async function ensureDir(dir) {
  if (!existsSync(dir)) await mkdir(dir, { recursive: true });
}

async function getWebpFiles(dir) {
  try {
    const entries = await readdir(dir, { withFileTypes: true });
    return entries
      .filter(e => e.isFile() && /\.(webp|jpg|jpeg|png)$/i.test(e.name))
      .map(e => join(dir, e.name));
  } catch {
    return [];
  }
}

async function optimizeImage(inputPath, maxWidth, quality) {
  const originalSize = (await stat(inputPath)).size;
  const name = basename(inputPath);
  
  try {
    const metadata = await sharp(inputPath).metadata();
    const needsResize = metadata.width && metadata.width > maxWidth;
    
    let pipeline = sharp(inputPath);
    
    if (needsResize) {
      pipeline = pipeline.resize({ width: maxWidth, withoutEnlargement: true });
    }
    
    const buffer = await pipeline
      .webp({ quality, effort: 6 })
      .toBuffer();
    
    // Only overwrite if we actually saved space
    if (buffer.length < originalSize) {
      // Write the buffer directly to the original file using copyFile from a Buffer
      const relativePath = inputPath.replace(PUBLIC, '').replace(/^[\\/]/, '');
      const tempPath = join(TEMP_DIR, relativePath);
      await ensureDir(dirname(tempPath));
      
      // Write optimized buffer to temp location
      const { writeFile } = await import('fs/promises');
      await writeFile(tempPath, buffer);
      
      // Copy back to original (copyFile works better with OneDrive than rename)
      await copyFile(tempPath, inputPath);
      
      const saved = ((originalSize - buffer.length) / originalSize * 100).toFixed(1);
      console.log(`  ✓ ${name}: ${(originalSize/1024).toFixed(0)}KB → ${(buffer.length/1024).toFixed(0)}KB (${saved}% saved)`);
      return originalSize - buffer.length;
    } else {
      console.log(`  - ${name}: already optimal (${(originalSize/1024).toFixed(0)}KB)`);
      return 0;
    }
  } catch (err) {
    console.log(`  ✗ ${name}: ERROR - ${err.message}`);
    return 0;
  }
}

async function optimizeDirectory(dir, label, maxWidth, quality) {
  console.log(`\n📁 Optimizing ${label}...`);
  const files = await getWebpFiles(dir);
  
  if (files.length === 0) {
    console.log('  No images found.');
    return 0;
  }
  
  console.log(`  Found ${files.length} images`);
  let totalSaved = 0;
  
  for (const file of files) {
    totalSaved += await optimizeImage(file, maxWidth, quality);
  }
  
  console.log(`  Total saved: ${(totalSaved / 1024 / 1024).toFixed(2)} MB`);
  return totalSaved;
}

async function main() {
  console.log('═══════════════════════════════════════════');
  console.log('  SS Coaching Classes — Image Optimizer');
  console.log('═══════════════════════════════════════════');
  
  await ensureDir(TEMP_DIR);
  let totalSaved = 0;
  
  // 1. Gallery photos
  totalSaved += await optimizeDirectory(
    join(PUBLIC, 'gallery', 'photos'),
    'Gallery Photos',
    GALLERY_MAX_WIDTH,
    GALLERY_QUALITY
  );
  
  // 2. Staff photos
  totalSaved += await optimizeDirectory(
    join(PUBLIC, 'staff'),
    'Staff Photos',
    STAFF_MAX_WIDTH,
    STAFF_QUALITY
  );
  
  // 3. Student photos
  totalSaved += await optimizeDirectory(
    join(PUBLIC, 'students'),
    'Student Photos',
    STAFF_MAX_WIDTH,
    STAFF_QUALITY
  );
  
  // 4. Result pamphlets (2025-26)
  totalSaved += await optimizeDirectory(
    join(PUBLIC, 'results', '2025-26'),
    'Result Pamphlets 2025-26',
    RESULTS_MAX_WIDTH,
    RESULTS_QUALITY
  );
  
  // 5. Result pamphlets (2024-25)
  totalSaved += await optimizeDirectory(
    join(PUBLIC, 'results', '2024-25'),
    'Result Pamphlets 2024-25',
    RESULTS_MAX_WIDTH,
    RESULTS_QUALITY
  );
  
  // 6. Founder photo
  const founderPath = join(PUBLIC, 'Prof Satish Photo.webp');
  try {
    await stat(founderPath);
    console.log('\n📁 Optimizing Founder Photo...');
    totalSaved += await optimizeImage(founderPath, 600, 82);
  } catch {}
  
  console.log('\n═══════════════════════════════════════════');
  console.log(`  🎉 TOTAL SAVED: ${(totalSaved / 1024 / 1024).toFixed(2)} MB`);
  console.log('═══════════════════════════════════════════');
  console.log('  Temp files in: _optimized_temp/');
  console.log('  You can safely delete that folder.');
}

main().catch(console.error);
