export function addTaskDTO(task){
    return {
        folderId: Number(task.folderId),
        value: task.value,
        checked: task.checked,
    }
}

export function putNameTaskDTO(task){
    return {
        folderId: Number(task.task.folderId),
        id: Number(task.id),
        value: task.newValue,
        checked: task.task.checked,
    }
}
export function putCheckedTaskDTO(task){
    return {
        folderId: Number(task.task.folderId),
        id: Number(task.id),
        value: task.task.value,
        checked: task.newChecked,
    }
}