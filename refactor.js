function statement(customer, movies) {

  function movieFor(aRental) {
    return movies[aRental.movieID];
  }

  function amountFor(aRental) {
    let thisAmount = 0;
    // determine amount for each movie
    switch (movieFor(aRental).code) {
      case "regular":
        thisAmount = 2;
        if (aRental.days > 2) {
          thisAmount += (aRental.days - 2) * 1.5;
        }
        break;
      case "new":
        thisAmount = aRental.days * 3;
        break;
      case "childrens":
        thisAmount = 1.5;
        if (aRental.days > 3) {
          thisAmount += (aRental.days - 3) * 1.5;
        }
        break;
    }
    return thisAmount;
  }

  let totalAmount = 0;
  let frequentRenterPoints = 0;
  let result = `Rental Record for ${customer.name}\n`;
  for (let r of customer.rentals) {

    //add frequent renter points
    frequentRenterPoints++;
    // add bonus for a two day new release rental
    if (movieFor(r).code === "new" && r.days > 2) frequentRenterPoints++;

    //print figures for this rental
    result += `\t${movieFor(r).title}\t${amountFor(r)}\n`;
    totalAmount += amountFor(r);
  }

  // add footer lines
  result += `Amount owed is ${totalAmount}\n`;
  result += `You earned ${frequentRenterPoints} frequent renter points\n`;

  return result;
}

module.exports = statement;