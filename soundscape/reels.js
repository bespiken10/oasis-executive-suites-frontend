<script>
async function getIGThumb(url){
  try{
    const html = await fetch(url, { mode:"no-cors" }).then(r=>r.text());
    const match = html.match(/"display_url":"([^"]+)"/);
    return match ? match[1].replace(/\\u0026/g,'&') : null;
  }catch{
    return null;
  }
}

async function loadReels() {
  const apiUrl = "https://script.google.com/macros/s/AKfycbzWWyeOlGM8rHNGOdZJYx4h-p-oHnn_4B-tVTHonynZ3v15-NuCQdfjyW1WmT-FIQ4/exec";

  try {
    const res = await fetch(apiUrl);
    const reels = await res.json();

    const container = document.querySelector(".reels-grid");
    container.innerHTML = "";

    // Only load first reel in sheet
    const reel = reels[0];
    if(!reel?.instagram_url) return;

    // Title handling
    const title = reel.Title || reel.title || "Untitled";

    // Generate thumbnail automatically
    const thumb = await getIGThumb(reel.instagram_url);

    // Card layout
    container.innerHTML = `
      <a class="reel-card" href="${reel.instagram_url}" target="_blank" rel="noopener">
        <div class="reel-thumb"
          style="
            background-image:url('${thumb}');
            background-size:cover;
            background-position:center;
            height:240px;
            border-radius:12px 12px 0 0;
          ">
        </div>

        <div class="reel-placeholder" style="padding:1rem;text-align:center;">
          <strong>${title}</strong><br>
          <small style="opacity:.7;">Tap to watch</small>
        </div>
      </a>
    `;

  } catch (error) {
    console.error(error);
    container.innerHTML = "<p style='text-align:center;color:#666;'>Unable to load reel</p>";
  }
}

loadReels();
</script>
