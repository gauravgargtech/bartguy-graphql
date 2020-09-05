const sequelize = require("../../adapters/mysql");
const CountryModel = require("../../models/countries")(sequelize);
const CitiesModel = require("../../models/cities")(sequelize);
const StatesModel = require("../../models/states")(sequelize);
const _ = require("lodash");
const { query } = require("express");

module.exports = {
  async getCountries() {
    const allCountries = await CountryModel.findAll({
      attributes: ["id", "name"],
    });

    return {
      data: allCountries,
    };
  },

  async getStates(args) {
    const queryOptions = {
      attributes: ["id", "name"],
    };

    if (args.countryId) {
      queryOptions.where = {
        country_id: args.countryId,
      };
    }

    const allStates = await StatesModel.findAll(queryOptions);

    return {
      data: allStates,
    };
  },

  async getCities(args) {
    const queryOptions = {
      attributes: ["id", "name"],
    };

    if (args.stateId) {
      queryOptions.where = {
        state_id: args.stateId,
      };
    }

    const allCities = await CitiesModel.findAll(queryOptions);

    return {
      data: allCities,
    };
  },
};
