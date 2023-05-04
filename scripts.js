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
                localStorage.setItem("tasks", this.tasks)
            } else {
                alert("Não pode ter título em branco, preencha e tente novamente!")
            }
        }
    },
}

Vue.createApp(todoListApp).mount('#app')