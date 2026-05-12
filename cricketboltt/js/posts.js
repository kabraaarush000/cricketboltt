// ============================================================
//  ✏️  CRICKETBOLTT — YOUR ARTICLES & STATS
//  HOW TO ADD A NEW ARTICLE:
//  1. Copy one of the article objects below
//  2. Paste it at the TOP of the "posts" array (so newest shows first)
//  3. Fill in your title, category, date, and body text
//  4. Save the file and upload to Vercel — done!
// ============================================================

const POSTS = [
  {
    id: 1,
    title: "Rohit Sharma's Powerplay Dominance: Why MI's Captain is Unstoppable in IPL 2026",
    category: "ipl",           // ipl | international | stats | prediction | analysis
    date: "May 12, 2026",
    author: "CricketBoltt",
    readTime: "4 min read",
    emoji: "🏏",              // Pick any emoji as the article image placeholder
    excerpt: "Rohit Sharma's strike rate in the powerplay has reached historic levels this IPL season. We break down the numbers and explain why it matters.",
    body: `
      <p>Rohit Sharma has always been a powerplay specialist, but IPL 2026 has seen him reach an entirely different level. Through the first 14 matches of the season, his powerplay strike rate sits at an astonishing <strong>178.4</strong> — the highest of any batter who has faced more than 50 deliveries in that phase.</p>

      <h2>The Numbers Don't Lie</h2>
      <p>Let's put this in context. The average powerplay strike rate for top-order batters this IPL is around 140. Rohit is operating 38 points above that benchmark. He has hit 14 sixes in the powerplay alone — more than any other batter in the entire tournament.</p>

      <h2>What Changed?</h2>
      <p>Rohit's approach in 2026 has been markedly different. He is backing himself to hit over midwicket off full deliveries more aggressively, and he's picking off short balls through the leg side with remarkable consistency. The key shift is <em>intent from ball one</em> — something he historically saved for the middle overs.</p>

      <h3>Shot selection breakdown (powerplay):</h3>
      <ul>
        <li>Cover drive: 22% of shots</li>
        <li>Pull / hook: 18% of shots</li>
        <li>Straight drive: 15% of shots</li>
        <li>Flick through midwicket: 31% of shots</li>
      </ul>

      <h2>Why It Matters for MI</h2>
      <p>When Rohit fires in the powerplay, Mumbai Indians post totals above 180 in 73% of those games this season. His impact extends beyond his own runs — his aggression forces captains to bring on their best bowlers early, opening up opportunities for Hardik and Tim David in the middle overs.</p>

      <p>If this form continues, Rohit Sharma is on course for his best-ever IPL season — and Mumbai Indians look like genuine title contenders.</p>
    `
  },
  {
    id: 2,
    title: "Jasprit Bumrah's Death Bowling in 2026: Is This the Best We've Ever Seen?",
    category: "stats",
    date: "May 10, 2026",
    author: "CricketBoltt",
    readTime: "5 min read",
    emoji: "🎯",
    excerpt: "Bumrah's economy rate in overs 17-20 this IPL is 6.8 — in a T20 era where 12+ is considered normal. A statistical deep dive.",
    body: `
      <p>There is a quiet consensus forming among cricket analysts: Jasprit Bumrah in 2026 is bowling the best death overs cricket we have ever seen in T20 cricket. The numbers support this claim in every way.</p>

      <h2>The Death Over Numbers</h2>
      <p>In IPL 2026, Bumrah has bowled <strong>52 deliveries in overs 17-20</strong>. His economy rate in this phase: <strong>6.8</strong>. For context, the tournament average in death overs is 11.4. He is conceding nearly half the runs of the average death bowler.</p>

      <h2>The Yorker Machine</h2>
      <p>62% of Bumrah's death-over deliveries have been yorkers or near-yorkers. His average error margin on these deliveries — measured from the base of the stumps — is just 14cm. That is extraordinary precision under pressure.</p>

      <p>Bumrah is not just a great bowler. In 2026, he may be the greatest death bowler T20 cricket has ever produced.</p>
    `
  },
  {
    id: 3,
    title: "India's T20 World Cup 2026 Squad: Our Ideal Playing XI",
    category: "international",
    date: "May 8, 2026",
    author: "CricketBoltt",
    readTime: "6 min read",
    emoji: "🌍",
    excerpt: "The selectors have a tough job ahead. We pick our ideal Indian XI for the T20 World Cup 2026 and explain every decision.",
    body: `
      <p>The T20 World Cup 2026 is around the corner, and the Indian selectors face some genuinely tough decisions. After analysing IPL 2026 form and international performances over the past 12 months, here is our ideal Indian XI.</p>

      <h2>Our Chosen XI</h2>
      <ul>
        <li><strong>Rohit Sharma</strong> (c) — In career-best powerplay form</li>
        <li><strong>Shubman Gill</strong> — Consistency personified at the top</li>
        <li><strong>Virat Kohli</strong> — The big-match player India always needs</li>
        <li><strong>Suryakumar Yadav</strong> — 360-degree brilliance</li>
        <li><strong>Hardik Pandya</strong> — All-round value is irreplaceable</li>
        <li><strong>Rishabh Pant</strong> (wk) — The X-factor finisher</li>
        <li><strong>Shivam Dube</strong> — Power in the death overs</li>
        <li><strong>Axar Patel</strong> — Economy and lower-order runs</li>
        <li><strong>Kuldeep Yadav</strong> — The wicket-taking threat</li>
        <li><strong>Arshdeep Singh</strong> — Left-arm angle and swing</li>
        <li><strong>Jasprit Bumrah</strong> — Simply unmissable</li>
      </ul>

      <h2>The Tough Calls</h2>
      <p>Leaving out Yuzvendra Chahal was the hardest decision. His IPL form has been excellent, but Kuldeep's international record in knockouts edges it for us. Similarly, Rinku Singh narrowly missed out — he may be the best impact substitute option India has.</p>
    `
  },
  {
    id: 4,
    title: "MI vs RCB Preview: Who Wins Tonight at Wankhede?",
    category: "prediction",
    date: "May 12, 2026",
    author: "CricketBoltt",
    readTime: "3 min read",
    emoji: "⚡",
    excerpt: "Wankhede tends to favour batters, but RCB's pace attack has surprised teams before. Our prediction and key battles to watch.",
    body: `
      <p>Mumbai Indians host Royal Challengers Bangalore tonight at Wankhede — a ground that has historically been a batter's paradise. But this match has some fascinating sub-plots that could tilt it either way.</p>

      <h2>Key Battle: Rohit vs Hazlewood</h2>
      <p>Josh Hazlewood has dismissed Rohit Sharma three times in T20 cricket. Rohit is aware of the short-ball threat and has worked on his pull shot. This early battle will set the tone for the entire MI innings.</p>

      <h2>Our Prediction</h2>
      <p>Mumbai Indians win by 18-22 runs. Their batting is too deep and Wankhede too flat for RCB to defend any total under 190. Bumrah in the death makes MI nearly impossible to chase down on this surface.</p>

      <p><strong>Predicted MI total:</strong> 185-195<br/>
      <strong>Predicted RCB chase:</strong> 160-170</p>
    `
  }
];

// ============================================================
//  📊  PLAYER STATS — Update these manually each week
//  Just change the numbers and save the file!
// ============================================================

const BATTING_STATS = [
  { rank:1, name:"Rohit Sharma",    team:"MI",  mat:14, runs:648, avg:54.0, sr:178.4, hundreds:1, fifties:6 },
  { rank:2, name:"Shubman Gill",    team:"GT",  mat:14, runs:602, avg:50.1, sr:148.2, hundreds:1, fifties:5 },
  { rank:3, name:"Virat Kohli",     team:"RCB", mat:14, runs:571, avg:52.0, sr:143.6, hundreds:1, fifties:4 },
  { rank:4, name:"Suryakumar Yadav",team:"MI",  mat:13, runs:498, avg:45.2, sr:192.3, hundreds:0, fifties:4 },
  { rank:5, name:"Nicholas Pooran", team:"LSG", mat:14, runs:487, avg:44.2, sr:185.9, hundreds:0, fifties:3 },
  { rank:6, name:"Rishabh Pant",    team:"LSG", mat:13, runs:462, avg:42.0, sr:163.2, hundreds:0, fifties:4 },
  { rank:7, name:"KL Rahul",        team:"DC",  mat:14, runs:441, avg:40.1, sr:138.7, hundreds:0, fifties:4 },
  { rank:8, name:"Travis Head",     team:"SRH", mat:13, runs:428, avg:39.0, sr:179.1, hundreds:1, fifties:2 },
];

const BOWLING_STATS = [
  { rank:1, name:"Jasprit Bumrah",  team:"MI",  mat:14, wkts:28, avg:14.2, econ:6.8,  best:"4/18" },
  { rank:2, name:"Kuldeep Yadav",   team:"DC",  mat:14, wkts:24, avg:16.8, econ:7.4,  best:"4/22" },
  { rank:3, name:"Arshdeep Singh",  team:"PBKS",mat:14, wkts:22, avg:17.5, econ:8.1,  best:"3/14" },
  { rank:4, name:"Yuzi Chahal",     team:"RR",  mat:14, wkts:21, avg:18.2, econ:7.9,  best:"4/30" },
  { rank:5, name:"T Natarajan",     team:"SRH", mat:13, wkts:19, avg:19.4, econ:8.6,  best:"3/22" },
  { rank:6, name:"Rashid Khan",     team:"GT",  mat:14, wkts:18, avg:20.1, econ:7.2,  best:"3/18" },
  { rank:7, name:"Axar Patel",      team:"DC",  mat:14, wkts:17, avg:21.6, econ:7.6,  best:"3/25" },
  { rank:8, name:"Hardik Pandya",   team:"MI",  mat:12, wkts:14, avg:24.2, econ:9.1,  best:"3/28" },
];

// ============================================================
//  🏟️  HOMEPAGE STATS STRIP — top 4 performers shown
// ============================================================
const HOMEPAGE_STATS = [
  { name:"Rohit Sharma",     team:"MI",  value:"648", label:"IPL Runs" },
  { name:"Jasprit Bumrah",   team:"MI",  value:"28",  label:"IPL Wickets" },
  { name:"Suryakumar Yadav", team:"MI",  value:"192", label:"Strike Rate" },
  { name:"Kuldeep Yadav",    team:"DC",  value:"24",  label:"IPL Wickets" },
];
