# Deployment

## Build

```bash
pnpm install --frozen-lockfile
pnpm run check
```

Upload the contents of `dist/` to the website root.

## Image performance (2026-10-27)

The optimized build is approximately 7 MB (previously 93 MB). Large raster
images use WebP, with a maximum dimension of 2560 pixels and preserved alpha.
Original PNG/JPEG sources remain in Git for future editing; asset globs exclude
those originals so they are not shipped alongside WebP copies. Pages load on
demand, below-fold images use native lazy loading, and the first home banner
loads eagerly with high priority.

Generated WebP files are committed, so ordinary builds need no image tools.
To regenerate after changing source images, run `scripts/optimize-images.mjs`
with Sharp available (`SHARP_MODULE` can specify its absolute module path).
When adding an image to an asset-glob directory, exclude its original PNG/JPEG
from the corresponding page glob after conversion.

For the existing server, publish the updated source and `dist/` through GitHub
Desktop, then run `git pull --ff-only` in `/var/www/aipa-website`.
Verify `/`, `/about`, `/services`, `/contact`, and all product routes after deploy.
Check that image requests now use `.webp` and return 200 in browser Network tools.
Keep HTML on `Cache-Control: no-cache`; hashed assets may use long-lived cache.
No PM2 restart or Nginx change is required for a static asset release.

## Nginx

```nginx
server {
    listen 80;
    server_name example.com www.example.com;
    root /var/www/aipa/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(?:css|js|svg|png|jpg|jpeg|webp|woff2?)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
        try_files $uri =404;
    }
}
```

After DNS is connected, enable HTTPS through the hosting provider or Certbot.

## Release check

1. Open every main route directly and refresh it.
2. Test navigation, product cards, contact buttons and the mobile menu.
3. Check 1440, 1024, 768, 390 and 375 pixel widths.
4. Confirm HTTPS, production contact details and the final TecDoc URL.
