export default function Page() {
  return (
    <article>
      <p class="kicker">A neural network for new coins</p>
      <h1>Who bought it says more than what it costs.</h1>
      <p class="lede">
        WalletNet looks at a new pump.fun coin the way a careful trader would. It looks at who bought it, when they bought,
        and what those same wallets did on earlier coins. Then it gives the coin one number. A higher number means the
        price is more likely to rise soon and fast.
      </p>

      <div class="figures">
        <div class="figure hot"><b>0.42</b><span>How well it ranks coins on a day it never saw (1.0 would be perfect, 0 is a coin flip).</span></div>
        <div class="figure"><b>0.02</b><span>The same test for our old hand-written score.</span></div>
        <div class="figure"><b>2,637</b><span>Numbers inside the network. It is small on purpose.</span></div>
        <div class="figure"><b>256</b><span>Wallets it reads per coin: the first ones to buy.</span></div>
      </div>

      <h2>The idea in five sentences</h2>
      <p>Every minute, hundreds of new coins trade on pump.fun.</p>
      <p>Most of them go to zero within an hour. A few go up ten times or more.</p>
      <p>The price alone does not tell them apart early. The wallets inside them often do.</p>
      <p>Some wallets have bought early in many coins that later ran. Some wallets sell into every pump. Some are bots that are always first.</p>
      <p>WalletNet learned, from about two days of real trades, which mixes of wallets tend to come before a fast rise.</p>

      <h2>What it does, step by step</h2>
      <ol class="steps">
        <li><strong>It watches.</strong> Once a minute we take a snapshot of every coin on our lists: its price, its trading volume, how many wallets traded it.</li>
        <li><strong>It collects the wallets.</strong> For each coin it takes the first 256 wallets that bought, in the order they came in.</li>
        <li><strong>It looks up their past.</strong> For each wallet it checks what that wallet did on other coins before this one: how many it traded, how often it made money, how long it usually held.</li>
        <li><strong>It scores.</strong> The network turns all of that into one number for the coin, for this minute.</li>
        <li><strong>It ranks.</strong> All live coins are sorted by that number. The top of the list is where we look first.</li>
      </ol>

      <div class="note">
        <p>
          WalletNet never sees wallet addresses. It sees what each wallet did, not who it is. A wallet it has never met
          is treated the same way as an old one with the same habits.
        </p>
      </div>

      <h2>Where it stands today</h2>
      <p>
        The ranking works well on data the network did not train on. A simple trading rule built on it made money in our
        tests, including our harshest ones. We are now running it as paper trades on live coins, with no real money, to
        see if the test results hold up in the real market.
      </p>
      <p>Every number on this site comes from those tests. The <a href="/limits">Limits</a> page says plainly what they do not prove.</p>
      <a class="next" href="/how">How it works →</a>
    </article>
  );
}
