FROM node:22-alpine3.20

WORKDIR /app

COPY package.json ./
COPY pnpm-lock.yaml ./

RUN npm install -g pnpm

RUN pnpm install

ENV DATABASE_URL="postgresql://postgres:grupo2arquitectura@postgres:5432/postgres?schema=raidendrive"

COPY . .

RUN npx prisma generate

RUN pnpm run build

EXPOSE 3000

CMD ["sh", "-c", "npx prisma migrate deploy && node dist/main.js"]
