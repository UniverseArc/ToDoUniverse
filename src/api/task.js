import { instance } from "./api"

export const taskAPI = {
    getTasksByFolderId: (folderId) => {
        return instance.get(`folders/${folderId}`)
    },
    changeTaskValueInFolder: (task) => {
        return instance.put(`tasks/${task.id}`, {...task, id: delete task.id})
    },
    changeTaskCheckedStateInFolder: (task) => {
        debugger
        return instance.put(`tasks/${task.id}`, {...task, id: delete task.id})
    },
    deleteTaskInFolder: (id) => {
        return instance.delete(`tasks/${id}`)
    },
    createTaskInFolder: (task) => {
        return instance.post(`tasks`, {...task})
    },
}
