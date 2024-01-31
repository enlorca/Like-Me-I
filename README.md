Desafio de backend donde se crea un servidor que disponibilice las rutas GET y POST para consultas y guardar los posts en una base de datos PostgreSQL con uso de paquete pg. ENERO 2024

■ Se utiliza el frontend proporcionado para el desafio, pero solo se sube el backend al repositorio.

■ Se utiliza el puerto 3000 según instrucciones.

■ Se utiliza dotenv para proporcionar las credenciales.

■ Tuve problemas con mi instalación de PostgreSQL. Aunque todo funciona en mi maquina de manera correcta, puede haber un error que no encuentro desde mi computador. 

■ Comandos para PostgreSQL especificados según desafio:

CREATE DATABASE likeme;

CREATE TABLE posts (id SERIAL, titulo VARCHAR(25), img VARCHAR(1000), descripcion VARCHAR(255), likes INT);