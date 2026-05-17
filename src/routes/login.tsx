import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
// import { login } from "@/lib/auth";
// import { setAuthToken, setCurrentUser } from "@/lib/auth2";
import { Logo } from "@/components/Logo";
import { Confetti } from "@/components/Confetti";
import { LogIn } from "@/api/login";
import { getAuthToken, getUser } from "@/api/events";

export const Route = createFileRoute("/login")({ component: LoginPage });

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  //Redireciona para a página de eventos se o usuário já estiver logado
  useEffect(() => {
    setIsMounted(true);
    if (getAuthToken() && getUser()) {
      navigate({ to: "/app/eventos" });
    }
  }, [navigate]);

  const onSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    try {
      const response = await LogIn(email, password);
      console.log(response);

      if (response.error) {
        setError(response.message || "Erro ao fazer login");
        return;
      }

      // Salvar token e usuário
      localStorage.setItem("token", response.token);
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: response.user.name,
          email: response.user.email,
        }),
      );

      navigate({ to: "/app/eventos" });
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.log(err.message);

        setError(err.message);
      } else {
        setError("Ocorreu um erro ao tentar fazer login.");
      }
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center px-4 py-12">
      <Confetti />
      <div className="w-full max-w-md animate-pop-in">
        <div className="text-center mb-8">
          <Logo size="lg" />
          <p className="mt-4 text-muted-foreground">Bem-vindo de volta.</p>
        </div>
        <form
          onSubmit={onSubmit}
          className="bg-card rounded-2xl p-8 shadow-soft space-y-5 border border-border/60"
        >
          <h1 className="font-display text-3xl font-bold">Entrar</h1>
          {error && (
            <div className="bg-destructive/10 text-destructive text-sm rounded-xl px-4 py-3">
              {error}
            </div>
          )}
          <Field label="Email" type="email" value={email} onChange={setEmail} />
          <Field label="Senha" type="password" value={password} onChange={setPassword} />
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold shadow-pop hover:scale-[1.02] transition"
          >
            Entrar
          </button>
          <p className="text-center text-sm text-muted-foreground">
            Novo por aqui?{" "}
            <Link to="/register" className="text-primary font-semibold hover:underline">
              Crie sua conta
            </Link>
          </p>
          <p className="text-center">
            <Link to="/forgot-password" className="text-sm text-muted-foreground hover:underline">
              Esqueci minha senha
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

function Field({
  label,
  type,
  value,
  onChange,
}: {
  label: string;
  type: string;
  value: string;
  onChange: (v: string) => void;
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
