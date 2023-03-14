function password() {

    const letters = [
      'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
      'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
      'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G',
      'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
      'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const symbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+'];
  
    const nr_letters = Math.floor(Math.random() * (10 - 8 + 1) + 10);
    const nr_symbols = Math.floor(Math.random() * (4 - 2 + 1) + 9);
    const nr_numbers = Math.floor(Math.random() * (4 - 2 + 1) + 5);
  
    const password_letters = Array.from({ length: nr_letters }, () => letters[Math.floor(Math.random() * letters.length)]);
    const password_symbols = Array.from({ length: nr_symbols }, () => symbols[Math.floor(Math.random() * symbols.length)]);
    const password_numbers = Array.from({ length: nr_numbers }, () => numbers[Math.floor(Math.random() * numbers.length)]);
  
    const password_list = [...password_letters, ...password_symbols, ...password_numbers];
    password_list.sort(() => Math.random() - 0.5);
  
    const password_load = password_list.join('');
  
      navigator.clipboard.writeText(password_load);
      return password_load
  }
  
  var heading = document.getElementById("passtext")
  heading.innerText = password()