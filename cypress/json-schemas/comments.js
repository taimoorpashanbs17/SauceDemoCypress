class Comments {
    schema = {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "title": "Generated schema for Root",
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "postId": {
              "type": "number"
            },
            "id": {
              "type": "number"
            },
            "name": {
              "type": "string"
            },
            "email": {
              "type": "string"
            },
            "body": {
              "type": "string"
            }
          },
          "required": [
            "postId",
            "id",
            "name",
            "email",
            "body"
          ]
        }
      }
}

module.exports = Comments;