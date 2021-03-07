

var Userchoice = prompt('Welcome To Sufian Cafe & Resturant \n Please type your order : \n 1- cola.\n 2- orange.');


while(Userchoice != 'cola' && Userchoice != 'orange')
{
     Userchoice = prompt('Welcome To Sufian Cafe & Resturant \n Please type your order : \n 1- Cola.\n 2- Orange.');
}

    var imgOrder = '';
    if(Userchoice == "cola")
        {
            imgOrder = '<img src="images/Coca-Cola-glass.jpg" class="" alt="Coca" style="width: 100px; height: 300;">';
        }    
    
    else
        {
              imgOrder = '<img src="images/Orange-Juice-2-of-2.webp" class="" alt="Orange" style="width: 100px; height: 300;">';  
        }
                                                                
    



var numOfItems = prompt('How many cups do you want?');

    var result = '';
    
    

    for(var i = 1; i <= numOfItems; i++)
    {
        result = result + imgOrder + i;
        
    }
    document.write(result);
    