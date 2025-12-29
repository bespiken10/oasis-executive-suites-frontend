async function loadReels() {
  const apiUrl = "https://script.google.com/macros/s/AKfycbvALEZUMFQtG3QgDnm0-y5e9HTLBXwXowfqIKgdG-Ra_EDI3oCWel0Yvnf8VkmCZno/exec";

  try {
    const res = await fetch(apiUrl);
    const reels = await res.json();
    const container = document.querySelector(".reels-grid");

    if (!container) {
      console.error("No .reels-grid found in HTML");
      return;
    }

    container.innerHTML = "";

    reels.forEach(reel => {
      // Extract Instagram Reel ID
      const match = reel.instagram_url.match(/\/reel\/([^/?]+)/);
      const reelId = match ? match[1] : null;

      // placeholder image until actual thumbnail fetch logic is added
      const thumbnail = reelId
        ? `https://i.imgur.com/7q4A7K6.jpeg`   // temporary thumbnail
        : "https://i.imgur.com/7q4A7K6.jpeg";   // fallback safe image

      const card = document.createElement("a");
      card.className = "reel-card";
      card.href = reel.instagram_url;
      card.target = "_blank";

      card.innerHTML = `
        <div class="reel-thumb" style="background-image:url('${thumbnail}')">
          <div class="reel-overlay">▶</div>
        </div>
        <div class="reel-info sans">${reel.Title || "Untitled Reel"}</div>
      `;

      container.appendChild(card);
    });

  } catch (e) {
    console.error("Reel Load Error:", e);
    document.querySelector(".reels-grid").innerHTML =
      "<p style='text-align:center;color:#888'>Unable to load reels</p>";
  }
}

loadReels();   // 🔥 runs automatically on page open
