async function loadReels() {
  const apiUrl = "https://script.google.com/macros/s/AKfycbzWWyeOlGM8rHNGOdZJYx4h-p-oHnn_4B-tVTHonynZ3v15-NuCQdfjyW1WmT-FIQ4/exec";

  try {
    const res = await fetch(apiUrl);
    const reels = await res.json();

    const container = document.querySelector(".reels-grid");
    container.innerHTML = ""; // clears "loading..."

    reels.forEach(reel => {

      // Extract Instagram Reel ID
      const match = reel.instagram_url.match(/reel\/([^/?]+)/);
      const id = match ? match[1] : null;

      // Auto thumbnail pull (Instagram public thumbnail trick)
      const thumb = id 
        ? `https://www.instagram.com/p/${id}/media/?size=l`
        : "";

      // Card
      const card = document.createElement("a");
      card.className = "reel-card";
      card.href = reel.instagram_url;
      card.target = "_blank";

      card.innerHTML = `
        <div class="reel-thumb" 
          style="
            background:url('${thumb}') center/cover no-repeat;
            width:100%;
            height:80%;
            border-bottom:1px solid #ddd;
          ">
        </div>

        <div class="reel-placeholder sans" style="padding:1.2rem;">
          ${reel.Title || "Untitled"}<br>
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

// Run on page load
loadReels();
