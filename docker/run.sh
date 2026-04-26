#!/bin/bash

docker run -it \
  --name portfolio-ui \
  --rm \
  -v "$(pwd):/app" \
  -v "$HOME/.config/opencode:/root/.config/opencode" \
  -v "$HOME/.local/share/opencode:/root/.local/state/opencode" \
  -v "$HOME/.local/share/opencode:/root/.local/share/opencode" \
  -v "$HOME/.cache/opencode:/root/.cache/opencode" \
  -p 4096:4096 \
  -p 5173:5173 \
  portfolio-ui /bin/bash
