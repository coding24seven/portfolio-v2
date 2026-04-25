## Quick Start

- `npm run dev`
- `npm run test:watch`

## Docker development

- `docker build -t portfolio-ui .`
- `docker run -it \
  --name portfolio-ui \
  -v "$(pwd):/app" \
  -v "$HOME/.config/opencode:/root/.config/opencode" \
  -v "$HOME/.local/share/opencode:/root/.local/share/opencode" \
  -v "$HOME/.cache/opencode:/root/.cache/opencode" \
  -p 5173:5173 \
  -p 4096:4096 \
  portfolio-ui /bin/bash`
- `docker start -i portfolio-container`

## Develop

- `npm run dev`

## Testing

- `npm test` - one-shot run (same as CI mode)
- `npm run test:watch` - local watch mode
- `npm run test:ci` - explicit CI one-shot run
- `npm run test:ui` - Vitest UI
- `npm run test:coverage` - coverage report
