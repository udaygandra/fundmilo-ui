#!/bin/sh
npm run build
npx prisma generate
prisma migrate dev --name init
npm run dev