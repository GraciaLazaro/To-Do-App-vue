Vue.component('form',{
    template://html
    ` 
    <div>
    <h2>Componente form</h2>

    <input type="text" class="form-control my-3" placeholder="Add something to do" v-model="newTask" @keyup.enter="addTask">
<button @click="addTask" class="btn btn-dark" >ADD</button>
    </div>    
    `,
    data(){
        return{
            tasks:[] ,
            newTask:'',
        }
    },

    
    
})