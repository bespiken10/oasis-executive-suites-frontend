async function loadReels() {
  const apiUrl = "https://script.google.com/macros/s/AKfycbvALEZUMFQtG3QgDnm0-y5e9HTLBXwXowfqIKgdG-Ra_EDI3oCWel0Yvnf8VkmCZno/exec";

  try {
    const res = await fetch(apiUrl);
    const reels = await res.json();
    const container = document.querySelector(".reels-grid");
    container.innerHTML = "";

    reels.forEach(reel => {
      // Extract Instagram Reel ID for thumbnail
      const match = reel.instagram_url.match(/\/reel\/([^/?]+)/);
      const reelId = match ? match[1] : null;

      const thumbnail = reelId
        ? `https://instagram.ftag1-1.fna.fbcdn.net/v/t51.29350-15/${reelId}.jpg?efg=...`
        : null;

      const card = document.createElement("a");
      card.className = "reel-card";
      card.href = reel.instagram_url;
      card.target = "_blank";

      card.innerHTML = `
        <div class="reel-thumb" style="background-image:url('${thumbnail||''}')">
          <div class="reel-overlay">▶</div>
        </div>
        <div class="reel-info sans">${reel.Title}</div>
      `;

      container.appendChild(card);
    });

  } catch (e) {
    console.error(e);
    document.querySelector(".reels-grid").innerHTML =
      "<p style='text-align:center;color:#888'>Unable to load reels</p>";
  }
}

loadReels();
<script src="reels.js"></script>
