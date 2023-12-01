import { instance } from "./api"

export const folderAPI = {
    getAllFolders: () => {
        return instance.get(`folders`)
    },
    getFolderOnMainPageById: (id) => {
        return instance.get(`folders/${id}`)
    },
    changeFolderTitleById: (partialFolder) => {
        return instance.put(`folders/${partialFolder.id}`, {name: partialFolder.newName, color: partialFolder.color})
    },
    /* UNDER CONSTRUCTION - НЕ РЕАЛИЗОВАНО
     changeFolderColorById: (id, folder, newColor) => {
         return instance.put(`folders/${id}`, {...folder, color: newColor}).then(response => response.data)
    }, */
    createFolder: (partialFolder) => {    
        console.log(partialFolder);
        return instance.post(`folders`, {name: partialFolder.name, color: partialFolder.color})
    },
    deleteFolderById: (id) => {
        return instance.delete(`folders/${id}`)
    }
}
