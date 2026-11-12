const diagram = `   wallet 1 ─┐
   wallet 2 ─┤   each wallet            one small network,
   wallet 3 ─┼─▶ becomes 10 numbers ─▶ the same for every   ─▶ 8 numbers per wallet
     ...     │                         wallet
 wallet 256 ─┘
                                  │
                                  ▼
             average them, take the biggest, add them up, count them
                                  │
                                  ▼
   coin numbers ──────────▶ a second small network ──────────▶  SCORE
   (price, volume, buyers,
    age, migrated or not)`;

export default function Page() {
  return (
    <article>
      <p class="kicker">How it works</p>
      <h1>Two small networks and a pooling step.</h1>
      <p class="lede">
        The trick is that a coin does not have a fixed number of wallets. One coin has 12 buyers, the next has 900. The
        network has to accept any number of wallets, in any order, and still give one answer.
      </p>

      <h2>The shape</h2>
      <div class="diagram">{diagram}</div>
      <p>This shape is called a "set network". It is a common way to read a group of things whose count and order can change.</p>

      <h2>Part 1: one wallet becomes a few numbers</h2>
      <p>Each wallet is described by 10 numbers. The <a href="/wallets">What it reads</a> page lists them all.</p>
      <p>
        A small network reads those 10 numbers and turns them into 8 new numbers. You can think of the 8 numbers as the
        network's own short summary of that wallet: "early sniper", "patient holder", "always sells fast", and so on. Nobody
        wrote those labels. The network found its own way to describe wallets during training.
      </p>
      <p>The same small network is used for every wallet. That is why the order of wallets does not matter, and why it works for any number of them.</p>

      <h2>Part 2: many wallets become one picture</h2>
      <p>Now the coin has a pile of wallet summaries. The network combines them in four simple ways:</p>
      <ul>
        <li><strong>The average.</strong> What a typical buyer of this coin looks like.</li>
        <li><strong>The maximum.</strong> The strongest signal from any single wallet.</li>
        <li><strong>The sum.</strong> How much of each kind of wallet there is in total.</li>
        <li><strong>The count.</strong> How many wallets have bought so far.</li>
      </ul>
      <p>Only wallets that have already bought at that minute are counted. A wallet that buys later cannot affect an earlier score.</p>

      <h2>Part 3: the coin itself</h2>
      <p>The second network also gets 8 plain facts about the coin at that minute:</p>
      <ul>
        <li>its market cap, in dollars;</li>
        <li>its trading volume over the last 5 minutes;</li>
        <li>whether that volume is speeding up or slowing down;</li>
        <li>how many different wallets have traded it;</li>
        <li>what share of those wallets we class as "good" (they made money on earlier coins);</li>
        <li>what share we class as "dumpers" (they tend to sell into pumps);</li>
        <li>how old the coin is;</li>
        <li>whether it has already moved from pump.fun's launch curve to a real pool ("migrated").</li>
      </ul>

      <h2>Part 4: one number out</h2>
      <p>The second network reads the wallet picture and the coin facts together and gives one number. That number is the score.</p>
      <p>
        The score has no unit. It is not a price and not a probability. It is only useful for <strong>ranking</strong>:
        a coin with a higher score, at the same minute, is more likely to rise sooner and faster than a coin with a lower
        score.
      </p>

      <h2>How big is it?</h2>
      <p>
        The version we use has 2,637 numbers inside it (its "parameters"). That is tiny. A phone photo filter is bigger.
        We kept it small on purpose: with only two days of data, a big network would memorize the past instead of
        learning patterns that repeat. A smaller version with 491 parameters ranks almost as well.
      </p>
      <p>Scoring one coin takes well under a millisecond. Scoring every live coin each minute is cheap. The slow part is looking up the wallets' history, not the network.</p>
      <a class="next" href="/wallets">What it reads →</a>
    </article>
  );
}
