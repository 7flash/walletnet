const favicon =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='6' fill='%23161310'/%3E%3Ccircle cx='9' cy='11' r='3' fill='%23e4572e'/%3E%3Ccircle cx='23' cy='9' r='2.4' fill='%23f3ece0'/%3E%3Ccircle cx='16' cy='22' r='3.4' fill='%23f3ece0'/%3E%3Cpath d='M9 11L16 22L23 9' stroke='%23f3ece0' stroke-width='1.6' fill='none'/%3E%3C/svg%3E";

const pages: [string, string][] = [
  ["/", "Overview"],
  ["/how", "How it works"],
  ["/wallets", "What it reads"],
  ["/training", "Training"],
  ["/results", "Results"],
  ["/limits", "Limits"],
];

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="WalletNet: a small neural network that ranks new pump.fun coins by the wallets inside them." />
        <link rel="icon" href={favicon} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <title>WalletNet</title>
      </head>
      <body>
        <header class="masthead">
          <a class="brand" href="/">
            <span class="dot" />
            WalletNet
          </a>
          <nav>
            {pages.map(([href, label]) => (
              <a href={href}>{label}</a>
            ))}
          </nav>
        </header>
        <main id="melina-page-content">{children}</main>
        <footer class="foot">
          <p>
            WalletNet is research software. It does not trade by itself. Nothing here is financial advice. Coins on
            pump.fun lose most of their value most of the time.
          </p>
        </footer>
      </body>
    </html>
  );
}
