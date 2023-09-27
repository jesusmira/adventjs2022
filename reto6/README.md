# Reto 5 Creando adornos navideños

Una pareja de entusiastas de la navidad ha creado una empresa de adornos navideños. El primer adorno que quieren fabricar es un cubo que se pone en los árboles.

El problema es que tienen que programar la máquina y no saben cómo hacerlo. Nos han pedido ayuda para lograrlo.

Para crear los cubos se le pasa un <mark style="background-color: #FFFF00"> número con el tamaño deseado al programa </mark> y este devuelve un string con el <mark style="background-color: #FFFF00">diseño de ese tamaño.</mark> Por ejemplo, si le pasamos un 3, el programa debe devolver un cubo de 3x3x3:

```javascript
const cube = createCube(3)

```

```javascript
  /\_\_\_\
 /\/\_\_\_\
/\/\/\_\_\_\
\/\/\/_/_/_/
 \/\/_/_/_/
  \/_/_/_/

```
Como ves el cubo tiene tres caras visualmente. Los símbolos que se usan para construir las caras del cubo son: 
/, \\, _ y (espacio en blanco).

Otros ejemplos de cubos:
```javascript
const cube = createCube(1)

```

```javascript
/\_\
\/_/

```
```javascript
const cube = createCube(2)

```

```javascript
 /\_\_\
/\/\_\_\
\/\/_/_/
 \/_/_/

```


<b style="color: yellow">
    <ul>
        <li>Fíjate bien en los espacios en blanco que hay en el cubo.</li>
        <li>El cubo tiene que ser simétrico.</li>
        <li>Asegúrate de usar los símbolos correctos</li>
        <li>Cada nueva línea del cubo debe terminar con un salto de línea (\n) excepto la última.</li>
    </ul>
</b>