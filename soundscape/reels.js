<script>
async function loadReels() {
  const apiUrl = "https://script.google.com/macros/s/AKfycbzWWyeOlGM8rHNGOdZJYx4h-p-oHnn_4B-tVTHonynZ3v15-NuCQdfjyW1WmT-FIQ4/exec";

  try {
    const res = await fetch(apiUrl);
    const reels = await res.json();

    const container = document.querySelector(".reels-grid");
    container.innerHTML = ""; 

    reels.forEach(reel => {

      // skip blank rows
      if (!reel.instagram_url) return;

      // extract reel code ignoring ?utm= etc.
      const match = reel.instagram_url.match(/reel\/([^\/?]+)/);
      const id = match ? match[1] : null;

      console.log("Extracted ID:", id, "from", reel.instagram_url);

      // reliable thumbnail generator (replaces blocked IG media endpoint)
      const thumb = id 
        ? `https://img.youtube-generator.workers.dev/ig/${id}.jpg`
        : "";

      // card
      const card = document.createElement("a");
      card.className = "reel-card";
      card.href = reel.instagram_url;
      card.target = "_blank";
      card.rel = "noopener";
      card.setAttribute("loading", "lazy");

      card.innerHTML = `
        <div class="reel-thumb"
          style="
            background:url('${thumb}') center/cover no-repeat;
            width:100%;
            height:78%;
            border-bottom:1px solid rgba(0,0,0,.06);
            border-radius:12px 12px 0 0;">
        </div>

        <div class="reel-placeholder sans" style="padding:1rem 1.4rem;text-align:center;">
          ${reel.Title || "Untitled"}<br>
          <small style="opacity:.7;">Tap to watch</small>
        </div>
      `;

      container.appendChild(card);
    });

    // fade-in on reveal
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll(".reel-card").forEach(card => observer.observe(card));

  } catch (error) {
    console.error("Reel API error:", error);
    document.querySelector(".reels-grid").innerHTML =
      "<p style='text-align:center;color:#666;'>Unable to load reels</p>";
  }
}

loadReels();
</script>
