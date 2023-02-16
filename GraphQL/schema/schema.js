const { buildSchema } = require("graphql")
const schema = buildSchema(`
    type Query {
        user: User
    }
    type User {
        name: String,
        age: Int
    }
`)

//resolver
const root = {
    user: () => {
        return {name: "Paul", age: 24}
    }
}

module.exports = {schema, root}