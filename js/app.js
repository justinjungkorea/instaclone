// var weaponsList = ["AK-47", "Gun", "Machete", "Knife"];
// var countries = ["Korea", "Japan", "Greece", "Colombia"];
//
// var soldier = {
//   name: "Nicolas",
//   weapon: weaponsList[2],
//   country: countries[3],
//   isDead: false,
//   shoot: function() {
//     console.log("Pew Pew");
//   },
//   Hello: function(person) {
//     console.log("Hello" + person + " My name is " + this.name);
//   }
// };
//
// function multiply(one, two) {
//   return one * two;
// }
//
// function sum(one, two) {
//   return one + two;
// }

$(document).ready(function() {
  var $heart = $(".heart");

  $heart.click(function() {
    var $likes = $(".photo__likes");
    var likesnumber = parseInt($likes.html());

    if ($(this).hasClass("fa-heart-o")) {
      ++likesnumber;
    } else {
      --likesnumber;
    }
    $likes.html(likesnumber);

    $(this).toggleClass("fa-heart-o");
    $(this).toggleClass("fa-heart heart-click");
  })

  var $comment = $(".comment");

  $comment.click(function() {
    var $comment_number = $(".photo__comment--number");
    var commentNumber = parseInt($comment_number.html());

    if ($(this).hasClass("fa-comment-o")) {
      ++commentNumber;
    } else {

    }
    $comment_number.html(commentNumber);

    $(this).toggleClass("fa-comment-o");
    $(this).toggleClass("fa-comment comment-click");
  })

  var $button = $(".baaam");
  var $feedbutton = $(".bam");
  var $overlay = $(".profileOverlay");
  var $feedoverlay = $(".FeedOverlay");

  $button.click(function() {
    $overlay.fadeIn(500);
  });

  $feedbutton.click(function() {
    $feedoverlay.fadeIn(500);
  });




  var $cancel = $(".cancel__button");
  var $newcancel = $(".profileOverlay i");
  var $newfeedcancel = $(".FeedOverlay i");
  var $feedcancel = $(".feed__cancel");

  $cancel.click(function() {
    $overlay.fadeOut(500);
  });

  $newcancel.click(function() {
    $overlay.fadeOut(500);
  });

  $feedcancel.click(function() {
    $feedoverlay.fadeOut(500);
  });

  $newfeedcancel.click(function() {
    $feedoverlay.fadeOut(500);
  });







});
