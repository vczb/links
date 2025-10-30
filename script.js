(async function () {
  const app = document.getElementById('app');
  const res = await fetch('config.json');
  const cfg = await res.json();

  document.getElementById('name').textContent = cfg.profile.name;
  document.getElementById('bio').textContent = cfg.profile.bio;
  const avatar = document.getElementById('avatar');
  if (cfg.profile.avatar) {
    avatar.src = cfg.profile.avatar;
    avatar.style.display = 'inline-block';
  }

  const linksEl = document.getElementById('links');
  cfg.links.forEach((l) => {
    const a = document.createElement('a');
    a.href = l.url;
    a.className = 'link-card';
    a.target = '_blank';
    if (l.image) {
      const img = document.createElement('img');
      img.src = l.image;
      img.className = 'link-image';
      a.appendChild(img);
    }
    const span = document.createElement('span');
    span.textContent = l.label;
    a.appendChild(span);
    linksEl.appendChild(a);
  });

  // document.getElementById('footer').textContent = cfg.footer;
  app.hidden = false;
})();
