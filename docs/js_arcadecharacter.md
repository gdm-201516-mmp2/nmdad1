JavaScript Arcade Character
======================

|Info|  |
|----|---|
|Olod|New Media Design & Development I|
|Auteur(s)|Philippe De Pauw - Waterschoot, Jonas Pottie|
|Opleiding|Bachelor in de Grafische en digitale media|
|Academiejaar|2015-16|

***

Arcade Character
----------------

**HTML**:

```
<div class="avatar"></div>
```

**CSS**:

```
body {
	background: rgba(0, 0, 0, 1);
}
.avatar {
	position: relative;
}
.bit {
	position: absolute;
	width: 20px;
	height: 20px;
	top: 0;
	left: 0;
	box-sizing: border-box;
	
	background: rgba(46, 204, 113, 0.1);
	border: 1px solid rgba(0, 0, 0, 1);
	
	transition:all 380ms ease-in-out 0s;
}
.bit--active {
	background: rgba(255, 255, 255, 1);
}
```

**JavaScript**:
```
(function() {
	//Declare function: createArcadeCharacter
	//n: amount of columns
	//cw: width of a bit or cell
	//ch: height of a bit or cell
	function createArcadeCharacter(n, cw, ch) {
		//Get the .avatar container (html div element)
		var container = document.querySelector('.avatar');
		//Variables
		var tempStr = '', t = 0, l = 0, b = 0;
		//Create pattern
		var pattern = createArcadeCharacterPattern(n);
		//Loop through bits, iterate n*n times
		for(var i = 0;i < (n * n);i++) {
			b = pattern.charAt(i);
			tempStr += '<div class="bit';	
			//Check if bit is active or on
			if(b == 1) {
				tempStr += ' bit--active';
			}
			tempStr += '"';
			tempStr += ' style="';
			tempStr += 'top:' + t + 'px;';
			tempStr += 'left:' + l + 'px;';
			tempStr += 'width:' + cw + 'px;';
			tempStr += 'height:' + ch + 'px;';
			tempStr += '">';
			tempStr += '</div>';
			
			if ((i > 0) && (i + 1) % n == 0) {
				t = 0;
				l += cw;
			} else {
				t += ch;
			}
			
		}
		//Write to the DOM
		container.innerHTML = tempStr;
	}
	
	function updateArcadeCharacter() {
		//Callback function: createArcadeCharacter
		//Don't forget the value for the arguments
		createArcadeCharacter(5, 20, 20);
		
		//Animate Arcade Character
		window.setTimeout(function() { updateArcadeCharacter(); }, 60);
	}
	
	//Callback function: createArcadeCharacter
	updateArcadeCharacter();
	
	//Declare function: createArcadeCharacterPattern
	//Create random Arcade Character Pattern
	//n: amount of columns
	function createArcadeCharacterPattern(n) {
		var patternStr = '', reflectionPatterStr = '', patternStrLength = Math.ceil(n / 2) * n;
		for(var i = 0;i < patternStrLength;i++) {
			patternStr += Math.round(Math.random());
		}
		for(var i = 0;i < (patternStrLength / n) - 1;i++) {
			reflectionPatterStr = patternStr.substring((i * n), (i * n) + n) + reflectionPatterStr;
		}
		return patternStr + reflectionPatterStr;
	}
	
})();
```

Arcade Characters Wall
----------------------
**HTML**:
```
<div class="arcadewall"></div>
```

**CSS**:
```
body {
    background: rgba(0, 0, 0, 1);
}
.arcade {
    position: relative;
		float:left;
		display:block;
}
.bit {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 0;
    left: 0;
    box-sizing: border-box;

    background: rgba(46, 204, 113, 0.1);
    border: 1px solid rgba(0, 0, 0, 1);

    transition:all 380ms ease-in-out 0s;
}
.bit--active {
    background: rgba(255, 255, 255, 1);
}
```
**JavaScript**:
```
(function() {
	
	//Declare function: createArcadeCharacter
	//n: amount of columns
	//cw: width of a bit or cell
	//ch: height of a bit or cell
	function createArcadeCharacter(n, cw, ch) {
		//Variables
		var tempStr = '', t = 0, l = 0, b = 0;
		//Create pattern
		var pattern = createArcadeCharacterPattern(n);
		//Loop through bits, iterate n*n times
		for(var i = 0;i < (n * n);i++) {
			b = pattern.charAt(i);
			tempStr += '<div class="bit';	
			//Check if bit is active or on
			if(b == 1) {
				tempStr += ' bit--active';
			}
			tempStr += '"';
			tempStr += ' style="';
			tempStr += 'top:' + t + 'px;';
			tempStr += 'left:' + l + 'px;';
			tempStr += 'width:' + cw + 'px;';
			tempStr += 'height:' + ch + 'px;';
			tempStr += '">';
			tempStr += '</div>';
			
			if ((i > 0) && (i + 1) % n == 0) {
				t = 0;
				l += cw;
			} else {
				t += ch;
			}
			
		}
		//Return Arcade Character As String
		return tempStr;
	}	
	
	//Declare function: createArcadeCharacterPattern
	//Create random Arcade Character Pattern
	//n: amount of columns
	function createArcadeCharacterPattern(n) {
		var patternStr = '', reflectionPatterStr = '', patternStrLength = Math.ceil(n / 2) * n;
		for(var i = 0;i < patternStrLength;i++) {
			patternStr += Math.round(Math.random());
		}
		for(var i = 0;i < (patternStrLength / n) - 1;i++) {
			reflectionPatterStr = patternStr.substring((i * n), (i * n) + n) + reflectionPatterStr;
		}
		return patternStr + reflectionPatterStr;
	}
	
	//Declare function: createArcadeCharacterWall
	//Create Arcade Characters Wall
	//n: amount of characters
	//an: amount of columns per character
	//bw: width of a bit
	//bh: height of a bit
	function createArcadeCharacterWall(n, an, bw, bh) {
		//Get the .arcade container (html div element)
		var container = document.querySelector('.arcadewall');
		//Variables
		var tempStr = '', acw = bw*an, ach = bh*an, at = 0, al = 0;
		//Loop through bits, iterate n*n times
		for(var i = 0;i < n;i++) {
			tempStr += '<div class="arcade"';
			tempStr += ' style="';
			tempStr += ' width:' + acw + 'px;';
			tempStr += ' height:' + ach + 'px;';
			tempStr += ' margin:' + bw + 'px;';
			tempStr += '">';
			tempStr += createArcadeCharacter(an, bw, bh);
			tempStr += '</div>';
		}
		//Write To The DOM
		container.innerHTML = tempStr;
	}
	
	function updateArcadeChracterWall() {
		//Callback function: createArcadeCharacterWall
		//Don't forget the value for the arguments
		createArcadeCharacterWall(40, 7, 3, 3);
		
		//Animate Arcade Characters Wall
		window.setTimeout(function() { updateArcadeChracterWall(); }, 260);
	}
	
	//Callback function: updateArcadeChracterWall
	updateArcadeChracterWall();
	
})(); 
```