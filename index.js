document.getElementById('all-buttons-action').addEventListener('click',function(event){
    if(isNaN(event.target.innerText)){
        console.log('not a number');
    }else{
        console.log('number');
    }
})