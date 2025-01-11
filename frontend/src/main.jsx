import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import UsePage from './pages/UserPage.jsx'
import AdminPage from './pages/AdminPage.jsx'
import Dashboard from './componets/adminComponets/Dashboard.jsx'
import Messageshow from './componets/adminComponets/messageshow.jsx'
import ContactAdmin from './componets/adminComponets/ContactsAdmin.jsx'
import CarsolAdmin from './componets/adminComponets/Carsol.jsx'
import SkillAdmin from './componets/adminComponets/SkillAdmin.jsx'
import ServiceAdmin from './componets/adminComponets/ServiceAdmin.jsx'
import EducationAdmin from './componets/adminComponets/EducationAdmin.jsx'
import ProjectsAdmin from './componets/adminComponets/ProjectsAdmin.jsx'
import EmailAdmin from './componets/adminComponets/EmailAdmin.jsx'
import ExperenceAdmin from './componets/adminComponets/ExperenceAdmin.jsx'
import Users from './componets/adminComponets/Users.jsx'
import CarosolEdit from './componets/adminComponets/editForm/CarosolEdit.jsx'
import ContactEdit from './componets/adminComponets/editForm/ContactEdit.jsx'
import UserEdit from './componets/adminComponets/editForm/UserEdit.jsx'
import SkillEdit from './componets/adminComponets/editForm/SkillEdit.jsx'
import ProjectEdit from './componets/adminComponets/editForm/ProjectEdit.jsx'
import EducationEdit from './componets/adminComponets/editForm/EducationEdit.jsx'
import ExperenceEdit from './componets/adminComponets/editForm/ExperenceEdit.jsx'
import ServiceEdit from './componets/adminComponets/editForm/ServiceEdit.jsx'
import ContactCreate from './componets/adminComponets/createForm/ContactCreate.jsx'
import CarosolCreate from './componets/adminComponets/createForm/CarosolCreate.jsx'
import SkillCreate from './componets/adminComponets/createForm/SkillCreate.jsx'
import ServiceCreate from './componets/adminComponets/createForm/ServiceCreate.jsx'
import EducationCreate from './componets/adminComponets/createForm/EducationCreate.jsx'
import ProjectCreate from './componets/adminComponets/createForm/ProjectCreate.jsx'
import ExperenceCreate from './componets/adminComponets/createForm/ExperenceCreate.jsx'
import UserCreate from './componets/adminComponets/createForm/UserCreate.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/'  element={<UsePage/>}/>
        <Route path='admin' element={<AdminPage/>}>
                <Route path='dashboard' element={<Dashboard/>} />
                <Route path='messages' element={<Messageshow/>} />
                <Route path='contacts' >
                  <Route index  element={<ContactAdmin/>}/>
                  <Route path=':id' element={<ContactEdit/>}/>
                  <Route path='create' element={<ContactCreate/>}/>
                </Route>
                <Route path='carosols' >
                  <Route index  element={<CarsolAdmin/>}  />
                  <Route path=':id' element={<CarosolEdit />}/>
                  <Route path='create' element={<CarosolCreate/>}/>
                </Route>
                <Route path='skills' >
                  <Route index  element={<SkillAdmin/>}/>
                  <Route path=':id' element={<SkillEdit/>}/>
                  <Route path='create' element={<SkillCreate/>}/>
                </Route>
                <Route path='services'  >
                  <Route index element={<ServiceAdmin/>}/>
                  <Route path=':id' element={<ServiceEdit/>}/>
                  <Route path='create' element={<ServiceCreate/>}/>
                </Route>
                <Route path='educations'  >
                  <Route index element={<EducationAdmin/>}/>
                  <Route path=':id' element={<EducationEdit/>}/>
                  <Route path='create' element={<EducationCreate/>}/>
                </Route>
                <Route path='projects'  >
                  <Route index element={<ProjectsAdmin/>}/>
                  <Route path=':id' element={<ProjectEdit/>}/>
                  <Route path='create' element={<ProjectCreate/>}/>
                </Route>
                <Route path='newsletter' element={<EmailAdmin/>} />
                <Route path='experences'  >
                  <Route index element={<ExperenceAdmin/>}/>
                  <Route path=':id' element={<ExperenceEdit/>}/>
                  <Route path='create' element={<ExperenceCreate/>}/>
                </Route>
                <Route path='users'  >
                  <Route index element={<Users/>}/>
                  <Route path=':id' element={<UserEdit/>}/>
                  <Route path='create' element={<UserCreate/>}/>
                </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)



