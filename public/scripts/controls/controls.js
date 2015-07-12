var keyState = {};    
window.addEventListener('keydown',function(e){
    keyState[e.keyCode || e.which] = true;
},true);    
window.addEventListener('keyup',function(e){
    keyState[e.keyCode || e.which] = false;
},true);

function gameLoop() {
    //Left Arrow
    if (keyState[37] || keyState[65]){
        player[0].position.x -= 0.1;
    }    
    //Up Arrow
    if (keyState[38] || keyState[87]){
        player[0].position.z -= 0.1;
    }
    //Right Arrow
    if (keyState[39] || keyState[68]){
        player[0].position.x += 0.1;
    }
    //Down Arrow
    if (keyState[40] || keyState[83]){
        player[0].position.z += 0.1;
    }

    // redraw/reposition your object here
    // also redraw/animate any objects not controlled by the user

    setTimeout(gameLoop, 10);
}    
gameLoop();