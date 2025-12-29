<script>
async function loadReels() {
  const apiUrl = "https://script.google.com/macros/s/AKfycbzWWyeOlGM8rHNGOdZJYx4h-p-oHnn_4B-tVTHonynZ3v15-NuCQdfjyW1WmT-FIQ4/exec";

  try {
    const res = await fetch(apiUrl);
    const reels = await res.json();

    const container = document.querySelector(".reels-grid");
    container.innerHTML = "";

    reels.forEach(reel => {
      if (!reel.instagram_url) return;

      // universal title mapping
      const title = reel.Title || reel.title || "Untitled";

      // new working thumbnail method
      const thumb = `https://api.bridgeapp.in/instagram-media?url=${encodeURIComponent(reel.instagram_url)}`;

      const card = document.createElement("a");
      card.className = "reel-card";
      card.href = reel.instagram_url;
      card.target = "_blank";
      card.rel = "noopener";

      card.innerHTML = `
        <div class="reel-thumb" style="
          background-image:url('${thumb}');
          background-size:cover;
          background-position:center;
          height:200px;">
        </div>

        <div class="reel-placeholder">
          <strong>${title}</strong><br>
          <small style="opacity:.7;">Tap to watch</small>
        </div>
      `;

      container.appendChild(card);
    });

  } catch (error) {
    console.error(error);
    document.querySelector(".reels-grid").innerHTML =
      "<p style='text-align:center;color:#666;'>Unable to load reels</p>";
  }
}

loadReels();
</script>
