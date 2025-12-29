async function loadReels() {
  const apiUrl = "https://script.google.com/macros/s/AKfycbzWWyeOlGM8rHNGOdZJYx4h-p-oHnn_4B-tVTHonynZ3v15-NuCQdfjyW1WmT-FIQ4/exec";

  try {
    const res = await fetch(apiUrl);
    const reels = await res.json();

    const container = document.querySelector(".reels-grid");
    container.innerHTML = ""; 

    reels.forEach(reel => {
      const card = document.createElement("a");
      card.className = "reel-card";
      card.href = reel.instagram_url;
      card.target = "_blank";

      card.innerHTML = `
        <div class="reel-placeholder sans">
          ${reel.Title}<br>
          <small style="opacity:.7;">Tap to watch</small>
        </div>
      `;

      container.appendChild(card);
    });

  } catch (error) {
    console.error("Reel API error:", error);
    document.querySelector(".reels-grid").innerHTML =
      "<p style='text-align:center;color:#666;'>Unable to load reels</p>";
  }
}

loadReels();
