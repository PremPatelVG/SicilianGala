# Deployment Guide

This is a static HTML + Tailwind CSS project. The production-ready website is generated into `dist/`.

## Local Setup

```powershell
npm install
npm run build
npm start
```

Open:

```text
http://127.0.0.1:4173/
```

## Git Upload

Run these commands after installing Git:

```powershell
git init
git add .
git commit -m "Initial Sicilian Gala static site"
git branch -M main
git remote add origin YOUR_GIT_REPOSITORY_URL
git push -u origin main
```

Replace `YOUR_GIT_REPOSITORY_URL` with your GitHub/GitLab/Bitbucket repository URL.

## Server Hosting

Build first:

```powershell
npm install
npm run build
```

Upload the contents of `dist/` to your server web root, for example:

- `public_html/`
- `htdocs/`
- `/var/www/sicilian-odyssey/`

The required production files are:

```text
dist/index.html
dist/app.js
dist/styles.css
dist/tailwind.css
dist/assets/
```

## Nginx Example

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;
    root /var/www/sicilian-odyssey;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(css|js|jpg|jpeg|png|webp|svg)$ {
        expires 30d;
        add_header Cache-Control "public, max-age=2592000";
    }
}
```

## Apache / cPanel

Upload the contents of `dist/` into `public_html/`. If you need an `.htaccess`, use:

```apache
DirectoryIndex index.html

<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>

<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/css "access plus 30 days"
  ExpiresByType application/javascript "access plus 30 days"
  ExpiresByType image/jpeg "access plus 30 days"
  ExpiresByType image/png "access plus 30 days"
</IfModule>
```
