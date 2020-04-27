const statement = require('./refactor');

const customer = {
  "name": "martin",
  "rentals": [
    { "movieID": "F001", "days": 3 },
    { "movieID": "F002", "days": 1 },
  ]
};

const movies = {
  "F001": { "title": "Ran", "code": "regular" },
  "F002": { "title": "Trois Couleurs: Bleu", "code": "regular" },
  // etc
}

const exp = 'Rental Record for martin\n\tRan\t3.5\n\tTrois Couleurs: Bleu\t2\nAmount owed is 5.5\nYou earned 2 frequent renter points\n';

describe('statement について', () => {
  test('レポートが一致すること', () => {
    expect(statement(customer, movies)).toEqual(exp);
  });
});

// const expHtml = '<H1>Rental Record for <EM>martin</EM></H1><P>\nRan:3.5<BR>\nTrois Couleurs: Bleu:2<BR>\n<P>Amount owed is <EM>5.5</EM><P>\nYou earned <EM>2</EM> frequent renter points<P>\n';

// describe('htmlStatement について', () => {
//   test('レポートが一致すること', () => {
//     expect(htmlStatement(customer, movies)).toEqual(exp);
//   });
// });
