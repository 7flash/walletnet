const rows: [string, string, string][] = [
  ["Join order", "Was it the 1st buyer, the 10th, the 200th?", "The strongest single signal we found."],
  ["Join time", "How many seconds before or after we started tracking the coin did it buy?", ""],
  ["Minutes held", "How long has it held this coin so far?", "The second strongest signal."],
  ["Past coins", "How many other coins did it trade before this one?", "New wallets have 0. That is fine."],
  ["Past wins", "Of those, on how many did it take out more SOL than it put in?", "A strong history signal."],
  ["Past profit", "Its total SOL out minus SOL in, over those coins.", ""],
  ["Usual hold time", "The middle value of how long it held each past coin.", "Bots hold seconds. People hold minutes or hours."],
  ["Usual size", "How much SOL it usually put into a coin.", ""],
  ["Sells at all", "On what share of past coins did it sell at all?", "Some wallets only buy and never sell."],
  ["Big wins", "On how many past coins did it make 3x or more, on at least 0.05 SOL?", ""],
];

export default function Page() {
  return (
    <article>
      <p class="kicker">What it reads</p>
      <h1>Ten facts about every wallet.</h1>
      <p class="lede">
        For each of the first 256 wallets in a coin, WalletNet reads ten facts. Three are about this coin. Seven are about
        the wallet's past. That is all it knows about wallets.
      </p>

      <div class="tablewrap">
        <table>
          <thead><tr><th>Fact</th><th>Plain meaning</th><th>Note</th></tr></thead>
          <tbody>
            {rows.map(([a, b, c]) => (
              <tr><td><strong>{a}</strong></td><td>{b}</td><td>{c}</td></tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>What "past" means</h2>
      <p>
        The history facts only use coins the wallet <strong>finished trading before we started tracking this coin</strong>.
        Anything the wallet did later is ignored. This matters. Without it, the network could secretly learn from the
        future, and its test results would look much better than real life.
      </p>

      <h2>Where the facts come from</h2>
      <p>
        We read every pump.fun trade as it happens. For each wallet and each coin we keep running totals: SOL in, SOL out,
        number of buys and sells, first and last trade time. That table has about 19.5 million rows today. WalletNet reads
        from it.
      </p>
      <p>
        We do not keep each single trade forever, only the totals per wallet per coin. So the network knows how long a
        wallet held and whether it made money, but not the exact path of its trades.
      </p>

      <h2>New wallets</h2>
      <p>
        WalletNet does not know addresses, so there is nothing to "learn" about a new address. A brand-new wallet simply has
        no history: zero past coins. The network has seen many such wallets in training and knows what that usually means.
        As soon as the wallet trades a few coins, its history facts fill in by themselves.
      </p>

      <h2>Which facts matter most</h2>
      <p>
        We tested this by scrambling one fact at a time and measuring how much worse the ranking got. Scrambling
        <strong> join order</strong> hurt the most. Next came <strong>minutes held</strong>, then <strong>past wins</strong>
        and <strong>usual hold time</strong>. In plain words: who got in first, whether they are still holding, and whether
        they have a record of winning.
      </p>
      <div class="note">
        <p>
          A surprise: a version with all seven history facts switched off ranked almost as well. Join order and holding
          time already carry most of the signal. The history adds a little on top.
        </p>
      </div>
      <a class="next" href="/training">Training →</a>
    </article>
  );
}
