//Drag
$(".file").draggable({ containment: "parent" });
$(".window").draggable({ containment: "parent" });

//Cursor
$("body").css({ cursor: "url(/img/select.cur), default" });
$(".file").css({ cursor: "url(/img/pointer.cur), pointer" });
$(".file a").css({ cursor: "url(/img/pointer.cur), pointer" });
$(".ribbon ul li a").css({ cursor: "url(/img/pointer.cur), pointer" });
$(".fileBtn").css({ cursor: "url(/img/pointer.cur), pointer" });
$(".goBtn").css({ cursor: "url(/img/pointer.cur), pointer" });
$(".viewBtn").css({ cursor: "url(/img/pointer.cur), pointer" });

//Events
$(".background").click(function () {
  $(".selected").removeClass("selected");
  $(".show").removeClass("show");
});

$(".file").click(function () {
  $(".selected").removeClass("selected");
  $(this).addClass("selected");
});

$(".file").dblclick(function (e) {
  console.log("doubleclick");
  fileName = e.target.childNodes[3].innerText;
  openFile(fileName, e);
});

$(".showAbtMe").click(function (e) {
  openFile("About-Me.txt", e);
  $(".show").removeClass("show");
});

$(".showProj").click(function (e) {
  openFile("Projects", e);
  $(".show").removeClass("show");
});

$(".fileBtn").click(function () {
  $(".show").removeClass("show");
  $(".fileMenu").addClass("show");
});

//Mobile
$(".file").doubletap(function (e) {
  console.log("double tap");
  fileName = e.target.childNodes[3].innerText;
  openFile(fileName, e);
});

//Functions
function openFile(fileName, e) {
  let app;
  let appType;

  if (fileName === "About-Me.txt") {
    app = "./aboutme/";
    appType = "website";
  }
  if (fileName === "Projects") {
    app = "./projects/";
    appType = "website";
  }
  if (fileName === "Recycle Bin") {
    app = "./recyclebin";
    appType = "website";
  }
  if (fileName === "DO NOT OPEN!") {
    app = "../index.html";
    appType = "website";
  }
  if (fileName === "Resume.pdf") {
    return;
  }
  if (fileName === "Lola.png") {
    app = "./lola/lola.html";
    appType = "image";
  }
  if (fileName === "3D Sneaker") {
    app = "./3dsneaker";
    appType = "website";
  }
  if (e.target.classList.contains("tictactoe")) {
    app = "./tictactoe/tictactoe.html";
    appType = "website";
  }

  $(".desktop").append(
    `<div class="window ${appType}"><div class="window-ribbon"><div class="ribbon-item close">x</div><div class="ribbon-item minimize">-</div><div class="ribbon-item expand">+</div></div><div class="window-content"><iframe src="${app}"></iframe></div></div>`
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

  $(".window-ribbon").click(function () {
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
