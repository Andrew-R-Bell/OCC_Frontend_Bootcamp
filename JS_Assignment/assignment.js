/*
> 90 A
80 to 89 B
70 to 79 C
60 to 69 D
< 60 F
*/

let score = parseInt(prompt("Enter the score:"));
let grade = "";
let emote = ":)";

// Grade Scores
if (score >= 90) {
    	grade = "A"; 
	emote = "    (:D)";    
} 
else if (score < 90 && score >=  80) {
    	grade = "B"; 
	emote = "    (:))";	
}
else if (score < 80 && score >=  70) {
	grade = "C"; 
	emote = "    (:|)";
}
else if (score < 70 && score >=  60) {
    	grade = "D"; 
	emote = "    (:/)";
}
else {
    	grade = "F"; 
	emote = "    :(";
}

document.getElementById("GradeOutput").innerHTML = `You received a Grade: ${grade} ${emote}`;	
 
// console.log(score);