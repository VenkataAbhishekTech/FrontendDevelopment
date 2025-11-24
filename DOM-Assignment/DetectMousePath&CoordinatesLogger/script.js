// Elements
const trackingBox = document.getElementById("box");
const clientXEl = document.getElementById("clientX");
const clientYEl = document.getElementById("clientY");
const relativeXEl = document.getElementById("relativeX");
const relativeYEl = document.getElementById("relativeY");
const coordsLogList = document.getElementById("coordsLog");
const clearDotsButton = document.getElementById("clearDotsBtn");
const clearLogButton = document.getElementById("clearLogBtn");

// Configuration
const MAX_LOG_ENTRIES = 20;

// Internal state
const pathLog = []; 

/**
 * Format coordinate numbers to 0 decimal places for display
 * @param {number} n
 * @returns {string}
 */
function fmt(n) {
  return Math.round(n).toString();
}

/**
 * Update the live coords display and append to the path log
 * @param {MouseEvent} event
 */
function handleMouseMove(event) {
  const clientX = event.clientX;
  const clientY = event.clientY;

  const rect = trackingBox.getBoundingClientRect();
  const relativeX = clientX - rect.left;
  const relativeY = clientY - rect.top;

  if (relativeX < 0 || relativeY < 0 || relativeX > rect.width || relativeY > rect.height) {
    return;
  }

  clientXEl.textContent = fmt(clientX);
  clientYEl.textContent = fmt(clientY);
  relativeXEl.textContent = fmt(relativeX);
  relativeYEl.textContent = fmt(relativeY);
  pathLog.unshift({ rx: relativeX, ry: relativeY, cx: clientX, cy: clientY });
  if (pathLog.length > MAX_LOG_ENTRIES) pathLog.pop();

  renderLog();
}

function renderLog() {
  coordsLogList.innerHTML = "";
  pathLog.forEach((entry, idx) => {
    const li = document.createElement("li");
    li.textContent = `#${pathLog.length - idx}: rel(${fmt(entry.rx)}, ${fmt(entry.ry)}) — client(${fmt(entry.cx)}, ${fmt(entry.cy)})`;
    coordsLogList.appendChild(li);
  });
}

/**
 * Handle double-click: drop a red dot at the click position (relative to box)
 * @param {MouseEvent} event
 */
function handleDoubleClick(event) {
  event.preventDefault();

  const rect = trackingBox.getBoundingClientRect();
  const relativeX = event.clientX - rect.left;
  const relativeY = event.clientY - rect.top;

  if (relativeX < 0 || relativeY < 0 || relativeX > rect.width || relativeY > rect.height) {
    return;
  }

  const dot = document.createElement("div");
  dot.className = "red-dot";

  dot.style.left = `${relativeX}px`;
  dot.style.top = `${relativeY}px`;

  trackingBox.appendChild(dot);
}


function clearDots() {
  const dots = trackingBox.querySelectorAll(".red-dot");
  dots.forEach(d => d.remove());
}


function clearLog() {
  pathLog.length = 0;
  renderLog();
  clientXEl.textContent = "-";
  clientYEl.textContent = "-";
  relativeXEl.textContent = "-";
  relativeYEl.textContent = "-";
}

// Attach listeners
trackingBox.addEventListener("mousemove", handleMouseMove);
trackingBox.addEventListener("dblclick", handleDoubleClick);

// Buttons
clearDotsButton.addEventListener("click", clearDots);
clearLogButton.addEventListener("click", clearLog);

// Accessibility: focus the box so some keyboard users can interact easily
trackingBox.addEventListener("focus", () => trackingBox.style.outline = "2px solid rgba(0,123,255,0.25)");
trackingBox.addEventListener("blur", () => trackingBox.style.outline = "none");
