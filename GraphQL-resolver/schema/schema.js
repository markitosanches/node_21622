const fs = require('fs')
const { buildSchema } = require("graphql")
const schema = buildSchema(`
    type Query {
        allPersons: [Person!]!
        personById(id:ID!): Person
    }
    type Person {
        id: ID!
        name: String
        age: Int
        posts: [Post]
    }
    type Post {
        title: String
        author: Person!
    }
`)

let rawdata =  fs.readFileSync('./data.json');
let data = JSON.parse(rawdata) 

//resolver
const root = {
    allPersons : () => {
        return data
    },
    personById:(args) =>{
        const id = Number(args.id)
        //console.log(id)
        return data.find(d =>{
            return d.id === id
        })
    }
}

module.exports = {schema, root}