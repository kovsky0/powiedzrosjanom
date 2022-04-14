import Head from "next/head";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPostsForHome } from "../lib/api";
import { CMS_NAME } from "../lib/constants";
import PostBody from "../components/post-body";
import { useState } from "react";

const BlockQuote = ({ children, preview }) => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <blockquote>
      {collapsed ? (
        <p>
          {preview}...{" "}
          <span
            onClick={() => setCollapsed(false)}
            style={{ cursor: "pointer" }}
          >
            <u>Rozwiń</u>
          </span>
        </p>
      ) : (
        <>
          {children}{" "}
          <span
            onClick={() => setCollapsed(true)}
            style={{ cursor: "pointer" }}
          >
            <u>Zwiń</u>
          </span>
        </>
      )}
    </blockquote>
  );
};

export default function Index() {
  const botCode = `
  const delay = t => new Promise(resolve => setTimeout(resolve, t));

  let getRusMembers = () => {
    let x = document.querySelectorAll(".country-flags-component.country-ru")
    return [...x]
  }
  
  let getMessageBtn = () => {
    return document.querySelector('button[aria-label=Message]')
  }
  
  let fillMessage = () => {
    const ta = document.querySelector('.ui_v5-textarea-component')
    const value='Надеюсь, ты против войны. Должен признаться, я восхищаюсь русскими, которые протестуют, даже когда знают, что их отправят в тюрьму. Путин преступник.'
    ta.__vue__.$listeners.input(value)
  }
  
  let clickSendButton = () => {
    const btn = document.querySelector('.message-modal-row>.ui_v5-button-primary')
    btn.click()
  }
  
  let clickCloseButton = () => {
    const btn = document.querySelector('.message-modal-row>button')
    btn.click()
  }
  
  let clickNextPage = () => {
    const btn = document.querySelector('.ui_pagination-item-icon.icon-font-chess.chevron-right')
    btn.click()
  }
  
  let processPage = async () => {
    const rus = getRusMembers()
    for(u of rus) {
      u.click()
      await delay(2000)
      getMessageBtn().click()
      await delay(2000)
      fillMessage()
      await delay(2000)
      clickSendButton()
      await delay(2000)
      clickCloseButton()
      await delay(2000)
    }
  }
  
  let run = async () => {
    while(true) {
      await processPage()
      await delay(2000)
      clickNextPage()
      await delay(2000)
      await run()
    }
  }
  
  run()`;

  return (
    <>
      <Layout>
        <Head>
          <title>PowiedzRosjanom.pl</title>
        </Head>
        <Container>
          <Intro />
          <PostBody>
            <hr />
            <h2>Spis treści</h2>
            <ul>
              <li>
                <a href="#sec1">Na czym polega inicjatywa</a>
              </li>
              <li>
                <a href="#sec2">Pierwsza wiadomość</a>
              </li>
              <li>
                <a href="#sec3">Trzy rodzaje odpowiedzi</a>
              </li>

              <li>
                <a href="#sec4">Argumenty i kontrargumenty</a>
                <ul>
                  <li>
                    <a href="#sec4-1">
                      NATO chce nas okrążyć / NATO jest u naszych bram
                    </a>
                  </li>
                  <li>
                    <a href="#sec4-2">
                      A co z Donbasem? Gdy tam ginęli Rosjanie nikt nie reagował
                    </a>
                  </li>
                  <li>
                    <a href="#sec4-3">
                      Na Ukrainie rozwijana jest broń biologiczna, żeby
                      zaatakować Rosję
                    </a>
                  </li>
                  <li>
                    <a href="#sec4-4">Rosja wyzwala Ukrainę od faszyzmu</a>
                  </li>
                  <li>
                    <a href="#sec4-5">
                      Winna jest sama Ukraina. W ich kraju panuje chaos. Dlatego
                      właśnie rozpoczęliśmy wojnę.
                    </a>
                  </li>
                  <li>
                    <a href="#sec4-6">Ty nam nie mów co się u nas dzieje</a>
                  </li>
                  <li>
                    <a href="#sec4-7">Co wy tam możecie wiedzieć w Krakowie?</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#sec5">Bot do wysyłania wiadomości</a>
              </li>
            </ul>

            <h2 id="sec1">Na czym polega inicjatywa?</h2>
            <p>
              W pierwszych dniach napaści na Ukrainę domyślaliśmy się, że
              Rosjanie nie wiedzą, co się dzieje. Okłamywani przez państwowe
              media i odcinani od kolejnych portali mają wypaczony obraz
              sytuacji. Jak wiele innych osób i organizacji, zaczęliśmy do nich
              pisać starając się poinformować o tym jak wygląda wojenna
              rzeczywistość. Czasem reakcja była pozytywna. Częściej jednak
              dostawaliśmy z powrotem szczegółowe elaboraty na temat rzekomych
              ukraińskich zbrodni, zagrożenia ze strony NATO i ogólnej
              słuszności rosyjskiej polityki.
            </p>

            <p>
              Postanowiliśmy cierpliwie i merytorycznie odpowiadać na wszystkie
              argumenty. Zrozumieliśmy, że większości odbiorców nie przekonamy
              do zobaczenia rosyjskiej wojny, taką, jaką ona jest – zbrodniczą,
              złą, i pozbawioną jakiegokolwiek usprawiedliwienia. Ale
              zrozumieliśmy też, że możemy ich przekonać, że jest to wojna
              bezsensowna, kosztowna i przynosząca ich krajowi wstyd zamiast
              chwały.
            </p>

            <p>
              Wierzymy, że gdyby dobrze przygotowane argumenty, podane w
              spokojny i nieagresywny sposób, dotarły do Rosjan, to wielu z nich
              podeszło by przynajmniej nieco bardziej sceptycznie do oficjalnej
              narracji.
            </p>

            <p>
              Możesz skorzystać z tej strony jako źródła kontrargumentów w
              przypadku rozmowy ze zwolennikiem Rosyjskich działań. Ale możesz
              też przyłączyć się do naszej akcji "Małego Sabotażu" i postarać
              się aktywnie dotrzeć z nimi do obywateli Rosji. Mimo iż wiele
              portali społecznościowych zostało zablokowanych dla Rosjan, wielu
              z nich korzysta z VPNów aby nadal mieć dostęp do zablokowanych
              stron. Istnieją również portale, które przy okazji innych
              funkcjonalności pozwalają na wymianę wiadomości. Przykładem jest
              chess.com do którego{" "}
              <strong>
                przygotowaliśmy bota automatycznie wysyłającego wiadomości.
              </strong>
            </p>

            <h2 id="sec2">Pierwsza wiadomość</h2>
            <p>
              Przy kontakcie z osobą, którą staramy się przekonać do zmiany
              zdania na tematy polityczne, ważne jest by nie rozmawiać z nią z
              pozycji wroga. Łatwo "nadziać" się wtedy na tzw. "efekt
              rykoszetu", gdzie pomimo słuszności argumentów, odbiorca
              komunikatu tym bardziej wzmacnia wiarę w swoją perspektywę.
            </p>
            <p>
              Naszym celem jest zbudowanie kontaktu i stworzenie atmosfery, w
              której odbiorca jest w stanie usłyszeć to, co mamy do powiedzenia.
            </p>
            <p>
              Poniżej możesz znaleźć wiadomość, którą przynosiła nam stosunkowo
              dobre rezultaty - otwierała dialog.
            </p>

            <blockquote>
              Надеюсь, ты против войны. Должен признаться, я восхищаюсь
              русскими, которые протестуют, даже когда знают, что их отправят в
              тюрьму. Путин преступник.
            </blockquote>
            <blockquote>
              Mam nadzieję, że jesteś przeciwko wojnie. Muszę przyznać, że
              podziwiam Rosjan, którzy protestują, nawet gdy wiedzą, że pójdą do
              więzienia. Putin jest zbrodniarzem.
            </blockquote>

            <h2 id="sec3">Trzy rodzaje reakcji</h2>
            <p>
              Odpowiedzi na poruszenie tego drażliwego tematu można podzielić na
              trzy kategorie:
            </p>
            <p>
              <strong>Przeciwnicy wojny</strong>. Pierwsza z nich to odpowiedzi
              od osób, które faktycznie są przeciwko wojnie. W tym przypadku
              nasz cel jest prosty - podarowanie poczucia wsparcia i wzmocnieniw
              tej postawy. Poniżej znajdziesz przykład odpowiedzi, którą
              proponujemy wysłać.
            </p>
            <blockquote>
              Происходящее очень огорчает. Я знаю, что это звучит банально, но
              если я могу чем-то помочь людям, которые выступают против войны,
              пожалуйста, дайте мне знать.
            </blockquote>
            <blockquote>
              To, co się dzieje, jest bardzo przykre. Wiem, że to zabrzmi
              banalnie, ale jeśli mogę coś zrobić, aby pomóc ludziom, którzy
              sprzeciwiają się wojnie, daj mi znać.
            </blockquote>

            <p>
              <strong>Zwolennicy wojny</strong>. Druga grupa odpowiedzi pochodzi
              od osób, które w pełni popierają wojnę. W tym przypadku ciężko
              jest cokolwiek uzyskać. Poniżej znajdziesz naszą propozycję
              odpowiedzi.
            </p>
            <blockquote>
              Россия не имеет права вторгаться в другую страну, бомбить города и
              убивать граждан вне зависимости от оправданий кремлевских СМИ.
            </blockquote>
            <blockquote>
              Rosja nie ma prawa najeżdżać innego kraju, bombardować miast i
              zabijać obywateli, bez względu na wymówki kremlowskich mediów.
            </blockquote>

            <p>
              <strong>"Jestem przeciwko wojnie, ale..."</strong>. To najbardziej
              obiecująca kategoria odpowiedzi. Celem jest wzmacnianie części
              "tak wojna jest zła" i osłabianie tego co po "ale". Poniżej
              znajdziesz gotowe kontrargumenty do najczęstszych wymówek
              stosowanych dla usprawiedliwienia wojny.
            </p>

            <h2 id="sec4">Argumenty i kontrargumenty</h2>
            <p>
              Poniższe odpowiedzi mogą zostać po prostu skopiowane bądź użyte
              jako baza do skonstruowania własnego tekstu. Zachęcamy do użycia{" "}
              <a href="https://google.translate.com" target="_blank">
                google.translate.com
              </a>{" "}
              do przetłumaczenia wiadomości.
            </p>
            <h3 id="sec4-1">
              NATO chce nas okrążyć / NATO jest u naszych bram
            </h3>
            <strong>Odpowiedź:</strong>
            <BlockQuote
              preview="Dobrze, porozmawiajmy o “okrążeniu” przez NATO. To jest takie
                specyficzne okrążenie tylko z jednej z 4 stron. Ze wschodu Rosja
                ma Ocean Spokojny; od północy - Ocean Arktyczny. Na południowym
                wschodzie graniczy z Chinami i Mongolią, swoimi sojusznikami, i
                Koreą Północną, która raczej w NATO nie jest. Na południowej
                granicy ma Rosja też Kazachstan, Tadżykistan, Uzbekistan,
                Kirgistan - znowu są to sojusznicy, w dodatku pod kontrolą
                polityczną Rosji i z jej bazami. Na Kaukazie"
            >
              <p>
                Dobrze, porozmawiajmy o “okrążeniu” przez NATO. To jest takie
                specyficzne okrążenie tylko z jednej z 4 stron. Ze wschodu Rosja
                ma Ocean Spokojny; od północy - Ocean Arktyczny. Na południowym
                wschodzie graniczy z Chinami i Mongolią, swoimi sojusznikami, i
                Koreą Północną, która raczej w NATO nie jest. Na południowej
                granicy ma Rosja też Kazachstan, Tadżykistan, Uzbekistan,
                Kirgistan - znowu są to sojusznicy, w dodatku pod kontrolą
                polityczną Rosji i z jej bazami. Na Kaukazie - sojusznik
                Armenia, Azerbejdżan (niezbyt przyjazny, w końcu Rosja wspiera
                Armenię, ale też nie wrogi) i Gruzja. Gruzja akurat jest wroga,
                czemu po inwazji z 2008 trudno się dziwić, ale też
                czteromilionowa Gruzja żadnego zagrożenia dla 150 milionowej
                Rosji nie stanowi. Zachodnia granica Rosji - podbity krym,
                podbity Donbas, najechana Ukraina, sojusznicza Białoruś,
                neutralna Finlandia i trzy malutkie państwa bałtyckie, którym w
                rosyjskiej telewizji grożą teraz inwazją. Rzeczywiście, Rosja
                jest okrążona przez potężnych wrogów.
              </p>

              <p>
                Zaczekaj, powiesz - tam są wojska NATO. Tak, teraz są tam
                nieliczne wojska NATO, w Republikach Bałtyckich i Polsce. Będzie
                jakieś 20 tysięcy żołnierzy. 20 tysięcy żołnierzy rzuci się na
                900 000 rosyjską armię? Tak, w reszcie Europy, w miejscach
                takich jak Niemcy, Rumunia czy Włochy, jest jeszcze łącznie 100
                000 żołnierzy amerykańskich. Tysiące kilometrów od granic Rosji.
                I ciągle niewystarczająco, żeby tak wielki kraj z tak ogromną
                armią najechać, nawet jego kawałek. Żeby skutecznie najechać
                jakiś kraj, trzeba mieć trzykrotną przewagę liczebną - tą lekcję
                Rosja odrabia właśnie na Ukrainie. Żeby najechać Rosję, trzeba
                by 2,7 miliona żołnierzy NATO. To trzy razy więcej, niż całe
                amerykańskie siły zbrojne.
              </p>

              <p>
                A ile potrzeba, żeby obronić się przed 900 000 armią rosyjską?
                300 000. I tu rachunek się zgadza. 100 000 Amerykanów, 100 000
                Polaków, 50 000 Brytyjczyków, 30 000 Bałtów i trochę Francuzów i
                Niemców. Rachunek sie zgadza. NATO to sojusz obronny.
              </p>

              <p>
                Dodam jeszcze jeden fakt. Za pierwszej kadencji Obamy, w dobie
                resetu z Rosją, w Europie nie było ani jednego czołgu
                amerykańskiego. Sprawdź ten fakt, amerykańscy generałowie bardzo
                nad nim płakali. Czołgi wróciły dopiero po rosyjskiej inwazji na
                Krym.
              </p>
            </BlockQuote>

            <h3 id="sec4-2">
              A co z Donbasem? Gdy tam ginęli Rosjanie nikt nie reagował
            </h3>
            <strong>Odpowiedź:</strong>
            <BlockQuote
              preview="A jak zaczęła się wojna w Donbasie? W Donbasie, podobnie jak na
                Krymie, pojawili sie nagle żołnierze bez oznaczeń, z pełnym
                sprzętem. Kiedy na kijowskim Majdanie zaczynają biegać dzieciaki
                w kaskach rowerowych, z drewnianymi tarczami i czasem z
                koktajlem mołotowa, rosyjskie media mówią - przewrót finansowany
                przez CIA. Ale kiedy w Donbasie pojawili się w ciągu paru dni
                żołnierze z czołgami i artylerią, to było zdaniem rosyjskich
                państwowych mediów spontaniczne powstanie miejscowej ludności.
                Tak jak na Krymie. Tylko ze wersja odnośnie Krymu już się
                zmieniła, i teraz Rosjanie oficjalnie świętują"
            >
              <p>
                A jak zaczęła się wojna w Donbasie? W Donbasie, podobnie jak na
                Krymie, pojawili sie nagle żołnierze bez oznaczeń, z pełnym
                sprzętem. Kiedy na kijowskim Majdanie zaczynają biegać dzieciaki
                w kaskach rowerowych, z drewnianymi tarczami i czasem z
                koktajlem mołotowa, rosyjskie media mówią - przewrót finansowany
                przez CIA. Ale kiedy w Donbasie pojawili się w ciągu paru dni
                żołnierze z czołgami i artylerią, to było zdaniem rosyjskich
                państwowych mediów spontaniczne powstanie miejscowej ludności.
                Tak jak na Krymie. Tylko ze wersja odnośnie Krymu już się
                zmieniła, i teraz Rosjanie oficjalnie świętują rocznicę zajęcia
                Krymu przez wojska rosyjskie. Więc tak, w Donbasie była krwawa
                wojna, był ostrzał miast i ginęli cywile. Działo się to, bo tak
                jak na Krym do spokojnego regionu weszły tam rosyjskie wojska
                bez oznaczeń. I dopiero wtedy zaczęli ginąć ludzie. Wcześniej
                nikt nie ginął, i nikogo nie trzeba było chronić. To tak jak w
                Iraku, gdzie amerykańskie wojska chroniły cywilów przed
                islamistami, których przed przybyciem amerykańskich wojsk w
                Iraku nie było. Ta sama historia. Ta sama brudna wojna. Tylko że
                Ameryka swoje wojny toczy po drugiej stronie globu, nie w
                Kanadzie, gdzie ludzie mówią tym samym językiem, gdzie mają tę
                samą kulturę. Polskie wojsko w ‘68 weszło do Czechosłowacji,
                strzelać do braci Słowian. Do dzisiaj nam wstyd.
              </p>

              <p>
                13 tysięcy osób zginęło w trakcie wojny w Donbasie między 2014 a
                2021 rokiem wg ONZ - 3400 cywili, 4650 bojowników strony
                ukraińskiej i 5 800 bojowników walczących po stronie tzw
                ludowych republik separatystycznych
                [https://ukraine.un.org/sites/default/files/2021-10/Conflict-related%20civilian%20casualties%20as%20of%2030%20September%202021%20%28rev%208%20Oct%202021%29%20EN.pdf].
                Najwięcej cywili - 2100 - zginęło w roku 2014, w 2015 - 1000.
                Wtedy nie było rosyjskiej inwazji. W 2019, 2020, 2021 ginęło
                mniej niż 30 cywili co roku, wojny prawie nie było. W 2022 roku
                Rosja rozpoczęła wojnę na nowo - i w ciągu tylko 3 tygodni
                zginęło wg ONZ co najmniej 726 cywili (prawdziwa liczba jest
                znacznie wyższa, bo ONZ nie zdążył jeszcze potwierdzić
                większości doniesień, najpewniej wynosi kilka
                tysięcy)[https://reliefweb.int/report/ukraine/ukraine-civilian-casualties-2400-15-march-2022-enruuk-0].
                Do tego 4 miliony ukraińskich uchodźców uciekło z kraju przed
                rosyjską wojną, więcej niż w ogóle mieszka ludzi w
                separatystycznych republikach Donbasu
                [https://data2.unhcr.org/en/situations/ukraine]. Czy tak Rosja
                pomaga cywilom?
              </p>
            </BlockQuote>

            <h3 id="sec4-3">
              Na Ukrainie rozwijana jest broń biologiczna, żeby zaatakować Rosję
            </h3>
            <blockquote>
              <p>
                Nie ma dowodów na żadne laboratoria broni biologicznej na
                Ukrainie. Pomyślmy logicznie. Gdyby USA chciały zaatakować Rosję
                bronią biologiczną, nie budowałyby takich laboratoriów akurat na
                Ukrainie - kraju, w którym wielu ludzi sprzyja Rosji, w którym
                Rosja ma tyle kontaktów wywiadowczych. Nie dawałoby takiej broni
                Ukraińcom teraz, kiedy jest jasne, że każda pandemia jest
                globalna, a Covid najwięcej kosztował właśnie Zachód, i to na
                Zachodzie jest największy strach przed pandemią.
              </p>
            </blockquote>

            <h3 id="sec4-4">Rosja wyzwala Ukrainę od faszyzmu</h3>
            <BlockQuote
              preview="Faszyści nienawidzą Żydów. Prezydent Ukrainy ma żydowskie
                korzenie. Państwa faszystowskie są rządzone przez dyktatorów
                którzy nigdy nie oddają władzy, jak Mussolini czy Hitler. W
                Ukrainie w 2019 były wybory, po których zmienił się prezydent. W
                Rosji prezydent nie zmienił się od 22 lat. Faszyści najeżdżają
                inne państwa. Rosja najechała Gruzję, Ukrainę, walczy w Syrii i
                krajach afrykańskich. Ukraina od 2014 roku walczy tylko w
                obronie swoich granic. Faszyści nienawidzą wolności, zamykają
                media, zabraniają protestować i mówić, co się chce. To w Rosji,
                nie w Ukrainie, prawo zabrania protestować przeciwko wojnie pod
                karą 15 lat więzienia"
            >
              <p>
                Faszyści nienawidzą Żydów. Prezydent Ukrainy ma żydowskie
                korzenie. Państwa faszystowskie są rządzone przez dyktatorów
                którzy nigdy nie oddają władzy, jak Mussolini czy Hitler. W
                Ukrainie w 2019 były wybory, po których zmienił się prezydent. W
                Rosji prezydent nie zmienił się od 22 lat. Faszyści najeżdżają
                inne państwa. Rosja najechała Gruzję, Ukrainę, walczy w Syrii i
                krajach afrykańskich. Ukraina od 2014 roku walczy tylko w
                obronie swoich granic. Faszyści nienawidzą wolności, zamykają
                media, zabraniają protestować i mówić, co się chce. To w Rosji,
                nie w Ukrainie, prawo zabrania protestować przeciwko wojnie pod
                karą 15 lat więzienia
                [https://www.hrw.org/news/2022/03/07/russia-criminalizes-independent-war-reporting-anti-war-protests].
              </p>

              <p>
                Ukraińscy naziści to ci, którzy 2 maja 2014 r. spalili żywcem
                ludzi w Odessie; którzy rozstrzelali wszystkich funkcjonariuszy
                straży miejskiej w Mariupolu, a następnie 9 maja 2014 r.
                strzelali do ludzi na ulicach z czołgów; którzy zabili na ulicy
                pisarza Olesia Buzinę, ale nie przebywa w więzieniu, twórcę
                Komisji Praw Człowieka przy prezydencie Ukrainy; To jest
                Sternenko, który zadźgał człowieka na śmierć w telewizji na
                żywo, filmując to swoim telefonem, a teraz jest u władzy; to są
                ludzie, którzy przez 8 lat bombardowali i ostrzeliwali Donbas,
                od 8 lat leje się tam krew, umierają dzieci - dlaczego
                milczeliście przez 8 lat? Kiedy ludzie są aresztowani i znikają
                na zawsze w piwnicach SBU, to jest to nazizm.
              </p>

              <p>
                Dlaczego trzeba było palić ludzi w Odessie? Po co zachęcać do
                organizowania neonazistowskich marszów w centrum Kijowa?
              </p>

              <p>
                2 maja w Odesie 2 uzbrojone grupy pseudokibiców, prorosyjska i
                proukraińska, starły się ze sobą; obie używały broni i koktajli
                mołotowa, i ta słabsza uciekła w końcu do budynku, który stanął
                w płomieniach
                [https://www.ohchr.org/sites/default/files/Documents/Countries/UA/OHCHRThematicReportUkraineJan2014-May2016_EN.pdf].
                To wielka tragedia - dlaczego do niej doszło? Bo miesiąc
                wcześniej Rosja zajęła Krym, zajęła Donieck, Ługańsk i
                Słowiańsk, skrycie, bez flagi, używając bojówek i wojsk bez
                oznaczeń. Teraz w Rosji rocznica zajecia Krymu to święto
                państwowe, wiece i imprezy. Ukraińcy w Odesie bronili jej przed
                tym samym losem, myśleli, że walczą z rosyjskimi siłami. Tej
                tragedii nie byłoby, gdyby nie rosyjskie zabory i używanie
                bojówek bez oznaczeń. Jeśli chodzi o Mariupol, 9 maja 2014
                zginęło tam 13 osób - 2 lojalnych wobec rządu w Kijowie oficerów
                policji, 3 żołnierzy ukraińskiej armii, żołnierz pułku Azow, 3
                bojowników separatystów i 4 cywili przypadkowo postrzelonych w
                trakcie walk między tymi grupami. Jesli ktoś popełnił zbrodnie w
                Mariupolu, byli to separatyści, kryjący się w tłumie strzelający
                do żołnierzy Ukraińskich zza pleców zwykłych ludzi.
              </p>
            </BlockQuote>

            <h3 id="sec4-5">
              Winna jest sama Ukraina. W ich kraju panuje chaos. Dlatego właśnie
              rozpoczęliśmy wojnę.
            </h3>
            <BlockQuote
              preview="Ukraina ma swoje problemy, Rosja ma swoje. W żadnym z tych
                problemów nie pomoże nikomu zbrojny najazd. Gdyby Ukraińcy
                chcieli się czegoś nauczyć od Rosjan, sami poprosili by ich o
                pomoc. Jak więc oba kraje prezentują się, jeśli chodzi o poszanowanie
                praw człowieka, podstawowe wolności obywatelskie"
            >
              <p>
                Ukraina ma swoje problemy, Rosja ma swoje. W żadnym z tych
                problemów nie pomoże nikomu zbrojny najazd. Gdyby Ukraińcy
                chcieli się czegoś nauczyć od Rosjan, sami poprosili by ich o
                pomoc.
              </p>

              <p>
                Jak więc oba kraje prezentują się, jeśli chodzi o poszanowanie
                praw człowieka, podstawowe wolności obywatelskie, rządy prawa
                czy poziom korupcji? W Rule of Law Index (Rankingu Rządów Prawa)
                World Justice Project Ukraina (74) wyprzedza Rosję (101)
                [https://worldjusticeproject.org/sites/default/files/documents/WJP-INDEX-21.pdf].
                W Human Freedom Index (Rankingu Wolności Ludzkiej),
                opracowywanym przez libertariańsko-konserwatywny Cato Institute,
                Ukraina (98) także figuruje przed Rosją (126)
                [https://www.cato.org/sites/cato.org/files/2021-12/human-freedom-index-2021.pdf].
                W Corruption Perceptions Index Transparency International
                Ukraina jest 129-ta, a Rosja 136-ta
                [https://www.transparency.org/en/cpi/2021]. W Worldwide Press
                Freedom Index (Globalnym Rankingu Wolności Mediów) Reporters
                Without Borders Ukraina jest 97-a, Rosja - 150-ta
                [https://rsf.org/en/ranking]. Wreszcie Democracy Index magazynu
                The Economist Ukraina figuruje z wynikiem 5.81/10 i klasyfikacją
                “system hybrydowy” (między demokracją i autorytaryzmem), podczas
                gdy Rosja otrzymała wynik 3.31/10 i została jednoznacznie
                sklasyfikowana jako państwo autorytarne
                [https://www.eiu.com/n/campaigns/democracy-index-2020-download-success].
                Żaden z tych rankingów nie zaprzecza twierdzeniu, że Ukraina
                boryka się z poważnymi problemami, także w dziedzinie rządów
                prawa, wolności obywatelskich czy nawet poszanowania
                podstawowych praw człowieka. Jasne jest jednak, że w każdym z
                tych aspektów Ukraina jest a) typowym krajem swojego regionu b)
                państwem odróżniającym się na korzyść od Rosji. Ważna jest też
                trajektoria zmian w obu krajach - podczas gdy Ukraina dąży do
                reform i stara się dołączyć do świata demokracji, Rosja zapada
                się w coraz cięższy autorytaryzm (co agresja na Ukrainę jeszcze
                znacząco przyspieszyła)
                [https://www.hrw.org/news/2022/03/07/russia-criminalizes-independent-war-reporting-anti-war-protests].
              </p>
            </BlockQuote>

            <h3 id="sec4-6">Ty nam nie mów co się u nas dzieje</h3>
            <blockquote>
              <p>
                Znam Ukrainę z różnych relacji w zachodnich i niezachodnich
                mediach, które różnią się między sobą, które pokazują różne
                punkty widzenia. Nie są to media państwowe, tak jak w Rosji. W
                Rosji z początkiem wojny zamknięto Echo Moskwy, rozpędzono
                protesty, ocenzurowano Nowaja Gazieta. Rosjanie nie mogą znać
                prawdy, ponieważ panuje cenzura, oficjalnie uchwalona i
                utrwalona w rosyjskim prawie
                [https://www.hrw.org/news/2022/03/07/russia-criminalizes-independent-war-reporting-anti-war-protests].
              </p>

              <p>
                Skoro Rosjanin może doskonale dowiadywać się o tym, co dzieje
                się na Ukrainie z Moskwy, Petersburga albo Władywostoku, to
                opowiedz mi co wiesz o zbombardowanym teatrze w Mariupolu, w
                którym schroniło się tysiąc cywili obok wielkiego napisu
                “DZIECI”. Opowiedz, co wiadomo w Rosji o losie okrętu
                desantowego “Orsk”, który zatonął 24 marca w porcie w
                Berdiańsku. Opowiedz, co wiadomo o rosyjskich stratach.
                Amerykanie w czasie wojny w Iraku codziennie podawali wszystkie
                swoje straty do wiadomości na stronie http://icasualties.org/
                Czy w Rosji też jest taka strona? Jeśli nie, to dlaczego, i ile
                tak naprawdę wiesz o wojnie?
              </p>
            </blockquote>

            <h3 id="sec4-7">Co wy tam możecie wiedzieć w Krakowie?</h3>
            <blockquote>
              W Krakowie przebywa obecnie ponad 200 000 Ukraińców, którzy
              uciekli przed wojną. Od nich mamy informacje z pierwszej ręki o
              bombardowaniu wsi i miast. O rakietach spadających na domy
              zwykłych ludzi. O przerażeniu rosyjską napaścią i śmierci, którą
              ze sobą ona niesie.
            </blockquote>

            <h2 id="sec5">Bot do wysyłania wiadomości</h2>
            <p>
              Aby usprawnić i wyskalować proces wysyłania wiadomości do Rosjan
              na chess.com przygotowaliśmy półautomatycznego bota. Poniżej
              znajdziesz instrukcję użycia.
            </p>

            <p>
              <strong>Krok 1.</strong> Zarejestruj się na chess.com
            </p>
            <p>
              <strong>Krok 2.</strong> Rozegraj kilka partii szachów, aby Twoje
              konto nie zostało zbanowane
            </p>
            <p>
              <strong>Krok 3.</strong> Wejdź na stronę{" "}
              <a href="https://www.chess.com/leagues/elite" target="_blank">
                https://www.chess.com/leagues/elite
              </a>
              . To strona lig szachowych, w której możemy zobaczyć
              najaktywniejszych graczy danego tygodnia wraz z flagą kraju, z
              którego gracz się loguje. Z menu na górze możesz wybrać rodzaj
              ligi i zakres czasu.
            </p>
            <p>
              <strong>Krok 4.</strong> Otwórz narzędzia developerskie poprzez
              wciśnięcie F12 bądź kombinacji ctrl+shift+i lub cmd+shift+i na
              MacOS. W nowo otwartej części wybierz zakładkę "Konsola".
            </p>
            <p>
              <strong>Krok 5.</strong> Skopiuj poniższy kod bota i wklej do
              konsoli:
              <pre>
                <code>{botCode}</code>
              </pre>
            </p>
            <p>
              <strong>Krok 6.</strong> Wciśnij enter, aby uruchomić bota. Bot
              znajdzie wszystkich graczy z Rosji i wyśle im wiadomość, a
              następnie przejdzie na kolejną stronę
            </p>
            <p>
              <strong>Krok 7.</strong> Po przejściu na kolejną stronę należy
              uruchomić Bota ponownie wciskając strzałkę do góry i enter.
            </p>
          </PostBody>
        </Container>
      </Layout>
    </>
  );
}
