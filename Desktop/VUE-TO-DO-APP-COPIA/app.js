const app = new Vue ({
el: ' #app',
data: {
    titulo: 'THINGS TO DO',
    tasks:[] ,
    newTask:'',
    
},
methods:{
    
    
    
    
    addTask(){
    this.tasks.push({
        name: this.newTask,
        state: false,
    });
    

    this.newTask= '';
    localStorage.setItem('todo-vue', JSON.stringify (this.tasks));
    },

    stateTask: function(index){
       this.tasks[index].state = true;  
    },

    editTask: function(index) {
        this.task = this.tasks[index].name;
        this.editTask = index;
      },


      submitTask() {
        if (this.task.length === 0) return;
        
        if (this.editTask != null) {
          this.tasks[this.editTask].name = this.task;
          this.editTask = null;
        } else {
          
          this.tasks.push({
            name: this.task,
           
          });
        }
        this.task = "";
      },
    

     

    

    deleteTask: function(index){
        this.tasks.splice(index, 1);
    },

    




created(){
let dataDB = JSON.parse(localStorage.getItem('todo-vue'));
if(dataDB === null){
    this.tasks = [];
    }else{
        this.tasks =dataDB;
    }
}

}


})