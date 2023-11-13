import { instance } from "./api"

export const taskAPI = {
    getTasksByFolderId: (folderId) => {
        return instance.get(`folders/${folderId}`)
    },
    changeTaskValueInFolder: (id, task, newValue) => {
        return instance.put(`tasks/${id}`, {...task, value: newValue})
    },
    changeTaskCheckedStateInFolder: (id, task, newChecked) => {
        return instance.put(`tasks/${id}`, {...task, checked: newChecked})
    },
    deleteTaskInFolder: (id) => {
        return instance.delete(`tasks/${id}`)
    },
    createTaskInFolder: (task) => {
        return instance.post(`tasks`, {...task})
    },
}
