type ResetPasswordParams = {
  errors: string[];
  message: string;
};

export const resetPassword = async (token: string, password: string) => {
  if (!token || !password) {
    throw new Error("Token and password are required");
  }

  try {
    const response = await fetch("https://zentapi-2gaw.onrender.com/reset-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token, newPassword: password }),
    });
    const data: Promise<ResetPasswordParams> = await response.json();
    return data;
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(`Failed to reset password: ${err.message}`);
    }
  }
};
