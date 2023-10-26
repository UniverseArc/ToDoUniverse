import { instance } from "./api"

export const taskAPI = {
    getTasksByFolderId: (folderId) => {
        return instance.get(`folder/${folderId}/tasks`).then(response => response.data).catch(() => [])
    },
    changeTaskValueInFolder: (id, task, newValue) => {
        return instance.put(`tasks/${id}`, {...task, value: newValue}) // Доделать как в changeTaskCheckedStateInFolder
    },
    changeTaskCheckedStateInFolder: (id, task, newChecked) => {
        debugger
        return instance.put(`tasks/${id}`, {...task, checked: newChecked}).then(response => response.data)
    },
    deleteTaskInFolder: (id) => {
        return instance.delete(`tasks/${id}`)
    },
    createTaskInFolder: (task) => {
        return instance.post(`tasks`, {...task}).then(response => response.data)
    },
}
