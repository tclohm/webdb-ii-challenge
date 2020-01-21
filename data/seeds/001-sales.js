
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('sales').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('sales').insert([
        {car_id: 1, price: 15990, sold: true },
        {car_id: 2, price: 20050, sold: false },
        {car_id: 3, price: 90309, sold: false },
        {car_id: 4, price: 85999, sold: true },
        {car_id: 5, price: 54321, sold: false },
        {car_id: 6, price: 49000, sold: true },
      ]);
    });
};
