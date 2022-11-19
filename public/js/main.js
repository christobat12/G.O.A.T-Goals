const deleteBtn = document.querySelectorAll('.del')
const goalItem = document.querySelectorAll('span.not')
const goalComplete = document.querySelectorAll('span.completed')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteGoal)
})

Array.from(goalItem).forEach((el)=>{
    el.addEventListener('click', markComplete)
})

Array.from(goalComplete).forEach((el)=>{
    el.addEventListener('click', markIncomplete)
})

async function deleteGoal(){
    const goalId = this.parentNode.dataset.id
    try{
        const response = await fetch('goals/deleteGoal', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'goalIdFromJSFile': goalId
            })
        })
        const data = await response.json()
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markComplete(){
    const goalId = this.parentNode.dataset.id
    try{
        const response = await fetch('goals/markComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'goalIdFromJSFile': goalId
            })
        })
        const data = await response.json()
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markIncomplete(){
    const goalId = this.parentNode.dataset.id
    try{
        const response = await fetch('goals/markIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'goalIdFromJSFile': goalId
            })
        })
        const data = await response.json()
        location.reload()
    }catch(err){
        console.log(err)
    }
}