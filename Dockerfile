# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files from root
COPY package*.json ./
RUN npm install

# Copy all files from the root directory
COPY . .

# Expose port for Next.js
EXPOSE 3000

# Start command for development
CMD ["npm", "run", "dev"]
