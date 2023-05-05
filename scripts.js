var tasks = [
    
]

const todoListApp = {
    data() {
        return {
            tasks:  window.tasks,
            newTask: { feita: false }
        }
    },

    created() {
         //vamos validar se tem o item no localStorage
         this.tasks = localStorage.getItem("tasks") ?  JSON.parse(localStorage.getItem("tasks")) : this.tasks
    },

    beforeDestroy() {
        document.removeEventListener('keyup', this.onEsc)
    },

    //pegamos os dados depois de atualizar com updated
    updated() {
        //esse é chamado toda vez que muda um texto ou algo do tipo
        //localStorage.setItem("tasks", JSON.stringify(this.tasks))
    },

    methods: {
        clearTasks: function(){
            this.tasks = []
            this.storeTodos()
        },

        addTask: function(){
            if(this.newTask.titulo) {
                this.tasks.push(this.newTask)
                this.newTask = { feita: false}
                localStorage.setItem("tasks", JSON.stringify(this.tasks))
                this.storeTodos()
            } else {
                alert("Não pode ter título em branco, preencha e tente novamente!")
            }
        },

        storeTodos(){
            localStorage.setItem("tasks", JSON.stringify(this.tasks))
        }
    },
}

Vue.createApp(todoListApp).mount('#app')