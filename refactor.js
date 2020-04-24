function statement(customer, movies) {

  function movieFor(aRental) {
    return movies[aRental.movieID];
  }

  function amountFor(aRental) {
    let result = 0;
    // determine amount for each movie
    switch (movieFor(aRental).code) {
      case "regular":
        result = 2;
        if (aRental.days > 2) {
          result += (aRental.days - 2) * 1.5;
        }
        break;
      case "new":
        result = aRental.days * 3;
        break;
      case "childrens":
        result = 1.5;
        if (aRental.days > 3) {
          result += (aRental.days - 3) * 1.5;
        }
        break;
    }
    return result;
  }

  let frequentRenterPoints = 0;
  for (let r of customer.rentals) {
    //add frequent renter points
    frequentRenterPoints++;
    // add bonus for a two day new release rental
    if (movieFor(r).code === "new" && r.days > 2) frequentRenterPoints++;
  }

  let totalAmount = 0;
  for (let r of customer.rentals) {
    totalAmount += amountFor(r);
  }

  let result = `Rental Record for ${customer.name}\n`;
  for (let r of customer.rentals) {
    //print figures for this rental
    result += `\t${movieFor(r).title}\t${amountFor(r)}\n`;
  }
  // add footer lines
  result += `Amount owed is ${totalAmount}\n`;
  result += `You earned ${frequentRenterPoints} frequent renter points\n`;

  return result;
}

module.exports = statement;