var BulbState = ["img/loff.jpg", "img/lon.jpg"];
var SwitchState = ["img/soff.png", "img/son.png"];
var Bulbs = [0, 0, 0];
var Switches = [0, 0, 0];

function playWithBulbs(x) {
		
	if (x == 1) {
		var Bulb = document.getElementById('b1');
		var Switch = document.getElementById('s1');
		Bulbs[1] = 1 - Bulbs[1];
		Switches[1] = 1 - Switches[1];

		Bulb.src = BulbState[Bulbs[1]];
		Switch.src = SwitchState[Switches[1]];
	} else if (x == 2) {
		var Bulb = document.getElementById('b2');
		var Switch = document.getElementById('s2');
		Bulbs[2] = 1 - Bulbs[2];
		Switches[2] = 1 - Switches[2];

		Bulb.src = BulbState[Bulbs[2]];
		Switch.src = SwitchState[Switches[2]];
	} else if (x == 0) {
		var Bulb = document.getElementsByClassName('bulb');
		var Switch = document.getElementsByClassName('switch');
		
		Bulbs[0] = 1 - Bulbs[0];
		Switches[0] = 1 - Switches[0];

		for (var i = 0; i < Bulb.length; ++i) {
			Bulbs[i+1] = Bulbs[0];
			Bulb[i].src = BulbState[Bulbs[0]];
		}

		for (var i = 0; i < Switch.length; ++i) {
			Switches[i] = Switches[0];
			Switch[i].src = SwitchState[Switches[0]];
		}
	}

}