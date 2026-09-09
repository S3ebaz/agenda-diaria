// ---------- Utilidades de fecha ----------
function pad(n) { return n.toString().padStart(2, "0"); }

function dateKey(d) { return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`; }

function addDays(d, delta) { const nd = new Date(d); nd.setDate(nd.getDate() + delta); return nd; }

function capitalize(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

function displayDate(d) {
  const weekday = d.toLocaleDateString("es-MX", { weekday: "long" });
  const day = d.getDate();
  const month = d.toLocaleDateString("es-MX", { month: "long" });
  return capitalize(`${weekday}, ${day} de ${month}`);
}

function makeId() {
  return (typeof crypto !== "undefined" && crypto.randomUUID)
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str == null ? "" : String(str);
  return div.innerHTML;
}

// ---------- Iconos (SVG en línea, sin dependencias externas) ----------
const ICONS = {
  chevronLeft: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>`,
  chevronRight: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>`,
  sparkles: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"/></svg>`,
  plus: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>`,
  check: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
  bell: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>`,
  bellOff: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13.73 21a2 2 0 01-3.46 0"/><path d="M18.63 13A17.89 17.89 0 0118 8"/><path d="M6.26 6.26A5.86 5.86 0 006 8c0 7-3 9-3 9h14"/><path d="M18 8a6 6 0 00-9.33-5"/><line x1="1" y1="1" x2="23" y2="23"></line></svg>`,
  star: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15 9 22 9.5 17 14.5 18.5 22 12 18 5.5 22 7 14.5 2 9.5 9 9 12 2"></polygon></svg>`,
  flame: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2c1 4-3 5-3 9a3 3 0 006 0c0-1-1-2-1-3 2 1 3 3 3 5a5 5 0 01-10 0c0-5 3-6 5-11z"></path></svg>`,
  flag: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22V4"></path><path d="M4 4h13l-2.5 4L17 12H4"></path></svg>`,
  sun: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2 12h2M20 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"></path></svg>`,
  trophy: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 21h8M12 17v4M7 4h10v4a5 5 0 01-10 0V4z"></path><path d="M17 5h3a3 3 0 01-3 4M7 5H4a3 3 0 003 4"></path></svg>`
};

// ---------- Niveles e insignias ----------
function levelFromXp(xp) { return Math.floor(xp / 100) + 1; }

const BADGES = [
  { id: "primera-tarea", name: "Primer paso", desc: "Completa tu primera tarea", icon: "check", check: (s) => s.completedCount >= 1 },
  { id: "diez-tareas", name: "10 tareas", desc: "Completa 10 tareas en total", icon: "star", check: (s) => s.completedCount >= 10 },
  { id: "veinticinco-tareas", name: "25 tareas", desc: "Completa 25 tareas en total", icon: "star", check: (s) => s.completedCount >= 25 },
  { id: "cincuenta-tareas", name: "50 tareas", desc: "Completa 50 tareas en total", icon: "star", check: (s) => s.completedCount >= 50 },
  { id: "cien-tareas", name: "100 tareas", desc: "Completa 100 tareas en total", icon: "star", check: (s) => s.completedCount >= 100 },
  { id: "dia-perfecto", name: "Día perfecto", desc: "Termina todas las tareas de un día", icon: "flame", check: (s) => s.perfectDays.length >= 1 },
  { id: "racha-3", name: "Racha de 3", desc: "3 días perfectos", icon: "flame", check: (s) => s.perfectDays.length >= 3 },
  { id: "racha-7", name: "Racha de 7", desc: "7 días perfectos", icon: "flame", check: (s) => s.perfectDays.length >= 7 },
  { id: "prioridad", name: "Sin pendientes urgentes", desc: "Completa 5 tareas importantes", icon: "flag", check: (s) => s.priorityCompletedCount >= 5 },
  { id: "madrugador", name: "Madrugador", desc: "Completa una tarea antes de las 8:00", icon: "sun", check: (s) => s.earlyBirdDone },
  { id: "nivel-5", name: "Nivel 5", desc: "Llega a nivel 5", icon: "trophy", check: (s) => levelFromXp(s.xp) >= 5 },
  { id: "nivel-10", name: "Nivel 10", desc: "Llega a nivel 10", icon: "trophy", check: (s) => levelFromXp(s.xp) >= 10 }
];

// ---------- Estado ----------
const STORAGE_TASKS_KEY = "agenda_tasks";
const STORAGE_PROGRESS_KEY = "agenda_progress";

const state = {
  currentDate: new Date(),
  tasksByDate: {},
  aiError: "",
  showAddForm: false,
  notifPermission: (typeof Notification !== "undefined") ? Notification.permission : "unsupported",
  progress: {
    xp: 0,
    completedCount: 0,
    priorityCompletedCount: 0,
    perfectDays: [],
    earlyBirdDone: false,
    unlockedBadges: [],
    lastSeenLevel: 1
  },
  justUnlocked: []
};

let scheduledTimeouts = [];

function saveTasks() {
  localStorage.setItem(STORAGE_TASKS_KEY, JSON.stringify(state.tasksByDate));
}

function saveProgress() {
  localStorage.setItem(STORAGE_PROGRESS_KEY, JSON.stringify(state.progress));
}

// ---------- Notificaciones (mientras la pestaña esté abierta) ----------
function scheduleNotifications() {
  scheduledTimeouts.forEach((id) => clearTimeout(id));
  scheduledTimeouts = [];
  if (state.notifPermission !== "granted") return;

  const todayKey = dateKey(new Date());
  const list = state.tasksByDate[todayKey] || [];
  const now = new Date();

  list.forEach((task) => {
    if (task.done) return;
    const [h, m] = task.time.split(":").map(Number);
    const taskTime = new Date();
    taskTime.setHours(h, m, 0, 0);
    const reminderTime = new Date(taskTime.getTime() - 5 * 60000);
    const target = reminderTime > now ? reminderTime : (taskTime > now ? now : null);
    if (!target) return;
    const delay = target.getTime() - now.getTime();
    const id = setTimeout(() => {
      new Notification("Agenda", { body: `${task.title} a las ${task.time}` });
    }, delay);
    scheduledTimeouts.push(id);
  });
}

async function requestNotifications() {
  if (typeof Notification === "undefined") {
    state.notifPermission = "unsupported";
    render();
    return;
  }
  const perm = await Notification.requestPermission();
  state.notifPermission = perm;
  scheduleNotifications();
  render();
}

// ---------- Progreso: XP, insignias y celebraciones ----------
function awardTaskCompletion(task, key, list) {
  if (!task.xpAwarded) {
    state.progress.xp += task.priority ? 15 : 10;
    state.progress.completedCount += 1;
    if (task.priority) state.progress.priorityCompletedCount += 1;
    task.xpAwarded = true;
    const hour = Number(task.time.split(":")[0]);
    if (hour < 8) state.progress.earlyBirdDone = true;
  }
  const allDone = list.length > 0 && list.every((t) => t.done);
  if (allDone && !state.progress.perfectDays.includes(key)) {
    state.progress.perfectDays.push(key);
    state.progress.xp += 20;
  }
}

function checkProgressEvents() {
  const events = [];
  const currentLevel = levelFromXp(state.progress.xp);
  if (currentLevel > state.progress.lastSeenLevel) {
    events.push(`¡Subiste a nivel ${currentLevel}!`);
    state.progress.lastSeenLevel = currentLevel;
  }
  BADGES.forEach((b) => {
    if (!state.progress.unlockedBadges.includes(b.id) && b.check(state.progress)) {
      state.progress.unlockedBadges.push(b.id);
      events.push(`Nueva insignia: ${b.name}`);
    }
  });
  if (events.length) {
    state.justUnlocked = (state.justUnlocked || []).concat(events);
  }
}

function dismissCelebration() {
  state.justUnlocked = [];
  render();
}

// ---------- Acciones sobre tareas ----------
function goPrevDay() { state.currentDate = addDays(state.currentDate, -1); render(); }
function goNextDay() { state.currentDate = addDays(state.currentDate, 1); render(); }

function toggleTask(id) {
  const key = dateKey(state.currentDate);
  const list = state.tasksByDate[key] || [];
  const task = list.find((t) => t.id === id);
  if (!task) return;
  const wasDone = task.done;
  task.done = !task.done;

  if (!wasDone && task.done) {
    awardTaskCompletion(task, key, list);
    checkProgressEvents();
  }

  state.tasksByDate[key] = [...list];
  saveTasks();
  saveProgress();
  scheduleNotifications();
  render();
}

function deleteTask(id) {
  const key = dateKey(state.currentDate);
  state.tasksByDate[key] = (state.tasksByDate[key] || []).filter((t) => t.id !== id);
  saveTasks();
  scheduleNotifications();
  render();
}

function openAddForm() { state.showAddForm = true; render(); }
function closeAddForm() { state.showAddForm = false; render(); }

function submitAddForm(e) {
  e.preventDefault();
  const time = document.getElementById("new-time").value;
  const title = document.getElementById("new-title").value.trim();
  const priority = document.getElementById("new-priority").checked;
  if (!title) return;
  const key = dateKey(state.currentDate);
  const list = state.tasksByDate[key] ? [...state.tasksByDate[key]] : [];
  list.push({ id: makeId(), time, title, priority, done: false, xpAwarded: false });
  list.sort((a, b) => a.time.localeCompare(b.time));
  state.tasksByDate[key] = list;
  state.showAddForm = false;
  saveTasks();
  scheduleNotifications();
  render();
}

// ---------- Organizador local (sin API, sin internet) ----------
function parseTimeFromSegment(seg) {
  let m = seg.match(/\b(\d{1,2}):(\d{2})\s*(am|pm|a\.m\.|p\.m\.)?\b/i);
  if (m) {
    let h = Number(m[1]);
    const min = m[2];
    const suf = (m[3] || "").toLowerCase().replace(/\./g, "");
    if (suf === "pm" && h < 12) h += 12;
    if (suf === "am" && h === 12) h = 0;
    return { time: `${pad(h)}:${min}`, match: m[0] };
  }
  m = seg.match(/a las\s*(\d{1,2})\s*(am|pm|a\.m\.|p\.m\.|de la tarde|de la noche|de la mañana)?/i);
  if (m) {
    let h = Number(m[1]);
    const suf = (m[2] || "").toLowerCase();
    if (/pm|tarde|noche/.test(suf) && h < 12) h += 12;
    if (/am/.test(suf) && h === 12) h = 0;
    return { time: `${pad(h)}:00`, match: m[0] };
  }
  m = seg.match(/\b(\d{1,2})\s*(de la tarde|de la noche|de la mañana)\b/i);
  if (m) {
    let h = Number(m[1]);
    const suf = m[2].toLowerCase();
    if (/tarde|noche/.test(suf) && h < 12) h += 12;
    return { time: `${pad(h)}:00`, match: m[0] };
  }
  if (/tempran[oa]/i.test(seg)) return { time: "07:00", match: null };
  if (/medio ?d[ií]a/i.test(seg)) return { time: "12:00", match: null };
  if (/en la mañana|de la mañana/i.test(seg)) return { time: "08:00", match: null };
  if (/en la tarde|de la tarde/i.test(seg)) return { time: "16:00", match: null };
  if (/en la noche|de la noche|por la noche/i.test(seg)) return { time: "20:00", match: null };
  return null;
}

function organizeText(text) {
  const segments = text
    .split(/\n|;|\.\s+|,|\by\b|\btambién\b|\badem[aá]s\b/gi)
    .map((s) => s.trim())
    .filter(Boolean);

  let autoHour = Math.max(new Date().getHours() + 1, 8);
  const results = [];

  segments.forEach((segment) => {
    const parsed = parseTimeFromSegment(segment);
    let seg = segment;
    let time;
    if (parsed) {
      time = parsed.time;
      if (parsed.match) seg = seg.replace(parsed.match, "");
    } else {
      time = `${pad(autoHour)}:00`;
      autoHour = autoHour >= 21 ? 21 : autoHour + 1;
    }
    const priority = /examen|entrega|urgente|importante|prueba|proyecto final|presentaci[oó]n/i.test(seg);
    let title = seg
      .replace(/^\s*(y|también|además|tengo que|tengo|debo|necesito)\s+/i, "")
      .replace(/\s{2,}/g, " ")
      .replace(/^[,.\s-]+|[,.\s-]+$/g, "")
      .trim();
    if (!title) return;
    results.push({ time, title: capitalize(title), priority });
  });

  return results;
}

function handleOrganize() {
  const textarea = document.getElementById("ai-input");
  const text = textarea.value.trim();
  if (!text) return;

  const parsed = organizeText(text);
  if (parsed.length === 0) {
    state.aiError = "No pude identificar tareas ahí. Intenta separarlas con comas.";
    render();
    return;
  }

  const key = dateKey(state.currentDate);
  const list = state.tasksByDate[key] ? [...state.tasksByDate[key]] : [];
  parsed.forEach((t) => {
    list.push({ id: makeId(), time: t.time, title: t.title, priority: t.priority, done: false, xpAwarded: false });
  });
  list.sort((a, b) => a.time.localeCompare(b.time));
  state.tasksByDate[key] = list;
  state.aiError = "";
  saveTasks();
  scheduleNotifications();
  textarea.value = "";
  render();
}

// ---------- Render ----------
function renderTaskRow(t) {
  return `
    <div class="task-row ${t.done ? "done" : ""}">
      <button class="task-check" onclick="toggleTask('${t.id}')" aria-label="${t.done ? "Marcar como pendiente" : "Marcar como hecho"}">${t.done ? ICONS.check : ""}</button>
      <span class="task-time">${escapeHtml(t.time)}</span>
      <span class="task-title">${t.priority ? '<span class="priority-dot"></span>' : ""}${escapeHtml(t.title)}</span>
      <button class="task-delete" onclick="deleteTask('${t.id}')" aria-label="Eliminar tarea">&times;</button>
    </div>
  `;
}

function renderAddForm() {
  return `
    <form class="add-form" onsubmit="submitAddForm(event)">
      <input type="time" id="new-time" value="08:00" required />
      <input type="text" id="new-title" placeholder="¿Qué tienes que hacer?" required />
      <label class="priority-check"><input type="checkbox" id="new-priority" /> Importante</label>
      <div class="add-form-actions">
        <button type="button" class="btn-ghost" onclick="closeAddForm()">Cancelar</button>
        <button type="submit" class="btn-primary small">Agregar</button>
      </div>
    </form>
  `;
}

function renderNotifFooter() {
  if (state.notifPermission === "unsupported") return `<p class="muted">Tu navegador no soporta notificaciones.</p>`;
  if (state.notifPermission === "granted") return `<p class="notif-status">${ICONS.bell} Recordatorios activados mientras esta pestaña esté abierta.</p>`;
  if (state.notifPermission === "denied") return `<p class="muted">${ICONS.bellOff} Notificaciones bloqueadas. Actívalas desde los ajustes del navegador.</p>`;
  return `<button class="btn-ghost" onclick="requestNotifications()">${ICONS.bell} Activar recordatorios</button>`;
}

function renderCelebration() {
  return `
    <div class="celebration">
      ${state.justUnlocked.map((e) => `<p>${escapeHtml(e)}</p>`).join("")}
      <button class="btn-ghost celebration-btn" onclick="dismissCelebration()">Genial</button>
    </div>
  `;
}

function renderProgress() {
  const level = levelFromXp(state.progress.xp);
  const xpIntoLevel = state.progress.xp % 100;
  return `
    <div class="progress-card">
      <div class="progress-top">
        <span class="level-label">Nivel ${level}</span>
        <span class="xp-label">${xpIntoLevel}/100 XP</span>
      </div>
      <div class="progress-bar"><div class="progress-fill" style="width:${xpIntoLevel}%"></div></div>
    </div>
  `;
}

function renderBadges() {
  return `
    <section class="badges-section">
      <h3 class="badges-title">Insignias</h3>
      <div class="badges-grid">
        ${BADGES.map((b) => {
          const unlocked = state.progress.unlockedBadges.includes(b.id);
          return `
            <div class="badge ${unlocked ? "unlocked" : "locked"}" title="${escapeHtml(b.desc)}">
              <div class="badge-icon">${ICONS[b.icon]}</div>
              <span class="badge-name">${escapeHtml(b.name)}</span>
            </div>
          `;
        }).join("")}
      </div>
    </section>
  `;
}

function render() {
  const root = document.getElementById("app");
  const currentKey = dateKey(state.currentDate);
  const todayKey = dateKey(new Date());
  const tasks = (state.tasksByDate[currentKey] || []).slice().sort((a, b) => a.time.localeCompare(b.time));

  root.innerHTML = `
    <div class="agenda-shell">
      ${state.justUnlocked && state.justUnlocked.length ? renderCelebration() : ""}
      <header class="header">
        <button class="nav-btn" onclick="goPrevDay()" aria-label="Día anterior">${ICONS.chevronLeft}</button>
        <div class="date-block">
          <h1>${displayDate(state.currentDate)}</h1>
          ${currentKey === todayKey ? '<span class="today-badge">Hoy</span>' : ""}
        </div>
        <button class="nav-btn" onclick="goNextDay()" aria-label="Día siguiente">${ICONS.chevronRight}</button>
      </header>

      ${renderProgress()}

      <section class="ai-card">
        <div class="ai-card-head">
          ${ICONS.sparkles}
          <h2>Organiza mi día</h2>
        </div>
        <p class="ai-card-sub">Separa tus pendientes con comas y les asignamos un horario automático.</p>
        <textarea id="ai-input" rows="3" placeholder="Ej. examen de mate a las 8, ejercicio a las 6, tarea de historia en la tarde"></textarea>
        ${state.aiError ? `<p class="ai-error">${escapeHtml(state.aiError)}</p>` : ""}
        <button class="btn-primary" onclick="handleOrganize()">Organizar mi día</button>
      </section>

      <section class="paper">
        <div class="paper-margin"></div>
        <div class="paper-content">
          ${tasks.length === 0
            ? `<div class="empty-state">
                <p>Nada agendado ${currentKey === todayKey ? "para hoy" : "para este día"} todavía.</p>
                <button class="btn-ghost" onclick="openAddForm()">${ICONS.plus} Agregar tarea</button>
              </div>`
            : `${tasks.map(renderTaskRow).join("")}
              <button class="btn-ghost add-more" onclick="openAddForm()">${ICONS.plus} Agregar tarea</button>`}
          ${state.showAddForm ? renderAddForm() : ""}
        </div>
      </section>

      ${renderBadges()}

      <footer class="notif-footer">${renderNotifFooter()}</footer>
    </div>
  `;
}

// ---------- Inicio ----------
function init() {
  try {
    const raw = localStorage.getItem(STORAGE_TASKS_KEY);
    state.tasksByDate = raw ? JSON.parse(raw) : {};
  } catch (e) {
    state.tasksByDate = {};
  }
  try {
    const rawProgress = localStorage.getItem(STORAGE_PROGRESS_KEY);
    if (rawProgress) state.progress = { ...state.progress, ...JSON.parse(rawProgress) };
  } catch (e) {
    // usar progreso por defecto
  }
  scheduleNotifications();
  render();
}

document.addEventListener("DOMContentLoaded", init);
