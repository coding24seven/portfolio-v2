## Quick Start

- `npm run dev`
- `npm run test:watch`

## Docker

- `docker build -t portfolio .`
- `docker run -it -v$(pwd):/app --name portfolio-container -p 5173:5173 portfolio /bin/bash`
- `docker start -i portfolio-container`

## Develop

- `npm run dev`

## Testing

- `npm test` - one-shot run (same as CI mode)
- `npm run test:watch` - local watch mode
- `npm run test:ci` - explicit CI one-shot run
- `npm run test:ui` - Vitest UI
- `npm run test:coverage` - coverage report
