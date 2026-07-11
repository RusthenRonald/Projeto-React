// Base URL for the backend API.
// In production this is injected at build time via REACT_APP_API_URL.
// Falls back to localhost for local development.
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export default API_URL;
