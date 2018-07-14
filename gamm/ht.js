$(document).ready(function () {
    console.log("DOM lodded");
    setInterval(function () {
        var rand = Math.floor(Math.random() * 10) % 4 + 1;

        if (rand == 1) {
            $('#obstacles').append($('<img src="opp0.gif_c200" class="obstacle">').animate(
                { "right": "90%" }, 5000, "linear",
                function () {
                    $(this).remove();
                })
            );
        }
        if (rand == 2) {
            $('#obstacles').append($('<img src="flyingbird.gif" class="flying">').animate(
                { "right": "90%" }, 5000, "linear",
                function () {
                    $(this).remove();
                })
            );
        }
        if (rand == 3) {
            $('#obstacles').append($('<img src="coin.jpg" class="coinup">').animate(
                { "right": "90%" }, 6000, "linear",
                function () {
                    $(this).remove();
                })
            );
        }
        if (rand == 4) {
            $('#obstacles').append($('<img src="coin.jpg" class="coindn">').animate(
                { "right": "90%" }, 6000, "linear",
                function () {
                    $(this).remove();
                })
            );
        }


    }, 2000);

    $(document).keydown(function (a) {
        var x = a.keyCode;
        if (x == 38) {//key up
            $('#trex')
                .animate({ bottom: "5px" }, 500, 'linear')
        }
        else if (x == 40) {     //key down
            $('#trex')
                .animate({ bottom: "-250px" }, 500, 'linear')
        }
    });
   /* updateHighScore = function () {
        if (Number(hi_score_disp.text()) < score) {
            hi_score_disp.text(score);
        }
    }*/
    //start_time = new Date();
    score = 0;
    score_disp = $("#score");
    //hi_score_disp = $("#hi-score")
    reset = function () {
        score_disp.text("00");
        score = 0;
       // start_time = new Date();
    }
    setInterval(function () {
        var trex_pos = $("#trex").position();
        $(".obstacle").each(function () {
            var obstacle_pos = $(this).position();
            //console.log("obstacle")
            //console.log(trex_pos, obstacle_pos);
            if ((trex_pos.left + 45 >= obstacle_pos.left) && (trex_pos.top + 40 >= obstacle_pos.top)) {
                //console.log(trex_pos, obstacle_pos)
               // updateHighScore();
                //background.pause(); 
                //end_sound.play();
                reset();
                alert("You Loose");
            }
            //background.play();
        });
    }, 100);


    //}, 100);
    setInterval(function () {
        var trex_pos = $("#trex").position();
        $(".flying").each(function () {
            var flying_pos = $(this).position();
            if ((flying_pos.left <= trex_pos.left + 65 && flying_pos.left > trex_pos.left) && (trex_pos.top + 40 >= flying_pos.top && trex_pos.top <= flying_pos.top + 40)) {
               // updateHighScore();
                reset();
                alert("You Loose");
            }
        });

    }, 100);
    setInterval(function () {
        //console.log(score_disp.val());
        var current_time = new Date();
        var trex_pos = $("#trex").position();
        $(".coinup").each(function () {
            var coinup_pos = $(this).position();
            if ((trex_pos.left + 60 >= coinup_pos.left) && (trex_pos.top + 40 >= coinup_pos.top)) {
                score = score + 1;
               // updateHighScore();

            }
        });
        //console.log(coinup_pos);
        $(".coindn").each(function () {
            var coindn_pos = $(this).position();
            if ((trex_pos.left + 45 >= coindn_pos.left) && (trex_pos.top + 40 >= coindn_pos.top)) {
                score = score + 1;
               // updateHighScore();
            }

        });


        score_disp.text(score);


    }, 700);
}
);
