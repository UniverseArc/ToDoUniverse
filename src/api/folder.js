import { instance } from "./api"

export const folderAPI = {
    getAllFolders: () => {
        return instance.get(`folders`).then(response => response.data)
    },
    getFolderOnMainPageById: (id) => {
        return instance.get(`folders/${id}`).then(response => response.data)
    },
    changeFolderTitleById: (id, newName, color) => {
        
        return instance.put(`folders/${id}`, {name: newName, color: color}).then(response => response.data)
        // return instance.put(`folders/${id}`, {...folder, name: newName}).then(response => response.data)
    },
    // changeFolderColorById: (id, folder, newColor) => {
    //     return instance.put(`folders/${id}`, {...folder, color: newColor}).then(response => response.data)
    // },
    createFolder: (name, color) => {
        return instance.post(`folders`, {name, color}).then(response => response.data)
    },
    deleteFolderById: (id) => {
        return instance.delete(`folders/${id}`).then(response => response.status) // Доделать, непонятно что в респонсе приходит, и как одобрить операцию на отфильтровку массива
    }
}
