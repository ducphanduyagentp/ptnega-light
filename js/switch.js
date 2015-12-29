var BulbState = ["img/loff.jpg", "img/lon.jpg"];
var SwitchState = ["img/soff.png", "img/son.png"];
var Bulbs = [0, 0, 0];
var Switches = [0, 0, 0];
var Bulb;
var Switch;

function playWithBulbs(x) {
		
	if (x == 1) {
		Bulb = document.getElementById('b1');
		Switch = document.getElementById('s1');
		switchBulb(1);

	} else if (x == 2) {
		Bulb = document.getElementById('b2');
		Switch = document.getElementById('s2');
		switchBulb(2);

	} else if (x == 0) {
		Bulb = document.getElementsByClassName('bulb');
		Switch = document.getElementsByClassName('switch');
		
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

function switchBulb(x) {
	Bulbs[x] = 1 - Bulbs[x];
	Switches[x] = 1 - Switches[x];

	Bulb.src = BulbState[Bulbs[x]];
	Switch.src = SwitchState[Switches[x]];
}