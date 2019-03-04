function randInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

$.when( $.ready ).then(function() {
  for (i=0; i<10; i++) {
    var rot = "rotateX(" + randInt(50, 95).toString() + "deg)";
    console.log(rot);
    var con = $("<div>", {id: i.toString(), "class": "container"});
    var x = randInt(0, 800).toString() + "px";
    var y = randInt(0, 600).toString() + "px";
    con.css({"left": x, "top": y});
    con.css({"transform": rot});
    var hov = $("<div>", {"class": "hover-container"});

    var dur = Math.random();
    if (dur < 0.3) { dur = 0.3 };
    dur = dur.toString() + 's';

    var img = 'url("wings/wing' + i + '.png")';

    var lwg = $("<div>", {"class": "left wing"});
    var rwg = $("<div>", {"class": "right wing"});
    lwg.css({"animation-duration": dur, "background-image": img});
    rwg.css({"animation-duration": dur, "background-image": img});

    var bdy = $("<div>", {"class": "body"});
    var hed = $("<div>", {"class": "head"});
    hov.append(lwg);
    hov.append(rwg);
    //hov.append(bdy);
    //hov.append(hed);
    con.append(hov);
    $("body").append(con);
  }
});
