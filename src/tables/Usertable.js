
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Usertable = (props) => {
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>

            <div style={{ width: '800px', margin: '56px' }}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 350 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="right">Username</TableCell>
                                <TableCell align="right">email</TableCell>
                                <TableCell align="right">Degree</TableCell>
                                <TableCell align="right">Major</TableCell>
                                <TableCell align="right">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                props.users.length > 0 ? (
                                    props.users.map((user) => (
                                        <TableRow
                                            key={user.id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {user.name}
                                            </TableCell>
                                            <TableCell align="right">{user.username}</TableCell>
                                            <TableCell align="right">{user.email}</TableCell>
                                            <TableCell align="right">{user.degree}</TableCell>
                                            <TableCell align="right">{user.major}</TableCell>
                                            <TableCell align="center">
                                                <Stack spacing={2} direction="row">
                                                    <Button variant="contained" onClick={() => props.editRow(user)}>Edit</Button>
                                                    <Button variant="contained" onClick={() => props.deleteUser(user.id)}>Delete</Button>


                                                </Stack></TableCell>
                                        </TableRow>
                                    ))

                                ) : (
                                    <tr>
                                        <td colspan={3}>No Users</td>
                                    </tr>
                                )

                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

        </div>

        // }
    )
}

export default Usertable