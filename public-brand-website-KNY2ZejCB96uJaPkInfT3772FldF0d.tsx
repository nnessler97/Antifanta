'use client'

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createClient } from "@supabase/supabase-js";
import { Check, ArrowRight } from 'lucide-react';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://oabxxrvakiznmytgfwtr.supabase.co",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9hYnh4cnZha2l6bm15dGdmd3RyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEyNjM5ODAsImV4cCI6MjA1NjgzOTk4MH0.Pm7JR5RAjPKxbozMIhzRNI2laPbMNISXh_viqs7v5Fc"
);

export default function PublicBrandWebsite() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setError("Bitte gib eine gültige E-Mail-Adresse ein.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const { error: supabaseError } = await supabase
        .from("subscribers")
        .insert([{ email }]);
      
      if (supabaseError) throw supabaseError;
      
      setIsSuccess(true);
      setEmail("");
    } catch (err) {
      console.error("Error:", err);
      setError("Fehler beim Speichern. Bitte versuche es erneut.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <header className="container mx-auto py-6 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-10 w-10 rounded-full bg-red-600 flex items-center justify-center">
              <span className="text-white font-bold">OB</span>
            </div>
            <span className="text-xl font-bold text-white">OpenBrand</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="text-gray-300 hover:text-red-500 transition-colors">Über uns</a>
            <a href="#concept" className="text-gray-300 hover:text-red-500 transition-colors">Konzept</a>
            <a href="#contact" className="text-gray-300 hover:text-red-500 transition-colors">Kontakt</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 md:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Die erste offene Marke für alle
              </h1>
              <p className="mt-6 text-lg text-gray-300">
                OpenBrand ist frei nutzbar, aber mit fairer 1%-Lizenzregelung. 
                Wir demokratisieren Markennutzung und schaffen neue Möglichkeiten für Kreative und Unternehmen.
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-red-900 flex items-center justify-center">
                    <Check className="h-4 w-4 text-red-500" />
                  </div>
                  <p className="ml-3 text-gray-300">Frei nutzbar für alle Projekte</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-red-900 flex items-center justify-center">
                    <Check className="h-4 w-4 text-red-500" />
                  </div>
                  <p className="ml-3 text-gray-300">Faire 1%-Lizenzregelung bei kommerzieller Nutzung</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-red-900 flex items-center justify-center">
                    <Check className="h-4 w-4 text-red-500" />
                  </div>
                  <p className="ml-3 text-gray-300">Gemeinschaftlich weiterentwickelt</p>
                </div>
              </div>
            </div>
            
            <div>
              <Card className="overflow-hidden border-0 shadow-xl bg-gray-900 border border-red-900">
                <div className="bg-red-700 p-6">
                  <h2 className="text-2xl font-bold text-white">Sei von Anfang an dabei</h2>
                  <p className="mt-2 text-gray-200">
                    Erhalte exklusive Updates und sei unter den Ersten, die OpenBrand nutzen können.
                  </p>
                </div>
                <CardContent className="p-6">
                  {isSuccess ? (
                    <div className="text-center py-6">
                      <div className="mx-auto w-12 h-12 rounded-full bg-red-900 flex items-center justify-center mb-4">
                        <Check className="h-6 w-6 text-red-500" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">Vielen Dank!</h3>
                      <p className="mt-2 text-gray-300">
                        Wir haben deine Anmeldung erhalten und werden dich über alle Neuigkeiten informieren.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSignUp} className="space-y-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                          E-Mail-Adresse
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="deine@email.de"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-gray-800 border-gray-700 text-white"
                          required
                        />
                        {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
                      </div>
                      <Button 
                        type="submit"
                        className="w-full bg-red-600 hover:bg-red-700 text-white"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Wird angemeldet..." : "Jetzt anmelden"}
                        {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
                      </Button>
                      <p className="text-xs text-gray-400 text-center mt-4">
                        Durch die Anmeldung akzeptierst du unsere Datenschutzrichtlinien.
                        Wir werden deine E-Mail nur für Updates zu OpenBrand verwenden.
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <section id="about" className="max-w-4xl mx-auto mt-24 text-center">
          <div className="inline-block rounded-lg bg-red-900 px-3 py-1 text-sm text-white mb-4">
            Über OpenBrand
          </div>
          <h2 className="text-3xl font-bold text-white">Eine neue Art der Markennutzung</h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            OpenBrand revolutioniert die Art und Weise, wie wir mit Marken umgehen. 
            Statt restriktiver Lizenzen setzen wir auf ein offenes Modell, das Innovation fördert 
            und gleichzeitig faire Vergütung sicherstellt.
          </p>
        </section>

        <section id="concept" className="max-w-4xl mx-auto mt-24">
          <div className="text-center">
            <div className="inline-block rounded-lg bg-red-900 px-3 py-1 text-sm text-white mb-4">
              Unser Konzept
            </div>
            <h2 className="text-3xl font-bold text-white">So funktioniert OpenBrand</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-gray-900 p-6 rounded-xl shadow-md border border-red-900">
              <div className="w-12 h-12 rounded-full bg-red-900 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white">Freie Nutzung</h3>
              <p className="mt-2 text-gray-300">
                Jeder kann OpenBrand für persönliche und nicht-kommerzielle Projekte kostenlos nutzen.
              </p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-xl shadow-md border border-red-900">
              <div className="w-12 h-12 rounded-full bg-red-900 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white">1% Lizenzgebühr</h3>
              <p className="mt-2 text-gray-300">
                Bei kommerzieller Nutzung gilt eine faire 1%-Regelung auf den Umsatz, der mit OpenBrand erzielt wird.
              </p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-xl shadow-md border border-red-900">
              <div className="w-12 h-12 rounded-full bg-red-900 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white">Gemeinschaft</h3>
              <p className="mt-2 text-gray-300">
                Die Marke wird gemeinschaftlich weiterentwickelt und verbessert sich kontinuierlich.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-black text-white mt-24 py-12 border-t border-red-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center space-x-2">
                  <div className="h-10 w-10 rounded-full bg-red-600 flex items-center justify-center">
                    <span className="text-white font-bold">OB</span>
                  </div>
                  <span className="text-xl font-bold">OpenBrand</span>
                </div>
                <p className="mt-4 text-gray-400 max-w-md">
                  OpenBrand ist ein Projekt, das die Markenlandschaft demokratisieren möchte.
                  Wir glauben an offene Innovation und faire Vergütung.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold">Kontakt</h3>
                <p className="mt-4 text-gray-400">
                  Hast du Fragen oder Anregungen? Schreib uns gerne eine E-Mail.
                </p>
                <p className="mt-2 text-white">info@openbrand.de</p>
                
                <div className="mt-6">
                  <h4 className="font-medium">Folge uns</h4>
                  <div className="flex space-x-4 mt-2">
                    <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Twitter</a>
                    <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">LinkedIn</a>
                    <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Instagram</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
              <p>© {new Date().getFullYear()} OpenBrand. Alle Rechte vorbehalten.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}