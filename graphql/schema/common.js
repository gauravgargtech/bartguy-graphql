const { buildSchema } = require("graphql");

module.exports = buildSchema(`

type standardOutput {
    id : Int
    name : String
}

type CountryData {
    data : [standardOutput]
}

type StatesData{
    data : [standardOutput]
}

type CitiesData {
    data : [standardOutput]
}

type RootQuery {
    getCountries : CountryData
    getStates(countryId: Int) : StatesData
    getCities(stateId: Int!) : CitiesData
}

schema {
    query: RootQuery
}
`);
