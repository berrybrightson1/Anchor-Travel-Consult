# Deployment Guide - Anchor Travel Consult

Complete guide for deploying to production on GCP, Hostinger, Vercel, and other platforms.

## 🚀 Quick Deployment Comparison

| Platform | Setup Time | Cost | Best For |
|----------|-----------|------|----------|
| **Vercel** | 5 min | Free tier available | Easiest, best DX |
| **GCP Cloud Run** | 20 min | Pay-per-request | Scalable, cost-effective |
| **Hostinger** | 30 min | Shared hosting | Budget-friendly |
| **AWS Amplify** | 15 min | Free tier available | Full AWS integration |

## 📋 Pre-Deployment Checklist

- [ ] All tests pass: `npm run lint && npm run build`
- [ ] `.env.production` created with all required variables
- [ ] Contact information updated (email, phone, WhatsApp)
- [ ] Images optimized and compressed
- [ ] DNS records prepared
- [ ] SSL certificate ready
- [ ] Analytics ID configured
- [ ] Email service API keys ready

## 🟦 GCP Cloud Run Deployment

**Recommended for** production use with auto-scaling.

### Prerequisites
- GCP Project created
- `gcloud` CLI installed
- Docker configured locally

### Step 1: Enable APIs
```bash
gcloud services enable run.googleapis.com
gcloud services enable build.googleapis.com
gcloud services enable containerregistry.googleapis.com
```

### Step 2: Build and Test Locally
```bash
# Test Docker build
docker build -t anchor-travel-consult:latest .
docker run -p 3000:3000 anchor-travel-consult:latest

# Should show: "Ready in 1234ms"
```

### Step 3: Deploy to Cloud Run
```bash
# Option A: Direct deployment
gcloud run deploy anchor-travel-consult \
  --source . \
  --region us-central1 \
  --platform managed \
  --allow-unauthenticated \
  --set-env-vars="NODE_ENV=production" \
  --memory 512Mi \
  --cpu 1

# Option B: Using Cloud Build (recommended)
gcloud builds submit --region=us-central1 \
  --config=cloudbuild.yaml
```

### Step 4: Configure Domain
```bash
# Get Cloud Run service URL
gcloud run services describe anchor-travel-consult \
  --region us-central1 \
  --format='value(status.url)'

# In GCP Console:
# 1. Cloud Run → Service → Manage Custom Domains
# 2. Map your domain
# 3. Update DNS records
```

### Step 5: Environment Variables
```bash
# Set secrets in GCP Secret Manager
gcloud secrets create EMAIL_API_KEY \
  --replication-policy="automatic" \
  --data-file=- < <(echo "your-key-here")

# Reference in Cloud Run
gcloud run services update anchor-travel-consult \
  --region us-central1 \
  --update-secrets=EMAIL_API_KEY=EMAIL_API_KEY:latest
```

### Scaling Configuration
```bash
# Set auto-scaling
gcloud run services update anchor-travel-consult \
  --region us-central1 \
  --max-instances 100 \
  --min-instances 1 \
  --concurrency 100
```

### Cost Optimization
- **Memory**: 512Mi sufficient for Next.js
- **CPU**: 1 CPU (allocated when handling requests)
- **Estimate**: ~$5-15/month for medium traffic

## 🏠 Hostinger Deployment

**Recommended for** budget hosting with Git integration.

### Prerequisites
- Hostinger account with Node.js support
- Git repository (GitHub, GitLab, Bitbucket)

### Step 1: Connect Git Repository
1. Log in to Hostinger Control Panel
2. **Website** → **Git Repositories**
3. Click **Connect Git Repository**
4. Authorize and select your repository
5. Select branch (main/master)

### Step 2: Configure Application
1. **Hosting** → **Node.js**
2. Set **Application Path**: `./`
3. Set **Application Port**: `3000`
4. Set **Node Version**: `18.x` or `20.x`

### Step 3: Add Environment Variables
```bash
# In Hostinger Control Panel:
# Hosting → Environment Variables

NODE_ENV=production
NEXT_PUBLIC_GA_ID=G-XXXXX
DATABASE_URL=your_database_url
EMAIL_API_KEY=your_api_key
```

### Step 4: Configure Build Command
In your repository root, Hostinger will use:
```bash
npm install && npm run build
```

### Step 5: Deploy
1. Push code to your branch
2. Hostinger automatically deploys within 2-5 minutes
3. Monitor deployment in **Control Panel** → **Deployments**

### Step 6: Custom Domain
1. **Hostinger** → **Domains**
2. Update DNS records to point to hosting account
3. Wait for propagation (15-60 min)
4. Access via your domain

## ✨ Vercel Deployment

**Recommended for** easiest deployment and best DX.

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/anchor-travel-consult.git
git push -u origin main
```

### Step 2: Connect to Vercel
1. Visit https://vercel.com/new
2. Select **Next.js** framework
3. Connect your GitHub account
4. Select repository
5. Click **Import**

### Step 3: Configure Environment
```bash
# Vercel Dashboard → Settings → Environment Variables
NODE_ENV=production
NEXT_PUBLIC_GA_ID=G-XXXXX
EMAIL_API_KEY=xxxxxxxx
```

### Step 4: Deploy
- Auto-deploys on push to main
- Preview deployments for PRs
- Rollback to previous version if needed

### Step 5: Custom Domain
1. **Vercel** → **Domains**
2. Add your domain
3. Update DNS records (Vercel provides instructions)
4. Wait for verification (2-48 hours)

## 📊 AWS Amplify Deployment

### Prerequisites
- AWS Account
- Git repository connected

### Step 1: Connect Repository
1. AWS Amplify → **New app** → **Host web app**
2. Connect GitHub/GitLab/Bitbucket
3. Select repository and branch
4. Click **Connect and deploy**

### Step 2: Configure Build Settings
```yaml
version: 1
applications:
  - appRoot: .
    basePath: /
    phases:
      preBuild:
        commands:
          - npm install
      build:
        commands:
          - npm run build
    artifacts:
      baseDirectory: .next
      files:
        - '**/*'
    cache:
      paths:
        - 'node_modules/**/*'
```

### Step 3: Environment Variables
1. **App settings** → **Environment variables**
2. Add all vars from `.env.production`

### Step 4: Monitor Deployment
- Amplify shows deployment progress
- Auto-deploys on push
- View logs in Console

## 🛠 Post-Deployment Tasks

### 1. Verify Deployment
```bash
# Test the URL
curl https://your-domain.com

# Should return HTML content
```

### 2. Setup Monitoring
- **Google Analytics**: Add tracking ID to environment variables
- **Sentry**: Add error tracking (optional)
- **Cloud Monitoring** (GCP): Auto-configured for Cloud Run

### 3. Configure Redirects & Headers
For Vercel (`vercel.json`):
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ],
  "redirects": [
    {
      "source": "/old-page",
      "destination": "/new-page",
      "statusCode": 301
    }
  ]
}
```

### 4. Setup SSL Certificate
- **Vercel**: Auto-configured with Let's Encrypt
- **GCP**: Auto-configured
- **Hostinger**: Included with hosting
- **AWS**: Use ACM (AWS Certificate Manager)

### 5. Performance Optimization
```bash
# Enable Gzip compression
# Enable caching headers
# Use CDN for static assets
# Enable image optimization (Next.js does this automatically)
```

## 📈 Database Integration (Optional)

### Option 1: PostgreSQL on Supabase
```bash
# Install Prisma
npm install @prisma/client
npm install -D prisma

# Initialize
npx prisma init

# Configure DATABASE_URL in .env
```

### Option 2: MongoDB Atlas
```bash
# Install Mongoose
npm install mongoose

# Set MONGODB_URI in .env
```

### Option 3: Firebase (GCP)
```bash
# Install Firebase Admin SDK
npm install firebase-admin

# Set up service account credentials
```

## 🔄 Continuous Integration/Deployment

### GitHub Actions (`.github/workflows/deploy.yml`)
```yaml
name: Deploy to GCP

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: 20

      - name: Install & Build
        run: npm install && npm run build && npm run lint

      - name: Deploy to Cloud Run
        uses: google-github-actions/deploy-cloudrun@v0
        with:
          service: anchor-travel-consult
          image: gcr.io/${{ secrets.GCP_PROJECT }}/anchor-travel-consult
```

## 🚨 Troubleshooting

### Error: "Cannot find module 'next'"
```bash
# Ensure build command has npm install
npm install && npm run build
```

### Error: "Port 3000 already in use"
```bash
# Change port in next.config.ts or use different port
PORT=8080 npm run dev
```

### Slow Performance
1. Check **Lighthouse** score (Ctrl+Shift+I → Lighthouse)
2. Enable image optimization
3. Enable code splitting
4. Check bundle size: `npm install -g bundle-analyzer`

### High Memory Usage
- Reduce memory allocation on Cloud Run to 512Mi
- Use streaming for large datasets
- Enable incremental static regeneration

## 📱 Mobile App Distribution (Future)

When ready to deploy mobile:
```bash
# Export as PWA (Progressive Web App)
# Can be installed on home screen
# Works offline with service workers
```

## 🔐 Security Post-Deployment

### Security Headers
- ✅ X-Content-Type-Options: nosniff
- ✅ X-Frame-Options: DENY (if not embedded)
- ✅ X-XSS-Protection: 1; mode=block
- ✅ Content-Security-Policy: strict

### SSL/TLS
- ✅ Use HTTPS only
- ✅ Redirect HTTP to HTTPS
- ✅ HSTS header enabled

### API Security
- ✅ Rate limiting on contact form
- ✅ Input validation (Zod schema)
- ✅ CORS properly configured
- ✅ No secrets in client code

## 💰 Cost Monitoring

### GCP
- **Cloud Run**: $0.00002400/vCPU-second (free tier: 180K vCPU-seconds)
- **Data Transfer**: $0.12/GB outbound (first 1GB free/month)
- **Build**: $0.003/build-minute (first 120 min free/month)

### Hostinger
- **Shared Hosting**: $2.99-4.99/month
- **Includes**: Domain, email, SSL, Git deployment

### Vercel
- **Free**: Sufficient for most projects
- **Pro**: $20/month for additional features

---

**Need help?** See [README.md](./README.md) or [DEVELOPMENT.md](./DEVELOPMENT.md)
