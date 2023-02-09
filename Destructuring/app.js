const scores = [929321, 889341, 888336, 772739, 543671, 243567, 111934];

const highScore = scores[0];
const secondHighScore = scores[1];

const [gold, silver, bronze, ...everyoneElse] = scores;

//destructuring objects lesson

const user = {
  email: "harvey@gmail.com",
  password: "sCoTt1948sMiTh",
  firstName: "Harvey",
  lastName: "Milk",
  born: 1930,
  died: 1978,
  bio: "Harvey Bernard Milk was an American politician and the first openly gay politician elected in California.",
  city: "San Francisco",
  state: "California",
};

const user2 = {
  email: "Stacy@gmail.com",
  firstName: "Stacy",
  lastName: "Gonzalez",
  born: 1987,
  city: "Tulsa",
  state: "Oklahoma",
};

// const firstName = user.firstName;
// const lastName = user.lastName;
// const email = user.email;

// const { email, firstName, lastName, city, bio } = user;

const { born: birthYear, died: deathYear = "N/A" } = user;

// const { city, state, died = "N/A" } = user2;
