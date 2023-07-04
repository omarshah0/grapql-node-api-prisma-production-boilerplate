// src/db/models/book.js

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getBooks = async ({ search, author, authorId, skip, take }) => {
  console.log("Search Term ", search);
  const where = search
    ? {
        OR: [
          { title: { contains: search } },
          {
            author: {
              name: { contains: search },
            },
          },
        ],
      }
    : {};

  if (author) {
    where.author = {
      some: {
        name: {
          contains: author,
        },
      },
    };
  }

  if (authorId) {
    where.author = {
      id: authorId,
    };
  }

  const books = await prisma.book.findMany({
    where,
    skip: skip || undefined,
    take: take || undefined,
    include: {
      author: true,
    },
  });

  return books;
};

module.exports = {
  getBooks,
};
