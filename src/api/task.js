import { instance } from "./api"

export const taskAPI = {
    getTasksByFolderId: (folderId) => {
        return instance.get(`folders/${folderId}`).then(response => response.data).catch(() => [])
    },
    changeTaskValueInFolder: (id, task, newValue) => {
        return instance.put(`tasks/${id}`, {...task, value: newValue}).then(response => response.data)
    },
    changeTaskCheckedStateInFolder: (id, task, newChecked) => {
        return instance.put(`tasks/${id}`, {...task, checked: newChecked}).then(response => response.data)
    },
    deleteTaskInFolder: (id) => {
        return instance.delete(`tasks/${id}`).then(response => response.status)
    },
    createTaskInFolder: (task) => {
        return instance.post(`tasks`, {...task}).then(response => response.data)
    },
}
