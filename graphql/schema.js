const { buildSchema } = require("graphql");

module.exports = buildSchema(`

type BookData {
    id : Int
    name: String
    pages : Int
}

type UserData {
    id : Int
    age : Int
    city : String
}

type RootQuery {
    getBookData : BookData
    getUserData : UserData

}
type RootMutation { 
    createBook(id: Int, name: String, pages: Int): String
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`);
