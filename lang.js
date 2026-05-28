/*!
 * p-insel – Language Switcher
 * DE / EN  |  localStorage key: pi-lang
 */
(function () {
  'use strict';

  const LANG_KEY = 'pi-lang';

  /* ──────────────────────────────────────────
     TRANSLATIONS
     Add new keys to both 'de' and 'en' blocks.
     HTML is allowed in values.
  ────────────────────────────────────────── */
  const T = {
    de: {
      /* Nav & drawer */
      'nav.home':        'Home',
      'nav.portfolio':   'Portfolio',
      'nav.about':       'Über mich',
      'nav.faq':         'FAQ',
      'nav.contact':     'Kontakt',
      'nav.cta':         'Termin anfragen',
      'drawer.cta':      'Termin anfragen',

      /* Hero */
      'hero.line1':      'DEIN',
      'hero.line2':      'TATTOO.',
      'hero.line3':      'FÜR IMMER.',
      'hero.sub':        'Surrealismus / Cover Up / Black &amp; Grey',
      'hero.location':   'Tattoo Atelier · Bad Lippspringe',
      'hero.cta1':       'Termin anfragen',
      'hero.cta2':       'Portfolio ansehen',
      'hero.quote':      'EIN TATTOO IST <span style="color:var(--accent);">DAS EINZIGE</span> WAS DU<br>DIR <span style="color:var(--accent);">IN DEINEM LEBEN</span> GÖNNST OHNE ES<br>JE WIEDER ZU VERLIEREN…',

      /* Stats bar (hero meta strip) */
      'stats.experience': 'Erfahrung',
      'stats.tv':          'Im Fernsehen',
      'stats.unique':      'Unikate',
      'stats.since':       'Selbstständig',

      /* About section (index) */
      'about.eyebrow':  'Die Künstlerin',
      'about.h2':       'Pia Insel –<br><span>Tätowiererin</span><br>&amp; Malerin',
      'about.quote':    '„Pia Insel ist eine außergewöhnlich talentierte Tätowiererin (…), die für ihre Fähigkeiten in den Stilen Aquarell, Illustration und Realismus bekannt ist. Ihre Arbeit ist ein Beweis für ihre Hingabe und Fähigkeit, die Vision jedes Kunden auf seiner Haut zum Leben zu erwecken."',
      'about.cite':     '— Tattoo Wizard',
      'about.cta':      'Mehr über Pia',
      'tag.realismus':  'Realismus',
      'tag.tierportraits': 'Tierportraits',
      'tag.surrealismus': 'Surrealismus',
      'tag.dino':       'Dinosaurier',
      'tag.farbsw':     'Farbe &amp; SW',

      /* Stats section (index) */
      'stats.label1':   'Jahre Erfahrung',
      'stats.label2':   'Tattoos gestochen',
      'stats.label3':   'Messen &amp; Events',
      'stats.label4':   'Google Bewertung',

      /* Portfolio teaser (index) */
      'portfolio.eyebrow': 'Portfolio',
      'portfolio.title':   'Ausgewählte <span>Arbeiten</span>',
      'portfolio.all':     'Alle Arbeiten',
      'tag.bunt':    'Bunt',
      'tag.sw':      'Schwarz-Weiß',
      'tag.coverup': 'Cover-Up',
      'tag.malerei': 'Malerei',

      /* SWR section */
      'swr.eyebrow':    'Bekannt aus dem TV',
      'swr.title':      'Pia Insel im <span>Fernsehen</span>',
      'swr.desc':       'Pia Insel gleich zwei mal zu Gast beim SWR – Bei Kaffee oder Tee sprach sie über das Thema Organspende und bei Pierre M. Krause sorgte sie für gute Unterhaltung.',
      'swr.card1.title':'Pia Insel beim SWR',
      'swr.card1.desc': 'Der SWR stellt gern Persönlichkeiten vor die besonderes machen. Was Tattoos mit Organspende zu tun haben.',
      'swr.card2.title':'Pia Insel beim SWR',
      'swr.card2.desc': 'Für gute Unterhaltung sorgte Pia als Überraschungsgast zum Thema Freundschaft.',
      'swr.yt.label':   'Auf YouTube ansehen',

      /* Testimonials */
      'reviews.eyebrow': 'Kundenstimmen',
      'reviews.title':   'Was Kunden <span>sagen</span>',
      'review1.text':  'Pia ist eine absolut tolle Künstlerin. Mega sympathisch, ich hatte sofort vollstes Vertrauen zu ihr. Das Atelier ist klein und fein, sauber und gemütlich. Und ihre Arbeit ist mega schön geworden.',
      'review1.name':  'Claudia S.',
      'review1.meta':  'Google Bewertung · ★★★★★',
      'review2.text':  'Tattoostudio mit einzigartiger, zauberhafter Atmosphäre. Pia ist super nett, herzlich, offen und unterhaltsam, ihre Insel ist ein warmer Wohlfühlort. Ich freue mich schon auf das nächste Mal!',
      'review2.name':  'Katrin Tonollo',
      'review2.meta':  'Google Bewertung · ★★★★★',
      'review3.text':  'Pia hat sich da nicht einfach nur ein Studio, sondern einen Wohlfühl-Ort aufgebaut. Super schönes Ding. Pia wie immer sehr sympathisch und gut gelaunt!',
      'review3.name':  'Jacqueline Bischel',
      'review3.meta':  'Google Bewertung · ★★★★★',

      /* Maps */
      'maps.eyebrow':    'Anfahrt',
      'maps.title':      'FINDE DAS TATTOO ATELIER <span>FÜR DEINE AUSZEIT</span>',
      'maps.desc':       'Das Atelier liegt mitten in Bad Lippspringe – direkt an der Detmolder Straße, gut erreichbar mit Auto und Bus.',
      'maps.address':    'Adresse',
      'maps.hours':      'Öffnungszeiten',
      'maps.hours.val':  'Nach Vereinbarung',
      'maps.gmaps':      'In Google Maps öffnen',

      /* Process */
      'process.eyebrow':  'So funktioniert\'s',
      'process.title':    'Dein Weg zum <span>Tattoo</span>',
      'process.s1.title': 'Termin-Release abwarten',
      'process.s1.desc':  'Ich vergebe Termine nur einmal pro Quartal – die Plätze sind also heißer begehrt als der letzte Parkplatz vorm Supermarkt. Damit du den nächsten Drop nicht verpasst, findest du alle Infos im Menü unter <a href="kontakt.html" style="color:var(--accent);text-decoration:none;">Kontakt</a>.',
      'process.s2.title': 'Inspiration sammeln',
      'process.s2.desc':  'Such dir vorab Referenzbilder raus, die deinen Wunschstil zeigen. Zum Beispiel Fotos vom Haustier, Blumen oder Actionfigur. Ich kopiere nichts aus dem Internet – aber Ideen sammeln darf man dort schon ;)',
      'process.s3.title': 'Anfrage schicken',
      'process.s3.desc':  'Sobald die Termine online gehen, schickst du mir deine Anfrage über das <a href="kontakt.html" style="color:var(--accent);text-decoration:none;">Kontaktformular</a>.',
      'process.s4.title': 'Termin sichern',
      'process.s4.desc':  'Wenn alles passt, bekommst du deinen Termin bestätigt. Dann heißt es nur noch: Vorfreude genießen und den Countdown starten.',

      /* Footer */
      'footer.nav.title':    'Navigation',
      'footer.styles.title': 'Stile',
      'footer.contact.title':'Kontakt',
      'footer.nav.home':     'Startseite',
      'footer.nav.portfolio':'Portfolio',
      'footer.nav.about':    'Über mich',
      'footer.nav.styles':   'Stile &amp; Techniken',
      'footer.nav.contact':  'Kontakt',
      'footer.s.colorful':   'Bunt',
      'footer.s.bw':         'Schwarz-Weiß',
      'footer.s.surreal':    'Surrealismus &amp; Farbe',
      'footer.s.coverup':    'Cover-Ups',
      'footer.hours.label':  'Termine',
      'footer.hours.val':    'Nach Vereinbarung',

      /* Cookie */
      'cookie.text':    'Diese Website verwendet keine Tracking-Cookies. Nur technisch notwendige Daten werden verarbeitet.',
      'cookie.accept':  'Verstanden',
      'cookie.decline': 'Schließen',

      /* ── KUENSTLERIN PAGE ── */
      'k.hero.eyebrow':  'Die Künstlerin',
      'k.hero.h1':       'Wer ist <span>Pia Insel?</span>',
      'k.about.eyebrow': 'Über mich',
      'k.about.h2':      'PIA <span>INSEL</span>',
      'k.about.sub':     'Tätowiererin · Bühnenmalerin · Träumerin mit Nadel.',
      'k.about.p1':      'Ich mag <strong style="color:var(--text);">echte Menschen</strong>, gute Gespräche und <strong style="color:var(--text);">ehrliche Energie</strong>. Privat reise ich gern und verschieden, denn ich mag alle Jahreszeiten und nahezu jede Landschaft. Ich verbringe meine Freizeit genauso gern auf Konzerten wie zuhause mit Katastrophen Dokus oder komplett unnötigem aber spannenden Erdkunde Wissen.',
      'k.about.p2':      'Durch meine Arbeit durfte ich bereits die Crew von Künstlern wie <strong style="color:var(--text);">Rammstein, Peter Maffay oder Jan Delay</strong> tätowieren — und genau diese Mischung aus Kreativität, Menschen und besonderer Atmosphäre erfüllt mich. Privat und Arbeit verbunden... Selbst- und ständig. So heißt es doch!',
      'k.about.p3':      'Mein Kater <strong style="color:var(--text);">Balu</strong> lebt in der festen Überzeugung, ein Hund zu sein, was mich im Alltag regelmäßig an die frische Luft zwingt. Er ist <strong style="color:var(--text);">mein Star</strong> und ich bin unendlich dankbar für ihn!',
      'k.about.p4':      'Und falls irgendwo <strong style="color:var(--text);">Glitzer</strong>, laute Musik oder ein quietsch buntes Outfit auftaucht — die Wahrscheinlichkeit ist hoch, dass ich nicht weit weg bin.',
      'k.about.cta':     'Jetzt Termin anfragen',
      'k.tag.realismus':    'Realismus',
      'k.tag.tierportraits':'Tierportraits',
      'k.tag.surrealismus': 'Surrealismus',
      'k.tag.dino':         'Dinosaurier',
      'k.tag.farbsw':       'Farbe &amp; SW',
      'k.tag.catmom':       'Cat Mom',
      'k.tag.ontour':       'On Tour',
      'k.tag.pinsel':       'Pinsel',

      /* Milestones */
      'k.milestones.eyebrow': 'Werdegang',
      'k.milestones.title':   'Meilensteine',
      'k.m1.year':  '2015',
      'k.m1.title': 'Selbstständigkeit',
      'k.m1.desc':  'Schritt in die Selbstständigkeit als Tätowiererin. Nach 12 Jahren Bühnenmalerei begann ein neues Kapitel.',
      'k.m2.year':  '2016 – heute',
      'k.m2.title': 'Tattoo-Messen europaweit',
      'k.m2.desc':  'Regelmäßige Teilnahme an internationalen Tattoo-Conventions und Messen quer durch Europa.',
      'k.m3.year':  '2021',
      'k.m3.title': 'Eigenes Atelier',
      'k.m3.desc':  'Nach einigen Jahren im Austausch mit Kollegen in verschiedenen Tattoostudios eröffnete ich 2021 mein eigenes kleines Privat-Atelier — wegen dem Wortspiel liebevoll die Insel genannt.',
      'k.m4.year':  'Heute',
      'k.m4.title': 'Zurück in der Heimat',
      'k.m4.desc':  'Glücklich wieder in der alten Heimat angekommen zu sein und gespannt auf die tollen Projekte, die auf mich warten.',

      /* USP cards */
      'k.usp.eyebrow':  'Warum p-insel',
      'k.usp.title':    'Was mich <span>auszeichnet</span>',
      'k.usp1.title':   'Künstlerischer Hintergrund',
      'k.usp1.desc':    '12 Jahre Bühnenmalerei prägen jedes meiner Tattoos. Komposition, Tiefe und Perspektive sind mein Fundament.',
      'k.usp2.title':   'Beratung mit Empathie',
      'k.usp2.desc':    'Auch wenn wir uns erst an deinem großen Tag treffen, heißt das nicht, dass du vorab nur eine Nummer bist. Genau das macht deinen Termin und dein Tattoo am Ende so besonders.',
      'k.usp3.title':   'Hygiene &amp; Sicherheit',
      'k.usp3.desc':    'Sterile Einwegmaterialien, zertifizierte Farben und ein sauberes Studio. Deine Gesundheit hat höchste Priorität.',
      'k.usp4.title':   'Messen &amp; Wettbewerbe',
      'k.usp4.desc':    'Regelmäßig auf internationalen Tattoo-Conventions. Dort wo die besten Artists der Szene zusammenkommen.',

      /* Motto / quote */
      'k.motto':      '„Heute ist Dein Tag. Mach mal Urlaub!<br>Dein Souvenir wirst du ewig tragen."',
      'k.motto.attr': '— Pia Insel',

      /* CTA band */
      'k.cta.eyebrow':   'BEREIT FÜR DEIN SOUVENIR?',
      'k.cta.title':     'DEIN NÄCHSTES<br><span>TATTOO WARTET</span>',
      'k.cta.btn':       'TERMIN ANFRAGEN',

      /* ── FAQ PAGE ── */
      'faq.hero.eyebrow': 'Häufige Fragen',
      'faq.hero.h1':      'Alles was du<br><em>wissen musst</em>',
      'faq.hero.sub':     'Fragen zur Vorbereitung und dem Ablauf? Hier findest du Antworten.',

      /* FAQ questions */
      'faq.q1': 'Was kostet ein Tattoo von Pia Insel?',
      'faq.q2': 'Lehnst du auch etwas ab?',
      'faq.q3': 'Wie finde ich heraus, ob du meinen Cover-up Wunsch erfüllst?',
      'faq.q4': 'Wie lange dauert ein Tattoo-Termin?',
      'faq.q5': 'Wie zahle ich?',
      'faq.q6': 'Wie bereite ich mich auf den Termin vor?',
      'faq.q7': 'Wie pflege ich mein neues Tattoo?',

      /* FAQ answers */
      'faq.a1.p1': '<span style="color:#ffffff;font-weight:700;">Jedes Tattoo ist unterschiedlich</span> und hängt von einigen Faktoren ab: welche Körperstelle tätowiert wird, wie groß es ist und ob es sehr bunt oder nicht bunt werden soll.',
      'faq.a1.p2': 'Vor allem der Unterschied zwischen einem neuen Tattoowunsch und einem Cover-up (ein altes Tattoo überstechen) ist nicht zu unterschätzen. Ein Cover-up hat dementsprechend einen Mehraufwand.',
      'faq.price.bunt':   'Bunte Tattoos &amp; Surrealismus',
      'faq.price.coverup':'Cover-up Arbeiten',
      'faq.price.sw':     'Schwarzweiß­arbeiten',
      'faq.a2.p1': 'Ich nehme nur Projekte an, die meinem Stil entsprechen. Also kommst du mit einer Pinterest-Vorlage und sagst: „ich will genau das" — wird das nicht passieren. <strong>Inspiration dürfen wir uns holen, aber wir betreiben keinen Kunstraub!</strong>',
      'faq.a2.p2': 'Ich behalte mir vor, einzelne Schriften, Symbole und alle Motive, die mir keinen <span style="color:#ffffff;font-weight:700;">kreativen Freiraum</span> geben, abzulehnen. Auch Stellen wie Finger, hinter dem Ohr oder alles unterhalb des Fußknöchels tätowiere ich nicht.',
      'faq.a3.p1': 'Für solche besonderen Fälle biete ich außerhalb der Terminvergabe <strong>Online-Beratungen</strong> an. Nur die Beratung — der Termin folgt erst zur Quartalsvergabe.',
      'faq.a3.p2': 'Schreib mir dazu bitte eine E-Mail mit:',
      'faq.a3.li1': 'einem Foto deines vorhandenen Tattoos',
      'faq.a3.li2': 'Bilder deiner Idee',
      'faq.a3.li3': 'einer kurzen Info, wie du es dir vorstellst',
      'faq.a3.mail': 'Mail: <a href="mailto:terminwunsch123@p-insel.de">terminwunsch123@p-insel.de</a>',
      'faq.a4.p1': 'Für eine Tagessitzung planst du einen Aufenthalt von ca. <strong>6 Stunden</strong> — stressfreie Me-Time, ohne Unterbrechungen, damit ich mich voll und ganz auf deinen Tattootraum konzentrieren kann.',
      'faq.a4.p2': 'Ein Beispiel: Für einen kompletten Arm (Sleeve) brauche ich ca. <strong>4–6 Termine</strong>. Pro Tagestermin schaffe ich ca. eine <strong>DIN-A4-große Fläche</strong> als Orientierung.',
      'faq.a5.p1': 'Es kann <strong>bar</strong> oder per <strong>Sofortüberweisung (Online-Banking)</strong> gezahlt werden. Ratenzahlung wird nicht akzeptiert.',
      'faq.a5.p2': 'Bezahlt wird am Ende jeden Termins. Brichst du deine Sitzung ungeplant ab, hast du keinen Anspruch auf einen reduzierten Preis.',
      'faq.a6.li1':  '<span style="color:#ffffff;font-weight:700;">Freu dich drauf!</span>',
      'faq.a6.li2':  'Komme ausgeruht und stressfrei zu deinem Termin',
      'faq.a6.li3':  'Gönn dir vorher etwas Leckeres und Gesundes — nichts Schweres',
      'faq.a6.li4':  'Bring bei längeren Sitzungen gerne einen Snack mit',
      'faq.a6.li5':  'Trage dunkle, bequeme Kleidung — z.B. einen Hoody, den man von vorne anziehen kann, bei rückenfreien Motiven',
      'faq.a6.li6':  '<strong>Das Atelier ist eine schuhfreie Zone</strong> — dicke Socken oder Puschen mitbringen',
      'faq.a6.li7':  'Bring ein Handtuch mit',
      'faq.a6.li8':  'Bei Nervosität: Kopfhörer und Lieblingsmusik einpacken',
      'faq.a6.li9':  'Vertraue auf deine Künstlerin',
      'faq.a6.li10': '<strong>Quality-time-Modus an!</strong>',
      'faq.a7.p1': 'Hast du endlich dein lang ersehntes Tattoo, erkläre ich dir alles Wichtige zur Wundversorgung. Ab diesem Moment bist du alleine für die Versorgung und Abheilung verantwortlich.',
      'faq.a7.p2': 'Die vollständige Pflegeanleitung kannst du hier als PDF herunterladen:',
      'faq.pdf.title': 'Pflegeanleitung herunterladen',
      'faq.pdf.sub':   'PDF · Tattoo Nachsorge von Pia Insel',

      /* FAQ CTA */
      'faq.cta.eyebrow': 'Bereit?',
      'faq.cta.title':   'Dein nächstes Tattoo<br><span>wartet auf dich</span>',
      'faq.cta.desc':    'Schick mir deine Idee – und wir erschaffen gemeinsam etwas,<br>das du ein Leben lang tragen wirst.',
      'faq.cta.btn':     'Terminanfrage senden',

      /* ── KONTAKT PAGE ── */
      'kon.hero.eyebrow': 'Termin anfragen',
      'kon.hero.h1':      'Lass uns <span>loslegen</span>',
      'kon.hero.sub':     'Beschreib mir deine Idee – ich melde mich so schnell wie möglich zurück. Kostenlose Erstberatung inklusive.',
      'kon.info.eyebrow': 'So erreichst du mich',
      'kon.info.h2':      'Kontakt &amp;<br><span>Infos</span>',
      'kon.label.address':'Adresse',
      'kon.label.hours':  'Öffnungszeiten',
      'kon.hours.val':    'Nach Vereinbarung',
      'kon.pdf.title':    'Pflegeanleitung herunterladen',
      'kon.pdf.sub':      'PDF · Tattoo Nachsorge von Pia Insel',
      'kon.form.booking': 'Buchungsfenster',
      'kon.form.stil':    'Tattoo-Stil',
      'kon.form.groesse': 'Ungefähre Größe',
      'kon.form.koerper': 'Körperstelle',
      'kon.form.idee':    'Deine Idee *',
      'kon.form.refs':    'Referenzbilder (optional)',
      'kon.opt.please':   '– Bitte wählen –',
      'kon.stil.bunt':    'Bunt / Farbig',
      'kon.stil.sw':      'Schwarz-Weiß',
      'kon.stil.coverup': 'Cover-Up',
      'kon.size.a5':      'DIN A5 (ca. Handfläche)',
      'kon.size.a4':      'DIN A4 (ca. Unterarm)',
      'kon.size.arm':     'Ganzer Arm / Sleeve',
      'kon.size.bein':    'Ganzes Bein',
      'kon.size.ruecken': 'Ganzer Rücken',
      'kon.body.unterarm':'Unterarm',
      'kon.body.ruecken': 'Rücken',
      'kon.body.schulter':'Schulter',
      'kon.body.wade':    'Wade',
      'kon.upload.text':  'Bilder hier ablegen oder <span style="color:var(--accent)">klicken</span>',
      'kon.upload.hint':  'JPG, PNG, HEIC — max. 5 MB pro Datei',
      'kon.form.hint':    '<strong style="color:var(--text);">Kurzer Hinweis vor dem Absenden:</strong><br>Viele Fragen rund um Preise, Stile, Cover-Ups und Termine werden im <a href="faq.html" style="color:var(--accent);">FAQ</a> beantwortet. Schau dort gerne noch einmal rein – vielleicht ist deine Frage schon dabei!',
      'kon.dsgvo':        'Ich habe die <a href="datenschutz.html" style="color:var(--accent);">Datenschutzerklärung</a> gelesen und bin mit der Verarbeitung meiner Daten einverstanden. *',
      'kon.submit':       'Anfrage absenden',
      'kon.mandatory':    '* Pflichtfelder · Keine Weitergabe deiner Daten an Dritte',
      'kon.success.h3':   'Anfrage eingegangen!',
      'kon.success.p':    'Danke für deine Nachricht. Ich melde mich innerhalb von 1–2 Werktagen bei dir.',

      /* ── PORTFOLIO PAGE ── */
      'p.hero.eyebrow':  'Tattoo Portfolio',
      'p.hero.h1':       'Portfolio &amp; <span>Stile</span>',
      'p.gallery.eyebrow': 'Galerie',
      'p.gallery.h2':    'Ausgewählte<br><span>Arbeiten</span>',
      'p.filter.all':    'Alle',
      'p.filter.bunt':   'Bunt',
      'p.filter.sw':     'Schwarz-Weiß',
      'p.filter.coverup':'Cover-Up',
      'p.filter.malerei':'Malerei',

      /* ── ANFAHRT PAGE ── */
      'anfahrt.hero.h1':   'Anfahrt &amp; <span>Lage</span>',
      'anfahrt.hero.desc': 'Das Atelier liegt in Bad Lippspringe, direkt an der Detmolder Strasse 119 – gut erreichbar aus Paderborn und Umgebung.',
      'anfahrt.bc':        'Anfahrt',
      'anfahrt.eyebrow':   'Finde das Tattoo Atelier für deine Auszeit',
      'anfahrt.h2':        'Adresse &amp; <span>Kontakt</span>',
      'anfahrt.lbl.address':'Adresse',
      'anfahrt.lbl.email': 'E-Mail',
      'anfahrt.lbl.hours': 'Öffnungszeiten',
      'anfahrt.hours.val': 'Nach Vereinbarung',
      'anfahrt.car.title': 'Mit dem Auto',
      'anfahrt.car.text':  'Bad Lippspringe liegt direkt an der B1, ca. 8 km östlich von Paderborn. Die Detmolder Strasse 119 ist gut ausgeschildert. Parkplätze sind in der Nähe vorhanden.',
      'anfahrt.bus.title': 'Mit dem ÖPNV',
      'anfahrt.bus.text':  'Vom Paderborner Hauptbahnhof mit dem Bus Richtung Bad Lippspringe. Haltestelle in der Nähe des Studios.',
      'anfahrt.gmaps':     'In Google Maps öffnen',
    },

    en: {
      /* Nav & drawer */
      'nav.home':        'Home',
      'nav.portfolio':   'Portfolio',
      'nav.about':       'About',
      'nav.faq':         'FAQ',
      'nav.contact':     'Contact',
      'nav.cta':         'Book Appointment',
      'drawer.cta':      'Book Appointment',

      /* Hero */
      'hero.line1':      'YOUR',
      'hero.line2':      'TATTOO.',
      'hero.line3':      'FOREVER.',
      'hero.sub':        'Surrealism / Cover Up / Black &amp; Grey',
      'hero.location':   'Tattoo Studio · Bad Lippspringe',
      'hero.cta1':       'Book Appointment',
      'hero.cta2':       'View Portfolio',
      'hero.quote':      'A TATTOO IS <span style="color:var(--accent);">THE ONLY THING</span> YOU<br>GIVE YOURSELF <span style="color:var(--accent);">IN YOUR LIFE</span><br>WITHOUT EVER LOSING IT…',

      /* Stats bar */
      'stats.experience': 'Experience',
      'stats.tv':          'On TV',
      'stats.unique':      'Unique Pieces',
      'stats.since':       'Self-employed',

      /* About section (index) */
      'about.eyebrow':  'The Artist',
      'about.h2':       'Pia Insel –<br><span>Tattoo Artist</span><br>&amp; Painter',
      'about.quote':    '"Pia Insel is an exceptionally talented tattoo artist (…), known for her skills in watercolour, illustration and realism. Her work is a testament to her dedication and ability to bring each client\'s vision to life on their skin."',
      'about.cite':     '— Tattoo Wizard',
      'about.cta':      'More about Pia',
      'tag.realismus':  'Realism',
      'tag.tierportraits': 'Animal Portraits',
      'tag.surrealismus': 'Surrealism',
      'tag.dino':       'Dinosaurs',
      'tag.farbsw':     'Color &amp; B&amp;W',

      /* Stats section */
      'stats.label1':   'Years Experience',
      'stats.label2':   'Tattoos Done',
      'stats.label3':   'Conventions &amp; Events',
      'stats.label4':   'Google Rating',

      /* Portfolio teaser */
      'portfolio.eyebrow': 'Portfolio',
      'portfolio.title':   'Selected <span>Works</span>',
      'portfolio.all':     'All Works',
      'tag.bunt':    'Colorful',
      'tag.sw':      'Black &amp; White',
      'tag.coverup': 'Cover-Up',
      'tag.malerei': 'Paintings',

      /* SWR section */
      'swr.eyebrow':    'Known from TV',
      'swr.title':      'Pia Insel on <span>Television</span>',
      'swr.desc':       'Pia appeared twice on SWR – on "Kaffee oder Tee" she spoke about organ donation, and on Pierre M. Krause\'s show she was the surprise guest.',
      'swr.card1.title':'Pia Insel on SWR',
      'swr.card1.desc': 'SWR loves to feature personalities who do something special. What tattoos have to do with organ donation.',
      'swr.card2.title':'Pia Insel on SWR',
      'swr.card2.desc': 'Pia brought great entertainment as a surprise guest on the topic of friendship.',
      'swr.yt.label':   'Watch on YouTube',

      /* Testimonials */
      'reviews.eyebrow': 'Customer Reviews',
      'reviews.title':   'What Customers <span>Say</span>',
      'review1.text':  'Pia is an absolutely fantastic artist. Super friendly, I immediately had complete trust in her. The studio is small and lovely, clean and cosy. And her work turned out beautifully.',
      'review1.name':  'Claudia S.',
      'review1.meta':  'Google Review · ★★★★★',
      'review2.text':  'Tattoo studio with a unique, magical atmosphere. Pia is super nice, warm, open and entertaining — her island is a cosy feel-good place. I\'m already looking forward to the next time!',
      'review2.name':  'Katrin Tonollo',
      'review2.meta':  'Google Review · ★★★★★',
      'review3.text':  'Pia has built not just a studio but a real feel-good place. Absolutely lovely. Pia as always very likeable and cheerful!',
      'review3.name':  'Jacqueline Bischel',
      'review3.meta':  'Google Review · ★★★★★',

      /* Maps */
      'maps.eyebrow':    'Getting Here',
      'maps.title':      'FIND THE TATTOO STUDIO <span>FOR YOUR PERSONAL RETREAT</span>',
      'maps.desc':       'The studio is right in the centre of Bad Lippspringe – on Detmolder Straße, easy to reach by car or bus.',
      'maps.address':    'Address',
      'maps.hours':      'Opening Hours',
      'maps.hours.val':  'By Appointment',
      'maps.gmaps':      'Open in Google Maps',

      /* Process */
      'process.eyebrow':  'How it works',
      'process.title':    'Your Path to <span>a Tattoo</span>',
      'process.s1.title': 'Wait for Appointment Release',
      'process.s1.desc':  'I release appointments once per quarter – spots go fast. To catch the next drop, check the menu under <a href="kontakt.html" style="color:var(--accent);text-decoration:none;">Contact</a>.',
      'process.s2.title': 'Gather Inspiration',
      'process.s2.desc':  'Collect reference images that show your desired style – photos of your pet, flowers or a favourite character. I don\'t copy from the internet, but gathering ideas is perfectly fine ;)',
      'process.s3.title': 'Send Your Request',
      'process.s3.desc':  'Once appointments go live, send your request via the <a href="kontakt.html" style="color:var(--accent);text-decoration:none;">contact form</a>.',
      'process.s4.title': 'Secure Your Appointment',
      'process.s4.desc':  'If everything fits, your appointment will be confirmed. Then all that\'s left is to enjoy the anticipation and start the countdown.',

      /* Footer */
      'footer.nav.title':    'Navigation',
      'footer.styles.title': 'Styles',
      'footer.contact.title':'Contact',
      'footer.nav.home':     'Home',
      'footer.nav.portfolio':'Portfolio',
      'footer.nav.about':    'About',
      'footer.nav.styles':   'Styles &amp; Techniques',
      'footer.nav.contact':  'Contact',
      'footer.s.colorful':   'Colorful',
      'footer.s.bw':         'Black &amp; White',
      'footer.s.surreal':    'Surrealism &amp; Color',
      'footer.s.coverup':    'Cover-Ups',
      'footer.hours.label':  'Appointments',
      'footer.hours.val':    'By Appointment',

      /* Cookie */
      'cookie.text':    'This website uses no tracking cookies. Only technically necessary data is processed.',
      'cookie.accept':  'Got it',
      'cookie.decline': 'Close',

      /* ── KUENSTLERIN PAGE ── */
      'k.hero.eyebrow':  'The Artist',
      'k.hero.h1':       'Who is <span>Pia Insel?</span>',
      'k.about.eyebrow': 'About Me',
      'k.about.h2':      'PIA <span>INSEL</span>',
      'k.about.sub':     'Tattoo Artist · Stage Painter · Dreamer with a Needle.',
      'k.about.p1':      'I love <strong style="color:var(--text);">genuine people</strong>, good conversations and <strong style="color:var(--text);">honest energy</strong>. In my spare time I love to travel in all seasons and through all kinds of landscapes. I enjoy concerts just as much as staying home watching disaster documentaries or diving into completely unnecessary but fascinating geography facts.',
      'k.about.p2':      'Through my work I\'ve had the privilege of tattooing crew members for artists like <strong style="color:var(--text);">Rammstein, Peter Maffay and Jan Delay</strong> — and it\'s exactly this blend of creativity, people and special atmosphere that fulfils me. Work and life combined… as it should be!',
      'k.about.p3':      'My cat <strong style="color:var(--text);">Balu</strong> is firmly convinced he\'s a dog, which regularly gets me out of the house. He is <strong style="color:var(--text);">my star</strong> and I\'m endlessly grateful for him!',
      'k.about.p4':      'And if you spot some <strong style="color:var(--text);">glitter</strong>, loud music or a bright colourful outfit somewhere — chances are high that I\'m not far away.',
      'k.about.cta':     'Book Appointment Now',
      'k.tag.realismus':    'Realism',
      'k.tag.tierportraits':'Animal Portraits',
      'k.tag.surrealismus': 'Surrealism',
      'k.tag.dino':         'Dinosaurs',
      'k.tag.farbsw':       'Color &amp; B&amp;W',
      'k.tag.catmom':       'Cat Mom',
      'k.tag.ontour':       'On Tour',
      'k.tag.pinsel':       'Brush',

      /* Milestones */
      'k.milestones.eyebrow': 'Career',
      'k.milestones.title':   'Milestones',
      'k.m1.year':  '2015',
      'k.m1.title': 'Going Independent',
      'k.m1.desc':  'Stepping into self-employment as a tattoo artist. After 12 years of stage painting, a new chapter began.',
      'k.m2.year':  '2016 – Today',
      'k.m2.title': 'Tattoo Conventions Across Europe',
      'k.m2.desc':  'Regular participation in international tattoo conventions and fairs throughout Europe.',
      'k.m3.year':  '2021',
      'k.m3.title': 'Own Studio',
      'k.m3.desc':  'After years of working alongside colleagues in various tattoo studios, I opened my own small private studio in 2021 — lovingly called the Island, as a play on my name.',
      'k.m4.year':  'Today',
      'k.m4.title': 'Back Home',
      'k.m4.desc':  'Happy to be back in my old hometown and excited for all the great projects waiting for me.',

      /* USP cards */
      'k.usp.eyebrow':  'Why p-insel',
      'k.usp.title':    'What sets me <span>apart</span>',
      'k.usp1.title':   'Artistic Background',
      'k.usp1.desc':    '12 years of stage painting shape every one of my tattoos. Composition, depth and perspective are my foundation.',
      'k.usp2.title':   'Consultation with Empathy',
      'k.usp2.desc':    'Even if we only meet for the first time on your big day, that doesn\'t mean you\'re just a number beforehand. That\'s exactly what makes your appointment and your tattoo so special in the end.',
      'k.usp3.title':   'Hygiene &amp; Safety',
      'k.usp3.desc':    'Sterile single-use materials, certified pigments and a clean studio. Your health is the top priority.',
      'k.usp4.title':   'Conventions &amp; Competitions',
      'k.usp4.desc':    'Regularly attending international tattoo conventions. Where the best artists in the scene come together.',

      /* Motto */
      'k.motto':      '"Today is your day. Take a holiday!<br>Your souvenir you\'ll carry forever."',
      'k.motto.attr': '— Pia Insel',

      /* CTA band */
      'k.cta.eyebrow':   'READY FOR YOUR SOUVENIR?',
      'k.cta.title':     'YOUR NEXT<br><span>TATTOO AWAITS</span>',
      'k.cta.btn':       'BOOK APPOINTMENT',

      /* ── FAQ PAGE ── */
      'faq.hero.eyebrow': 'Frequently Asked Questions',
      'faq.hero.h1':      'Everything you<br><em>need to know</em>',
      'faq.hero.sub':     'Questions about preparation and the process? Find your answers here.',

      /* FAQ questions */
      'faq.q1': 'What does a tattoo by Pia Insel cost?',
      'faq.q2': 'Do you ever decline requests?',
      'faq.q3': 'How do I find out if you can do my cover-up?',
      'faq.q4': 'How long does a tattoo appointment take?',
      'faq.q5': 'How do I pay?',
      'faq.q6': 'How do I prepare for my appointment?',
      'faq.q7': 'How do I care for my new tattoo?',

      /* FAQ answers */
      'faq.a1.p1': '<span style="color:#ffffff;font-weight:700;">Every tattoo is different</span> and depends on several factors: which body part is being tattooed, how large it is, and whether it will be very colourful or not.',
      'faq.a1.p2': 'In particular, the difference between a new tattoo design and a cover-up (tattooing over an old tattoo) should not be underestimated. A cover-up requires significantly more effort.',
      'faq.price.bunt':   'Colorful Tattoos &amp; Surrealism',
      'faq.price.coverup':'Cover-up Work',
      'faq.price.sw':     'Black &amp; White Work',
      'faq.a2.p1': 'I only take on projects that match my style. So if you come in with a Pinterest template and say "I want exactly this" — that\'s not going to happen. <strong>Inspiration is fine, but we don\'t do art theft!</strong>',
      'faq.a2.p2': 'I reserve the right to decline individual lettering, symbols and all motifs that don\'t give me any <span style="color:#ffffff;font-weight:700;">creative freedom</span>. I also don\'t tattoo areas like fingers, behind the ear, or anything below the ankle.',
      'faq.a3.p1': 'For such special cases I offer <strong>online consultations</strong> outside of the regular appointment windows. Consultation only — the actual appointment follows at the next quarterly release.',
      'faq.a3.p2': 'Please send me an email with:',
      'faq.a3.li1': 'a photo of your existing tattoo',
      'faq.a3.li2': 'images of your idea',
      'faq.a3.li3': 'a short description of what you have in mind',
      'faq.a3.mail': 'Email: <a href="mailto:terminwunsch123@p-insel.de">terminwunsch123@p-insel.de</a>',
      'faq.a4.p1': 'For a full-day session, plan for approx. <strong>6 hours</strong> — stress-free me-time, without interruptions, so I can fully focus on your tattoo dream.',
      'faq.a4.p2': 'For example: a complete arm (sleeve) takes me approx. <strong>4–6 appointments</strong>. Per day session I cover approx. an <strong>A4-sized area</strong> as a rough guide.',
      'faq.a5.p1': 'Payment can be made <strong>in cash</strong> or by <strong>instant bank transfer (online banking)</strong>. Instalment payments are not accepted.',
      'faq.a5.p2': 'Payment is due at the end of each appointment. If you end your session unexpectedly early, you are not entitled to a reduced price.',
      'faq.a6.li1':  '<span style="color:#ffffff;font-weight:700;">Get excited!</span>',
      'faq.a6.li2':  'Come to your appointment rested and relaxed',
      'faq.a6.li3':  'Treat yourself to something tasty and healthy beforehand — nothing too heavy',
      'faq.a6.li4':  'Bring a snack for longer sessions',
      'faq.a6.li5':  'Wear dark, comfortable clothing — e.g. a hoodie you can put on from the front, for back pieces',
      'faq.a6.li6':  '<strong>The studio is a shoe-free zone</strong> — bring thick socks or slippers',
      'faq.a6.li7':  'Bring a towel',
      'faq.a6.li8':  'If you\'re nervous: pack headphones and your favourite music',
      'faq.a6.li9':  'Trust your artist',
      'faq.a6.li10': '<strong>Quality time mode: on!</strong>',
      'faq.a7.p1': 'Once you finally have your long-awaited tattoo, I\'ll explain everything important about wound care. From this moment on, you are solely responsible for care and healing.',
      'faq.a7.p2': 'You can download the complete aftercare guide as a PDF here:',
      'faq.pdf.title': 'Download Aftercare Guide',
      'faq.pdf.sub':   'PDF · Tattoo Aftercare by Pia Insel',

      /* FAQ CTA */
      'faq.cta.eyebrow': 'Ready?',
      'faq.cta.title':   'Your next tattoo<br><span>is waiting for you</span>',
      'faq.cta.desc':    'Send me your idea – and together we\'ll create something<br>you\'ll carry for a lifetime.',
      'faq.cta.btn':     'Send Appointment Request',

      /* ── KONTAKT PAGE ── */
      'kon.hero.eyebrow': 'Book Appointment',
      'kon.hero.h1':      'Let\'s get <span>started</span>',
      'kon.hero.sub':     'Describe your idea to me – I\'ll get back to you as soon as possible. Free initial consultation included.',
      'kon.info.eyebrow': 'How to Reach Me',
      'kon.info.h2':      'Contact &amp;<br><span>Info</span>',
      'kon.label.address':'Address',
      'kon.label.hours':  'Opening Hours',
      'kon.hours.val':    'By Appointment',
      'kon.pdf.title':    'Download Aftercare Guide',
      'kon.pdf.sub':      'PDF · Tattoo Aftercare by Pia Insel',
      'kon.form.booking': 'Booking Window',
      'kon.form.stil':    'Tattoo Style',
      'kon.form.groesse': 'Approximate Size',
      'kon.form.koerper': 'Body Placement',
      'kon.form.idee':    'Your Idea *',
      'kon.form.refs':    'Reference Images (optional)',
      'kon.opt.please':   '– Please select –',
      'kon.stil.bunt':    'Colorful',
      'kon.stil.sw':      'Black &amp; White',
      'kon.stil.coverup': 'Cover-Up',
      'kon.size.a5':      'A5 size (approx. palm)',
      'kon.size.a4':      'A4 size (approx. forearm)',
      'kon.size.arm':     'Full Arm / Sleeve',
      'kon.size.bein':    'Full Leg',
      'kon.size.ruecken': 'Full Back',
      'kon.body.unterarm':'Forearm',
      'kon.body.ruecken': 'Back',
      'kon.body.schulter':'Shoulder',
      'kon.body.wade':    'Calf',
      'kon.upload.text':  'Drop images here or <span style="color:var(--accent)">click</span>',
      'kon.upload.hint':  'JPG, PNG, HEIC — max. 5 MB per file',
      'kon.form.hint':    '<strong style="color:var(--text);">Quick note before sending:</strong><br>Many questions about prices, styles, cover-ups and appointments are answered in the <a href="faq.html" style="color:var(--accent);">FAQ</a>. Feel free to check there first – your question might already be covered!',
      'kon.dsgvo':        'I have read the <a href="datenschutz.html" style="color:var(--accent);">Privacy Policy</a> and agree to the processing of my data. *',
      'kon.submit':       'Send Request',
      'kon.mandatory':    '* Required fields · Your data will not be shared with third parties',
      'kon.success.h3':   'Request received!',
      'kon.success.p':    'Thanks for your message. I\'ll get back to you within 1–2 business days.',

      /* ── PORTFOLIO PAGE ── */
      'p.hero.eyebrow':  'Tattoo Portfolio',
      'p.hero.h1':       'Portfolio &amp; <span>Styles</span>',
      'p.gallery.eyebrow': 'Gallery',
      'p.gallery.h2':    'Selected<br><span>Works</span>',
      'p.filter.all':    'All',
      'p.filter.bunt':   'Colorful',
      'p.filter.sw':     'Black &amp; White',
      'p.filter.coverup':'Cover-Up',
      'p.filter.malerei':'Paintings',

      /* ── ANFAHRT PAGE ── */
      'anfahrt.hero.h1':   'Directions &amp; <span>Location</span>',
      'anfahrt.hero.desc': 'The studio is in Bad Lippspringe, directly on Detmolder Strasse 119 – easy to reach from Paderborn and the surrounding area.',
      'anfahrt.bc':        'Directions',
      'anfahrt.eyebrow':   'Find the Tattoo Studio for your Retreat',
      'anfahrt.h2':        'Address &amp; <span>Contact</span>',
      'anfahrt.lbl.address':'Address',
      'anfahrt.lbl.email': 'E-Mail',
      'anfahrt.lbl.hours': 'Opening Hours',
      'anfahrt.hours.val': 'By Appointment',
      'anfahrt.car.title': 'By Car',
      'anfahrt.car.text':  'Bad Lippspringe is right on the B1 federal road, approx. 8 km east of Paderborn. Detmolder Strasse 119 is well signposted. Parking is available nearby.',
      'anfahrt.bus.title': 'By Public Transport',
      'anfahrt.bus.text':  'From Paderborn main station take the bus towards Bad Lippspringe. There\'s a stop near the studio.',
      'anfahrt.gmaps':     'Open in Google Maps',
    }
  };

  /* ──────────────────────────────────────────
     CORE FUNCTIONS
  ────────────────────────────────────────── */
  function getLang() {
    return localStorage.getItem(LANG_KEY) || 'de';
  }

  function applyLang(lang) {
    const t = T[lang];
    if (!t) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (t[key] !== undefined) {
        el.innerHTML = t[key];
      }
    });

    /* Update <html lang="…"> */
    document.documentElement.lang = lang;

    /* Update switcher button states on all switchers in page */
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
      btn.setAttribute('aria-pressed', btn.dataset.lang === lang ? 'true' : 'false');
    });

    localStorage.setItem(LANG_KEY, lang);
  }

  function init() {
    /* Wire up all .lang-btn elements */
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => applyLang(btn.dataset.lang));
    });
    applyLang(getLang());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
