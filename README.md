
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

##Introduccion.  

  Master Lock Security es una empresa dedicada a la seguridad de la información financiera de las empresas para salva guardar su integridad contra ataques o fuga de información que podrían afectarla.  

  Para tal fin utilizamos el Cifrado Cesar para ocultar la información a terceros y el Descifrado Cesar para tener acceso a ella.

##Misión, Visión y Valores.  

  Nuestra misión es proporcionar servicios de calidad en cuanto a seguridad de la información a las empresas que desean añadir seguridad extra a sus servicios de recepción y entrega de reportes financieros.  

  La Visión es ser una de las principales opciones a elegir de las empresas para mantener su información financiera segura.  

  Nuestros valores son : Compromiso , Honestidad y Eficacia.  

## Resumen del proyecto

Este proyecto fue concebido para dar a conocer a socios o inversionistas de una empresa la situación financiera de la misma ,sin comprometer la información o que otros tengan acceso ella.

La aplicación web permite a los administrativos de una empresa cifrar la información que sera enviada a los socios/inversionistas utilizando para ello el Cifrado Cesar, mencionado al inicio, cifrada la información sera enviada por los canales de comunicación permitidos , los socios recibirán la información cifrada y la aplicación web se encargara de descifrarla ,utilizando de nuevo el Cifrado Cesar,para tener el reporte de manera legible.

Para poder ejecutar la aplicación es necesario seguir la siguiente liga:
[Cifrado César](https://rebe-san.github.io/MEX-008-Cipher/src/index.html)


#### Definición del producto

- Quiénes son los principales usuarios del producto:  
Los usuarios son el personal administrativo o contable y socios o inversionistas de una empresa.
- Cuáles son los objetivos de estos usuarios en relación con tu producto:  
El objetivo es mantener de forma confidencial e ilegible para terceros ,los reportes de estados financieros de una determinada empresa, los cuales solo pueden ser leídos por el personal autorizado a quien se le brinda una llave de seguridad para poder tener acceso a ellos junto con la información cifrada.

- Cómo crees que el producto que estás creando está resolviendo sus problemas:  
Debido a que la información de la situación financiera de una empresa puede usarse para cometer fraudes o ilícitos , la información esta cifrada y solo puede ser leída por la persona autorizada que haya pedido el reporte para conocer la situación de la empresa en la que esta invirtiendo, lo cual evita mal uso de la información.

#### Interfaz de usuario (UI)

La interfaz permite al usuario:
- Elegir entre Cifrar o Descifrar un reporte.
- Escribir el reporte o información que queremos cifrar.
- Elegir una llave de seguridad ( _offset_ en el Cifrado Cesar) indicando cuántas posiciones queremos que el cifrado desplace hacia la derecha cada carácter del reporte.
- Ver el resultado del reporte cifrado.
- Insertar un reporte a descifrar.
- Elegir una llave de seguridad ( _offset_ en el Cifrado Cesar) indicando cuántas posiciones queremos que el descifrado desplace cada carácter hacia la izquierda del reporte.
- Ver el resultado del reporte descifrado.


#### Diseño de experiencia de usuario (User Experience Design):

- Ideación  
Lo primero fue pensar en que situaciones se podría implementar el Cifrado Cesar para poder darle una utilidad practica.  
Las primeras ideas que surgieron fueron realizar una aplicación web para un videojuego donde se utilizara el cifrado , después la idea fue realizar una aplicación para mensajes secretos entre adolescentes o niñas , con el fin de compartir secretos.  
Finalmente la idea que fue tomada para el desarrollo del proyecto fue una aplicación para cifrar y descifrar información financiera de una empresa.

- Prototipado (sketching)  
Se realizo el prototipado en papel y se le dio interactividad a través de la aplicación [Marvel][Prototipo en Marvel] para poder visualizar el flujo de la página web y se realizo el [Sketch][Prototipo en Figma] en Figma con la finalidad de ver la apariencia/diseño de la página web.    
[Prototipo en Figma](https://www.figma.com/proto/HoZlqWnKvU3JMbza26I9yzYT/Sketch?node-id=4%3A7&scaling=min-zoom)
[Prototipo en Marvel](https://marvelapp.com/)

- Pruebas con usuarios (User Testing) e Iteración.  
El User Testing se realizo solo a tres personas las cuales comentaron la falta de un botón de regreso al menú , así como la falta de instrucciones en la parte de codificar. Ya no se realizo un nuevo sketch on las modificaciones propuestas ,sino se decidió aplicar directamente estos cambios al proyecto.
