const cpfValidate = (document) => {
  const cleanedCPF = document.replace(/\D/g, "");

  if (cleanedCPF.length !== 11 || /^(\d)\1+$/.test(cleanedCPF)) {
    return false;
  }

  const getRemainder = (sum) => (sum * 10) % 11;

  let sum = 0;
  for (let i = 1; i <= 9; i++) {
    sum += parseInt(cleanedCPF.substring(i - 1, i)) * (11 - i);
  }

  let remainder = getRemainder(sum);

  if (remainder === 10 || remainder === 11) {
    remainder = 0;
  }

  if (remainder !== parseInt(cleanedCPF.substring(9, 10))) {
    return false;
  }

  sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += parseInt(cleanedCPF.substring(i - 1, i)) * (12 - i);
  }

  remainder = getRemainder(sum);

  if (remainder === 10 || remainder === 11) {
    remainder = 0;
  }

  if (remainder !== parseInt(cleanedCPF.substring(10, 11))) {
    return false;
  }

  return true;
};

const cpfFormatted = (document) => {
  const cleanedCPF = document?.replace(/\D/g, "");

  const formattedCPF = cleanedCPF?.replace(
    /^(\d{3})(\d{3})(\d{3})(\d{2})$/,
    "$1.$2.$3-$4"
  );

  return formattedCPF;
};

const emailValidate = (email) => {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  return emailRegex.test(email);
};

const birthdateFormatted = (date) => {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const isUnderThanEighteen = (age) => {
  const currentDate = new Date();
  const birthDate = new Date(age);
  const ageDifferenceInMilliseconds = currentDate - birthDate;
  const ageDifferenceInYears =
    ageDifferenceInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

  return ageDifferenceInYears < 18;
};

const formatDateToUser = (value) => {
  const unmaskedValue = value.replace(/\D/g, "");

  if (unmaskedValue.length <= 2) {
    return unmaskedValue;
  }
  if (unmaskedValue.length <= 4) {
    return `${unmaskedValue.slice(0, 2)}-${unmaskedValue.slice(2)}`;
  }

  return `${unmaskedValue.slice(0, 2)}/${unmaskedValue.slice(
    2,
    4
  )}/${unmaskedValue.slice(4, 8)}`;
};

const dateToUserString = (date) => {
  if (date instanceof Date) {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

  return date; // Se não for um objeto Date, retorne o valor original
};

function formatToDatabaseDate(date) {
  if (!date) return null;

  const parts = date.split("/");
  if (parts.length !== 3) return null;

  const [day, month, year] = parts;
  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
}

const isValidDate = (dateString) => {
  if (!/^\d{2}\/\d{2}\/\d{4}$/.test(dateString)) return false;

  const parts = dateString.split("/");
  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10);
  const year = parseInt(parts[2], 10);

  if (year < 1000 || year > 3000 || month === 0 || month > 12) return false;

  const maxDay = new Date(year, month, 0).getDate();
  if (day === 0 || day > maxDay) return false;

  return true;
};

export {
  cpfValidate,
  cpfFormatted,
  isValidDate,
  dateToUserString,
  formatToDatabaseDate,
  formatDateToUser,
  emailValidate,
  birthdateFormatted,
  isUnderThanEighteen,
};
