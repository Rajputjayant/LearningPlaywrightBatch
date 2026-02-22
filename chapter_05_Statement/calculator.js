/*Write a program that calculates and displays the letter grade for a given numerical score (e.g., A, B, C, D, or F) based on the following grading scale:
 A: 90-100 
 B: 80-89 
 C: 70-79 
 D: 60-69 
 F: 0-59 */


let result=85;

if(result>90 && result<100){
    console.log("Grade A");
} else if(result>80 && result<89){
    console.log("Grade B");
} else if(result>70 && result<79){
    console.log("Grade C");
} else if(result>60 && result<69){
    console.log("Grade D");

} else if(result>0 && result<59){
    console.log("Grade F");

}else {
    console.log("Invalid Score")
}