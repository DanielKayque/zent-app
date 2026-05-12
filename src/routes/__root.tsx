import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center animate-pop-in">
        <div className="text-8xl mb-4">🎈</div>
        <h1 className="font-display text-6xl font-black">404</h1>
        <p className="mt-3 text-muted-foreground">Esse evento não existe... ainda!</p>
        <Link to="/" className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-pop hover:scale-105 transition">
          Voltar pra festa
        </Link>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Zent — Gestão de eventos" },
      { name: "description", content: "Zent é o jeito mais divertido de planejar, gerenciar e curtir seus eventos." },
      { property: "og:title", content: "Zent — Gestão de eventos" },
      { name: "twitter:title", content: "Zent — Gestão de eventos" },
      { property: "og:description", content: "Zent é o jeito mais divertido de planejar, gerenciar e curtir seus eventos." },
      { name: "twitter:description", content: "Zent é o jeito mais divertido de planejar, gerenciar e curtir seus eventos." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8fd3a859-56e4-4121-a9a9-cd29d2e7a3de/id-preview-618aca12--cd697729-eb10-419e-b6cc-acf0d6dd2196.lovable.app-1778427726463.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8fd3a859-56e4-4121-a9a9-cd29d2e7a3de/id-preview-618aca12--cd697729-eb10-419e-b6cc-acf0d6dd2196.lovable.app-1778427726463.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,800;9..144,900&family=Outfit:wght@400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: () => <Outlet />,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}
