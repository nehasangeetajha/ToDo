var todo= [
    {title: 'Add your first To Do', description: "Add description here"},
    {title: 'Add your second To Do', description: "Add description here"},
    {title: 'Add your third To Do', description: "Add description here"},
    {title: 'Add your fourth To Do', description: "Add description here"},
    
]

    function printData(){
        document.getElementById('data').innerHTML = ''
        for(var i=0;i<todo.length;i++){
            document.getElementById('data').innerHTML +=`
                <div class="card">
                    <p>${todo[i].title}</p>
                    <hr>
                    <p>${todo[i].description}</p>
                    <button onClick="deleteData(${i})">Delete</button>
                </div>
            `
        }
    }


    document.getElementById('add').addEventListener('click', addtolist)

    function addtolist(){
        var title1 = document.getElementById('title').value
        var des1 = document.getElementById('des').value

        if(title1 && des1)
        {
            todo.unshift({
                title : title1,
                description : des1
            });
            printData();
        }
        else
        {
            alert("Enter some title and description")
        }

    }

    function deleteData(index){
        if(confirm('Are you sure ?')){
            todo.splice(index, 1)
            printData()
        }
    }

printData()


