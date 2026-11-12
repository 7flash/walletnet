export default function Page() {
  return (
    <article>
      <p class="kicker">Training</p>
      <h1>What it was taught to predict.</h1>
      <p class="lede">
        A network only learns what you ask it to. We asked a simple question: from this minute, how soon and how fast does
        the price go up?
      </p>

      <h2>The question, exactly</h2>
      <p>For each coin at each minute, we look at the next 60 minutes of its price.</p>
      <ul>
        <li>We find how far the price rose above the price at that minute.</li>
        <li>A rise that comes sooner counts more than the same rise later. A rise after 30 minutes counts about a third as much as one right away.</li>
        <li>The best of those values is the answer the network must guess.</li>
      </ul>
      <p>So "up 2x in 5 minutes" scores high. "Up 2x after 55 minutes" scores lower. "Never went up" scores zero.</p>

      <h2>Ranking, not guessing a price</h2>
      <p>
        We did not train the network to guess the exact answer. We trained it to <strong>put coins in the right order</strong>,
        minute by minute. At each minute, it was rewarded when a coin that later rose more got a higher score than a coin
        that rose less. That is the job we need: choosing the best coin out of the ones live right now.
      </p>

      <h2>The data</h2>
      <ul>
        <li><strong>Period 1:</strong> 10 Nov 17:42 to 11 Nov 17:39 (UTC). The network trained on the first 60% of it.</li>
        <li><strong>Hold-out:</strong> the last 40% of period 1, used to decide when to stop training.</li>
        <li><strong>Period 2:</strong> 11 Nov 17:10 to 12 Nov 06:51. Never used for training. All our "unseen data" results come from here.</li>
      </ul>
      <p>
        We removed "Mayhem" coins first. Those are coins in a pump.fun mode where the shown market cap is not backed by
        real money. We checked each coin's mode directly on the blockchain.
      </p>

      <h2>How long training takes</h2>
      <p>
        A few minutes. The network is small and the data fits in memory. The slow part is building the data: looking up
        the history of about 140,000 wallets.
      </p>

      <h2>Retraining every day</h2>
      <p>
        Markets change. The wallets that win this week may not win next week. We plan to retrain WalletNet every day on the
        most recent days of data, and only switch to the new version if it ranks better than the old one on the most
        recent day, which neither version trained on.
      </p>
      <ol class="steps">
        <li>Rebuild the data from the last few days, all coins included.</li>
        <li>Train a new network on all but the last day.</li>
        <li>Test the old and new networks on the last day.</li>
        <li>Keep whichever ranks better, and log the result here.</li>
      </ol>
      <a class="next" href="/results">Results →</a>
    </article>
  );
}
