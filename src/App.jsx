import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ConnectedFolderContainer from './components/Folder/FolderContainer'
import MainPageContainer from './components/Main/MainPageContainer'

function App() {
  return (
    <BrowserRouter>
    <div className="app-wrapper">

      
    <ConnectedFolderContainer />
      <div className="app-wrapper-content">
        <Routes>
                    
          <Route path="folder/:folderId" element={<MainPageContainer />} />

        </Routes>
      </div>
    </div>
  </BrowserRouter>
  )
}

export default App
