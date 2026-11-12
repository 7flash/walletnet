export default function Page() {
  return (
    <article>
      <p class="kicker">Results</p>
      <h1>Good at ranking. Promising at trading. Not proven yet.</h1>
      <p class="lede">
        All numbers below are from period 2, which the network never trained on, unless we say otherwise. They come from
        replaying the past, not from live trades.
      </p>

      <h2>How well it ranks</h2>
      <p>
        The test: at every minute, compare the order the score gives with the order the coins actually rose in. We use a
        standard measure of how well two orders agree. 1.0 means the same order. 0 means no relation.
      </p>
      <div class="tablewrap">
        <table>
          <thead><tr><th>Method</th><th>Agreement</th></tr></thead>
          <tbody>
            <tr><td>WalletNet (2,637 parameters)</td><td class="n good">0.42</td></tr>
            <tr><td>WalletNet without wallet history (491 parameters)</td><td class="n good">0.42</td></tr>
            <tr><td>Simple straight-line formula on coin facts only</td><td class="n">0.25</td></tr>
            <tr><td>Count of "good" wallets in the coin</td><td class="n bad">0.03</td></tr>
            <tr><td>Our old hand-written score</td><td class="n bad">0.02</td></tr>
          </tbody>
        </table>
      </div>
      <p>The coins WalletNet ranks in its top 10% rise, on average, about 2.5 times as much as the average coin.</p>

      <h2>A simple trading rule</h2>
      <p>To check whether good ranking can make money, we tested one plain rule:</p>
      <ol class="steps">
        <li>Every 5 minutes, take the coin with the highest score whose market cap is under $10,000.</li>
        <li>Skip it if we already bought it in the last hour.</li>
        <li>Buy at the next minute's price.</li>
        <li>Sell as soon as the coin drops out of the top 10 scores. That usually happens within 10 to 15 minutes.</li>
      </ol>
      <p>We charged 1% per buy and per sell, plus an estimate of how much our own order moves the price.</p>

      <div class="figures">
        <div class="figure"><b>212</b><span>Trades in period 2 (about 14 hours).</span></div>
        <div class="figure hot"><b>+30%</b><span>Average result per trade.</span></div>
        <div class="figure"><b>+1%</b><span>Middle (median) trade. Most trades are small; a few are huge.</span></div>
        <div class="figure"><b>50%</b><span>Trades that made money.</span></div>
      </div>

      <h2>How we tried to break it</h2>
      <ul>
        <li><strong>All coins, not just winners.</strong> An early version of our data kept only coins that at some point reached $8,000. That quietly flatters any rule that buys cheap coins. On the full data the average fell from +42% to the numbers above. We now always use all coins.</li>
        <li><strong>Without the best trades.</strong> We removed the 10 best trades. The rest still averaged about +7%.</li>
        <li><strong>Coins we lose sight of.</strong> Sometimes a coin drops off our lists and we stop seeing its price. We re-ran the test assuming every such coin went to zero. The rule still made money.</li>
        <li><strong>A second test period.</strong> On the unseen end of period 1, the same rule averaged about +42% over 105 trades.</li>
      </ul>

      <div class="note">
        <p>
          These are replays. Real trades are slower than our one-minute snapshots, and fast coins move a lot in a minute.
          We are paper trading the rule on live coins now. This page will show those results when there are enough of them.
        </p>
      </div>
      <a class="next" href="/limits">Limits →</a>
    </article>
  );
}
