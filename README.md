# Ryhmän nimi
* Splendid-Schweppes™

# Pelin nimi
* Crypto Boss
* Crypto Mining Simulator
* Crypto Investor
* Crypto Mining The Game
* Virtual Mining Simulator
* Mining Simulator

# Slogan
* To The Moon!

https://splendid-schweppes.github.io/crypto-mining-game/

# Peruspeli MVP

Keskellä ruutua ns. Mining asset jota klikkaamalla saa kryptoa louhittua omalle tililleen. Mitä nopeammin rämpyttää sitä nopeampi “hashing rate” Kun kryptovaluuttaa on tarpeeksi tilillä, voi ostaa Pentin PC kaupasta parempia komponentteja. Esimerkiksi prosessori on halvempi kuin näytönohjain, mutta hashing rate on pienempi. Näytönohjaimissa isompi hashing rate, mutta ovat kalliimpia. Ehkä joku limit kuinka monta komponenttia voi olla per PC. Kokonainen PC mainaa nopeammin, ja tietokonetta voi päivittää aina tiettyyn pisteeseen. Ehkä jopa niin että emolevyjä on erilaisia ja niihin saa X määrän komponentteja.

Komponentit / tietokoneet nostavat “hashing ratea”, rate on joku luku esim 0.001 ja kun on hashannut vaikka 10 sekunttia, selvitetään “blokki” eli lompakkoon ilmestyy rahaa.

Joku palikka mitä klikkailemalla saa rahaa
Kauppa mistä voi päivittää konetta ja saada automaattisesti mainattua

# Lisätoiminnot

* Valuutan kurssin voisi hakea suoraan coinmarketcap.comin apista, jolloin saisi ajantasaisen euromäärän
* 1-3 valuuttaa joista valita mitä haluaa mainata, esimerkiksi valuutta 1 on kallein ja hitain mainata, valuutta 2 keskihintainen ja vähän helpompi mainata, kolmas taas halvin ja helpoin.
* Pelin talletus esim localstorage
* Pelin talletus tietokantaan / käyttäjätunnukset
* Community event socket.io? Esim jokapäivä klo 12 tavoite hashata 10 000 lohkoa, jos tavoite täyttyy jokainen saa tietyn määrän kolikoita palkinnoksi
* Click battle muita pelaajia vastaan, laitetaan esimerkiksi joku veto omista asseteista, kumpi kliksuttelee nopeammin esim 100 kertaa voittaa ja vie palkinnon.
* Henkilökohtaiset daily tavoitteet, tai unlokit. Kun on saanut tietyn määrän valuuttaa kasaan aukeaa esimerkiksi mahdollisuus ostaa yritystason tietokoneita jotka hashaa nopeammin
* PRO: valuutan myyminen ja ostaminen coinmarketcapin kurssien mukaan
* Tapahtumat (matala prioriteetti, esimerkiksi yhteisö klikit tms.)
* Sähkölasku 10 min välein tms
  * Jos ei maksa, tietokoneet sammuu

# Todo

* ~~Näkymätön pieni elementti, jos sitä onnistuu klikkaamaan saa kokonaisen lohkon (esim 30kpl) / 1 kolikon heti~~
* ~~Jos klikkaa pientä palloa, saa yhden lohkon~~
  * ~~Lohkot pitää nollaantua kun 30 lohkoa on ratkottu ja siitä saa yhden kolikon~~
* ~~Hashing rate alkaa tippua jos ei klikkaile~~
  * ~~Kun on ostanut assetteja, hashing rate pysyy jossain vakiossa~~
* ~~Tärinäefekti jos klikkailee tarpeeksi nopeasti~~
  * ~~Tärinä kasvaa progressiivisesti~~
* ~~Kauppa~~
  * ~~Bittirahan myyminen dollareiksi~~
  * ~~dollareilla ostetaan assetteja~~
  * ~~Kauppias ottaa välistä 5%~~
  * Visualisointi että kauppias ottaa rahaa välistä ja paljonko dollareita saa kun myy
* ~~Saavutukset~~
* ~~Lompakkokuvake tms.~~
* ~~Klikkien replay~~
* Sähkön laskenta paljonko assetit vaatii sähköä 0 / 0 eli "paljonko tarvitaan / paljonko saatavilla"
  * Paljonko sähköä on saatavilla
  * jos assetit vie enemmän sähköä kuin saatavilla, +from assets nolliin
* Click streak, jos pitää "Crazy sheikkiä" päällä esim 10 sekkaa, saa streakin ja suoraan kolikon
  * Joku hieno efekti streakista
* Achievementit unlokkaa "power uppeja" jotka pitää toki ostaa
  * Power uppeja aukeaa aina 2 achievementin välein
  * unlokkaus
  * ostaminen
* Kaupassa hinnat nousee oston jälkeen tietyn prosenttimäärän, esim 10%
* ~~Statistiikan visualisoiminen pelin etusivulle~~
* Hidden elementtiin osuminen = suoraan 10 kolikkoa, esim räjähdys efekti tms??
* Random string generator kone voisi toimia ns assettina, 1 assetti olisi yksi kone jos niitä voisi tunkea etusivulle vaikka X määrän, samaan tapaan kuin cookie clickerissä tulee sormia tökkimään keksiä niin saisi koneita laskemaan
  * Eli assettien visualisointi jotenkin
