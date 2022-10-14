var ling = document.querySelector('.ling').style.display;
var lint = document.querySelector('.lint').style.display;
var lino = document.querySelector('.lino').style.display;
var liny = document.querySelector('.liny').style.display;
var linu = document.querySelector('.linu').style.display;


var linux = [ling, lint, lino, liny, linu];


for (let index = 0; index < linux.length; index++) {
    if (index === 5) {
        index = 0;
    }
    setInterval(
        () => {
            linux[index] = "block";
            if (index === 0) {
                linux[1] = "none";
                linux[2] = "none";
                linux[3] = "none";
                linux[4] = "none";
            }

            else if (index === 1) {
                linux[0] = "none";
                linux[2] = "none";
                linux[3] = "none";
                linux[4] = "none";
            }

            else if (index === 2) {
                linux[0] = "none";
                linux[1] = "none";
                linux[3] = "none";
                linux[4] = "none";
            }

            else if (index === 3) {
                linux[0] = "none";
                linux[1] = "none";
                linux[2] = "none";
                linux[4] = "none";
            }

            else if (index === 4) {
                linux[0] = "none";
                linux[1] = "none";
                linux[2] = "none";
                linux[3] = "none";
            }
            // linux[index]="block"? true: false;
            // // while () {
                
            // // }
            // if((linux[index]="block") === false){
                
            // }
        }
    ,60000)
}