# ================================
# Dockerfile - services/auth-service/Dockerfile
# ================================
FROM node:18

WORKDIR /app

# Copy file cấu hình trước
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Copy toàn bộ mã nguồn (bao gồm cả prisma/)
COPY . .

# 🟢 Bây giờ mới generate Prisma Client (sau khi schema có mặt)
RUN npx prisma generate

EXPOSE 3001

CMD ["npm", "run", "dev"]
