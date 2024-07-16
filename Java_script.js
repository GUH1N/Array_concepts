// creating array
var array = [1,2,3,5,7];
console.log(array);

// Manipulation of array -----1
//push
array.push(11);
console.log(array);
//pop
array.pop();
console.log(array);
//unshift element
array.unshift(13);
console.log(array);
//shift element
array.shift();
console.log(array);

//array searching -----2
var name_list = ["Abinesh","Kaamesh","Olakanathan","Mukesh"];
console.log(name_list.indexOf("Abinesh"));

// using includes()
console.log(name_list.includes("Mukesh"));

//Array Filtering -----3
var TWD_list = ["Rick", "Daryl", "Michonne", "Carol", "Negan"];
// filtering by char size
var filteredList = TWD_list.filter(function(name) 
{
    return name.length >= 5;
});
console.log(filteredList);

//Array Sorting -----4
var TWD_list1 = ["Glenn","Migge","Clay","Jeo"];
var res_sort = TWD_list1.sort();
console.log(res_sort);

//Array Finding -----5
var numbers = [2, 4, 6, 8, 10];
var find_num = numbers.find(function(number) {
    if (number === 6)
    {
        return true;
    }
    else{
        return false;
    }
});
console.log(find_num);

//Array Mapping -----6
var numbers1 = [1, 2, 3, 4, 5];
var square = numbers1.map(function(number) {
    return number * number;
});
console.log(square);

