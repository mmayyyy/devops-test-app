# Use the official Node.js image from the Docker Hub
FROM node:14

# Create a non-root user
RUN useradd -m appuser

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install any dependencies
RUN npm install

# Copy only the necessary code files to the container
COPY index.js .

# Switch to non-root user
USER appuser

# Make port 8125 available to the world outside this container
EXPOSE 8125

# Run the application
CMD ["node", "index.js"]