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

    beforeCreate() {
        console.log('Before create')
        console.log(this.newTask)
    },
    created() {
        console.log('Created')
        console.log(this.newTask)
    },
    beforeUpdate() {
        console.log('Before Update')
        console.log(this.newTask)
    },
}

Vue.createApp(todoListApp).mount('#app')