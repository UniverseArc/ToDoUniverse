import { instance } from "./api"

export const folderAPI = {
    getAllFolders: () => {
        return instance.get(`folders`)
    },
    getFolderOnMainPageById: (id) => {
        return instance.get(`folders/${id}`)
    },
    changeFolderTitleById: (id, newName, color) => {
        return instance.put(`folders/${id}`, {name: newName, color: color})
    },
    /* UNDER CONSTRUCTION - НЕ РЕАЛИЗОВАНО
     changeFolderColorById: (id, folder, newColor) => {
         return instance.put(`folders/${id}`, {...folder, color: newColor}).then(response => response.data)
    }, */
    createFolder: (name, color) => {
        return instance.post(`folders`, {name, color})
    },
    deleteFolderById: (id) => {
        return instance.delete(`folders/${id}`)
    }
}
