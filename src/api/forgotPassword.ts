export const forgotPassword = async (email: string) => {
  if (!email) {
    throw new Error("Favor digitar um email válido");
  }

  try {
    const response = await fetch("https://zentapi-2gaw.onrender.com/forgot-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();
    console.log(data);
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error("Erro desconhecido " + err);
    }
  }
};
