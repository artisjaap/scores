# ----------------------------------------------------------------------
# STAGE 1: ANGULAR BUILD (FRONTEND)
# Doel: Bouw de geoptimaliseerde Angular-bestanden.
# ----------------------------------------------------------------------
FROM --platform=$BUILDPLATFORM node:22-slim AS angular_builder

# Stel de werkdirectory in
WORKDIR /usr/src/app

# Kopieer de package.json bestanden voor een snelle installatie

# Kopieer de Angular projectmap (die de node_modules al bevat)
COPY ./frontend/ ./scoreboard/

# Ga naar de Angular projectmap (vervang 'angular-project-folder' door je echte naam)
WORKDIR /usr/src/app/scoreboard

# Installeer alleen de Node/Express dependencies
# Run npm install op het root niveau
RUN npm install

# Installeer de Angular CLI globaal om de build te kunnen uitvoeren
RUN npm install -g @angular/cli

# Run de Angular build. Dit plaatst de output in /dist/browser
# Pas de naam 'browser' aan als je een andere outputPath in angular.json gebruikt
RUN ng build --configuration production

# ----------------------------------------------------------------------
# STAGE 2: NODE.JS BUILD (BACKEND MET EXPRESS)
# Doel: Bouw de Express app. We hergebruiken de dependencies van Stage 1.
# ----------------------------------------------------------------------
FROM --platform=$BUILDPLATFORM node:22-slim AS express_builder

WORKDIR /usr/src/app

# Kopieer de package.json bestanden
COPY ./node/package.json ./node/package-lock.json ./

# Installeer alleen de productie dependencies (geen devDependencies)
RUN npm install --only=production

# Kopieer de Express server bestanden
COPY ./node/server.js .

# ----------------------------------------------------------------------
# STAGE 3: FINAL PRODUCTION IMAGE
# Doel: De kleinste, meest beveiligde image voor de deployment.
# ----------------------------------------------------------------------
FROM --platform=$TARGETPLATFORM node:22-slim

WORKDIR /usr/src/app

# Kopieer de Node/Express productie dependencies van Stage 2
COPY --from=express_builder /usr/src/app/node_modules ./node_modules
COPY --from=express_builder /usr/src/app/server.js .

# Kopieer de GEBOUWDE Angular bestanden van Stage 1
# De bestanden gaan naar de map waar Express ze verwacht (de 'browser' map)
COPY --from=angular_builder /usr/src/app/scoreboard/dist/frontend/browser ./browser

# De poort die Express beluistert in server.js
EXPOSE 3000

# Start de Node/Express applicatie
CMD [ "node", "server.js" ]