import React from 'react'
import { Button, makeStyles, Table, TableBody, TableContainer, TableHead } from '@material-ui/core'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import { getUsersDataWindow } from '../../../redux/users-selector';
import { useDispatch, useSelector } from 'react-redux';
import { Field, Form, Formik } from 'formik';
import { setUsersData } from '../../../redux/users-reduser';

const useStyles = makeStyles({
    table: {
        borderCollapse: 'separate',
        marginTop: 15,
        "& .MuiTableCell-root": {
            border: "1px solid rgba(224, 224, 224, 1)",
            padding: '5px 5px',
           
        }
    }
});

const OpenWindow = () => {
    const classes = useStyles()
    const usersData = useSelector(getUsersDataWindow)
    let date = new Date();
    let currentDate = date.toISOString().split('T')[0]

    const dispatch = useDispatch()
    const submit = (values) => {
        console.log(values)
        dispatch(setUsersData(values))
    }

    return (
        <Formik
        initialValues={{ value: '', date: currentDate, user: 'John', comment: '' }}
        validate={''}
        onSubmit={submit}
    >
        <Form>
            <TableContainer>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow >
                            <TableCell>value</TableCell>
                            <TableCell ><b>date</b></TableCell>
                            <TableCell ><b>user</b></TableCell>
                            <TableCell ><b>comment</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {usersData.map(u => <TableRow key={u.value}>
                            <TableCell >{u.value}</TableCell>
                            <TableCell >{u.date}</TableCell>
                            <TableCell >{u.user}</TableCell>
                            <TableCell >{u.comment}</TableCell>
                        </TableRow>
                        )}
                        <TableRow>
                            <TableCell ><Field type="number" name='value' /></TableCell>
                            <TableCell >{currentDate}</TableCell>
                            <TableCell ><Field type="name" name='user' /></TableCell>
                            <TableCell ><Field type="text" name='comment' /></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <Button variant="contained" onClick={() => window.close()} style={{float: 'right', margin: '15px 0 0 15px'}} color='primary' >
                    Close
                </Button>
                <Button variant="contained" style={{float: 'right', margin: '15px 0'}} color='secondary' type="submit" >
                    Add
                </Button>
            </TableContainer>
            </Form>
            </Formik>

    )
}

export default OpenWindow