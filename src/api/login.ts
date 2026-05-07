type LoginRequest = {
  email: string;
  password: string;
};

type LoginResponse = {
  token: string;
  error: boolean;
  message: string
  user: {
    email: string;
    name: string;
  };
};

export async function LogIn(email: string, password: string): Promise<LoginResponse> {
  const response = await fetch("https://zentapi-2gaw.onrender.com/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data: LoginResponse = await response.json();

  if (!response.ok) {    
    throw new Error(`${data.message}`);
  }
  return data;
}
