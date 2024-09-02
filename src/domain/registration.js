const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const registerDB = async (name, email, hash) =>
    await prisma.user.create({
        data: {
            name,
            email,
            password: hash,
        },
    });

module.exports = {
    registerDB
}