// Write a JavaScript program which compute, the average marks of the following students Then, this average is used to determine the corresponding grade.

// John

// 80

// Bill

// 77

// David

// 68

// Ryan

// 88

// Nick

// 95

 

// <60

// F

// <70

// D

// <80

// C

// <90

// B

// <100

// A

 // let students = [ 80, 77, 68, 88, 95 ], summary = 0, mark, averageMark = 0 ;

 // for ( let i = 0; i < students.length; i++) {
 // 	summary += students[i];
 // }
 // averageMark = summary / students.length ;

 // if ( averageMark < 60 ) {
 // 	mark = 'F' ;
 // } else if ( averageMark < 70 ) {
 // 	mark = 'D' ;
 // } else if ( averageMark < 80 ) {
 // 	mark = 'C' ;
 // } else if ( averageMark < 90 ) {
 // 	mark = 'B' ;
 // } else {
 // 	mark = 'A' ;
 // } 
 //  document.write(`Average Mark - ${averageMark} - ${mark}`)



// 2. Write a JavaScript program to sum the multiples of 3 or 5 under 1000.
	
// let sum = 0;	

// 	 for( let i = 0; i <= 1000; i++) {

// 	 		if ( i % 3 == 0 || i % 5 == 0 ) {
// 	 			sum += i;
// 	 		}
// 	 }
// 	 console.log(sum);

 

// 3. Write a JavaScript program to construct the following pattern, using a nested for loop.

// * 

// * * 

// * * * 

// * * * * 

// * * * * *

// let ins = "  *";

//  for ( let i = 0; i < 5; i++ ) {
//  	for ( let j = 0; j < 5; j++ ) {
//  		if ( i >= j) {
//  		 document.write(ins);
//  		}
//  	}
//  	document.write("<br />");
//  }