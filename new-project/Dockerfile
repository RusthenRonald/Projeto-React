# ========== STAGE 1: BUILD ==========

# Build the React app
FROM node:18-alpine AS build

WORKDIR /app

# Copy and install dependencies
COPY package*.json ./
RUN npm install

# Copy all code
COPY . .

# Build optimized React app
RUN npm run build 

# ========== STAGE 2: PRODUCTION ==========

FROM node:18-alpine

WORKDIR /app

# Install 'serve' - lightweight web server
RUN npm install -g serve

# Copy built app from stage 1
COPY --from=build /app/build ./build

# Port for frontend
EXPOSE 3000

#Run the app
CMD ["serve", "-s", "build", "-l", "3000"]
