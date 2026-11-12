export default function Page() {
  return (
    <article>
      <p class="kicker">Limits</p>
      <h1>What the numbers do not prove.</h1>
      <p class="lede">We would rather you trust a small claim than doubt a big one. Here is everything we know is weak.</p>

      <h2>Short history</h2>
      <p>
        The network trained on about one day and was tested on about one more. Pump.fun changes from week to week. A pattern
        that held for two days can stop working. Daily retraining and live paper trades are how we watch for that.
      </p>

      <h2>One-minute snapshots</h2>
      <p>
        We see each coin once a minute. Many of the best trades went up several times over within a few minutes. In real
        life our buy lands seconds after we decide, and the price may already have moved. Part of the paper result may
        disappear in live trading. We are measuring how much.
      </p>

      <h2>Coins that vanish from view</h2>
      <p>
        Our lists drop coins that go quiet. When that happens we stop seeing their price. We test every result three ways:
        price held, price halved, price went to zero. We publish all three, and we only trust rules that survive the worst one.
      </p>

      <h2>Sudden crashes</h2>
      <p>
        Some coins lose 99% of their value between one minute and the next. No stop-loss can catch that. We found such
        crashes can be partly flagged in advance, but removing them did not improve the results in our tests.
      </p>

      <h2>Few big winners</h2>
      <p>
        The typical trade makes about nothing. The profit comes from a small number of trades that rise 2 to 10 times.
        That means long losing streaks are normal, and results over a few hours mean little. Size every trade so that a
        long losing streak is survivable.
      </p>

      <h2>Your own order moves the price</h2>
      <p>
        Coins under $10,000 have very little money in them. A 1 SOL buy can move the price by a few percent. In our tests,
        small trades did better than large ones. This is not a strategy that scales to big money.
      </p>

      <h2>Not advice</h2>
      <p>
        WalletNet is research. It ranks coins. It does not know anything about a project, its team or its future. Most
        pump.fun coins go to zero. Never put in money you cannot lose.
      </p>
      <a class="next" href="/">Back to overview →</a>
    </article>
  );
}
