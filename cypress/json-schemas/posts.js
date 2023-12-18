class Posts {
  getAllPostsSchema = {
    $schema: "http://json-schema.org/draft-07/schema#",
    title: "Generated schema for Root",
    type: "array",
    items: {
      type: "object",
      properties: {
        userId: {
          type: "number",
        },
        id: {
          type: "number",
        },
        title: {
          type: "string",
        },
        body: {
          type: "string",
        },
      },
      required: ["userId", "id", "title", "body"],
    },
  };

  createPostSchema = {
    $schema: "http://json-schema.org/draft-07/schema#",
    title: "Generated schema for Root",
    type: "object",
    properties: {
      title: {
        type: "string",
      },
      body: {
        type: "string",
      },
      userId: {
        type: "number",
      },
      id: {
        type: "number",
      },
    },
    required: ["title", "body", "userId", "id"],
  };
}

module.exports = Posts;
