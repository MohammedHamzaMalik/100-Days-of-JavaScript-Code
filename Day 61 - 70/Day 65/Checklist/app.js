var checkboxes = document.querySelectorAll("[type=checkbox]");
var lastCheck = -1;

for (let i = 0; i < checkboxes.length; i++) {
  whenClicked(checkboxes[i], i);
}

function whenClicked(box, idx) {
  box.addEventListener("click", function () {
    if (lastCheck >= 0) {
      if (event.shiftKey) {
        if (idx > lastCheck) {
          for (let i = idx; i >= lastCheck; i--) {
            checkboxes[i].checked = true;
          }
        } else {
          for (let i = idx; i <= lastCheck; i++) {
            checkboxes[i].checked = true;
          }
        }
      }
    }
    lastCheck = idx;
  });
}
