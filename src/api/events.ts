const TOKEN_KEY = ".token"; // Armazena o token da API

export function setAuthToken(token: string) {
  localStorage.setItem(TOKEN_KEY, token);
}

export function getAuthToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(TOKEN_KEY);
}

// Usa o token em requisições
export async function getEvents() {
  const token = getAuthToken();
  const response = await fetch("https://zentapi-2gaw.onrender.com/events", {
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });
  return response.json();
}