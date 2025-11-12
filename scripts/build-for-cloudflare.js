#!/usr/bin/env node

/**
 * Cloudflare Pages Build Script
 * 
 * This script:
 * 1. Runs the Next.js build
 * 2. Removes the .next/cache directory (which exceeds Cloudflare's 25MB limit)
 * 3. Ensures only necessary files are deployed
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting Cloudflare-optimized build...\n');

// Step 1: Run Next.js build
console.log('📦 Building Next.js application...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Next.js build completed\n');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}

// Step 2: Remove cache directory to prevent 25MB file size errors
console.log('🧹 Cleaning up cache directory...');
const cacheDir = path.join(process.cwd(), '.next', 'cache');

if (fs.existsSync(cacheDir)) {
  try {
    fs.rmSync(cacheDir, { recursive: true, force: true });
    console.log('✅ Removed .next/cache directory');
  } catch (error) {
    console.error('⚠️  Warning: Could not remove cache directory:', error.message);
  }
} else {
  console.log('ℹ️  No cache directory found (already clean)');
}

// Step 3: Remove trace file if it exists (can be large)
console.log('\n🧹 Cleaning up trace files...');
const traceFile = path.join(process.cwd(), '.next', 'trace');

if (fs.existsSync(traceFile)) {
  try {
    fs.unlinkSync(traceFile);
    console.log('✅ Removed .next/trace file');
  } catch (error) {
    console.error('⚠️  Warning: Could not remove trace file:', error.message);
  }
}

console.log('\n✅ Cloudflare-optimized build complete!');
console.log('📊 Output directory: .next (cache removed)');
