import React from 'react'
import Usertable from './tables/Usertable';
import { useState } from 'react';
import AdduserForm from './Forms/AdduserForm';
import Editform from './Forms/Editform';

function Student() {

    const usersData = [{ id: 1, name: "Balaji", username: "Balaji", email: "lakshmanan.venkateswarabalaji@gmail.com", degree: "BBA", major: "Business Administration" }]

    const addUser = (user) => {
        user.id = users.length + 1
        setUsers([...users, user])
    }


    const deleteUser = (id) => {
        setUsers(users.filter((user) => user.id !== id))
    }
    const [users, setUsers] = useState(usersData)

    const [editing, setEditing] = useState(false)

    const initialForm = { id: null, name: "", username: "", email: "", degree: "", major: "" }
    const [currentUser, setCurrentUser] = useState(initialForm)

    const editRow = (user) => {

        setEditing(true)
        setCurrentUser({ id: user.id, name: user.name, username: user.username, email: user.email, degree: user.degree, major: user.major })

    }
    const updateuser = (id, updatedUser) => {
        setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
    }

    return (
        <div className="App">

            {editing ? <Editform
                updateuser={updateuser}
                setEditing={setEditing}
                currentUser={currentUser}
            /> : <AdduserForm addUser={addUser} />
            }
            <Usertable users={users} editRow={editRow} deleteUser={deleteUser} />

        </div>
    );
}

export default Student


