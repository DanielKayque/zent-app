import { resetPassword } from "@/api/resetPassword";
import { Confetti } from "@/components/Confetti";
import { Logo } from "@/components/Logo";
import { createFileRoute, Link, useParams, useSearch } from "@tanstack/react-router";
import React, { useEffect } from "react";

export const Route = createFileRoute("/reset-password")({
  component: RouteComponent,
});

type ParamsSearch = {
  token: string;
};

function RouteComponent() {
  const { token } = Route.useSearch() as ParamsSearch;
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [message, setMessage] = React.useState("");

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    try {
      console.log(password);
      console.log(token);
      

      const response = await resetPassword(token, password);
      console.log(response);
      
      setLoading(false);
      setMessage(response?.message || "Senha alterada");
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error resetting password:", error);
        setError(error.message || "Failed to reset password");
        setLoading(false);
      } else {
        console.error("Unexpected error:", error);
        setError("An unexpected error occurred");
        setLoading(false);
      }
    }
  }

  return (
    <div className="min-h-screen relative flex items-center justify-center px-4 py-12">
      <Confetti />
      <div className="w-full max-w-md animate-pop-in">
        <div className="text-center mb-8">
          <Logo size="lg" />
          <p className="mt-4 text-muted-foreground">Bem-vindo de volta.</p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-card rounded-2xl p-8 shadow-soft space-y-5 border border-border/60 flex flex-col"
        >
          <h1 className="font-display text-3xl font-bold">Redefinir senha</h1>
          <Field
            label="Nova senha"
            type="password"
            value={password}
            onChange={(v) => setPassword(v)}
          />
          {error && <p className="text-sm text-red-500">{error}</p>}
          {message && <p className="text-sm text-red-500">{message}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold shadow-pop hover:scale-[1.02] transition"
          >
            {loading ? "Cadastrando..." : "Cadastrar nova senha"}
          </button>
        </form>

        <p className="text-center text-sm text-muted-foreground">
          Entrar na minha conta?{" "}
          <Link to="/login" className="text-primary font-semibold hover:underline">
            Faça login
          </Link>
        </p>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium">{label}</span>
      <input
        type={type}
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full px-4 py-3 rounded-2xl bg-muted border-2 border-transparent focus:border-primary focus:bg-card outline-none transition"
      />
    </label>
  );
}
