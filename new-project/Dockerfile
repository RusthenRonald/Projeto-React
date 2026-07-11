#Start with Node.js image 
FROM node:18-alpine

#Set where code runs inside container 
WORKDIR /app

# Copy package files from your computer to container
COPY package*.json ./

#install all npm dependencies
RUN npm install 

# Copy all your project files
COPY . .

# Tell Docker this container uses port 5000
EXPOSE 5000

# Command to run when container starts
CMD ["npm", "run", "backend"]

