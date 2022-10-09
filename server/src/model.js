const EntitySchema = require("typeorm").EntitySchema

module.exports = new EntitySchema({
  name: "Task",
  tableName: "tasks",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    name: {
      type: "varchar",
    },
    email: {
      type: "varchar",
    },
    description: {
      type: "varchar",
    },
    executed: {
      type: "boolean",
    },
  },
})
