
let a;
let flag=false;

let originalTextHead; 
let originalTextMatter;

function fun(){
    const headDiv = document.getElementById('head');
    if (!originalTextHead) {
        originalTextHead = headDiv.textContent; 
    }

    const textElement = document.getElementById('matter');
    if (!originalTextMatter) {
        originalTextMatter = textElement.textContent;
    }

    if(flag){
        clearInterval(a);
    }

    let initialHead = 0;
    let initialMatter = 0;
    let lenHead = originalTextHead.length;
    let lenMatter = originalTextMatter.length;

    flag=true;
    headDiv.textContent = ''; 
    textElement.textContent = ''; 

    const headInterval = 100; // Delay for heading
    const matterInterval = 5; // Delay for matter

    // Track the current interval time
    let currentInterval = 0;

    a = setInterval(() => {
        currentInterval += matterInterval;
        if (currentInterval >= headInterval) {
            if (initialHead < lenHead) {
                headDiv.textContent += originalTextHead[initialHead];
                initialHead++;
            }
            currentInterval = 0; // Reset for heading
        }

        if (initialMatter < lenMatter) {
            textElement.textContent += originalTextMatter[initialMatter]; 
            initialMatter++;
        }

        if (initialHead >= lenHead && initialMatter >= lenMatter) {
            flag = false; 
            clearInterval(a); 
        }

    },matterInterval);

    
};

window.onload=fun;


//footer
function colour(color){
    const arrdiv=['header','footer', 'div','btn'];
    for(let i=0; i<arrdiv.length; i++){
        const a=document.getElementsByClassName(arrdiv[i]);
        for(let j=0; j<a.length; j++){
            a[j].style.backgroundColor=color;
        }
    }
}