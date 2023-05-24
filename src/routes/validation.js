export function validateFirstName(name) {
  if (!name) {
    return "First name is required.";
  }

  if (!/^[a-zA-Z]{2,12}$/.test(name)) {
    return "First name should contain 2 to 12 alphabetic characters only.";
  }

  return "";
}

export function validateLastName(name) {
  if (!name) {
    return "Last name is required.";
  }

  if (!/^[a-zA-Z]{2,15}$/.test(name)) {
    return "Last name should contain 2 to 15 alphabetic characters only.";
  }

  return "";
}

export function validateEmail(email) {
  if (!email) {
    return "Email is required.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "Invalid email address.";
  }

  return "";
}

export function validatePhoneNumber(number) {
  if (!number) {
    return "Phone number is required.";
  }

  if (!/^\d{7}$/.test(number)) {
    return "Phone number should contain exactly 7 digits.";
  }

  return "";
}

export function validatePassword(password) {
  if (!password) {
    return "Password is required.";
  }

  if (!/(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])/.test(password)) {
    return "Password should contain at least one letter, one number, and one special character.";
  }

  return "";
}
