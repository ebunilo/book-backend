FROM node:18

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Start the backend application
CMD ["npm", "start"]

# Expose port 5000 (or any port your backend uses)
EXPOSE 5000
