(() => {
  const status = document.getElementById('webAppStatus');
  if (location.protocol !== 'https:' && location.hostname !== 'localhost') {
    status.textContent = 'Für Installation und Offlinebetrieb bitte über die HTTPS-Adresse von GitHub Pages öffnen.';
    return;
  }
  if (!('serviceWorker' in navigator)) {
    status.textContent = 'Online nutzbar; dieser Browser unterstützt den Offlinebetrieb nicht.';
    return;
  }
  navigator.serviceWorker.register('./sw.js', {scope: './'}).then(registration => {
    const message = () => { if (registration.waiting) status.textContent = 'Update verfügbar. Eingaben sichern und alle App-Fenster schließen; beim nächsten Öffnen wird die neue Version geladen.'; };
    message();
    registration.addEventListener('updatefound', () => {
      const worker = registration.installing;
      worker?.addEventListener('statechange', () => { if (worker.state === 'installed') message(); });
    });
    navigator.serviceWorker.ready.then(() => {
      if (!registration.waiting) status.textContent = 'App für Offlinebetrieb vorbereitet. Nachrichtenlinks benötigen Internet. Daten regelmäßig als JSON sichern.';
    });
  }).catch(() => { status.textContent = 'Offlinebetrieb konnte nicht eingerichtet werden. Online bleibt die App nutzbar.'; });
})();
