onEvent("button1", "click", function() {
setScreen("screen2");
});
onEvent("button2", "click", function() {
  setScreen("screen3");
});
function results() {
  if ("dropdown3" == "Walk towards elves") {
    setText("area3", "The elves quietly stare at you, then say 'can we help you?'");
  }
}
results();
