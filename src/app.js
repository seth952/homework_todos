import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      tasks: [
        {name: "Christmas Shopping", complete: false},
        {name: "Divorce the Mrs", complete: false},
        {name: "Eat an entire Pig", complete: true}
      ],
      newTask: ""
    },
    methods: {
      saveNewTask: function(){
        let taskObject = {name: this.newTask, complete: false}
        this.tasks.push(taskObject)
        this.newTask = ""
      },
      taskComplete: function(index){
        this.tasks[index].complete = true
      }
    }
  });
});
