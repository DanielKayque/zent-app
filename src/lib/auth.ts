// Mock auth + events store using localStorage. Front-end only for now.
import { useEffect, useState } from "react";

export type User = { id: string; name: string; email: string };
export type Event = {
  id: string;
  title: string;
  emoji: string;
  date: string; // ISO
  location: string;
  description: string;
  category: "festa" | "casamento" | "corporativo" | "show" | "outro";
  attendees: number;
  capacity: number;
  color: "coral" | "sun" | "mint" | "grape" | "sky";
};

const USER_KEY = "zent.user";
const USERS_KEY = "zent.users";
const EVENTS_KEY = "zent.events";

const seedEvents: Event[] = [
  { id: "1", title: "Aniversário da Lua", emoji: "🎂", date: "2026-05-22T20:00", location: "Rua das Flores, 123", description: "Vamos comemorar mais um ano da Lua com muita música, bolo e dança até o sol nascer!", category: "festa", attendees: 32, capacity: 60, color: "coral" },
  { id: "2", title: "Casamento Ana & João", emoji: "💍", date: "2026-06-14T17:00", location: "Sítio Bela Vista", description: "Cerimônia ao ar livre seguida de festa rústica com luzes e DJ.", category: "casamento", attendees: 120, capacity: 150, color: "grape" },
  { id: "3", title: "Workshop de Mixologia", emoji: "🍹", date: "2026-05-30T19:00", location: "Bar do Beco", description: "Aprenda a fazer drinks autorais com nosso bartender residente.", category: "outro", attendees: 18, capacity: 25, color: "mint" },
  { id: "4", title: "Show da Banda Pôr-do-Sol", emoji: "🎸", date: "2026-07-05T21:00", location: "Praça Central", description: "Indie rock ao vivo num pôr-do-sol inesquecível.", category: "show", attendees: 240, capacity: 400, color: "sun" },
  { id: "5", title: "Confraria Tech 2026", emoji: "🚀", date: "2026-08-10T09:00", location: "Centro de Convenções", description: "Talks, networking e muito café para a comunidade dev.", category: "corporativo", attendees: 88, capacity: 200, color: "sky" },
];

function readUsers(): Array<User & { password: string }> {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
}
function writeUsers(u: Array<User & { password: string }>) {
  localStorage.setItem(USERS_KEY, JSON.stringify(u));
}

export function getCurrentUser(): User | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(USER_KEY);
  return raw ? JSON.parse(raw) : null;
}

export function login(email: string, password: string): User {
  const users = readUsers();
  const found = users.find((u) => u.email === email && u.password === password);
  if (!found) throw new Error("Email ou senha incorretos");
  const user = { id: found.id, name: found.name, email: found.email };
  localStorage.setItem(USER_KEY, JSON.stringify(user));
  return user;
}

export function register(name: string, email: string, password: string): User {
  const users = readUsers();
  if (users.some((u) => u.email === email)) throw new Error("Email já cadastrado");
  const newUser = { id: crypto.randomUUID(), name, email, password };
  users.push(newUser);
  writeUsers(users);
  const user = { id: newUser.id, name, email };
  localStorage.setItem(USER_KEY, JSON.stringify(user));
  return user;
}

export function logout() {
  localStorage.removeItem(USER_KEY);
}

export function getEvents(): Event[] {
  if (typeof window === "undefined") return seedEvents;
  const raw = localStorage.getItem(EVENTS_KEY);
  if (!raw) {
    localStorage.setItem(EVENTS_KEY, JSON.stringify(seedEvents));
    return seedEvents;
  }
  return JSON.parse(raw);
}
export function getEvent(id: string): Event | undefined {
  return getEvents().find((e) => e.id === id);
}
export function saveEvent(event: Event) {
  const events = getEvents();
  const idx = events.findIndex((e) => e.id === event.id);
  if (idx >= 0) events[idx] = event;
  else events.push(event);
  localStorage.setItem(EVENTS_KEY, JSON.stringify(events));
}
export function deleteEvent(id: string) {
  const events = getEvents().filter((e) => e.id !== id);
  localStorage.setItem(EVENTS_KEY, JSON.stringify(events));
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setUser(getCurrentUser());
    setReady(true);
  }, []);
  return { user, ready, refresh: () => setUser(getCurrentUser()) };
}
