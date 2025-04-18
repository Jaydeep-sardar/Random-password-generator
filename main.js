function generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols) {
    // Character sets
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+";
  
    let allowedChars = "";
    let password = "";
  
    // Add selected character sets to the allowed pool
    if (includeLowerCase) allowedChars += lowerCaseChars;
    if (includeUpperCase) allowedChars += upperCaseChars;
    if (includeNumbers) allowedChars += numberChars;
    if (includeSymbols) allowedChars += symbolChars;
  
    // Ensure there's at least one type of character selected
    if (allowedChars.length === 0) {
      return "Error: No character types selected!";
    }
  
    // Generate the password
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allowedChars.length);
      password += allowedChars[randomIndex];
    }
  
    return password;
  }
  
  // DOM-driven password generation function
  function generatePasswordFromUI() {
    const length = parseInt(document.getElementById("length").value, 10);
    const includeLowerCase = document.getElementById("lowerCase").checked;
    const includeUpperCase = document.getElementById("upperCase").checked;
    const includeNumbers = document.getElementById("numbers").checked;
    const includeSymbols = document.getElementById("symbols").checked;
  
    const password = generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols);
  
    document.getElementById("output").textContent = password;
  }
  
  // Example: Parameter-driven generation
  const passwordLength = 12;
  const includeLowerCase = true;
  const includeUpperCase = true;
  const includeNumbers = true;
  const includeSymbols = true;
  
  // Generate and log a password from parameters
  const password = generatePassword(passwordLength, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols);
  console.log(`Generated Password: ${password}`);
  