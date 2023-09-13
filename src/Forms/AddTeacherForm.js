import { useState } from "react"
import Button from '@mui/material/Button';

const AddTeacherForm = (props) => {
    const initialForm = { id: null, name: "", username: "", email: "", department: "" }
    const [user, setUser] = useState(initialForm)


    const handleInputChange = (event) => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })

    }



    return (
        <div style={{ marginTop: '35px' }} className="form-section">

            <form className="form-box" onSubmit={(event) => {
                event.preventDefault()
                if (!user.name || !user.username) return
                props.addUser(user)
                setUser(initialForm)
            }}>
                <label>Name</label>
                <input onChange={handleInputChange} type="text" name="name" value={user.name} />
                <label>Username</label>
                <input onChange={handleInputChange} type="text" name="username" value={user.username} />
                <label>Email</label>
                <input onChange={handleInputChange} type="email" name="email" value={user.email} />
                <label>Department</label>
                <input onChange={handleInputChange} type="text" name="department" value={user.department} />
                <div></div>
                <button style={{ background: "none", border: "none" }} ><Button variant="contained" >Submit</Button></button>
            </form>
        </div>

    )
}

export default AddTeacherForm