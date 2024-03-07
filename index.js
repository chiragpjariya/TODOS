
let add = document.getElementById('add');
let ul = document.getElementById('ul')



function Trashing() {
    let trash = document.querySelectorAll('.trashs')

    //Adding trash icon in all <i> tag
    trash.forEach((i) => {
        i.addEventListener('click', (e) => {
            if (e.target) {
                let a = e.target.parentElement
                console.log(a.parentElement.remove());
            }
            e.stopPropagation()
        })
    })
    console.log(trash);
}
Trashing()


add.addEventListener('click', (e) => {

    e.preventDefault();
    e.stopPropagation()
    let task = document.getElementById('task');
    let li = document.createElement('li');
    let p = document.createElement('p');
    let date = document.createElement('p')
    let button_icon = document.createElement('button')

    if(task.value != ''){

        let dates = new Date()
        button_icon.innerHTML = '   <i class="fa-solid fa-trash-can fa-xl" style="color: #fe0000;"></i>'
        button_icon.setAttribute('class', 'border-none  trashs')
    
        p.innerText = task.value;
        date.innerText = dates.toLocaleDateString().toString() +dates.toLocaleTimeString() ;
        date.setAttribute('class','date')
        li.appendChild(p)
        li.appendChild(date)
        li.appendChild(button_icon)
        ul.appendChild(li)
    
        task.value = null
        Trashing()
    }
    else{
        alert('enter task')
    }

   


})


