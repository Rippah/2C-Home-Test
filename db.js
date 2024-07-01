// Simulacija baze podataka koristeći JavaScript Map
const users = new Map();

// Funkcija za generisanje jedinstvenog ID-a
const generateId = () => Date.now().toString(36) + Math.random().toString(36).substr(2);

module.exports = {
  users,
  generateId,
};