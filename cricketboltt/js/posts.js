// ============================================================
//  âœï¸  CRICKETBOLTT â€” YOUR ARTICLES & STATS
//  HOW TO ADD A NEW ARTICLE:
//  1. Copy one of the article objects below
//  2. Paste it at the TOP of the "posts" array (so newest shows first)
//  3. Fill in your title, category, date, and body text
//  4. Save the file and upload to Vercel â€” done!
// ============================================================

const POSTS = [
  {
    id: 1,
    title: "Rohit Sharma's Powerplay Dominance: Why MI's Captain is Unstoppable in IPL 2026",
    category: "ipl",           // ipl | international | stats | prediction | analysis
    date: "May 12, 2026",
    author: "CricketBoltt",
    readTime: "4 min read",
    emoji: "ðŸ",              // Pick any emoji as the article image placeholder
    excerpt: "Rohit Sharma's strike rate in the powerplay has reached historic levels this IPL season. We break down the numbers and explain why it matters.",
    body: `
      <p>Rohit Sharma has always been a powerplay specialist, but IPL 2026 has seen him reach an entirely different level. Through the first 14 matches of the season, his powerplay strike rate sits at an astonishing <strong>178.4</strong> â€” the highest of any batter who has faced more than 50 deliveries in that phase.</p>

      <h2>The Numbers Don't Lie</h2>
      <p>Let's put this in context. The average powerplay strike rate for top-order batters this IPL is around 140. Rohit is operating 38 points above that benchmark. He has hit 14 sixes in the powerplay alone â€” more than any other batter in the entire tournament.</p>

      <h2>What Changed?</h2>
      <p>Rohit's approach in 2026 has been markedly different. He is backing himself to hit over midwicket off full deliveries more aggressively, and he's picking off short balls through the leg side with remarkable consistency. The key shift is <em>intent from ball one</em> â€” something he historically saved for the middle overs.</p>

      <h3>Shot selection breakdown (powerplay):</h3>
      <ul>
        <li>Cover drive: 22% of shots</li>
        <li>Pull / hook: 18% of shots</li>
        <li>Straight drive: 15% of shots</li>
        <li>Flick through midwicket: 31% of shots</li>
      </ul>

      <h2>Why It Matters for MI</h2>
      <p>When Rohit fires in the powerplay, Mumbai Indians post totals above 180 in 73% of those games this season. His impact extends beyond his own runs â€” his aggression forces captains to bring on their best bowlers early, opening up opportunities for Hardik and Tim David in the middle overs.</p>

      <p>If this form continues, Rohit Sharma is on course for his best-ever IPL season â€” and Mumbai Indians look like genuine title contenders.</p>
    `
  },
  {
    id: 2,
    title: "Jasprit Bumrah's Death Bowling in 2026: Is This the Best We've Ever Seen?",
    category: "stats",
    date: "May 10, 2026",
    author: "CricketBoltt",
    readTime: "5 min read",
    emoji: "ðŸŽ¯",
    excerpt: "Bumrah's economy rate in overs 17-20 this IPL is 6.8 â€” in a T20 era where 12+ is considered normal. A statistical deep dive.",
    body: `
      <p>There is a quiet consensus forming among cricket analysts: Jasprit Bumrah in 2026 is bowling the best death overs cricket we have ever seen in T20 cricket. The numbers support this claim in every way.</p>

      <h2>The Death Over Numbers</h2>
      <p>In IPL 2026, Bumrah has bowled <strong>52 deliveries in overs 17-20</strong>. His economy rate in this phase: <strong>6.8</strong>. For context, the tournament average in death overs is 11.4. He is conceding nearly half the runs of the average death bowler.</p>

      <h2>The Yorker Machine</h2>
      <p>62% of Bumrah's death-over deliveries have been yorkers or near-yorkers. His average error margin on these deliveries â€” measured from the base of the stumps â€” is just 14cm. That is extraordinary precision under pressure.</p>

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
    emoji: "ðŸŒ",
    excerpt: "The selectors have a tough job ahead. We pick our ideal Indian XI for the T20 World Cup 2026 and explain every decision.",
    body: `
      <p>The T20 World Cup 2026 is around the corner, and the Indian selectors face some genuinely tough decisions. After analysing IPL 2026 form and international performances over the past 12 months, here is our ideal Indian XI.</p>

      <h2>Our Chosen XI</h2>
      <ul>
        <li><strong>Rohit Sharma</strong> (c) â€” In career-best powerplay form</li>
        <li><strong>Shubman Gill</strong> â€” Consistency personified at the top</li>
        <li><strong>Virat Kohli</strong> â€” The big-match player India always needs</li>
        <li><strong>Suryakumar Yadav</strong> â€” 360-degree brilliance</li>
        <li><strong>Hardik Pandya</strong> â€” All-round value is irreplaceable</li>
        <li><strong>Rishabh Pant</strong> (wk) â€” The X-factor finisher</li>
        <li><strong>Shivam Dube</strong> â€” Power in the death overs</li>
        <li><strong>Axar Patel</strong> â€” Economy and lower-order runs</li>
        <li><strong>Kuldeep Yadav</strong> â€” The wicket-taking threat</li>
        <li><strong>Arshdeep Singh</strong> â€” Left-arm angle and swing</li>
        <li><strong>Jasprit Bumrah</strong> â€” Simply unmissable</li>
      </ul>

      <h2>The Tough Calls</h2>
      <p>Leaving out Yuzvendra Chahal was the hardest decision. His IPL form has been excellent, but Kuldeep's international record in knockouts edges it for us. Similarly, Rinku Singh narrowly missed out â€” he may be the best impact substitute option India has.</p>
    `
  },
  {
    id: 4,
    title: "MI vs RCB Preview: Who Wins Tonight at Wankhede?",
    category: "prediction",
    date: "May 12, 2026",
    author: "CricketBoltt",
    readTime: "3 min read",
    emoji: "âš¡",
    excerpt: "Wankhede tends to favour batters, but RCB's pace attack has surprised teams before. Our prediction and key battles to watch.",
    body: `
      <p>Mumbai Indians host Royal Challengers Bangalore tonight at Wankhede â€” a ground that has historically been a batter's paradise. But this match has some fascinating sub-plots that could tilt it either way.</p>

      <h2>Key Battle: Rohit vs Hazlewood</h2>
      <p>Josh Hazlewood has dismissed Rohit Sharma three times in T20 cricket. Rohit is aware of the short-ball threat and has worked on his pull shot. This early battle will set the tone for the entire MI innings.</p>

      <h2>Our Prediction</h2>
      <p>Mumbai Indians win by 18-22 runs. Their batting is too deep and Wankhede too flat for RCB to defend any total under 190. Bumrah in the death makes MI nearly impossible to chase down on this surface.</p>

      <p><strong>Predicted MI total:</strong> 185-195<br/>
      <strong>Predicted RCB chase:</strong> 160-170</p>
    `
  },
  {
id: 5,
title: "One Instagram Move From Hardik Pandya Has IPL Fans Losing Their Minds",
category: "ipl",
date: "May 13, 2026",
author: "CricketBoltt",
readTime: "4 min read",
emoji: "🏏",
excerpt: "A Major Move From The Former MI Captain",
body: `
<p>The IPL season is already full of drama, pressure, and nonstop conversations. But somehow, this week, a social media move created almost as much noise as an actual match.
And of course, the player involved was Hardik Pandya.
Everything started when fans noticed unusual activity connected to Mumbai Indians and Hardik’s social media presence. Some supporters claimed he had unfollowed accounts related to the franchise, while others pointed out that he had stopped interacting with certain team posts online.</p>
<h2>Within minutes, screenshots started spreading everywhere.</h2>
<p>Instagram pages posted theories. Fan accounts began making videos. X exploded with reactions. Suddenly, one online action became one of the biggest IPL talking points of the week.
That is modern cricket.
Sometimes one social media click creates more discussion than a fifty or a hat-trick.
Now realistically, players unfollowing accounts is not always dramatic. Athletes clean their timelines all the time. Some avoid distractions during tournaments. Others simply change how they use social media.
But the IPL does not work like normal sports tournaments.
Fans analyze everything.
Especially when it involves a personality as huge and controversial as Hardik Pandya.
The moment supporters noticed possible tension, old debates immediately returned. Discussions about captaincy pressure resurfaced. Fans started revisiting last season’s drama surrounding Mumbai Indians. Questions about dressing-room atmosphere suddenly came back again.
Some fans defended Hardik completely.
They argued that the criticism around him has become excessive and unfair. According to them, people are reading too much into something that may not even mean anything serious.
Others strongly disagreed.
They believed the social media activity could reflect growing frustration behind the scenes. Many pointed toward the emotional pressure surrounding the franchise over the last few seasons.
And honestly, that uncertainty is exactly why this story became so massive.
The IPL today is not just cricket anymore.
It is entertainment, emotion, internet culture, celebrity drama, and fandom chaos combined together. Supporters no longer follow only performances on the field. They follow interviews, body language, celebrations, reactions, and now even social media behavior.
Hardik exists at the center of all that attention.
What makes his situation even more fascinating is how divided fan opinion still remains around him.
Some people admire him for his confidence, fearless personality, and aggressive leadership style. They believe he thrives under pressure and refuses to let criticism affect him.
Others still feel emotionally attached to the older Mumbai Indians era and continue struggling with the franchise’s transition. For those fans, every awkward moment involving Hardik immediately feels symbolic.
That emotional divide keeps every discussion around him alive longer than usual.
Interestingly, neither Hardik nor Mumbai Indians publicly addressed the situation quickly. That silence only increased speculation online. Fans started creating theories from every tiny detail.
Some people even began analyzing old interviews and match footage searching for signs of tension.
That is how quickly narratives grow in the IPL world.
Former cricketers have repeatedly warned fans against overreacting to social media behavior. Many believe internet speculation often creates fake controversies around players unnecessarily.
But the problem is simple.
Sports fans love drama.
Especially IPL fans.
The league has become so emotionally intense that even harmless moments instantly turn into viral stories. One expression during a match becomes controversy. One handshake becomes “tension.” One Instagram activity becomes breaking news.
And honestly, the internet enjoys it.
What also added fuel to this particular situation was Mumbai Indians’ current pressure as a franchise. Whenever a team with massive expectations struggles or faces criticism, fans naturally search for explanations beyond cricket itself.
That is when rumors grow fastest.
Suddenly people stop discussing batting averages and bowling plans. Instead, conversations shift toward dressing-room atmosphere, leadership relationships, and emotional chemistry inside the team.
Whether the Hardik situation actually means something serious or not, nobody outside the franchise truly knows.
But the reaction itself says a lot about modern cricket culture.
Today’s fans do not just watch matches.
They follow stories.
They follow emotions.
And few IPL players create stronger emotional reactions than Hardik Pandya.
Right now, every move he makes feels magnified. Every reaction becomes headline material. Every social media action gets analyzed like evidence in a mystery movie.
That pressure would affect almost anyone.
Yet strangely, Hardik often looks calm through the chaos. Whether facing boos from crowds, criticism online, or nonstop media discussions, he rarely appears emotionally shaken publicly.
Maybe that confidence is genuine.
Or maybe he has simply learned how to survive the madness surrounding modern cricket.
Either way, one thing is certain.
The IPL knows how to turn even the smallest moments into giant conversations.
And this week, one Instagram move was enough to make the entire cricket internet lose its mind.
</p>
`
}
];

// ============================================================
//  ðŸ“Š  PLAYER STATS â€” Update these manually each week
//  Just change the numbers and save the file!
// ============================================================

const BATTING_STATS = [
  { rank:1, name:"Heinrich Klaasen",   team:"SRH", mat:11, runs:494, avg:54.89, sr:186.4, hundreds:0, fifties:4 },
  { rank:2, name:"KL Rahul",           team:"DC",  mat:12, runs:477, avg:43.36, sr:226.86, hundreds:1, fifties:3 },
  { rank:3, name:"Abhishek Sharma",    team:"SRH", mat:11, runs:475, avg:47.50, sr:198.52, hundreds:1, fifties:3 },
  { rank:4, name:"Shubman Gill",       team:"GT",  mat:10, runs:462, avg:46.20, sr:154.0,  hundreds:0, fifties:4 },
  { rank:5, name:"Vaibhav Suryavanshi",team:"RR",  mat:11, runs:440, avg:40.00, sr:172.5,  hundreds:0, fifties:3 },
  { rank:5, name:"Sai Sudharsan",      team:"GT",  mat:11, runs:440, avg:40.00, sr:148.6,  hundreds:0, fifties:4 },
  { rank:7, name:"Ryan Rickelton",     team:"MI",  mat:11, runs:421, avg:38.27, sr:223.63, hundreds:1, fifties:2 },
  { rank:8, name:"Sanju Samson",       team:"CSK", mat:11, runs:398, avg:36.18, sr:205.35, hundreds:1, fifties:2 },
];

const BOWLING_STATS = [
  { rank:1, name:"Bhuvneshwar Kumar", team:"RCB", mat:11, wkts:21, avg:18.4, econ:7.47, best:"4/22" },
  { rank:2, name:"Anshul Kamboj",     team:"CSK", mat:11, wkts:19, avg:19.8, econ:9.20, best:"4/30" },
  { rank:3, name:"Kagiso Rabada",     team:"GT",  mat:11, wkts:18, avg:20.5, econ:9.36, best:"3/18" },
  { rank:4, name:"Prince Yadav",      team:"LSG", mat:11, wkts:16, avg:22.1, econ:8.17, best:"3/24" },
  { rank:4, name:"Eshan Malinga",     team:"SRH", mat:11, wkts:16, avg:23.0, econ:9.44, best:"3/28" },
];

// ============================================================
//  ðŸŸï¸  HOMEPAGE STATS STRIP â€” top 4 performers shown
// ============================================================
const HOMEPAGE_STATS = [
  { name:"Heinrich Klaasen",    team:"SRH", value:"494", label:"IPL Runs" },
  { name:"KL Rahul",            team:"DC",  value:"477", label:"IPL Runs" },
  { name:"Bhuvneshwar Kumar",   team:"RCB", value:"21",  label:"IPL Wickets" },
  { name:"Abhishek Sharma",     team:"SRH", value:"475", label:"IPL Runs" },
];
