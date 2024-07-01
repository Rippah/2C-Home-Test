# GraphQL API za upravljanje korisnicima

## Preduslovi

Pre pokretanja projekta, potrebno je da imate instalirano sledeće:

- Node.js (preporučena verzija 14 ili novija)
- npm (obično dolazi sa Node.js)
- MongoDB (lokalno instaliran ili nalog na MongoDB Atlas)

## Uputstvo za pokretanje projekta

1. Klonirajte repozitorijum:
   git clone https://github.com/Rippah/2C-Home-Test
   cd graphql-user-api
   
3. Instalirajte zavisnosti:
   npm install
   
4. Konfigurišite MongoDB vezu:
- Ako koristite lokalnu MongoDB instancu, proverite da li je pokrenuta
- Ako koristite MongoDB Atlas, ažurirajte connection string u `db.js` fajlu

4. Pokrenite server:
   node index.js
   
6. Otvorite Apollo Server Playground u browseru:
Obično dostupno na http://localhost:4000

7. Testirajte API koristeći upite zapisane u `test-apollo.txt` fajlu.

## Struktura projekta

- `index.js`: Glavni fajl aplikacije
- `schema.js`: GraphQL schema definicija
- `resolvers.js`: GraphQL resolveri
- `database.js`: Konfiguracija MongoDB konekcije i model definicija
- `test-apollo.txt`: Primeri GraphQL upita za testiranje

## Dostupne operacije

- Query:
- `users`: Dohvata listu svih korisnika (opciono filtriranje)
- Mutation:
- `addUser`: Dodaje novog korisnika
- `deleteUser`: Briše korisnika po ID-u
