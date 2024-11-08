# Use the official Node.js 18 image as a parent image
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application code
COPY . .

# Build the application for production
RUN npm run build

# Use another minimal Node.js image for serving the production build
FROM node:18-alpine AS runner

# Set working directory
WORKDIR /app

# Copy the built files from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./

# Additional files like public or static assets
COPY --from=builder /app/public ./public

# Environment variables (if needed, can also be set from Railway)
ENV NODE_ENV=production
ENV PORT=3000

# Expose the port the app runs on
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]
