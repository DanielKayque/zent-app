import { createFileRoute, Outlet, Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";
// import { useAuth, logout } from "@/lib/auth2";
import { Logo } from "@/components/Logo";

export const Route = createFileRoute("/app")({ component: AppLayout });

function AppLayout() {
  const navigate = useNavigate();
  // const { user, ready } = useAuth();
  const user = JSON.parse(localStorage.getItem("user") || "null");
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate({ to: "/login" });
    }
  }, [navigate]);

  // useEffect(() => {
  //   if (ready && !user) navigate({ to: "/login" });
  // }, [ready, user, navigate]);

  // if (!ready || !user) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center text-muted-foreground">
  //       Carregando... 🎈
  //     </div>
  //   );
  // }

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate({ to: "/" });
  };

  // const handleLogout = () => {
  //   logout();
  //   navigate({ to: "/" });
  // };

  const navItems = [
    { to: "/app/eventos", label: "Eventos", icon: "🎉" },
    { to: "/app/novo", label: "Criar", icon: "✨" },
  ];

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className={`px-4 py-2 rounded-full font-medium transition ${
                  path.startsWith(n.to) ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                }`}
              >
                <span className="mr-1.5">{n.icon}</span>
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-gradient-confetti flex items-center justify-center text-white font-bold">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <span className="text-sm font-medium">{user.name.split(" ")[0]}</span>
            </div>
            <button
              onClick={handleLogout}
              className="text-sm text-muted-foreground hover:text-foreground transition"
            >
              Sair
            </button>
          </div>
        </div>
        <nav className="md:hidden flex items-center gap-1 px-6 pb-3">
          {navItems.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                path.startsWith(n.to) ? "bg-primary text-primary-foreground" : "bg-muted"
              }`}
            >
              {n.icon} {n.label}
            </Link>
          ))}
        </nav>
      </header>
      <main className="max-w-6xl mx-auto px-6 py-10">
        <Outlet />
      </main>
    </div>
  );
}
