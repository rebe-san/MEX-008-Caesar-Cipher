
# Cifrado César

Cifrar significa codificar. El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher) es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio César lo usaba para enviar órdenes secretas a sus generales en los campos de batalla.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es un tipo de cifrado por sustitución, es decir que cada letra del texto original es reemplazada por otra que se encuentra un número fijo de posiciones (desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

- La letra A se cifra como D.
- La palabra CASA se cifra como FDVD.
- Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
- Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

En la actualidad, todos los cifrados de sustitución simple se descifran con mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas más complejos de codificación, como el cifrado Vigenère, e incluso tiene aplicación en el sistema ROT13.

## Resumen del proyecto

Este proyecto fue concebido para dar a conocer a socios o inversionistas de una empresa la situación financiera de la misma ,sin comprometer la información o que otros tengan acceso  ella.

La aplicación web permite a los encargados de administración de la empresa cifrar la información que sera enviada a los socios/inversionistas utilizando para ello el Cifrado Cesar, mencionado al inicio, cifrada la información sera enviada por los canales de comunicación permitidos , los socios recibirán la información cifrada y la aplicación web se encargara de descifrarla ,utilizando de nuevo el Cifrado Cesar,para tener el reporte de manera legible

Para poder ejecutar la aplicación es necesario seguir la siguiente liga:
https://rebe-san.github.io/MEX-008-Cipher/src/index.html


#### Definición del producto

- Quiénes son los principales usuarios de producto.
  Los usuarios son el personal administrativo y socios o inversionistas de la empresa.
- Cuáles son los objetivos de estos usuarios en relación con tu producto.
  El objetivo es mantener de forma confidencial los reportes de estados financieros de una determinada empresa y solo ser revelados por el personal autorizado en este caso a los socios e inversionistas de la empresa, que quieren tener esta información fuera del alcance

- Cómo crees que el producto que estás creando está resolviendo sus problemas.

#### Interfaz de usuario (UI)

La interfaz permite al usuario:
- Escribir el reporte o información que queremos cifrar.
- Elegir una llave de seguridad ( _offset_ en el Cifrado Cesar) indicando cuántas posiciones queremos que el cifrado desplace hacia la derecha cada carácter del reporte.
- Ver el resultado del reporte cifrado.
- Insertar un reporte a descifrar.
- Elegir una llave de seguridad ( _offset_ en el Cifrado Cesar) indicando cuántas posiciones queremos que el descifrado desplace cada carácter hacia la izquierda del reporte.
- Ver el resultado del reporte descifrado.


####Diseño de experiencia de usuario (User Experience Design):

- Ideación
  Lo primero fue pensar en que situaciones se podría implementar el Cifrado Cesar para poder darle una utilidad practica.
  Las primeras ideas que surgieron fueron realizar una aplicación web para un video juego donde se utilizara el cifrado , después la idea fue realizar una aplicación para mensajes secretos entre adolescentes o niñas , con el fin de compartir secretos.

  Finalmente la idea que fue tomada para el desarrollo del proyecto fue una aplicación para encriptar y desencriptar información financiera de una empresa.

- Prototipado (sketching)
  Unicamente se realizo el prototipado en papel y se le dio interactividad a través de Marvel y el Sketch se puede ver en el siguiente enlace

- Pruebas con usuarios (User Testing) e Iteración.
  El User Testing se realizo solo a tres personas las cuales comentaron la falta de un botón de regreso al inicio , así como la falta de instrucciones en la parte de codificar. Ya no se realizo un nuevo sketch , con las modificaciones propuestas sino se decidió aplicar directamente estos cambios al proyecto.

### Parte Obligatoria
* [ ] `README.md` incluye info sobre proceso y decisiones de diseño.
* [ ] `README.md` explica claramente quiénes son los usuarios y su relación con
  el producto.
* [ ] `README.md` explica claramente cómo el producto soluciona los
  problemas/necesidades de los usuarios.
