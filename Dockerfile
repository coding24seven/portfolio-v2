FROM node:24-slim

WORKDIR /app

# Install system dependencies (needed for many Node projects and OpenCode)
RUN apt-get update && apt-get install -y \
    git \
    curl \
    && rm -rf /var/lib/apt/lists/*

#RUN npm i -g opencode-ai
RUN curl -fsSL https://opencode.ai/install | bash
