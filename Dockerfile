# Base image
# Use the official nginx image as the base image
FROM nginx

# Copy website files to the appropriate location
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80