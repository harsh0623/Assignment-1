let students=[{
    name:"Harsh",
    id:1,
    marks:{english:74,maths:95,science:67}
},
    {name:"Yash",
    id:2,
    marks:{english:64,maths:35,science:38}
},
   { name:"Hemant",
    id:3,
    marks:{english:98,maths:55,science:27}
},
    {name:"Saksham",
    id:4,
    marks:{english:68,maths:45,science:19}
},
    {name:"Saket",
    id:5,
    marks:{english:20,maths:69,science:55}
},
    {name:"Sumit",
    id:6,
    marks:{english:56,maths:37,science:67}
},
    {name:"Prashant",
    id:7,
    marks:{english:54,maths:67,science:78}
},
   { name:"Rohan",
    id:8,
    marks:{english:48,maths:75,science:87}
},
    {name:"Rohit",
    id:9,
    marks:{english:58,maths:77,science:32}
},
    {name:"Naveen",
    id:10,
    marks:{english:30,maths:25,science:31}
}];
for(let student of students){
student.averagemarks=(student.marks.english + student.marks.maths + student.marks.science)/3;
student.result=student.averagemarks>=33
 && student.marks.english>=33
 && student.marks.math>=33 
 && students.marks.science>=33 ? "Pass" :"Fail";
console.log(student)};

