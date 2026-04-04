## Docker

- `docker build -t portfolio .`
- `docker run -it -v$(pwd):/app --name portfolio-container -p 5173:5173 portfolio /bin/bash`
- `docker start -i portfolio-container`

## Develop

- `npm run dev`
