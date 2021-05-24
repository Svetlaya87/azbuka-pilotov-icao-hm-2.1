function azbukaPilotov() {


    let dataFromUser = dataInput.value;
    dataFromUser = dataFromUser.split('');

     /*введенные значения пользователя переводим к верхнему регистру*/
     for (let i=0; i< dataFromUser.length; i++  ) {
        
        dataFromUser[i]= dataFromUser[i].toUpperCase();
    
}

    let numbers = [
        'Zero',
        'One',
        'Two',
        'Three',
        'Four',
        'Five',
        'Six',
        'Seven',
        'Eight',
        'Niner'

    ]

    // разбираем Zero и т.д на  [Z,e,r,o] ит.д 
    for (let y=0; y < numbers.length; y++) {
        numbers[y] = numbers[y].split('');

    }


    let abbet = ['Alfa', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot', 'Golf', 'Hotel', 'India', 'Juliet', 'Kilo', 'Lima', 'Mike', 'November', 'Oscar', 'Papa', 'Quebec', 'Romeo', 'Sierra', 'Tango', 'Uniform', 'Victor', 'Washington', 'Xray', 'Yankee', 'Zulu'];

    let letters = [...abbet];

    

    
   

    /*эллемент массива letters переводим из строки в подмассив Alfa в [A, l, f, a]  */
    for (let y=0; y < letters.length; y++) {
        letters[y] = letters[y].split('');

    }




    /*сверяем буквенные символы пользователя с 1-й буквой в массиве letters. Если совпадают, то меняем букву пользователя на значение из массива */ 

    for (let i =0; i< dataFromUser.length; i++  ){
        for (let y=0; y < letters.length; y++){

            if (dataFromUser[i] == letters[y][0]) {
                dataFromUser[i] = letters[y];
               

                
                
            }
        }
    }
    
    

    
    /* проверяем цифры */
    for (let i =0; i< dataFromUser.length; i++  ){
        for (let y=0; y < numbers.length; y++){

            if (dataFromUser[i] == y) {
                
                dataFromUser[i] = numbers[y];
               

                
                
            }
        }
    }
    


    console.log('Numbers', numbers);

    // склеиваем все
    for (let i=0; i< dataFromUser.length; i++  ) {
        
        dataFromUser[i]=dataFromUser[i].join('');
    
    }

    let string =  dataFromUser.join(' ');


    console.log(string);

    
    
/*

let dataFromUserToLowerCase=0;
    for (let i=0; i<length.dataFromUser; i++) {

        for (let j=0; dataFromUser[i] == letters[j][1] ; j++ ) {



            if ( dataFromUser[j] == letters[i] ) {
                dataFromUser[j] = dataFromUser[j].toLowerCase();
            }    else {

            }
            


            

            // Result.innerHTML=` ${dataFromUser}`;
        }
    
    } */  

     console.log(dataFromUser);
     Result.innerHTML=` ${string}`;

}

