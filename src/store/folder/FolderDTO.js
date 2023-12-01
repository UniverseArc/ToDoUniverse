export function FolderDTO(folder){
    return {
        id: Number(folder.id),
        name: folder.name,
        color: folder.color,
        tasks: folder.tasks.map(TaskDTO)
    }
}

export function TaskDTO(task){
    return {
        id: Number(task.id),
        value: task.value,
        checked: task.checked,
    }
}

// partial - частичный приход каких-то данных
export function postFolderDTO (partialFolder){
    return {
        name: partialFolder.name,
        color: partialFolder.color,
    }
}


export function putFolderNameDTO (partialFolder){
    console.log(partialFolder);
    return {
        id: Number(partialFolder.id),
        newName: partialFolder.newName,
        color: partialFolder.color,
    }
}

// export function putFolderColorDTO (partialFolder){
//     console.log(partialFolder);
//     return {
//         id: Number(partialFolder.id),
//         folder: partialFolder.folder,
//         newColor: partialFolder.newColor,
//     }
// }