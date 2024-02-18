# Use the official Node.js image as the base image
FROM node:20

WORKDIR /app

# Copy the rest of the application code to the container
COPY . .

RUN npm cache clean -f

# Update npm 
RUN npm install -g npm@latest

# Install dependencies
RUN npm install

# Expose port 3000
EXPOSE 3000

# Copy the migrate-and-start.sh script to the container and make it executable
COPY migrate-and-start.sh /app/
RUN chmod +x /app/migrate-and-start.sh

# Start app
CMD /app/migrate-and-start.sh
