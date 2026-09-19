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

const ICONS = {
  chevronLeft: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>`,
  chevronRight: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>`,
  sparkles: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"/></svg>`,
  plus: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>`,
  check: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
  bell: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>`,
  bellOff: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13.73 21a2 2 0 01-3.46 0"/><path d="M18.63 13A17.89 17.89 0 0118 8"/><path d="M6.26 6.26A5.86 5.86 0 006 8c0 7-3 9-3 9h14"/><path d="M18 8a6 6 0 00-9.33-5"/><line x1="1" y1="1" x2="23" y2="23"></line></svg>`,
  gear: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06A1.65 1.65 0 004.6 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06A1.65 1.65 0 009 4.6a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"></path></svg>`,
  star: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15 9 22 9.5 17 14.5 18.5 22 12 18 5.5 22 7 14.5 2 9.5 9 9 12 2"></polygon></svg>`,
  flame: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2c1 4-3 5-3 9a3 3 0 006 0c0-1-1-2-1-3 2 1 3 3 3 5a5 5 0 01-10 0c0-5 3-6 5-11z"></path></svg>`,
  flag: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22V4"></path><path d="M4 4h13l-2.5 4L17 12H4"></path></svg>`,
  sun: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2 12h2M20 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"></path></svg>`,
  trophy: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 21h8M12 17v4M7 4h10v4a5 5 0 01-10 0V4z"></path><path d="M17 5h3a3 3 0 01-3 4M7 5H4a3 3 0 003 4"></path></svg>`,
  download: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`
};

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

const STORAGE_TASKS_KEY = "agenda_tasks";
const STORAGE_API_KEY = "agenda_api_key";
const STORAGE_PROGRESS_KEY = "agenda_progress";
const MODEL = "claude-sonnet-5";

const state = {
  currentDate: new Date(),
  tasksByDate: {},
  aiLoading: false,
  aiError: "",
  aiNote: "",
  aiDraft: "",
  showAddForm: false,
  showSettings: false,
  online: typeof navigator === "undefined" ? true : navigator.onLine,
  notifPermission: (typeof Notification !== "undefined") ? Notification.permission : "unsupported",
  apiKey: "",
  installPrompt: null,
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

function scheduleNotifications() {
  scheduledTimeouts.forEach((id) => clearTimeout(id));
  scheduledTimeouts = [];
  if (state.notifPermission !== "granted") return;

  const today = dateKey(new Date());
  const list = state.tasksByDate[today] || [];
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
  if (events.length) state.justUnlocked = (state.justUnlocked || []).concat(events);
}

function dismissCelebration() {
  state.justUnlocked = [];
  render();
}

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

function toggleSettings() { state.showSettings = !state.showSettings; render(); }

function saveApiKey() {
  const input = document.getElementById("api-key-input");
  const val = input.value.trim();
  if (!val) return;
  localStorage.setItem(STORAGE_API_KEY, val);
  state.apiKey = val;
  state.showSettings = false;
  state.aiError = "";
  state.aiNote = "Clave de Anthropic guardada en este teléfono.";
  render();
}

function clearApiKey() {
  localStorage.removeItem(STORAGE_API_KEY);
  state.apiKey = "";
  state.aiNote = "";
  render();
}

function organizeLocally(text) {
  const clauses = text
    .split(/[\n;]+|(?:\s*,\s*)|\s+y\s+(?=[A-Za-zÁÉÍÓÚÑáéíóúñ])/i)
    .map((s) => s.trim())
    .filter((s) => s.length > 1);
  const used = new Set();
  const drafts = [];
  const priorityRe = /\b(examen|exam|entrega|urgente|importante|proyecto|exposici[oó]n|quiz|parcial|presentaci[oó]n)\b/i;

  function bump(time) {
    let t = time;
    let guard = 0;
    while (used.has(t) && guard < 24) {
      const [h, m] = t.split(":").map(Number);
      const next = h * 60 + m + 30;
      t = `${pad(Math.min(Math.floor(next / 60), 23))}:${pad(next % 60)}`;
      guard += 1;
    }
    used.add(t);
    return t;
  }

  function inferTime(clause, index) {
    const explicit = clause.match(/(?:a\s+las?\s+)?(\d{1,2})(?::(\d{2}))?\s*(a\.?\s*m\.?|p\.?\s*m\.?|am|pm|hrs?|h)?/i);
    if (explicit) {
      let h = Number(explicit[1]);
      const min = Number(explicit[2] ?? "0");
      const mer = (explicit[3] || "").toLowerCase().replace(/\./g, "").replace(/\s/g, "");
      if ((mer === "pm" || mer === "pm") && h < 12) h += 12;
      if ((mer === "am" || mer === "am") && h === 12) h = 0;
      if (!mer && h >= 1 && h <= 7 && /(tarea|estudio|noche|cena|leer)/i.test(clause)) h += 12;
      if (h > 23) h = 23;
      return `${pad(h)}:${pad(min)}`;
    }
    if (/madrug|temprano/i.test(clause)) return "07:30";
    if (/desayuno/i.test(clause)) return "07:30";
    if (/ejercicio|deporte|gym|correr|entren/i.test(clause)) return "07:00";
    if (/examen|parcial|quiz/i.test(clause)) return "08:00";
    if (/clase|escuela|colegio/i.test(clause)) return "08:00";
    if (/almuerzo|comida|mediod[ií]a/i.test(clause)) return "14:00";
    if (/tarde/i.test(clause)) return "16:00";
    if (/tarea|estudio|lectura|ensayo|reporte/i.test(clause)) return "16:00";
    if (/noche|cena/i.test(clause)) return "20:00";
    return `${pad(Math.min(9 + index, 21))}:00`;
  }

  function cleanTitle(clause) {
    const cleaned = clause
      .replace(/\b(a\s+las?\s+\d{1,2}(?::\d{2})?\s*(a\.?\s*m\.?|p\.?\s*m\.?|am|pm|hrs?|h)?)\b/gi, "")
      .replace(/\b(temprano|en la ma[nñ]ana|por la ma[nñ]ana|en la tarde|por la tarde|en la noche|por la noche|hoy|ma[nñ]ana|pasado ma[nñ]ana)\b/gi, "")
      .replace(/\s{2,}/g, " ")
      .trim()
      .replace(/^[\s,.\-:]+|[\s,.\-:]+$/g, "");
    if (!cleaned) return clause.trim();
    return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
  }

  clauses.forEach((clause, i) => {
    const title = cleanTitle(clause);
    if (title.length < 2) return;
    drafts.push({
      time: bump(inferTime(clause, i)),
      title: title.slice(0, 120),
      priority: priorityRe.test(clause)
    });
  });
  drafts.sort((a, b) => a.time.localeCompare(b.time));
  return drafts.slice(0, 16);
}

function parseAiTasks(raw) {
  const clean = raw.replace(/```json|```/g, "").trim();
  const start = clean.indexOf("[");
  const end = clean.lastIndexOf("]");
  if (start < 0 || end < 0) throw new Error("formato inesperado");
  const parsed = JSON.parse(clean.slice(start, end + 1));
  if (!Array.isArray(parsed)) throw new Error("formato inesperado");
  return parsed.filter((item) => item && item.time && item.title).map((item) => ({
    time: String(item.time),
    title: String(item.title).slice(0, 120),
    priority: !!item.priority
  }));
}

async function organizeWithAnthropic(text) {
  const now = new Date();
  const systemPrompt = `Eres un asistente que ayuda a un estudiante de bachillerato a organizar su día. A partir de lo que el usuario describe, crea una lista de tareas para el ${displayDate(state.currentDate)}. Responde ÚNICAMENTE con un arreglo JSON válido, sin texto adicional ni marcado de código. Cada tarea debe tener exactamente este formato: {"time":"HH:MM","title":"texto breve","priority":true o false}. Usa formato de 24 horas, ordena las tareas cronológicamente y evita traslapes. Si el usuario no da una hora, asigna una hora razonable según el contexto (ejercicio en la mañana o noche, tareas escolares en la tarde, exámenes temprano). Marca priority en true solo para lo más urgente, como exámenes o entregas. Hora actual de referencia: ${pad(now.getHours())}:${pad(now.getMinutes())}. Máximo 12 tareas.`;

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": state.apiKey,
      "anthropic-version": "2023-06-01",
      "anthropic-dangerous-direct-browser-access": "true"
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 1500,
      system: systemPrompt,
      messages: [{ role: "user", content: text }]
    })
  });

  const data = await response.json();
  if (data.error) throw new Error(data.error.message || "Error de la API");
  const textOut = (data.content || []).map((b) => b.text || "").join("\n");
  const parsed = parseAiTasks(textOut);
  if (!parsed.length) throw new Error("formato inesperado");
  return parsed;
}

function applyDrafts(parsed) {
  const key = dateKey(state.currentDate);
  const list = state.tasksByDate[key] ? [...state.tasksByDate[key]] : [];
  parsed.forEach((item) => {
    list.push({ id: makeId(), time: item.time, title: item.title, priority: !!item.priority, done: false, xpAwarded: false });
  });
  list.sort((a, b) => a.time.localeCompare(b.time));
  state.tasksByDate[key] = list;
  saveTasks();
  scheduleNotifications();
  state.aiDraft = "";
}

async function handleOrganize() {
  const textarea = document.getElementById("ai-input");
  const text = (textarea ? textarea.value : state.aiDraft).trim();
  if (!text || state.aiLoading) return;
  state.aiDraft = text;
  state.aiLoading = true;
  state.aiError = "";
  state.aiNote = "";
  render();

  try {
    let parsed = null;
    let source = "local";
    if (state.apiKey && navigator.onLine) {
      try {
        parsed = await organizeWithAnthropic(text);
        source = "anthropic";
      } catch (err) {
        parsed = null;
      }
    }
    if (!parsed || !parsed.length) {
      parsed = organizeLocally(text);
      source = "local";
    }
    if (!parsed.length) {
      state.aiError = "No pude armar tareas con eso. Prueba con más detalle.";
      return;
    }
    applyDrafts(parsed);
    state.aiNote = source === "anthropic"
      ? "Horario armado con Claude."
      : (state.apiKey && !navigator.onLine
        ? "Sin internet: usé el organizador local."
        : "Horario armado en el celular (sin gastar API).");
  } catch (e) {
    state.aiError = "No se pudo organizar tu día. Intenta de nuevo.";
  } finally {
    state.aiLoading = false;
    render();
  }
}

function exportData() {
  const blob = new Blob([JSON.stringify({ tasksByDate: state.tasksByDate, progress: state.progress }, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "mi-agenda.json";
  a.click();
  URL.revokeObjectURL(url);
}

function importData(input) {
  const file = input.files && input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(String(reader.result));
      if (!parsed.tasksByDate) throw new Error("bad");
      state.tasksByDate = parsed.tasksByDate;
      if (parsed.progress) state.progress = { ...state.progress, ...parsed.progress };
      saveTasks();
      saveProgress();
      scheduleNotifications();
      render();
    } catch (e) {
      state.aiError = "Ese archivo no parece una copia de la agenda.";
      render();
    }
  };
  reader.readAsText(file);
  input.value = "";
}

async function installApp() {
  if (!state.installPrompt) return;
  state.installPrompt.prompt();
  await state.installPrompt.userChoice;
  state.installPrompt = null;
  render();
}

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

function renderSettings() {
  return `
    <div class="settings-panel">
      <label class="settings-label">Clave de API de Anthropic (opcional)</label>
      <p class="settings-status">${state.apiKey ? "Clave guardada en este navegador." : "Sin clave: el organizador local funciona igual, incluso sin internet."}</p>
      <input type="password" id="api-key-input" placeholder="sk-ant-..." autocomplete="off" />
      <div class="add-form-actions">
        ${state.apiKey ? '<button type="button" class="btn-ghost" onclick="clearApiKey()">Borrar clave</button>' : "<span></span>"}
        <button type="button" class="btn-primary small" onclick="saveApiKey()">Guardar</button>
      </div>
      <p class="settings-note">Se guarda solo en este teléfono. Si hay datos móviles o wifi, usa Claude. Si no hay internet, arma el horario en el celular.</p>
    </div>
  `;
}

function renderNotifFooter() {
  if (state.notifPermission === "unsupported") return `<p class="muted">Tu navegador no soporta notificaciones.</p>`;
  if (state.notifPermission === "granted") return `<p class="notif-status">${ICONS.bell} Recordatorios mientras esta pestaña esté abierta.</p>`;
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
  const today = dateKey(new Date());
  const tasks = (state.tasksByDate[currentKey] || []).slice().sort((a, b) => a.time.localeCompare(b.time));
  const sub = state.apiKey
    ? (state.online ? "Con clave de Anthropic: usa Claude si hay internet." : "Sin internet: el organizador local sigue funcionando.")
    : "Escribe tus pendientes. Funciona con datos móviles, wifi o sin internet.";

  root.innerHTML = `
    <div class="agenda-shell">
      ${state.justUnlocked && state.justUnlocked.length ? renderCelebration() : ""}
      ${!state.online ? `<p class="offline-pill">Sin internet — puedes ver y marcar tareas. Organizar usa el modo local.</p>` : ""}
      <header class="header">
        <button class="nav-btn" onclick="goPrevDay()" aria-label="Día anterior">${ICONS.chevronLeft}</button>
        <div class="date-block">
          <h1>${displayDate(state.currentDate)}</h1>
          ${currentKey === today ? '<span class="today-badge">Hoy</span>' : ""}
        </div>
        <button class="nav-btn" onclick="goNextDay()" aria-label="Día siguiente">${ICONS.chevronRight}</button>
      </header>

      ${renderProgress()}

      <section class="ai-card">
        <div class="ai-card-head">
          ${ICONS.sparkles}
          <h2>Organiza mi día</h2>
          <button class="settings-btn" onclick="toggleSettings()" aria-label="Ajustes">${ICONS.gear}</button>
        </div>
        <p class="ai-card-sub">${sub}</p>
        ${state.showSettings ? renderSettings() : ""}
        <textarea id="ai-input" rows="3" placeholder="Ej. examen de mate mañana temprano, ejercicio a las 6, terminar tarea de historia..." oninput="state.aiDraft=this.value">${escapeHtml(state.aiDraft)}</textarea>
        ${state.aiError ? `<p class="ai-error">${escapeHtml(state.aiError)}</p>` : ""}
        ${state.aiNote ? `<p class="ai-ok">${escapeHtml(state.aiNote)}</p>` : ""}
        <button class="btn-primary" onclick="handleOrganize()" ${state.aiLoading ? "disabled" : ""}>
          ${state.aiLoading
            ? `<span class="thinking">Organizando<span class="dots"><span></span><span></span><span></span></span></span>`
            : "Organizar mi día"}
        </button>
      </section>

      <section class="paper">
        <div class="paper-margin"></div>
        <div class="paper-content">
          ${tasks.length === 0
            ? `<div class="empty-state">
                <p>Nada agendado ${currentKey === today ? "para hoy" : "para este día"} todavía.</p>
                <button class="btn-ghost" onclick="openAddForm()">${ICONS.plus} Agregar tarea</button>
              </div>`
            : `${tasks.map(renderTaskRow).join("")}
              <button class="btn-ghost add-more" onclick="openAddForm()">${ICONS.plus} Agregar tarea</button>`}
          ${state.showAddForm ? renderAddForm() : ""}
        </div>
      </section>

      ${renderBadges()}

      <footer class="notif-footer">${renderNotifFooter()}</footer>
      <div class="data-actions">
        <button class="btn-ghost" onclick="exportData()">${ICONS.download} Exportar</button>
        <label class="btn-ghost file-label">Importar<input type="file" accept="application/json" onchange="importData(this)" /></label>
      </div>
      ${state.installPrompt ? `<button class="btn-ghost install-btn" onclick="installApp()">Instalar en el celular</button>` : ""}
    </div>
  `;
}

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
  } catch (e) { /* default */ }
  try {
    state.apiKey = localStorage.getItem(STORAGE_API_KEY) || "";
  } catch (e) {
    state.apiKey = "";
  }

  window.addEventListener("online", () => { state.online = true; render(); });
  window.addEventListener("offline", () => { state.online = false; render(); });
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    state.installPrompt = e;
    render();
  });

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  }

  scheduleNotifications();
  render();
}

document.addEventListener("DOMContentLoaded", init);
