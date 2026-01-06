import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Regulamin = () => {
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
                Regulamin Szkolenia
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
                {/* ZASADY OGÓLNE */}
                <div>
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-forest-dark mb-6">
                    ZASADY OGÓLNE
                  </h2>
                  <ul className="space-y-4 text-base sm:text-lg text-foreground/90 leading-relaxed">
                    <li>
                      Zabronione jest używanie narzędzi awersyjnych tj. kolczatki, łańcuszki zaciskowe czy obroże
                      elektryczne. Psy posiadające takie akcesoria nie zostaną wpuszczone na zajęcia.
                    </li>
                    <li>
                      Niedopuszczalne jest zachowanie awersyjne wobec psa takie jak krzyczenie, bicie czy
                      szarpanie psa, takie działanie skutkuje wykluczeniem z zajęć, bez zwrotu kosztów.
                    </li>
                    <li>
                      Psy powinny być zapięte na smyczy zarówno w trakcie zajęć jak i przerw, chyba że trener
                      prowadzący ustali inaczej.
                    </li>
                    <li>
                      Zakazane jest spotykanie ze sobą psów bez pozwolenia i nadzoru trenera, opiekun
                      odpowiedzialny jest za zachowanie bezpiecznego dystansu między psami.
                    </li>
                    <li>
                      Trener nie odpowiada za spotkania, które opiekun psa przeprowadza przed lub po zajęciach.
                    </li>
                  </ul>
                </div>

                {/* ZDROWIE PSA */}
                <div>
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-forest-dark mb-6">
                    ZDROWIE PSA
                  </h2>
                  <ol className="space-y-4 text-base sm:text-lg text-foreground/90 leading-relaxed list-decimal list-inside">
                    <li>
                      Pies, który ma uczestniczyć w zajęciach, musi być w dobrym stanie zdrowia. W przypadku
                      jakichkolwiek objawów choroby, opiekun powinien skonsultować się najpierw z lekarzem
                      weterynarii, a następnie skonsultować się z trenerem, aby ustalić możliwość udziału psa w
                      zajęciach.
                    </li>
                    <li>
                      Pies powinien mieć wszystkie wymagane szczepienia, w tym aktualne szczepienie przeciwko
                      wściekliźnie. Opiekun powinien mieć przy sobie dokument potwierdzający aktualne
                      szczepienie i może zostać poproszony przez trenera o jego okazanie podczas szkolenia. Punkt
                      ten tyczy się wszystkich psów z wyłączeniem szczeniąt, które nie muszą mieć jeszcze wszystkich
                      szczepień.
                    </li>
                    <li>
                      Pies biorący udział w zajęciach powinien być odrobaczony i chroniony przed pasożytami
                      zewnętrznymi, takimi jak pchły i kleszcze, za pomocą odpowiedniego preparatu.
                    </li>
                    <li>
                      Suki w okresie cieczki nie mogą przebywać na terenie placu treningowego. Informacja o
                      cieczce suki powinna być przekazana trenerowi prowadzącemu co najmniej 24 godziny przed
                      planowanymi zajęciami, w celu ustalenia możliwości uczestnictwa w innej formy szkolenia. Brak
                      takiej informacji lub przekazanie jej mniej niż 24 godziny przed zajęciami, wiąże się z brakiem
                      możliwości odrobienia zajęć.
                    </li>
                    <li>
                      Jeśli pies ma alergie pokarmowe, opiekun powinien zgłosić to trenerowi podczas
                      zapisywania na zajęcia, najpóźniej przed rozpoczęciem pierwszych zajęć.
                    </li>
                    <li>
                      Psy, które są po niedawnych zabiegach chirurgicznych, nie mogą brać udziału w zajęciach.
                    </li>
                  </ol>
                </div>

                {/* UCZESTNICTWO W KURSIE */}
                <div>
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-forest-dark mb-6">
                    UCZESTNICTWO W KURSIE
                  </h2>
                  <ol className="space-y-4 text-base sm:text-lg text-foreground/90 leading-relaxed list-decimal list-inside">
                    <li>
                      Uczestnicy są zobowiązani do przestrzegania zasad zawartych w regulaminie oraz
                      ustalonych przez prowadzącego trenera w trakcie zajęć.
                    </li>
                    <li>
                      Uczestnik jest świadomy, że udział w kursie grupowym nie gwarantuje rozwiązania wszystkich
                      problemów behawioralnych psa, takich jak problemy separacyjne, lęk, agresja wobec
                      ludzi/zwierząt czy problemy z zachowaniem czystości.
                    </li>
                    <li>
                      Organizator ma prawo do odwołania kursu z przyczyn niezależnych od niego, na przykład
                      braku odpowiedniej liczby uczestników w ustalonym terminie. W takim przypadku organizator
                      zobowiązuje się do ustalenia najbliższego dogodnego terminu zajęć lub zwrotu wpłaconej
                      kwoty na kurs.
                    </li>
                    <li>
                      Opłata za kurs nie jest podlegająca zwrotowi w przypadku rezygnacji z zajęć w trakcie
                      trwania kursu.
                    </li>
                    <li>
                      Każdy uczestnik szkolenia jest zobowiązany do sprzątania po swoim psie na terenie
                      szkoleniowym.
                    </li>
                    <li>
                      Jeśli kursant chce filmować lub nagrywać dźwięk podczas zajęć, musi uzyskać zgodę
                      prowadzącego zajęcia.
                    </li>
                    <li>
                      Istnieje możliwość odrobienia jednej godziny zajęć, pod warunkiem zgłoszenia swojej
                      nieobecności co najmniej 24 godziny przed ich rozpoczęciem oraz jeśli możliwe jest
                      dołączenie psa do istniejącej już grupy.
                    </li>
                    <li>
                      Uczestnik musi trzymać przysmaki w miejscu niedostępnym dla psów. Szczególnie dotyczy to
                      torebek foliowych z przysmakami, które nie mogą być łatwo dostępne dla psów. Powinny być
                      przechowywane w zamkniętej torbie lub plecaku, aby żaden pies uczestniczący w zajęciach
                      nie mógł samodzielnie zjeść przysmaków wraz z torebką.
                    </li>
                  </ol>
                </div>

                {/* Footer note */}
                <div className="pt-6 border-t border-foreground/10">
                  <p className="text-sm sm:text-base text-foreground/60 italic">
                    wersja 1 13.06.2023
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

export default Regulamin;


