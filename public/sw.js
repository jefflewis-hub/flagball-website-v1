// Service Worker for aggressive video caching
const CACHE_NAME = 'flagball-video-cache-v1';
const VIDEO_URLS = [
  'https://mdvxiezrgfyljoqh.public.blob.vercel-storage.com/flag_landing_video_mobile_v1.mp4',
  'https://mdvxiezrgfyljoqh.public.blob.vercel-storage.com/flagball_landing_page_v3.mp4'
];

// Install event - precache video if possible
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  self.skipWaiting();
});

// Activate event
self.addEventListener('activate', (event) => {
  console.log('Service Worker activated');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - cache video with range request support
self.addEventListener('fetch', (event) => {
  const url = event.request.url;
  
  // Only handle video requests
  if (!VIDEO_URLS.some(videoUrl => url.includes(videoUrl.split('/').pop()))) {
    return;
  }

  event.respondWith(
    caches.open(CACHE_NAME).then(async (cache) => {
      const cachedResponse = await cache.match(event.request, { ignoreSearch: true });
      
      if (cachedResponse) {
        console.log('Serving video from cache:', url);
        return cachedResponse;
      }

      console.log('Fetching and caching video:', url);
      try {
        const response = await fetch(event.request);
        
        // Only cache successful responses
        if (response.ok) {
          // Clone the response before caching
          cache.put(event.request, response.clone());
        }
        
        return response;
      } catch (error) {
        console.error('Video fetch failed:', error);
        throw error;
      }
    })
  );
});

