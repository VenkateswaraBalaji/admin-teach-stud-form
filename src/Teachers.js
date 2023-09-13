import React from 'react'
import { useState } from 'react'
import AddTeacherForm from './Forms/AddTeacherForm'
import EditTeacherForm from './Forms/EditTeacherForm'
import TeachersTable from './tables/TeachersTable'
function Teachers() {

    const TeacherData = [{ id: 1, name: "Prema10", username: "Prema10", email: "prema10@gmail.com", department: "tamil" }]

    const [users, setUsers] = useState(TeacherData)

    const addUser = (user) => {
        user.id = users.length + 1
        setUsers([...users, user])
    }
    const deleteUser = (id) => {
        setUsers(users.filter((user) => user.id !== id))
    }

    const [editing, setEditing] = useState(false)

    const initialForm = { id: null, name: "", username: "", email: "", degree: "", department: "" }
    const [currentUser, setCurrentUser] = useState(initialForm)

    const editRow = (user) => {

        setEditing(true)
        setCurrentUser({ id: user.id, name: user.name, username: user.username, email: user.email, department: user.department })

    }
    const updateuser = (id, updatedUser) => {
        setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
    }

    return (
        <div className="App">

            {editing ? <EditTeacherForm
                updateuser={updateuser}
                setEditing={setEditing}
                currentUser={currentUser}
            /> : <AddTeacherForm addUser={addUser} />
            }
            <TeachersTable users={users} editRow={editRow} deleteUser={deleteUser} />

        </div>
    );
}


export default Teachers