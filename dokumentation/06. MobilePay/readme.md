# MobilePay
På sider <b>Køb en and</b> og <b>Doner</b> ønskes der anvendt MobilePay til betaling
Pris for service er:

Link til service: https://www.mobilepay.dk/erhverv/apps-og-webshops

## Betragtninger i forhold til app
![image](https://user-images.githubusercontent.com/82814155/144023988-abaeecf5-ce41-479c-ac33-7600c95bb837.png)

## Callback
Styring af handlinger og beskeder via POST eller GET request

Tænk på det som et brev. Nogle gange får du et brev som beder dig om at udfylde en formular og derefter returnere formularen i en forudadresseret konvolut, som er i den originale konvolut, der indeholdt formularen.

Når du er færdig med at udfylde formularen, lægger du den i den medfølgende returkuvert og sender den tilbage.

Callback-URL'en er som den returkuvert. Du siger dybest set, "Jeg sender dig disse data; når du er færdig med dem, lytter jeg på denne tilbagekalds-URL og venter på dit svar." Så API'en vil behandle de data, du har sendt, og se derefter på tilbagekaldet for at sende dig svaret.

Dette er nyttigt, fordi det nogle gange kan tage evigheder at behandle nogle data, og det giver ingen mening at lade den, der ringer, vente på et svar. Lad os for eksempel sige, at din API tillader brugere at sende dokumenter til den og virusscanne dem. Så sender du en rapport efter. Scanningen kan tage måske 3 minutter. Brugeren kan ikke vente i 3 minutter. Så du anerkender, at du har fået dokumentet og lader den, der ringer, komme videre med andre forretninger, mens du laver scanningen, og brug derefter tilbagekalds-URL'en, når du er færdig, til at fortælle dem resultatet af scanningen.

Det ser ud som om at MobilePay understøtter Callback-url, så man kan sende besked til kunden.

## Transaktioner
1. Vælg 'Betal med MobilePay' i virksomhedens app
2. Din app skifter til MobilePay
3. Godkend betalingen med et swipe
4. MobilePay skifter tilbage til appen

## Tjek af betaling
Der følger et Dashboard med konto til MobilePay ydelsen.
Se mere på: Selvbetjening via MobilePay-portalen, https://www.mobilepay.dk/erhverv/mobilepay-portalen

## Økonomi
Pris for MobilePay til app-betalinger
Oprettelse (momsfri)
999,00kr.

Pris pr. transaktion
1% af transaktionsbeløbet, dog min. 1,00 kr. Prisen er momsfri. Vælger du månedlig fakturering, er der et gebyr på 29 kr. (ekskl. moms) pr. faktura (momssatsen er 25%). 
Du betaler kun oprettelse, hvis du ikke er MobilePay-erhvervskunde i forvejen (beløbet er momsfrit). Bemærk, som MobilePay Online-kunde er du oprettet hos din PSP. Du betaler derfor 999 kr., når du opretter dig hos os første gang.

## Betingelser for at bruge MobilePay
Fra websiden:<br />
For at få MobilePay til app-betalinger er det et krav, at dine varer eller services bruges uden for dit app-univers. For eksempel hvis du sælger billetter, transport eller leje af skabe.

Så er det på plads. Nu skal du oprette dig som kunde på MobilePay-portalen. Her vælger du MobilePay til app-betalinger, og så er næste skridt at integrere dit system med MobilePay. Se mere i vores dokumentation på developer.mobilepay.dk - vores udvikler-support er altid klar til at hjælpe dig.

# MobilePay API
![image](https://user-images.githubusercontent.com/82814155/144024621-28c51516-25b3-4223-9ef6-00de1303d409.png)

Når man er tilmeldt service, kan man få opstillet en sandkasse til udviklingen:
In order to integrate our App Payments solution you need to sign up to the product in our Merchant Portal. When/if you have an agreement with us we can invite you to our sandbox. Contact developer@mobilepay.dk to get access.

Der er flere steder som refererer til AppSwitch. Det er en gammel løsning som ikke bliver brugt. Istedet skal man bruge App Payments. 

https://mobilepaydev.github.io/MobilePay-Payments-API/docs/introduction


