# Exercices Net

## 1 - Echo

Créer un serveur TCP qui affiche le message reçu en entrée

Créer un client pour envoyer un message et afficher la réponse dans la console

## 2 - Serveur Time

Créer un serveur TCP retourne son uptime à chaque client (`process.uptime()`)

Créer le client qui affiche l'uptime du serveur et le réaffiche toutes les secondes (vous pouver faire un "clear screen" via `process.stdout.write('\033c');`)

## 3 - Créer un chat

Créer un serveur qui affiche le message reçu en entrée à tous les clients sauf celui à l'origine du message.

Créer un client qui affiche envoit des messages de chat et affiche le message des autres avec readline.
