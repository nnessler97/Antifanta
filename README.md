Antifanta – Öffentliche Marken-Webseite
  
<h2 align="center">🍋 Die Limo, die antifaschistische Projekte finanziert ✊</h2>

Willkommen bei Antifanta, einer innovativen Marke, die auf der Grundlage von Fairness und Offenheit funktioniert. Antifanta ermöglicht es dir, die Marke kostenlos zu nutzen, aber mit einer fairen 1%-Lizenzregelung.

<p align="center">
  <img src="https://deinbannerlink/banner.png" width="100%" />
</p>

<h1 align="center">✊🍋 ANTIFA-LIMO – Limo mit Haltung</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Open%20Source-Yes-brightgreen">
  <img src="https://img.shields.io/badge/Unterstützt-Antifaschismus-red">
  <img src="https://img.shields.io/badge/Lizenz-PublicBrand-blue">
</p>

---

<h2 align="center">🍋 Die erste Open-Brand-Limo, die antifaschistische Projekte finanziert</h2>

---

## 🚀 Vision
Mit jedem Schluck wird antifaschistische Arbeit unterstützt.  
Die Marke ist offen – jeder darf sie nutzen, verändern und weiterentwickeln.  

---

## 📦 Projektstruktur


Dieses Projekt nutzt Next.js und Supabase, um eine moderne Webanwendung zu erstellen, die es Nutzern ermöglicht, sich für Updates und Infos zur Marke anzumelden.

  <p align="center">• • •</p>

  <p align="center">
  <img src="https://img.shields.io/badge/Open%20Source-Yes-brightgreen">
  <img src="https://img.shields.io/badge/Lizenz-PublicBrand-blue">
  <img src="https://img.shields.io/badge/Unterstützt-Antifaschismus-red">
</p>
  
<p align="center">• • •</p>

| Bereich | Beschreibung |
|--------|--------------|
| 🍋 Produkt | Antifaschistische Limonade |
| ❤️ Unterstützung | 1% geht an antifaschistische Projekte |
| 🌍 Ziel | Community-basierte Open-Brand |

🌟 Features

Supabase-Integration für die Speicherung von E-Mail-Adressen
Einfaches Anmeldeformular, um Updates zu erhalten
Responsive Design, das auf allen Geräten gut aussieht
E-Mail-Validierung durch Eingabefeld
🔧 Installation & Setup

Falls du das Projekt lokal starten möchtest, folge diesen Schritten:

Repository klonen
git clone https://github.com/dein-github-username/dein-repository.git
cd dein-repository
Abhängigkeiten installieren
npm install
Supabase-Keys in .env.local hinzufügen
Erstelle eine Datei .env.local und füge folgendes ein:
NEXT_PUBLIC_SUPABASE_URL=deine-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=dein-supabase-anon-key
Entwicklung starten
npm run dev
Dann kannst du die Webseite unter http://localhost:3000 aufrufen.

🚀 Deployment

Das Projekt kann über Vercel oder einen anderen Hosting-Dienst deiner Wahl gehostet werden. Stelle sicher, dass du die Umgebungsvariablen korrekt konfigurierst.

💻 Code-Details

In diesem Projekt haben wir ein Anmeldeformular entwickelt, das eine E-Mail-Adresse von den Nutzern entgegennimmt und in einer Supabase-Datenbank speichert. Bei erfolgreicher Anmeldung wird eine Bestätigungsnachricht angezeigt.

Beispiel-Code:

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://your-supabase-url.supabase.co", "your-anon-key");

export default function PublicBrandWebsite() {
  const [email, setEmail] = useState("");

  const handleSignUp = async () => {
    const { error } = await supabase.from("subscribers").insert([{ email }]);
    if (error) {
      alert("Fehler beim Speichern. Bitte versuche es erneut.");
    } else {
      alert(`Danke für dein Interesse! Wir melden uns bei ${email}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <Card className="w-full max-w-3xl text-center p-6 bg-white shadow-lg rounded-2xl">
        <h1 className="text-3xl font-bold text-gray-800">Willkommen bei OpenBrand</h1>
        <p className="text-gray-600 mt-4">
          Die erste offene Marke – frei nutzbar, aber mit fairer 1%-Lizenzregelung.
        </p>
        
        <CardContent className="mt-6">
          <h2 className="text-xl font-semibold">Erhalte Updates & Infos</h2>
          <div className="flex flex-col sm:flex-row gap-2 mt-4">
            <Input 
              type="email" 
              placeholder="Deine E-Mail" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button onClick={handleSignUp} className="bg-blue-600 hover:bg-blue-700 text-white">
              Anmelden
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
## 🤝 Mitwirken

Falls du Ideen hast oder mithelfen möchtest, erstelle gerne ein Issue oder sende einen Pull Request.

📌 Live-Demo: Hier klicken
📌 Ersteller: Dein Name

## 📢 Unterstütze uns!

Folge uns auf Social Media und teile das Projekt:

🌍 Website: [Link zur Website]
📸 Instagram: [@deineLimo]
🐦 Twitter: [@deineLimo]

## ✊ Kein Fußbreit dem Faschismus!
