
 let flag1 =false;
   function display(){
    flag1=true;

    Show1();
  
    }
    


    function Show1(){
     
if(flag1==true){
      setInterval(()=>{
   
            console.log("hello ji");
        
        let a= new Date();
        let date=a.toLocaleDateString();
    
        
        let dom12 = a.getDay();
    
    
        let hr=document.getElementById('hour').value;
        let min = document.getElementById('minute').value;
        let ap = document.getElementById('pm').value;
        let data34 = document.getElementById('day').value;
        let data344 = document.getElementById('pm').value;
        console.log(data34);
    
       let text=  "";
       switch(data34){
    
    
    
    
        case 'sunday':
            text=0;
            break;
            case 'monday':
                text=1;
                break;
            
                
                case 'tuesday':
                    text=2;
                    break;
            
                    
                    case 'wednesday':
                        text=3;
                        break;
            
                        
                        case 'thursday':
                            text=4;
                            break;
            
                            
                            case 'friday':
                                text=5;
                                break;
            
                                
                                case 'saturday':
                                    text=6;
                                    break;
            
                                 
       }
         let pom = a.getHours()<12? 'am':'pm';

         if(a.getHours() >12){
          
            a.getHours() = a.getHours() -12;

         }
       //console.log( pom == data344);
       
    
            if(hr==a.getHours() && min == a.getMinutes() && (text == dom12) && (pom == data344)){
               
                alarm(); 
             }
      
        },1000);
    }
           
    }


  function  stopAlarm1(){
    flag1=false;
    }
   

    function alarm(){
        let aud=document.getElementById('audio1');
        aud.play();
    }