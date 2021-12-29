 // local storage to store window load
 var winLoadCount = localStorage.getItem('on_load_counter');
 if (winLoadCount === null) {
     winLoadCount = 0;
 }
 winLoadCount++;
 localStorage.setItem("on_load_counter", winLoadCount);
 document.getElementById("widLoad").innerHTML = localStorage.getItem("on_load_counter");

  // local storage to store all clicks on the letters buttons
  nn = 1;
 localStorage.setItem("coun",nn)

 
   
 function asd(nn)
{
     // for deleted old chosed letters
     spans = document.getElementsByTagName('span');
     for(i=0;i<spans.length;i++)
      {
          let delSpan = spans[i];
          delSpan.style = "display:none"
      }

    let length = Number(nn);
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
    result = characters.charAt(Math.floor(Math.random() * 
    charactersLength));


    var sp = document.createElement("span");
    
    sp.style = "background-color: gray; border: 6px solid white;width:50px;height:30px;";

    // confirm lowercase to uppercase
    var t = document.createTextNode(result.toUpperCase());
    sp.appendChild(t);
    document.body.appendChild(sp);  
    }

    // local storage to store all clicks on the create button
    if (localStorage.clickcount) {
         localStorage.clickcount = Number(localStorage.clickcount)+1;
     } else {
         localStorage.clickcount = 1;
     }
     document.getElementById("demo").innerHTML = localStorage.clickcount;

 


spans = document.getElementsByTagName('span');
for(i=0;i<spans.length;i++)
{
       
 //$(spans[i]).on("click",'span' ,  ()=>{
    let ss =  spans[i]; 
     ss.onclick = ()=>{
         // local storage to store all clicks on the letters buttons
         nn++;
         localStorage.setItem("coun",nn)
         document.getElementById("letters").innerHTML = localStorage.getItem("coun");
         let l = ss.innerText;
         switch (l) {
         case 'A':
         case 'a':
             document.getElementById('h').innerText = "Atlantic Puffin";
             document.getElementById('im').src = "images/a.jpg";
             break;
         case 'B':
         case 'b':
             document.getElementById('h').innerText = "Bobcat";
             document.getElementById('im').src = "images/b.jpg";
             break;
         case 'C':
         case 'c':
             document.getElementById('h').innerText = "Cheetah"
             document.getElementById('im').src = "images/c.jpg";
             break;
         case 'D':
         case 'd':
             document.getElementById('h').innerText = "Dusky Dolphin"
             document.getElementById('im').src = "images/d.jpg";
             break;
         case 'E':
         case 'e':
             document.getElementById('h').innerText = "European Robin"
             document.getElementById('im').src = "images/e.jpg";
             break;
         case 'F':
         case 'f':
             document.getElementById('h').innerText = "Firefish"
             document.getElementById('im').src = "images/f.jpg";
             break;
         case 'G':
         case 'g':
             document.getElementById('h').innerText = "Green Turtle"
             document.getElementById('im').src = "images/g.jpg";
             break;
         case 'h':
         case 'H':
             document.getElementById('h').innerText = "Hippopotamus"
             document.getElementById('im').src = "images/h.jpg";
             break;
         case 'I':
         case 'i':
             document.getElementById('h').innerText = "Indri"
             document.getElementById('im').src = "images/i.jpg";
             break;
         case 'J':
         case 'j':
             document.getElementById('h').innerText = "Jumping Spider"
             document.getElementById('im').src = "images/j.jpg";
             break;
         case 'K':
         case 'k':
             document.getElementById('h').innerText = "Komodo Dragon"
             document.getElementById('im').src = "images/k.jpg";
             break;
         case 'L':
         case 'l':
             document.getElementById('h').innerText = "Lion"
             document.getElementById('im').src = "images/l.jpg";
             break;
         case 'M':
         case 'm':
             document.getElementById('h').innerText = "Marine Iguana"
             document.getElementById('im').src = "images/m.jpg";
             break;
         case 'N':
         case 'n':
             document.getElementById('h').innerText = "Nene Goose"
             document.getElementById('im').src = "images/n.jpg";
             break;
         case 'O':
         case 'o':
             document.getElementById('h').innerText = "Ocelot"
             document.getElementById('im').src = "images/o.jpg";
             break;
         case 'P':
         case 'p':
             document.getElementById('h').innerText = "Pronghorn"
             document.getElementById('im').src = "images/p.jpg";
             break;
         case 'Q':
         case 'q':
             document.getElementById('h').innerText = "Quetzal"
             document.getElementById('im').src = "images/q.jpg";
             break;
         case 'R':
         case 'r':
             document.getElementById('h').innerText = "Roseate Spoonbill"
             document.getElementById('im').src = "images/r.jpg";
             break;
         case 'S':
         case 's':
             document.getElementById('h').innerText = "Snow Leopard"
             document.getElementById('im').src = "images/s.jpg";
             break;
         case 'T':
         case 't':
             document.getElementById('h').innerText = "Tufted Titmouse"
             document.getElementById('im').src = "images/.jpg";
             break;
         case 'U':
         case 'u':
             document.getElementById('h').innerText = "Uinta Ground Squirrel"
             document.getElementById('im').src = "images/u.jpg";
             break;
         case 'V':
         case 'v':
             document.getElementById('h').innerText = "Viceroy"
             document.getElementById('im').src = "images/v.jpg";
             break;
         case 'W':
         case 'w':
             document.getElementById('h').innerText = "Whale Shark"
             document.getElementById('im').src = "images/w.jpg";
             break;
         case 'X':
         case 'x':
             document.getElementById('h').innerText = "Xenarthra"
             document.getElementById('im').src = "images/x.jpg";
             break;
         case 'Y':
         case 'y':
             document.getElementById('h').innerText = "Yellow Warbler"
             document.getElementById('im').src = "images/y.jpg";
             break;
         case 'Z':
         case 'z':
             document.getElementById('h').innerText = "Zebra Finch"
             document.getElementById('im').src = "images/z.jpg";
             break;    
         }


     }
    
    
}
}
