const { buildSchema } = require("graphql");

module.exports = buildSchema(`

type standardOutput {
    id : Int
    name : String
}

type CountryData {
    data : [standardOutput]
}

type StatesData {
    id : Int
    name : String
}

type CitiesData {
    id: Int
    name: String
}

type RootQuery {
    getCountries : CountryData
    getStates : StatesData
    getCities : CitiesData

}

schema {
    query: RootQuery
}
`);
