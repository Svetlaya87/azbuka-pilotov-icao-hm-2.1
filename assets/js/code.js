


function azbukaPilotov() {


    let dataFromUser = dataInput.value;
    dataFromUser = dataFromUser.split('');

     /*введенные значения пользователя переводим к верхнему регистру*/
    for (let i=0; i< dataFromUser.length; i++  ) {
        
        dataFromUser[i]= dataFromUser[i].toLowerCase();
    
    }

    
 
    let abbetNumbers = {
     'a': 'Alfa',     //0
     'b': 'Bravo', //1
     'c': 'Charlie', //2
     'd': 'Delta', //3
     'e': 'Echo', //4
     'f': 'Foxtrot', //5
     'g': 'Golf', //6
     'h': 'Hotel', //7
     'i': 'India', //8
     'j': 'Juliet', //9
     'k': 'Kilo', //10
     'l': 'Lima', //11
     'm': 'Mike', //12
     'n': 'November', //13
     'o': 'Oscar', //14
     'p': 'Papa', //15
     'q': 'Quebec', //16
     'r': 'Romeo', //17
     's': 'Sierra', //18
     't': 'Tango', //19
     'u': 'Uniform', //20
     'v': 'Victor', //21
     'w': 'Washington', //22
     'x': 'Xray', //23
     'y': 'Yankee', //24
    'z': 'Zulu',//25
     
     
     '0': 'Zero',//26
     '1': 'One',//27
     '2': 'Two',//28
     '3': 'Three',//29
     '4': 'Four',//30
     '5': 'Five',//31
     '6': 'Six',//32
     '7': 'Seven',//33
     '8': 'Eight',//34
     '9': 'Niner',//35
    
    
    
    
    
    };

    //let letters = [...abbetNumbers];//

    //console.log(abbetNumbers);
    //if (dataFromUser[0] == letters[0][0]) {
        //dataFromUser[0] = letters[0][1];
    //}

    let answer = [];

    // for of  здесь i - значение, т.е [10,20,30] а в цикле for in значение i-это индексы(название ключей) -в массиве 0,1,2
    for (let i of dataFromUser ){ 
        
        console.log(i);

            if( abbetNumbers[i] ) {

                answer.push(abbetNumbers[i]);

                console.log(abbetNumbers[i]);
                 
                 
                 document.getElementById("validationMessage").innerHTML=`Данные введены правильно`;

            }    else {
        
              
                document.getElementById("validationMessage").innerHTML=`Введите корректное значение: от a до z и/или от 0 до 9 `;
            }
        
  
    }

    answer= answer.join(" ");
   
    Result.innerHTML=` ${answer}`;
    
   

    
    
      
    

    
    

 


}

