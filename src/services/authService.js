

import API from './api'; // Humne jo central axios instance banaya tha

// Register function
export const registerUser = async (userData) => {
  try {
    // API.post() backend ko ek POST request bhejta hai
    // Pehla argument hai URL ('/auth/register')
    // Doosra argument hai data jo bhejna hai (userData)
    const response = await API.post('/auth/register', userData);
    return response.data;
  } catch (error) {
    // Agar backend se koi error aata hai (jaise 'User already exists')
    // toh use throw kar dein taaki component use handle kar sake
    throw error.response.data;
  }
};

export const loginUser = async (userData) => {
    try {
      const response = await API.post('/auth/login', userData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };