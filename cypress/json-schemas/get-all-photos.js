class GetAllPhotos {
  schema = {
    $schema: "http://json-schema.org/draft-07/schema#",
    title: "Generated schema for Root",
    type: "array",
    items: {
      type: "object",
      properties: {
        albumId: {
          type: "number",
        },
        id: {
          type: "number",
        },
        title: {
          type: "string",
        },
        url: {
          type: "string",
        },
        thumbnailUrl: {
          type: "string",
        },
      },
      required: ["albumId", "id", "title", "url", "thumbnailUrl"],
    },
  };
}

module.exports = GetAllPhotos;
