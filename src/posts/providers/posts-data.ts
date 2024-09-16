// dummy-posts.ts

export const posts = [
    {
      id: 1,
      title: 'Introduction to NestJS',
      content: 'NestJS is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications.',
      authorId: 1,
      createdAt: new Date('2024-01-01T10:00:00Z'),
      updatedAt: new Date('2024-01-02T12:00:00Z'),
      tags: ['NestJS', 'Node.js', 'Backend'],
      status: 'published',
      viewsCount: 123,
      commentsCount: 5,
      imageUrl: 'https://example.com/images/nestjs-intro.png',
      publishedAt: new Date('2024-01-01T10:00:00Z'),
      slug: 'introduction-to-nestjs'
    },
    {
      id: 2,
      title: 'Understanding TypeScript',
      content: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It provides static types and is used to improve the development process.',
      authorId: 2,
      createdAt: new Date('2024-02-10T14:30:00Z'),
      updatedAt: new Date('2024-02-11T15:00:00Z'),
      tags: ['TypeScript', 'JavaScript', 'Programming'],
      status: 'published',
      viewsCount: 456,
      commentsCount: 8,
      imageUrl: 'https://example.com/images/typescript.png',
      publishedAt: new Date('2024-02-10T14:30:00Z'),
      slug: 'understanding-typescript'
    },
    {
      id: 3,
      title: 'Advanced Node.js Techniques',
      content: 'Explore advanced techniques in Node.js for building high-performance applications, including asynchronous programming and microservices.',
      authorId: 1,
      createdAt: new Date('2024-03-15T09:00:00Z'),
      updatedAt: new Date('2024-03-16T10:30:00Z'),
      tags: ['Node.js', 'Programming', 'Microservices'],
      status: 'draft',
      viewsCount: 78,
      commentsCount: 2,
      imageUrl: 'https://example.com/images/nodejs-advanced.png',
      publishedAt: null,
      slug: 'advanced-nodejs-techniques'
    },
    {
      id: 4,
      title: 'Building REST APIs with Express',
      content: 'Learn how to build robust REST APIs using Express.js, a minimal and flexible Node.js web application framework.',
      authorId: 3,
      createdAt: new Date('2024-04-20T16:00:00Z'),
      updatedAt: new Date('2024-04-21T17:30:00Z'),
      tags: ['Express.js', 'REST', 'API'],
      status: 'published',
      viewsCount: 320,
      commentsCount: 7,
      imageUrl: 'https://example.com/images/express-rest-api.png',
      publishedAt: new Date('2024-04-20T16:00:00Z'),
      slug: 'building-rest-apis-with-express'
    },
    {
      id: 5,
      title: 'Introduction to GraphQL',
      content: 'GraphQL is a query language for your API and a server-side runtime for executing those queries. Learn the basics of GraphQL and how to integrate it with your applications.',
      authorId: 2,
      createdAt: new Date('2024-05-05T11:00:00Z'),
      updatedAt: new Date('2024-05-06T12:15:00Z'),
      tags: ['GraphQL', 'API', 'Query Language'],
      status: 'published',
      viewsCount: 245,
      commentsCount: 6,
      imageUrl: 'https://example.com/images/graphql-intro.png',
      publishedAt: new Date('2024-05-05T11:00:00Z'),
      slug: 'introduction-to-graphql'
    }
  ];
  
