# Base image
FROM node:20.18-alpine

# Set working directory
WORKDIR /app

# Set production environment
ENV NODE_ENV=production
ENV NEXT_PUBLIC_API_DOMAIN=https://directus.dev.vnsilicon.site
ENV NEXT_PUBLIC_ASSET_HOST=directus-asset.dev.vnsilicon.site
ENV NEXT_PUBLIC_ASSET_DOMAIN=https://$NEXT_PUBLIC_ASSET_HOST
ENV PORT=3000

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm install --legacy-peer-deps

# Copy source code
COPY . .

# Build application
RUN npm run build

# Expose port
EXPOSE 3000

# Start application
CMD ["npm", "start"]