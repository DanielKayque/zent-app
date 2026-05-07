type RegisterRequest = {
  name: string;
  email: string;
  password: string;
};

type RegisterResponse = {
  error: boolean;
  message: string;
  newUser: {
    name: string;
    email: string;
  };
};

export async function register(
  name: string,
  email: string,
  password: string,
): Promise<RegisterResponse> {
  const response = await fetch("https://zentapi-2gaw.onrender.com/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Erro ao registrar");
  }

  return data;
}
