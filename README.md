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
