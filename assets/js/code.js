function Validation() {
    let inpObj = document.getElementById("dataInput");
    if (inpObj.checkValidity()) {
      document.getElementById("validationMessage").innerHTML = Validation.validationMessage ;
    } else {
      document.getElementById("validationMessage").innerHTML = Validation.validationMessage;
    } 
} 



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


    for (let i =0; i< dataFromUser.length; i++  ){
        for(var key in abbetNumbers) {

            if( dataFromUser[i]== key) {
                 dataFromUser[i]=abbetNumbers[key];
                 //console.log(abbetNumbers[key]);
                 //console.log(dataFromUser[i]);
                 document.getElementById("validationMessage").innerHTML=`Данные введены правильно`;

            }    else {
        
                
               /* dataFromUser[i]== ' ';
                dataFromUser.pop();
                
                console.log(dataFromUser);*/
                document.getElementById("validationMessage").innerHTML=`Введите корректное значение: от a до z и/или от 0 до 9 `;
            }
        }
  
    }

    dataFromUser= dataFromUser.join(" ");
   
    Result.innerHTML=` ${dataFromUser}`;
    
   

    /*сверяем буквенные символы пользователя с 1-й буквой в массиве letters. Если совпадают, то меняем букву пользователя на значение из массива */ 

   /* for (let i =0; i< dataFromUser.length; i++  ){
        for (let y; y<letters.length; y++){

            if (dataFromUser[i] == letters[y][0]) {
                dataFromUser[i] = letters[y][1];
                
               

                
                
            } else {

                dataFromUser.pop();
                dataInput.innerHTML = `${dataFromUser}`;
                console.log(dataFromUser);
                Result.innerHTML=`Введите корректное значение: от а до я и/или от 0 до 9 `;


            }
        }
    }*/
    
    

    
      
    

    
    

 

 

    // console.log(dataFromUser);
    //Result.innerHTML=` ${dataFromUser}`;

}

/*
let string = ' ';
if (dataFromUser[i]==string) {
     dataFromUser =  dataFromUser.join(' ');

}*/

//"^[a-zA-Z0-9]+$|(^[^':;.,%_$\(\)#\|№\-{}@\[\]^&?/\\\А-Яа-я\s]+$)"