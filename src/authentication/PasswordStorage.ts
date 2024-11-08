// PasswordStorage.ts

const PASSWORD_KEY = 'user_password';
const EMAIL_KEY = 'user_email';

// Initial values (you might want to handle this differently in a real app)
const INITIAL_EMAIL = 'admin@gmail.com';
const INITIAL_PASSWORD = '12345678';

export const initializeUserCredentials = () => {
  // Check if user credentials already exist
  if (!localStorage.getItem(EMAIL_KEY)) {
    localStorage.setItem(EMAIL_KEY, INITIAL_EMAIL);
  }
  if (!localStorage.getItem(PASSWORD_KEY)) {
    localStorage.setItem(PASSWORD_KEY, INITIAL_PASSWORD);
  }
};

export const getUserCredentials = () => {
  const email = localStorage.getItem(EMAIL_KEY);
  const password = localStorage.getItem(PASSWORD_KEY);
  return { email, password };
};

export const updatePassword = (newPassword: string) => {
  localStorage.setItem(PASSWORD_KEY, newPassword);
};

// Optional: Function to update email
export const updateEmail = (newEmail: string) => {
  localStorage.setItem(EMAIL_KEY, newEmail);
};
