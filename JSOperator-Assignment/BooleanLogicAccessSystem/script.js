function checkAccess() {
  const isDoorLocked = document.getElementById("door").value === "true";
  const isWindowClosed = document.getElementById("window").value === "true";
  const isAlarmOn = document.getElementById("alarm").value === "true";
  const isOwnerInside = document.getElementById("owner").value === "true";

  const secure =
    isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;

  document.getElementById("output").innerText = secure ? "Secure" : "Unsafe";
}
