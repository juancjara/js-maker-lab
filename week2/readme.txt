correr achivo en node

node index.js

EJEMPLOS:

en la carpeta ejemplos hay ejemplos de uso de json, reduce, map, foreach, filter

creo que deberian revisarlo en el siguiente orden:
jsonExample, forEach, map, filter, reduce y all.js

///////////////////////
CHALLENGE:
///////////////////////

Dentro de la carpeta Challenge:

Existen 2 carpetas, con una estructura basica para que puedan empezar :
(para facilitar inclui en las 2 carpetas la referencia al json, en el index.js pueden ver cuando 
invoco al json)

  withoutNode -> usando index.html forma clasica

  withNode -> usando nodejs


Instrucciones para bajar Nodejs: 
	si estan en linux :

		sudo apt-get update
		sudo apt-get install nodejs
		sudo apt-get install npm	
		sudo ln -s `which nodejs` /usr/bin/node

	si estan en windows:
		https://nodejs.org/en/ -> bajen version la version 4

		No usen la consola de windows, sino usen: nodejs command prompt

para verificar que se instalo bien corran : node -v
eso les debe dar la version actual de node

///////////////////////
PROBLEMA:
///////////////////////

El problema basico es: a partir del json de productos, obtener la suma de todas las lamparas(Lamp) y 
billeteres (Wallet).

Si terminan el problema basico y si quieren completarlo, pueden hacer los siguientes puntos:

- si utilizaron for podrian intentar usar programacion funcional (reduce, map,filter, forEach, etc).

- leer el json de esta url http://shopicruit.myshopify.com/products.json 

- utilizar libreria llamada LODASH https://lodash.com/ (utilitarios para js)
 o pueden utilizar esta libreria RAMDA http://ramdajs.com/0.20.1/index.html 
 si utilizan ramda mejor de paso me explican como es, desde hace un tiempo quiero darle una leida
 pero me da flojera xd
 
