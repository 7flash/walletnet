# WalletNet

A small neural network that ranks new pump.fun coins by the wallets inside them, and the website that explains it in plain words.

```sh
bun install
bun start        # http://localhost:3077
```

Pages live in `app/` (TradJS file routing): overview, how it works, what it reads, training, results, limits.

## Hosting

On the web server: `bgrun walletnet` (`bun server.ts`, port 3077, from `/root/walletnet`, a clone of this repo). Caddy serves it as
`walletnet.gxypad.xyz`, and `gxypad.xyz/walletnet` redirects there. Update: `cd /root/walletnet && git pull && bgrun --restart walletnet`.
