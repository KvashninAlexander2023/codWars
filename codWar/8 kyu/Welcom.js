const data = {
  english: "Welcome",
  czech: "Vitejte",
  danish: "Velkomst",
  dutch: "Welkom",
  estonian: "Tere tulemast",
  finnish: "Tervetuloa",
  flemish: "Welgekomen",
  french: "Bienvenue",
  german: "Willkommen",
  irish: "Failte",
  italian: "Benvenuto",
  latvian: "Gaidits",
  lithuanian: "Laukiamas",
  polish: "Witamy",
  spanish: "Bienvenido",
  swedish: "Valkommen",
  welsh: "Croeso",
};

function greet(language) {
  return data[language] ? data[language] : "Welcome";
}

console.log(greet("english")); //, 'Welcome', "Your function should have returned 'Welcome'. Try again.");
console.log(greet("dutch")); //, 'Welkom', "Your function should have returned 'Welkom'. Try again.");
console.log(greet("IP_ADDRESS_INVALID")); //, 'Welcome', "Your function should have returned 'Welcome'. Try again.");
