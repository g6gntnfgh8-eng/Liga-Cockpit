# Liga-Cockpit für GitHub Pages

Private KICKBASE-Planung als installierbare Web-App. Ohne Server, Konto oder Build-Schritt. Keine offizielle KICKBASE-App und keine Verbindung zur KICKBASE-API.

## Veröffentlichen

1. Ein neues GitHub-Repository anlegen, zum Beispiel `liga-cockpit`.
2. Den **Inhalt dieses Github-Ordners** hochladen, nicht den übergeordneten Kickbase-Ordner. `index.html` muss direkt im Hauptverzeichnis des Repositorys liegen. Den Unterordner `icons` ebenfalls vollständig hochladen.
3. Im Repository **Settings → Pages → Build and deployment → Source: Deploy from a branch** wählen.
4. Branch **main**, Ordner **/(root)** auswählen und speichern.
5. Warten, bis GitHub die veröffentlichte Adresse anzeigt. Sie lautet normalerweise `https://DEIN-NAME.github.io/REPOSITORY-NAME/`.

Mit GitHub Free ist hierfür üblicherweise ein öffentliches Repository nötig. Verfügbare Optionen hängen vom Tarif ab. Die veröffentlichte Pages-Seite ist in der üblichen Konfiguration öffentlich, auch ein privates Repository bedeutet nicht automatisch eine private Website.

Offizielle Anleitung: https://docs.github.com/de/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Auf dem iPhone installieren

Die veröffentlichte HTTPS-Adresse in Safari öffnen. Über das Teilen-Menü **Zum Home-Bildschirm** wählen und, falls angeboten, **Als Web-App öffnen** aktivieren. Anschließend über das neue Symbol starten.

Apple-Anleitung: https://support.apple.com/guide/iphone/open-as-web-app-iphea86e5236/ios

Android: In Chrome die Website öffnen und im Menü die angebotene Installation bzw. „Zum Startbildschirm hinzufügen“ wählen.

## Vorhandene Daten übernehmen

1. In deiner bisherigen lokalen App **Daten & Screenshots → JSON sichern** wählen.
2. Die Sicherung privat in iCloud Drive ablegen, **nicht in diesem Github-Ordner und nicht im Repository**.
3. Auf dem Handy zuerst die installierte App öffnen. Dann **Daten & Screenshots → JSON wiederherstellen** und die Sicherung aus iCloud auswählen.

Diese Veröffentlichung startet absichtlich ohne die persönlichen Kader, Manager-Cashlisten und Artikelzuordnungen. Eine importierte Sicherung bringt Spieler, Marktwerthistorie, Kaufpreise, Cashliste, Aufstellung und gespeicherte Nachrichtensignale mit. Screenshots sind nicht Teil der JSON-Sicherung und müssen bei Bedarf erneut ausgewählt werden. Ältere Sicherungen ohne Nachrichtensignale enthalten diese noch nicht.

## Speicherung und Datenschutz

- GitHub hostet die App-Dateien, nicht deine eingegebenen Spielerdaten. Die App sendet Eingaben nicht an einen Server.
- Browser und installierte App können getrennte Speicher besitzen. Daten im Mac-Browser, auf dem iPhone und unter verschiedenen URLs werden **nicht automatisch synchronisiert**.
- Für den Wechsel zwischen Geräten immer den neuesten JSON-Export verwenden. Eine Wiederherstellung ersetzt den aktuellen Stand; kein automatisches Zusammenführen.
- Browserdaten löschen oder Speicherbereinigung kann Daten entfernen. Regelmäßig JSON sichern. iCloud-Speicherung der HTML-Datei ist keine Sicherung des Browser-Speichers.
- Die App enthält keinen Login. Wer Zugriff auf dein entsperrtes Gerät und dessen Browserdaten hat, kann die lokalen Daten sehen.
- Links zu Artikeln oder Suchmaschinen öffnen externe Dienste; dort gelten deren Datenschutzregeln. Nachrichten werden nicht automatisch abgerufen.
- Keine Sicherungen, Screenshots, Tokens oder persönlichen Dateien ins öffentliche Repository hochladen. Die `.gitignore` ist lediglich eine Hilfe, kein Schutz beim manuellen Web-Upload.

## Offline und Updates

Nach dem ersten erfolgreichen Online-Aufruf kann die App offline geöffnet werden. Artikel und Suchlinks brauchen Internet. Installation und Offlinebetrieb funktionieren über HTTPS, nicht zuverlässig direkt aus der iCloud-Dateivorschau.

Bei Änderungen die betroffenen App-Dateien erneut hochladen und die `VERSION` in `sw.js` erhöhen. Die neue Version wird nach dem Schließen aller geöffneten App-Fenster aktiv. Eingaben vorher sichern; während eines Updates wird kein automatisches Neuladen erzwungen.

## Bedienung auf dem Handy

Die Startelf lässt sich neben Drag-and-drop auch über Auswahlfelder bestücken, falls Ziehen auf dem Touchscreen nicht funktioniert. Breite Tabellen sind horizontal scrollbar.

Die Prognosen sind experimentelle Szenarien, keine zugesicherten Marktwertentwicklungen. Gerüchte, fehlende Tageswerte und sportliche Veränderungen können die Einordnung unbrauchbar machen.

## Dateien

- `index.html`: vollständige App mit allen bisherigen Funktionen, ohne private Ausgangsdaten
- `manifest.webmanifest`: Name, Darstellung und Installationssymbole
- `pwa.js` und `sw.js`: Offlinebetrieb und Updatehinweise
- `icons/`: selbst erstellte App-Symbole, keine offiziellen Markenlogos
- `.nojekyll`: statische Veröffentlichung ohne Jekyll

Die lokale Original-App bleibt unverändert. Diese GitHub-Fassung wurde wie gewünscht nicht im Browser getestet. Vor der Nutzung mit wichtigen Daten eine private Sicherung aufbewahren.
