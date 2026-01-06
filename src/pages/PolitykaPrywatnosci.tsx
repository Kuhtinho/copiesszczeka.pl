import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const PolitykaPrywatnosci = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 overflow-hidden bg-forest-dark">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-accent blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-lavender blur-3xl" />
          </div>

          <div className="container-narrow relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-primary-foreground mb-6">
                Polityka Prywatności
              </h1>
              <p className="text-xl sm:text-2xl text-primary-foreground/80 leading-relaxed">
                Co pies szczeka? szkolenie psów
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="section-padding bg-secondary/30">
          <div className="container-narrow">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-background rounded-2xl p-8 sm:p-12 shadow-soft space-y-8"
              >
                {/* Wprowadzenie */}
                <div>
                  <p className="text-base sm:text-lg text-foreground/90 leading-relaxed mb-4">
                    Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych 
                    przekazanych przez Użytkowników w związku z korzystaniem z usług oferowanych przez 
                    Co Pies Szczeka.
                  </p>
                </div>

                {/* Administrator danych */}
                <div>
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-forest-dark mb-6">
                    1. ADMINISTRATOR DANYCH
                  </h2>
                  <p className="text-base sm:text-lg text-foreground/90 leading-relaxed mb-4">
                    Administratorem danych osobowych jest Co Pies Szczeka, z siedzibą w Polsce.
                  </p>
                  <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
                    W sprawach dotyczących przetwarzania danych osobowych można kontaktować się pod adresem:{" "}
                    <a href="mailto:sabaj.kamola@gmail.com" className="text-accent hover:underline">
                      sabaj.kamola@gmail.com
                    </a>
                  </p>
                </div>

                {/* Zakres zbieranych danych */}
                <div>
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-forest-dark mb-6">
                    2. ZAKRES ZBIERANYCH DANYCH
                  </h2>
                  <p className="text-base sm:text-lg text-foreground/90 leading-relaxed mb-4">
                    Zbieramy następujące dane osobowe:
                  </p>
                  <ul className="space-y-3 text-base sm:text-lg text-foreground/90 leading-relaxed list-disc list-inside ml-4">
                    <li>Imię i nazwisko</li>
                    <li>Adres e-mail</li>
                    <li>Numer telefonu</li>
                    <li>Dane dotyczące psów (imię, wiek, rasa) - w zakresie niezbędnym do świadczenia usług szkoleniowych</li>
                    <li>Dane dotyczące komunikacji (wiadomości wysłane przez formularz kontaktowy)</li>
                  </ul>
                </div>

                {/* Cel przetwarzania danych */}
                <div>
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-forest-dark mb-6">
                    3. CEL PRZETWARZANIA DANYCH
                  </h2>
                  <p className="text-base sm:text-lg text-foreground/90 leading-relaxed mb-4">
                    Dane osobowe są przetwarzane w następujących celach:
                  </p>
                  <ul className="space-y-3 text-base sm:text-lg text-foreground/90 leading-relaxed list-disc list-inside ml-4">
                    <li>Świadczenie usług szkoleniowych dla psów</li>
                    <li>Kontakt z klientami w sprawach związanych z usługami</li>
                    <li>Obsługa zapytań i wiadomości przesłanych przez formularz kontaktowy</li>
                    <li>Prowadzenie dokumentacji związanej z realizacją usług</li>
                    <li>Wypełnienie obowiązków prawnych ciążących na administratorze</li>
                  </ul>
                </div>

                {/* Podstawa prawna */}
                <div>
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-forest-dark mb-6">
                    4. PODSTAWA PRAWNA PRZETWARZANIA
                  </h2>
                  <p className="text-base sm:text-lg text-foreground/90 leading-relaxed mb-4">
                    Przetwarzanie danych osobowych odbywa się na podstawie:
                  </p>
                  <ul className="space-y-3 text-base sm:text-lg text-foreground/90 leading-relaxed list-disc list-inside ml-4">
                    <li>Zgody osoby, której dane dotyczą (art. 6 ust. 1 lit. a RODO)</li>
                    <li>Wykonania umowy lub podjęcia działań zmierzających do zawarcia umowy (art. 6 ust. 1 lit. b RODO)</li>
                    <li>Wypełnienia obowiązku prawnego ciążącego na administratorze (art. 6 ust. 1 lit. c RODO)</li>
                  </ul>
                </div>

                {/* Okres przechowywania danych */}
                <div>
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-forest-dark mb-6">
                    5. OKRES PRZECHOWYWANIA DANYCH
                  </h2>
                  <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
                    Dane osobowe będą przechowywane przez okres niezbędny do realizacji celów, dla których zostały 
                    zebrane, a także przez okres wymagany przepisami prawa (w szczególności przepisami podatkowymi 
                    i rachunkowymi).
                  </p>
                </div>

                {/* Prawa użytkownika */}
                <div>
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-forest-dark mb-6">
                    6. PRAWA UŻYTKOWNIKA
                  </h2>
                  <p className="text-base sm:text-lg text-foreground/90 leading-relaxed mb-4">
                    Użytkownik ma prawo do:
                  </p>
                  <ul className="space-y-3 text-base sm:text-lg text-foreground/90 leading-relaxed list-disc list-inside ml-4">
                    <li>Dostępu do swoich danych osobowych</li>
                    <li>Sprostowania (poprawiania) danych osobowych</li>
                    <li>Usunięcia danych osobowych</li>
                    <li>Ograniczenia przetwarzania danych osobowych</li>
                    <li>Przenoszenia danych osobowych</li>
                    <li>Wniesienia sprzeciwu wobec przetwarzania danych</li>
                    <li>Cofnięcia zgody na przetwarzanie danych w dowolnym momencie</li>
                    <li>Wniesienia skargi do organu nadzorczego (Prezesa Urzędu Ochrony Danych Osobowych)</li>
                  </ul>
                </div>

                {/* Pliki cookies */}
                <div>
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-forest-dark mb-6">
                    7. PLIKI COOKIES
                  </h2>
                  <p className="text-base sm:text-lg text-foreground/90 leading-relaxed mb-4">
                    Strona internetowa wykorzystuje pliki cookies w celu zapewnienia prawidłowego funkcjonowania 
                    serwisu oraz w celach analitycznych. Szczegółowe informacje dotyczące plików cookies znajdują 
                    się w{" "}
                    <a href="/cookies" className="text-accent hover:underline">
                      Preferencjach dotyczących plików cookie
                    </a>
                    .
                  </p>
                </div>

                {/* Bezpieczeństwo danych */}
                <div>
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-forest-dark mb-6">
                    8. BEZPIECZEŃSTWO DANYCH
                  </h2>
                  <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
                    Administrator stosuje odpowiednie środki techniczne i organizacyjne zapewniające ochronę 
                    przetwarzanych danych osobowych, w szczególności zabezpiecza dane przed nieuprawnionym dostępem, 
                    utratą, zniszczeniem lub zmianą.
                  </p>
                </div>

                {/* Zmiany w polityce */}
                <div>
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-forest-dark mb-6">
                    9. ZMIANY W POLITYCE PRYWATNOŚCI
                  </h2>
                  <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
                    Administrator zastrzega sobie prawo do wprowadzania zmian w niniejszej Polityce Prywatności. 
                    O wszelkich zmianach Użytkownicy będą informowani poprzez publikację zaktualizowanej wersji 
                    na stronie internetowej.
                  </p>
                </div>

                {/* Kontakt */}
                <div>
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-forest-dark mb-6">
                    10. KONTAKT
                  </h2>
                  <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
                    W przypadku pytań dotyczących przetwarzania danych osobowych, prosimy o kontakt pod adresem:{" "}
                    <a href="mailto:sabaj.kamola@gmail.com" className="text-accent hover:underline">
                      sabaj.kamola@gmail.com
                    </a>
                  </p>
                </div>

                {/* Footer note */}
                <div className="pt-6 border-t border-foreground/10">
                  <p className="text-sm sm:text-base text-foreground/60 italic">
                    Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL')}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PolitykaPrywatnosci;

