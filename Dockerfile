FROM node:24-slim

WORKDIR /app

# COPY package*.json ./

# RUN npm install

# COPY . .

# Vite's default dev port
EXPOSE 5173

# 'host: true' is required for Vite to be accessible outside the container
# CMD ["npm", "run", "dev", "--", "--host"]
