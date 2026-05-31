# Lección 6 — Soluciones

## Ejercicio 1: Solución: Preparar contexto para una función de validación

Una posible base es esta:

function validateUsername(username) {
  // min 3, max 12, only letters, numbers and underscore
}

Una implementación razonable sería:

function validateUsername(username) {
  if (typeof username !== "string") return false;
  const value = username.trim();
  return /^[a-zA-Z0-9_]{3,12}$/.test(value);
}

El resultado esperado es que `"ana_01"` devuelva `true`, mientras `"ab"`, `"usuario-muy-largo"` o `"ana!"` devuelvan `false`. La revisión importante consiste en comprobar que la expresión regular coincide exactamente con las reglas pedidas.

## Ejercicio 2: Solución: Usar Copilot para completar una transformación de datos

Un ejemplo válido sería:

const users = [
  { name: "Ana", email: "ana@example.com", active: true },
  { name: "Luis", email: "luis@example.com", active: false },
  { name: "Marta", email: "marta@example.com", active: true }
];

function getActiveEmails(users) {
  return users.filter(user => user.active).map(user => user.email);
}

El resultado esperado al ejecutar `getActiveEmails(users)` es `["ana@example.com", "marta@example.com"]`. Si Copilot propone más complejidad de la necesaria, conviene simplificar manualmente.

## Ejercicio 3: Solución: Generar un test inicial con ayuda de Copilot

Si partimos de esta función:

function sum(a, b) {
  return a + b;
}

Un test inicial sencillo podría quedar así:

import { describe, it, expect } from "vitest";

describe("sum", () => {
  it("adds two numbers", () => {
    expect(sum(2, 3)).toBe(5);
  });
});

El resultado esperado es un caso de prueba legible y ejecutable que valide el comportamiento básico. Después se podrían añadir casos adicionales como números negativos o cero.

## Ejercicio 4: Solución: Refactorización pequeña asistida

Antes de refactorizar, podríamos tener algo así:

const author = firstName.trim() + " " + lastName.trim();
const customer = customerFirstName.trim() + " " + customerLastName.trim();

Tras apoyarnos en Copilot y revisar el resultado, una versión mejor sería:

function formatName(firstName, lastName) {
  return `${firstName.trim()} ${lastName.trim()}`;
}

const author = formatName(firstName, lastName);
const customer = formatName(customerFirstName, customerLastName);

El estado final esperado es una única función reutilizable, con menos duplicación y comportamiento equivalente en ambos casos de uso.

## Ejercicio 5: Solución: Revisión crítica de una sugerencia

Una implementación revisada podría ser esta:

function normalizeEmail(email) {
  if (typeof email !== "string") return null;
  const value = email.trim().toLowerCase();
  if (!value) return null;
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  return isValid ? value : null;
}

El resultado esperado es que `"  USER@Example.COM  "` se convierta en `"user@example.com"`, mientras entradas vacías o mal formadas devuelvan `null`. La clave del ejercicio no es aceptar la primera sugerencia, sino revisar si cubre los casos mínimos necesarios.
