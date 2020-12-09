
/**
 * Objects are key value pair data structures
 * 
 */

student1 = {
    fname: 'Bastin',
    lname: 'Robin',
    dept: 'CSE',
    gender: 'male'
};

student2 = {
    fname: 'Jack',
    lname: 'Tommy',
    dept: 'CSE',
    gender: 'male'
};

student3 = {
    fname: 'Mike',
    lname: 'Dion',
    dept: 'EEE',
    gender: 'male'
};

student4 = {
    fname: 'Sam',
    lname: 'Hans',
    dept: 'CSE',
    gender: 'female'
};

student5 = {
    fname: 'krik',
    lname: 'Robin',
    dept: 'MECH',
    gender: 'female'
};

students = [student1, student2, student3, student4, student5];


// students.forEach(student => {
//     console.log(student['fname'], student['lname'], student['dept'], student['gender']);
// });


console.log(Object.keys(student1));
console.log(Object.values(student1));

/* Day 1 assignment :- 
2. Write a class which should take with inputs `width` and `height` and class should contain a method called `area()`
   which should return the area of given dimensions.
*/ 
 
   console.log('Day1 assignment below');
        class box
                {
                  constructor(lenght,height)
                        { this.lenght = lenght;
                          this.height = height;
                        }
                    
                    get get_area() 
                        {
                         return this.area_of_box();
                        }
                    area_of_box()
                    {
                        return this.lenght*this.height;  
                    }
                }
               const ins= new box (5,2);
               console.log(`area of box is :` +ins.get_area);



