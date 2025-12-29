<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>JC Soundscapes | Sound that awakens what wants to emerge</title>

<!-- SEO -->
<meta name="description" content="Handpan & clarinet sound journeys for calm, presence, sleep and creative awakening." />
<meta name="keywords" content="sound healing, handpan meditation, clarinet calm music, sleep soundscapes, ambient reels" />
<link rel="canonical" href="https://hoteloasis.in/soundscape/" />

<!-- Social Share -->
<meta property="og:title" content="JC Soundscapes — Sound that awakens what wants to emerge" />
<meta property="og:description" content="A sanctuary of sound and presence — handpan and clarinet journeys that open inner space." />
<meta property="og:image" content="https://hoteloasis.in/soundscape/preview.jpg" />
<meta property="og:type" content="website" />

<!-- Schema -->
<script type="application/ld+json">
{
  "@context":"https://schema.org",
  "@type":"MusicGroup",
  "name":"JC Soundscapes",
  "url":"https://hoteloasis.in/soundscape/",
  "description":"Handpan & clarinet sound meditations for calm, presence and creativity.",
  "sameAs":["https://instagram.com/jc.soundscapes/"]
}
</script>

<!-- STYLES -->
<style>
*{margin:0;padding:0;box-sizing:border-box;}
:root{
  --stone:#d4cfc4;--silence:#f5f3ef;--deep-earth:#4a4640;
  --gold:#c9a66b;--void:#2a2622;
}

body{
  font-family:'Georgia',serif;
  background:var(--silence);
  color:var(--deep-earth);
  line-height:1.8;
  overflow-x:hidden;
}
h1,h2,h3{
  font-family:'Garamond','Georgia',serif;
  font-weight:300;
  letter-spacing:.05em;
}
.sans{
  font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
  font-weight:300;
  letter-spacing:.06em;
}

section{
  opacity:0;
  transform:translateY(30px);
  transition:1.3s ease;
}
section.visible{
  opacity:1;
  transform:translateY(0);
}

/* ---------- HERO ---------- */
.hero{
  min-height:90vh;
  display:flex;
  align-items:center;
  justify-content:center;
  text-align:center;
  padding:5rem 2rem;
  background:linear-gradient(135deg,var(--stone),var(--silence));
}
.hero h1{
  font-size:clamp(2.7rem,6vw,4.8rem);
  margin-bottom:1.8rem;
}
.identity-line{
  font-size:1.3rem;
  max-width:720px;
  margin:auto;
  opacity:.8;
  margin-bottom:2.2rem;
}
.cta-primary{
  padding:1.2rem 3rem;
  background:var(--deep-earth);
  color:#fff;
  border-radius:40px;
  text-decoration:none;
}

/* ---------- POLISHED REELS UI (NO EXTERNAL IMAGES) ---------- */
.reels{
  padding:7rem 2rem;
  background:var(--stone);
}
.reels h2{
  text-align:left;
  margin-bottom:1rem;
  font-size:2rem;
}

.reels-grid{
  display:grid;
  gap:2.6rem;
  grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
  padding-top:1rem;
}

/* Card */
.reel-card{
  display:flex;
  flex-direction:column;
  height:260px;
  background:#fff;
  border-radius:18px;
  overflow:hidden;
  text-decoration:none;
  color:var(--void);
  box-shadow:0 10px 28px rgba(0,0,0,.08);
  transition:.45s ease;
  transform:translateY(8px);
  opacity:0;
}
.reel-card.visible{
  opacity:1;
  transform:translateY(0);
}
.reel-card:hover{
  transform:translateY(-8px) scale(1.03);
  box-shadow:0 18px 42px rgba(0,0,0,.14),
             0 0 12px rgba(201,166,107,.45);
}

/* Abstract sound gradient instead of image */
.reel-thumb{
  flex:1;
  position:relative;
  background:radial-gradient(circle at 20% 20%,rgba(255,255,255,.9),rgba(201,166,107,.35)),
             radial-gradient(circle at 80% 80%,rgba(0,0,0,.4),rgba(42,38,34,.9));
}

/* Play icon */
.reel-thumb::after{
  content:'▶';
  position:absolute;
  font-size:2.2rem;
  color:#fff;
  opacity:.8;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  text-shadow:0 0 14px rgba(0,0,0,.7);
  transition:.4s;
}
.reel-card:hover .reel-thumb::after{
  transform:translate(-50%,-50%) scale(1.08);
  opacity:1;
}

/* Title */
.reel-text{
  padding:1.1rem 1.4rem;
  text-align:center;
  font-size:1.05rem;
  font-weight:400;
  background:#fff;
  border-top:1px solid rgba(0,0,0,.08);
}
.reel-text small{
  opacity:.6;
  font-size:.8rem;
}

/* ---------- SOUL SECTION ---------- */
.soul-call{
  text-align:center;
  padding:9rem 2rem;
  background:var(--void);
  color:#fff;
}
.soul-call h2{
  font-size:2.6rem;
  margin-bottom:2rem;
  color:var(--gold);
}
.cta-private{
  background:var(--gold);
  padding:1.4rem 3rem;
  border-radius:50px;
  font-size:1.2rem;
  color:var(--void);
  text-decoration:none;
}
.soul-ctas{
  margin-top:2.4rem;
  display:flex;
  flex-wrap:wrap;
  gap:1.4rem;
  justify-content:center;
}
.soul-cta{
  padding:1rem 2.4rem;
  border:1.8px solid var(--gold);
  color:var(--gold);
  border-radius:40px;
  text-decoration:none;
}

footer{
  text-align:center;
  padding:3rem;
  font-size:.9rem;
  background:var(--void);
  color:#bbb;
  margin-top:6rem;
}
</style>
</head>

<body>

<!-- HERO -->
<section class="hero">
  <div>
    <h1>Sound that awakens<br>what wants to emerge.</h1>
    <p class="identity-line">Handpan & clarinet journeys — a doorway to breath, presence & inner space.</p>
    <a href="#reels" class="cta-primary sans">Enter</a>
  </div>
</section>

<!-- REELS -->
<section id="reels" class="reels">
  <h2>Soundscapes You Can Enter</h2>
  <p style="text-align:center;opacity:.6;margin-bottom:2rem">
    New journeys appear here automatically ↓
  </p>

  <div class="reels-grid" id="reels-container">
    <div>Loading...</div>
  </div>
</section>

<!-- SOUL -->
<section class="soul-call">
  <h2>This Is Your Invitation</h2>
  <p>Come as you are. Rest. Return to yourself through sound.</p>

  <a href="https://link.gobespoken.com/free_demo_booking" class="cta-private">Book Your Private Session</a>

  <div class="soul-ctas">
    <a href="https://www.youtube.com" class="soul-cta" target="_blank">Listen</a>
    <a href="https://instagram.com/jc.soundscapes/" class="soul-cta" target="_blank">Follow</a>
    <a href="https://wa.me/918088301024?text=I%20am%20ready%20to%20listen" class="soul-cta" target="_blank">Join Movement</a>
  </div>
</section>

<footer>© 2025 JC Soundscapes — Hotel Oasis. Sound. Stillness. Return.</footer>

<!-- SCRIPT -->
<script>
// load reels from Google Sheet → no thumbnails, just titles + links
async function loadReels(){
  const api = "https://script.google.com/macros/s/AKfycbzWWyeOlGM8rHNGOdZJYx4h-p-oHnn_4B-tVTHonynZ3v15-NuCQdfjyW1WmT-FIQ4/exec";
  try{
    const res = await fetch(api);
    const data = await res.json();
    const box  = document.querySelector(".reels-grid");
    box.innerHTML = "";

    data.forEach(r => {
      if (!r.instagram_url) return;

      const card = document.createElement("a");
      card.className = "reel-card";
      card.href = r.instagram_url;
      card.target = "_blank";

      card.innerHTML = `
        <div class="reel-thumb"></div>
        <div class="reel-text">
          ${r.Title || "Untitled"}
          <br><small>Tap to listen on Instagram</small>
        </div>
      `;

      box.appendChild(card);
      setTimeout(() => card.classList.add("visible"), 200);
    });

  }catch(e){
    console.error("Reel API error:", e);
    document.querySelector(".reels-grid").innerHTML =
      "<p style='text-align:center;'>Unable to load reels</p>";
  }
}
loadReels();

// fade-in sections on scroll
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
},{threshold:0.15});
sections.forEach(s => observer.observe(s));
</script>
</body>
</html>
