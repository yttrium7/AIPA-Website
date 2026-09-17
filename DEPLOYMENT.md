# Deployment

## Build

```bash
pnpm install --frozen-lockfile
pnpm run check
```

Upload the contents of `dist/` to the website root.

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
