
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { VIN: "XyjWWUDtwTYEpv5zg", make: "Toyota", model: "Prius", mileage: 3029.43, transmissionType: "", status: "clean" },
        { VIN: "BHULvV7Vme4rSXjuY", make: "Honda", model: "C-RV", mileage: 2039529.22, transmissionType: "", status: "" },
        { VIN: "ADYYBngBPaFCqkPRH", make: "Tesla", model: "Y", mileage: 29405.19, transmissionType: "AT", status: "salvage" },
        { VIN: "U8anX6NrXNQAGTtct", make: "Mercedes-Benz", model: "E-CLASS", mileage: 1293049.91, transmissionType: "", status: "" },
        { VIN: "M5RmGNzUGjbe8geT3", make: "Volvo", model: "xc900", mileage: 867392.90, transmissionType: "AM", status: "" },
        { VIN: "ZjX5Cncy6LS4yxJ5Q", make: "Volkswagen", model: "GOLF", mileage: 390.66, transmissionType: "MT", status: "clean" }
      ]);
    });
};