export const baseURL = "https://5056-191-5-67-20.ngrok-free.app";

const isValidCPF = (document) => {
  const cleanedCPF = document.replace(/\D/g, "");
  if (!isValidCPFFormat(cleanedCPF)) return false;
  return isValidCPFDigits(cleanedCPF);
};

const isValidCPFFormat = (cleanedCPF) => {
  return cleanedCPF.length === 11 && !/^(\d)\1+$/.test(cleanedCPF);
};

const isValidCPFDigits = (cleanedCPF) => {
  const calculateRemainder = (sum) => (sum * 10) % 11;

  let sum = 0;
  for (let i = 1; i <= 9; i++) {
    sum += parseInt(cleanedCPF[i - 1]) * (11 - i);
  }

  let remainder = calculateRemainder(sum);
  remainder = remainder === 10 || remainder === 11 ? 0 : remainder;

  if (remainder !== parseInt(cleanedCPF[9])) return false;

  sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += parseInt(cleanedCPF[i - 1]) * (12 - i);
  }

  remainder = calculateRemainder(sum);
  remainder = remainder === 10 || remainder === 11 ? 0 : remainder;

  return remainder === parseInt(cleanedCPF[10]);
};

const formatCPF = (document) => {
  const cleanedCPF = document?.replace(/\D/g, "");
  return cleanedCPF?.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4");
};

const isValidEmail = (email) => {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return emailRegex.test(email);
};

const formatDate = (date) => {
  const options = { day: "2-digit", month: "2-digit", year: "numeric" };
  return new Date(date).toLocaleDateString("pt-BR", options);
};

const isValidDate = (dateString) => {
  if (!/^\d{2}\/\d{2}\/\d{4}$/.test(dateString)) return false;

  const [day, month, year] = dateString.split("/").map(Number);
  if (year < 1000 || year > 3000 || month === 0 || month > 12) return false;
  const maxDay = new Date(year, month, 0).getDate();
  if (day === 0 || day > maxDay) return false;
  return true;
};

function formatDateToDDMMYYYY(date) {
  if (!isValidDateObject(date)) {
    throw new Error("O argumento deve ser um objeto Date válido.");
  }

  const day = padZeroes(date.getDate());
  const month = padZeroes(date.getMonth() + 1);
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
}

function isValidDateObject(date) {
  return date instanceof Date && !isNaN(date);
}

function padZeroes(number) {
  return String(number).padStart(2, "0");
}

function formatDateToString(data) {
  const dataObj = new Date(data);
  const day = String(dataObj.getDate()).padStart(2, "0");
  const month = String(dataObj.getMonth() + 1).padStart(2, "0");
  const year = dataObj.getFullYear();

  return `${year}-${month}-${day}`;
}

function validateEmail(email) {
  const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return regex.test(email);
}

export {
  formatCPF,
  formatDate,
  formatDateToDDMMYYYY,
  formatDateToString,
  isValidCPF,
  isValidDate,
  isValidEmail,
  validateEmail,
};
