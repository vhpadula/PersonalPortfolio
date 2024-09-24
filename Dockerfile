# Use an official Node.js image as the base image
FROM node:22.2.0 AS base

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json (if it exists) to the working directory
COPY package*.json ./

# Install dependencies using npm ci (clean install)
RUN npm ci

# Create a new stage named 'builder' based on the 'base' stage
FROM base AS builder

# Set the working directory to /app
WORKDIR /app

# Copy node_modules from the 'base' stage to the current stage
COPY --from=base /app/node_modules ./node_modules

# Copy all files from the current directory to the working directory
COPY . .

# Disable Next.js telemetry
ENV NEXT_TELEMETRY_DISABLED 1

# Create a system group named 'nodejs' with GID 1001
RUN addgroup --system --gid 1001 nodejs

# Create a system user named 'nextjs' with UID 1001
RUN adduser --system --uid 1001 nextjs

# Build the Next.js application
RUN npm run build

# Create a new stage named 'runner' based on the 'base' stage
FROM node:22.2.0 AS runner

# Set the working directory to /app
WORKDIR /app

# Copy the built application from the 'builder' stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./

# Create a system group named 'nodejs' with GID 1001
RUN addgroup --system --gid 1001 nodejs

# Create a system user named 'nextjs' with UID 1001
RUN adduser --system --uid 1001 nextjs

# Set the user to 'nextjs'
USER nextjs

# Expose port 3000
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]