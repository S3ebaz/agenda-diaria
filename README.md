# Mi Agenda

Agenda diaria para el celular. Ábrela desde cualquier navegador **con wifi o datos móviles**. Después de la primera visita, también funciona **sin internet** (tareas, XP e insignias).

**Página publicada:** [https://s3ebaz.github.io/agenda-diaria/](https://s3ebaz.github.io/agenda-diaria/)

## Cómo usarla en el teléfono

1. Abre el enlace con datos móviles o wifi.
2. En Chrome / Safari: **Agregar a pantalla de inicio** para que se vea como una app.
3. En **Organiza mi día**, escribe tus pendientes, por ejemplo:
   `examen de mate temprano, ejercicio a las 6, terminar tarea de historia`
4. Toca **Organizar mi día**.

## IA de Anthropic (opcional)

Si tienes una clave `sk-ant-...`:

1. Toca el engrane junto a “Organiza mi día”.
2. Pégala y guarda. Queda **solo en este navegador**, no en GitHub.

Con internet (wifi o datos) usa Claude Sonnet 5. **Sin internet o sin clave**, arma el horario en el celular. Las tareas ya guardadas siempre se pueden ver y marcar sin conexión.

La cuenta de Anthropic es de pago. Organizar un día suele costar fracciones de centavo. Si no quieres gastar, no pongas clave: el organizador local es suficiente.

## Datos

Las tareas, el nivel y las insignias se guardan en este navegador. Si cambias de teléfono o borras datos, se pierden. Por eso hay **Exportar** e **Importar**.

## Notificaciones

Solo suenan **mientras la pestaña (o la app instalada) esté abierta**. Un aviso con el teléfono bloqueado necesitaría un servidor de notificaciones, fuera de este proyecto simple.

## Archivos

```
agenda-diaria/
├── index.html
├── style.css
├── app.js
├── sw.js          → para usarla sin wifi después de la primera visita
├── manifest.json  → instalar en el celular
├── icon.svg
└── README.md
```
