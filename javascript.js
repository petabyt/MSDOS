echo("Starting MS-DOS 7.1...");
echo("");
echo("Welcome to MS-DOS 7.10...");
echo("Copyright Microsoft Corp. All rights reserved.");
echo("");
echo("");
echo("You are now in MS-DOS 7.1 prompt.");
echo("");
var dir = "C:\\";
function echo(text) {
	document.getElementById('txt').innerHTML += "<span>" + text + "</span>" + "<br>";
}
setInterval(function() {
	$("#input").focus();
},10);
$(window).keypress(function(e) {
	document.getElementById("span").innerHTML = dir + ">";
    if (e.which === 13) {
    	var input = document.getElementById("input").value;
    	echo(dir + ">" + input);
    	if (input == "version") {
    		echo("Version 0.1");
    	} else if (input == "/help") {
    		echo("version - Displays current version");
    		echo("time - Displays current time");
    	} else if (input == "time") {
    		var date = new Date();
    		echo(date.getTime());
    	} else if (input == "dir") {//11
    		echo("");
    		echo(" Volume in drive C is MSDOS710");
    		echo(" Volume Serial Number is 1234-5678");
    		echo(" Directory of C:\\");
    		echo("");
    		if (dir == "C:\\") {
    			echo("DOS71      DIR");
    			echo("GAMES      DIR");
    			echo("COMMAND    COM");
    			echo("QBASIC     EXE");
    		  //echo("CONFIG     SYS");
    		}  else if (dir == "C:\\DOS71") {
    			echo("SHUTDOWN   COM");
    		}  else if (dir == "C:\\GAMES") {
    			echo("TEST       EXE");
    		}
    		echo("");
    	} else if (input.startsWith("cd ")) {
    		var res = input.substring(3);
    		if (dir == "C:\\" && res == "dos71") {
    			dir = "C:\\DOS71"
    		} else if (dir == "C:\\" && res == "games") {
    			dir = "C:\\GAMES"
    		} else {
    			echo("Invalid directory");
    		}
    	} else if (input == "cls") {
    		cls()
    	} else if (input == "") {

        } else if (input.startsWith("echo ")) {
            echo(input.substring(5));
        } else {
    		if (dir == "C:\\GAMES" && input == "test.exe") {
    			echo("TEST.EXE... comming in 2018 :D");
    		} if (dir == "C:\\" && input == "qbasic.exe") {
                document.getElementById('qbasic').style.visibility = "visible";
            } else {
    			echo("Bad command or file name");
    		}
    	}
    	document.getElementById("input").value = "";
    	document.getElementById("span").innerHTML = dir + ">";
    }
});