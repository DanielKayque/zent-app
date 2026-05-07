type User = {
  name: string;
  email: string;
};

export type CreatedEvent = {
  address: string;
  name: string;
  date: string;
  limitParticipants?: number;
  id?: string;

  //Esse creatorId só retorna, nn passamos ele ao criar evento
  creatorId: number;
};

// export type Event = {
//   category: "festa" | "casamento" | "corporativo" | "show" | "outro";
//   color: "coral" | "sun" | "mint" | "grape" | "sky";
// };

const TOKEN_KEY = "token"; // Armazena o token da API

export function setAuthToken(token: string) {
  localStorage.setItem(TOKEN_KEY, token);
}

export function getAuthToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(TOKEN_KEY);
}

export function getUser(): User | null {
  if (typeof window === "undefined") return null;
  const userJson = localStorage.getItem("user");
  if (!userJson) return null;
  try {
    return JSON.parse(userJson);
  } catch {
    return null;
  }
}

// Usa o token em requisições
export async function getEvents(): Promise<CreatedEvent[]> {
  const token = getAuthToken();
  const response = await fetch("https://zentapi-2gaw.onrender.com/event", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  try {
    return response.json();
  } catch (e) {
    if (e instanceof Error) {
      throw e.message;
    }
  }
  return response.json();
}

export async function createEvents(data: Omit<CreatedEvent, "creatorId">): Promise<CreatedEvent> {
  const token = getAuthToken();
  const response = await fetch("https://zentapi-2gaw.onrender.com/event", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  return response.json();
}
