# Mi Agenda

Agenda diaria con niveles e insignias para organizar tareas. No necesita instalación, ni cuenta, ni clave de API: son 3 archivos (`index.html`, `style.css`, `app.js`) que puedes abrir directo o publicar en GitHub Pages.

## Subirla a GitHub

1. Crea un repositorio nuevo en GitHub (puede ser público o privado).
2. Sube estos 4 archivos (`index.html`, `style.css`, `app.js`, `README.md`) a la raíz del repositorio.
3. Ve a **Settings → Pages**, en "Source" elige la rama `main` y la carpeta `/root`, y guarda.
4. En un par de minutos tu agenda estará disponible en una URL tipo `https://tu-usuario.github.io/tu-repositorio/`.

Esa URL funciona desde cualquier navegador con conexión a internet, con datos móviles o wifi.

## Cómo funciona "Organiza mi día"

Ya no depende de ninguna API externa ni de internet: es un organizador local hecho con reglas simples, que corre en tu propio navegador.

- Escribe tus pendientes separados por comas: `examen de mate a las 8, ejercicio a las 6, tarea de historia en la tarde`.
- Detecta horas explícitas (`a las 6`, `6:30pm`) y también periodos del día (`temprano`, `en la tarde`, `en la noche`).
- Marca como "importante" las tareas que mencionan palabras como *examen*, *entrega*, *urgente* o *prueba*.
- Si no encuentra una hora para algo, le asigna un horario libre automáticamente.

No es una inteligencia artificial real leyendo e interpretando tu intención como antes — es más simple y directo, pero no necesita clave, ni cuenta, ni gastar nada.

## Niveles e insignias

- Cada tarea completada da 10 XP (15 si es "Importante"). Terminar todas las tareas de un día da 20 XP extra.
- Cada 100 XP subes de nivel.
- Hay 12 insignias por desbloquear: por cantidad de tareas completadas, por días perfectos seguidos, por tareas importantes, por madrugar y por nivel alcanzado.
- Todo esto se guarda junto con tus tareas en el navegador.

## Limitaciones honestas

- **Notificaciones**: solo suenan mientras tengas la pestaña abierta en el navegador (puedes dejarla de fondo). Un recordatorio con el teléfono bloqueado o la app cerrada necesitaría un servidor propio que envíe notificaciones push, lo cual queda fuera de este proyecto simple.
- **Guardado**: las tareas, el nivel y las insignias se guardan en el navegador de tu teléfono/compu (`localStorage`). Si cambias de navegador o borras datos de navegación, se pierden. No hay sincronización entre dispositivos.
- **Organizador local**: al no entender lenguaje natural de verdad, funciona mejor si separas tus pendientes claramente con comas.

## Estructura

```
mi-agenda/
├── index.html   → estructura de la página
├── style.css    → estilos
├── app.js       → lógica: tareas, guardado, notificaciones, organizador local y progreso
└── README.md
```
