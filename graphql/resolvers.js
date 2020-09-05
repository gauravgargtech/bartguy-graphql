module.exports = {
  getCountries() {
    return {
      data: [
        {
          id: 776,
          name: "dd",
        },
        {
          id: 876,
          name: "dc",
        },
      ],
    };
  },

  getStates() {
    return {
      id: 45,
      name: "yamuna Nagar",
    };
  },

  getCities(args) {
    return {
      id: 45,
      name: "",
    };
  },
};
