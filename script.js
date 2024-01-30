function firstWord(s) {
  // your code here
	s=s.trim();
	s1 = s.split(" ");
	if(s1.length>0){
		return s1[0];
	}
	return "";
}
// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));



