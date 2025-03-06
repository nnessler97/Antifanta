Hier ist ein normaler Text für deine GitHub-README.md, der dein Projekt beschreibt:

---

# OpenBrand – Öffentliche Marken-Webseite

Willkommen bei **OpenBrand**, einer innovativen Marke, die auf der Grundlage von **Fairness** und **Offenheit** funktioniert. OpenBrand ermöglicht es dir, die Marke kostenlos zu nutzen, aber mit einer fairen **1%-Lizenzregelung**.

Dieses Projekt nutzt **Next.js** und **Supabase**, um eine moderne Webanwendung zu erstellen, die es Nutzern ermöglicht, sich für Updates und Infos zur Marke anzumelden.

## 🌟 Features
- **Supabase-Integration** für die Speicherung von E-Mail-Adressen
- Einfaches **Anmeldeformular**, um Updates zu erhalten
- **Responsive Design**, das auf allen Geräten gut aussieht
- **E-Mail-Validierung** durch Eingabefeld

## 🔧 Installation & Setup

Falls du das Projekt lokal starten möchtest, folge diesen Schritten:

1. **Repository klonen**  
```bash
git clone https://github.com/dein-github-username/dein-repository.git
cd dein-repository
```

2. **Abhängigkeiten installieren**  
```bash
npm install
```

3. **Supabase-Keys in `.env.local` hinzufügen**  
Erstelle eine Datei `.env.local` und füge folgendes ein:  
```ini
NEXT_PUBLIC_SUPABASE_URL=deine-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=dein-supabase-anon-key
```

4. **Entwicklung starten**  
```bash
npm run dev
```
Dann kannst du die Webseite unter `http://localhost:3000` aufrufen.

## 🚀 Deployment

Das Projekt kann über **Vercel** oder einen anderen Hosting-Dienst deiner Wahl gehostet werden. Stelle sicher, dass du die Umgebungsvariablen korrekt konfigurierst.

## 💻 Code-Details

In diesem Projekt haben wir ein **Anmeldeformular** entwickelt, das eine **E-Mail-Adresse** von den Nutzern entgegennimmt und in einer Supabase-Datenbank speichert. Bei erfolgreicher Anmeldung wird eine Bestätigungsnachricht angezeigt.

### Beispiel-Code:

```javascript
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
```

## 🤝 Mitwirken

Falls du Ideen hast oder mithelfen möchtest, erstelle gerne ein **Issue** oder sende einen **Pull Request**.

---

📌 **Live-Demo**: [Hier klicken](https://deinprojekt.vercel.app)  
📌 **Ersteller**: [Dein Name](https://github.com/dein-github-username)

---

Das war's! Dein GitHub-Repository ist jetzt professionell dokumentiert. Wenn du Änderungen oder Ergänzungen benötigst, lass es mich wissen! 😊
