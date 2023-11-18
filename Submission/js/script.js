// Initialise firstName to a string Javan
// NOTE: This won't be displayed on the web page yet
let firstName = "Javan";

// Initialise lastName to a string Cassidy
// NOTE: This won't be displayed on the web page yet
let lastName = "Cassidy";

// Initialise fullName to firstName and lastName combined, with a space in the middle
// NOTE: DO NOT just write "Javan Cassidy", read from the two variables above
let fullName = `${firstName} ${lastName}`;

// Initialise email to a string JavanC@missionreadyhq.com
let email = "JavanC@missionreadyhq.com";

// Initialise age to a number 70
let age = 70;

// Initialise hasSeniorDiscount:
// - If age is 65 or above, it should be true
// - If age is below 65, it should be false
// NOTE: DO NOT write a JavaScript 'if' statement
let hasSeniorDiscount = age >= 65;

// Initialise vegetarian to false
let vegetarian = false;

// Initialise glutenFree to true
let glutenFree = true;

// Initialise hasDietaryRequirement:
// - If vegetarian or gluten free is true, it should be true
// - If both vegetarian or gluten free are false, it should be false
// NOTE: DO NOT write a JavaScript 'if' statement
let hasDietaryRequirement = vegetarian || glutenFree;

// Initialise bookingReference to a string ABC12345
let bookingReference = "ABC12345";

// Initialise departureDate to a string 21/12/20
let departureDate = "21/12/20";

// Initialise departureTime to a string 07:25
let departureTime = "07:25";

// Initialise departureAirport to a string AKL
let departureAirport = "AKL";

// Initialise seniorDiscountPercentage to a number 0.05
let seniorDiscountPercentage = 0.05;

// Initialise flightCost to a number 1999
let flightCost = 1999;

// Initialise airportTax to a number 23
let airportTax = 23;

// Initialise totalCost to flightCost plus airportTax
let totalCost = flightCost + airportTax;

// Initialise totalDiscount to the percentage of seniorDiscountPercentage from totalCost
let totalDiscount = totalCost * seniorDiscountPercentage;

// Initialise totalWithDiscount to totalCost minus totalDiscount
let totalWithDiscount = totalCost - totalDiscount;
