//Drag
$(".file").draggable({ containment: "parent" });
$(".window").draggable({ containment: "parent" });

//Cursor
$("body").css({ cursor: "url(/img/select.cur), default" });
$(".file").css({ cursor: "url(/img/pointer.cur), pointer" });

//Events
$(".background").click(function () {
  $(".selected").removeClass("selected");
});

$(".file").click(function () {
  $(".selected").removeClass("selected");
  $(this).addClass("selected");
});

$(".file").dblclick(function (e) {
  fileName = e.target.childNodes[3].innerText;
  openFile(fileName);
});

//Functions
function openFile(fileName) {
  let app;

  if (fileName === "About-Me.txt") {
    app = "./aboutme/";
  }
  if (fileName === "Projects") {
    app = "./projects/";
  }
  if (fileName === "Recycle Bin") {
    app = "./recyclebin";
  }
  if (fileName === "DO NOT OPEN!") {
    app = "../index.html";
  }
  if (fileName === "Resume.pdf") {
    return;
  }
  if (fileName === "Lola.png") {
  }

  $(".desktop").append(
    `<div class="window website"><div class="window-ribbon"><div class="ribbon-item close">x</div><div class="ribbon-item minimize">--</div><div class="ribbon-item expand">+</div></div><div class="window-content" id="window-content"><iframe width="100%" height="100%" src="${app}"></iframe></div></div>`
  );

  //Cursor
  $(".ribbon-item").css({ cursor: "url(/img/pointer.cur), pointer" });

  $(".window").on("dragstart", function () {
    $(this).css({ cursor: "url(/img/select.cur), default" });
  });

  //Events
  $(".close").click(function (e) {
    e.target.parentNode.parentNode.remove();
  });

  $(".window-content").click(function () {
    $(".front").removeClass("front");
    $(this).addClass("front");
  });

  $(".window").draggable({ containment: "parent" });
}

//Time
(function () {
  function checkTime(i) {
    return i < 10 ? "0" + i : i;
  }

  function startTime() {
    var today = new Date(),
      h = checkTime(today.getHours()),
      AmOrPm = h >= 12 ? "pm" : "am",
      h = h % 12 || 12,
      m = checkTime(today.getMinutes()),
      s = checkTime(today.getSeconds());
    $(".time").html(h + ":" + m + ":" + s + " " + AmOrPm);
    t = setTimeout(function () {
      startTime();
    }, 500);
  }
  startTime();
})();
