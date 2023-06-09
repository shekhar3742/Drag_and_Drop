const imgbox = document.querySelector('.imgbox');
const whiteboxes = document.getElementsByClassName('whitebox');

imgbox.addEventListener('dragstart',(e)=>{
    console.log('Dragstart has been triggered');
    e.target.classname += 'hold';
     setTimeout(() => {
        e.target.classname = 'hide';

     }, 0);
    
});

imgbox.addEventListener('dragend',(e)=>{
    console.log('Dragend has been triggered');
    e.target.classname = 'imgbox';
     alert('Sucessfully Updated');
    
    
});

for(whitebox of whiteboxes){
    whitebox.addEventListener('dragover', (e)=>{
        e.preventDefault();
        console.log('Dragover has been triggered');
    });
    whitebox.addEventListener('dragenter', (e)=>{
        console.log('Dragenter has been triggered');
        e.target.classname += 'dashed';
    });
    whitebox.addEventListener('dragleave', (e)=>{
        console.log('Dragleave has been triggered');
        e.target.classname = 'whitebox';
    });
    whitebox.addEventListener('drop', (e)=>{
        console.log('Drop has been triggered');
        e.target.append(imgbox);
       
    });
}
const reset = document.getElementById('reset-button');
function MyClick(){
    reset.addEventListener('click', location.reload())
}
