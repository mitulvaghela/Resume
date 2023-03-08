
// 1. Hoisting
//
// let a=5;
// var a = 10;

// b(30);
// // console.log(this);
// function b(x) {
//     console.log('aa befrore', a);
//     a = 50;
//     a();
//     function a() { console.log(x) };
    
// }


// let arr =[1,2]
// function test(array){
//   array.push(3);
// }
// test(arr)
// console.log(arr)

// for (let i=0;i<5;i++){
//     setTimeout(()=> {console.log(i);},0)
// }
// let foo = 'outer';
// function bar(func = x => foo) {
//     let foo = 'inner';
//     console.log(func()); // outer
// }
// bar();
// { // Enter a new scope

//     const identity = x => x;

//     // Here we are in the temporal dead zone of `MyClass`
//     let inst = new MyClass(); // ReferenceError

//     // Note the expression in the `extends` clause
//     class MyClass  {
//     }
// }



// function makeUser() { return { name: "John", ref: this }; }
// console.log(makeUser().ref);
// function beta(){
//     const a = {10;}
//      a = 20;

//     if(true){
//         let a = 20;
//         console.log('a inner block',a )
//     }

//     console.log('a',a )
// }

// beta();




// console.log(a);


//----------------  ---------------------- //

// fn => key -> 1 argument // key is sent again => return same result, without compute

// key + 'ldfjslf'

// function calculate(...key){
    
// } 
// function fn (){

//     let mp = new Map();
//     return function calc(...arg){
//         const uniqueId = arg.join(",");
//       if(!mp.has(uniqueId))
//           mp.set(uniqueId,calculate(arg));
//       return mp.get(uniqueId);
//     }
// }
// let call = fn();
// fn()(2);
// call(2);
  const data = {
     1:['a','b','a'],
      2:['c','b'],
       3:['a', 'd'],
       4:['a'],
    }
    const response = {
     'a':[1,3,4],
      'b':[1,2],
       'c':[2]
    }
        //   response 
        //   response[key].push(item);
    
    
    // for ( let item in data){
            
    //     let response=data[item].reduce(
    //             function(value,response){
    //                 response[value].push(item);
    //             }
    //         ,{});
    // }
    // let response ={};
     
    for( let item in data){
          data[item] = data[item].filter( (element,index,arr) => arr.indexOf(element) === index);   
    }

    const ans = Object.entries(data).reduce( function(response,item){
                const r1 = response;
                response = item[1].reduce( function(r1,value){
                    if( !(value in r1))
                     r1[value]= Array.from(item[0]);
                    else
                     r1[value].push(item[0]);
                    return r1;
                },r1);
                //  console.log(response);
                return response;
                  
    },{});
    console.log(ans);
    // Object.entries(data).forEach( function (item,index,array){
    //         console.log(item[1]);
    //       response=item[1].reduce(function(response,value){
    //          if(!(value in response))
    //          response[value]= Array.from(item[0]);
    //          else
    //          response[value].push(item[0]);
    //     console.log(response);
        
    //         },response);
    // })
        
        //    .map (  )
    //  console.log(ans);

// const call = fn();
// call(2);
// call(2);

// fn()(2)
// fn()(2)
