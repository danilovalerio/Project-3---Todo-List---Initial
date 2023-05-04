var tasks = [
    
]

const todoListApp = {
    data() {
        return {
            tasks:  window.tasks,
            newTask: { feita: false }
        }
    },

    methods: {
        clearTasks: function(){
            this.tasks = []
        },

        addTask: function(){
            if(this.newTask.titulo) {
                this.tasks.push(this.newTask)
                this.newTask = { feita: false}
                localStorage.setItem("tasks", JSON.stringify(this.tasks))
            } else {
                alert("Não pode ter título em branco, preencha e tente novamente!")
            }
        }
    },
    created() {
        //vamos validar se tem o item no localStorage
        this.tasks = localStorage.getItem("tasks") ?  JSON.parse(localStorage.getItem("tasks")) : this.tasks
    }
}

Vue.createApp(todoListApp).mount('#app')