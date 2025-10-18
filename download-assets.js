const https = require('https');
const fs = require('fs');
const path = require('path');

// Create public directory if it doesn't exist
const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Media files to download from Vercel Blob
const mediaFiles = [
  {
    url: 'https://mdvxiezrgfyljoqh.public.blob.vercel-storage.com/flagball_landing_video.mp4',
    filename: 'flagball_landing_video.mp4'
  },
  {
    url: 'https://mdvxiezrgfyljoqh.public.blob.vercel-storage.com/flagball_trailer.mp4',
    filename: 'flagball_trailer.mp4'
  },
  {
    url: 'https://mdvxiezrgfyljoqh.public.blob.vercel-storage.com/partner_background.webp',
    filename: 'partner_background.webp'
  },
  {
    url: 'https://mdvxiezrgfyljoqh.public.blob.vercel-storage.com/rules_background.webp',
    filename: 'rules_background.webp'
  },
  {
    url: 'https://mdvxiezrgfyljoqh.public.blob.vercel-storage.com/faq_background.webp',
    filename: 'faq_background.webp'
  }
];

function downloadFile(url, filename) {
  return new Promise((resolve, reject) => {
    const filepath = path.join(publicDir, filename);
    
    console.log(`Downloading ${filename}...`);
    
    const file = fs.createWriteStream(filepath);
    
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`✓ Downloaded ${filename}`);
          resolve();
        });
      } else {
        fs.unlink(filepath, () => {});
        reject(new Error(`Failed to download ${filename}: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

async function downloadAllAssets() {
  console.log('Starting download of media assets from Vercel Blob...\n');
  
  for (const media of mediaFiles) {
    try {
      await downloadFile(media.url, media.filename);
    } catch (error) {
      console.error(`✗ Error downloading ${media.filename}:`, error.message);
    }
  }
  
  console.log('\nDownload complete!');
}

downloadAllAssets();


