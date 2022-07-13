import React, { useEffect, useState } from 'react'
import TableCell from '@material-ui/core/TableCell'
import { makeStyles, Table, TableBody, TableContainer, TableHead } from '@material-ui/core'
import TableRow from '@material-ui/core/TableRow'
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../redux/users-reduser';
import { getUsersData } from '../../redux/users-selector';

const useStyles = makeStyles({
  table: {
    borderCollapse: 'separate',
    "& .MuiTableCell-root": {
      border: "1px solid rgba(224, 224, 224, 1)",
      padding: '0 5px'
    }
  }
});

export const UsersPage = () => {
  const classes = useStyles()

  const dispatch = useDispatch()
  const users = useSelector(getUsersData)

  useEffect(() => {
    dispatch(getUsers())
  }, [])

  const url = '/test_project#/window'
  const params = 'width=800, height=400, left=200,top=200'
 
  return (
    <div>
     
      <TableContainer>
        <Table  className={classes.table}>
          <TableHead>
            <TableRow >
              <TableCell rowSpan={2}><b>regions</b></TableCell>
              <TableCell align='center' colSpan={3}><b>2017</b></TableCell>
              <TableCell align='center' colSpan={3}><b>2018</b></TableCell>
              <TableCell align='center' colSpan={3}><b>2019</b></TableCell>
            </TableRow>
            <TableRow>
              <TableCell ><b>xx</b></TableCell>
              <TableCell ><b>yy</b></TableCell>
              <TableCell ><b>zz</b></TableCell>
              <TableCell ><b>xx</b></TableCell>
              <TableCell ><b>yy</b></TableCell>
              <TableCell ><b>zz</b></TableCell>
              <TableCell ><b>xx</b></TableCell>
              <TableCell ><b>yy</b></TableCell>
              <TableCell ><b>zz</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Kyivska</TableCell>
              <TableCell onClick={() =>  window.open(url, '', params)} >{users.Kyivska.G[2017].XX.value}<div>{users.Kyivska.G[2017].XX.dateRelease}</div></TableCell>
              <TableCell onClick={() =>  window.open(url, '', params)}>{users.Kyivska.G[2017].YY.value}<div>{users.Kyivska.G[2017].YY.dateRelease}</div></TableCell>
              <TableCell onClick={() =>  window.open(url, '', params)}>{users.Kyivska.G[2017].ZZ.value}<div>{users.Kyivska.G[2017].ZZ.dateRelease}</div></TableCell>
              <TableCell onClick={() =>  window.open(url, '', params)}>{users.Kyivska.G[2018].XX.value}<div>{users.Kyivska.G[2018].XX.dateRelease}</div></TableCell>
              <TableCell onClick={() =>  window.open(url, '', params)}>{users.Kyivska.G[2018].YY.value}<div>{users.Kyivska.G[2018].YY.dateRelease}</div></TableCell>
              <TableCell onClick={() =>  window.open(url, '', params)}>{users.Kyivska.G[2018].ZZ.value}<div>{users.Kyivska.G[2018].ZZ.dateRelease}</div></TableCell>
              <TableCell onClick={() =>  window.open(url, '', params)}>{users.Kyivska.G[2019].XX.value}<div>{users.Kyivska.G[2019].XX.dateRelease}</div></TableCell>
              <TableCell onClick={() =>  window.open(url, '', params)}>{users.Kyivska.G[2019].YY.value}<div>{users.Kyivska.G[2019].YY.dateRelease}</div></TableCell>
              <TableCell onClick={() =>  window.open(url, '', params)}>{users.Kyivska.G[2019].ZZ.value}<div>{users.Kyivska.G[2019].ZZ.dateRelease}</div></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Odeska</TableCell>
              <TableCell onClick={() =>  window.open(url, '', params)}>{users.Odeska.G[2017].XX.value}<div>{users.Odeska.G[2017].XX.dateRelease}</div></TableCell>
              <TableCell onClick={() =>  window.open(url, '', params)}>{users.Odeska.G[2017].YY.value}<div>{users.Odeska.G[2017].YY.dateRelease}</div></TableCell>
              <TableCell onClick={() =>  window.open(url, '', params)}>{users.Odeska.G[2017].ZZ.value}<div>{users.Odeska.G[2017].ZZ.dateRelease}</div></TableCell>
              <TableCell ></TableCell>
              <TableCell ></TableCell>
              <TableCell ></TableCell>
              <TableCell onClick={() =>  window.open(url, '', params)}>{users.Odeska.G[2019].XX.value}<div>{users.Odeska.G[2019].XX.dateRelease}</div></TableCell>
              <TableCell onClick={() =>  window.open(url, '', params)}>{users.Odeska.G[2019].YY.value}<div>{users.Odeska.G[2019].YY.dateRelease}</div></TableCell>
              <TableCell onClick={() =>  window.open(url, '', params)}>{users.Odeska.G[2019].ZZ.value}<div>{users.Odeska.G[2019].ZZ.dateRelease}</div></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Lvivska</TableCell>
              <TableCell onClick={() =>  window.open(url, '', params)}>{users.Lvivska.G[2017].XX.value}<div>{users.Lvivska.G[2017].XX.dateRelease}</div></TableCell>
              <TableCell onClick={() =>  window.open(url, '', params)}>{users.Lvivska.G[2017].YY.value}<div>{users.Lvivska.G[2017].YY.dateRelease}</div></TableCell>
              <TableCell onClick={() =>  window.open(url, '', params)}>{users.Lvivska.G[2017].ZZ.value}<div>{users.Lvivska.G[2017].ZZ.dateRelease}</div></TableCell>
              <TableCell onClick={() =>  window.open(url, '', params)}>{users.Lvivska.G[2018].XX.value}<div>{users.Lvivska.G[2018].XX.dateRelease}</div></TableCell>
              <TableCell onClick={() =>  window.open(url, '', params)}>{users.Lvivska.G[2018].YY.value}<div>{users.Lvivska.G[2018].YY.dateRelease}</div></TableCell>
              <TableCell onClick={() =>  window.open(url, '', params)}>{users.Lvivska.G[2018].ZZ.value}<div>{users.Lvivska.G[2018].ZZ.dateRelease}</div></TableCell>
              <TableCell ></TableCell>
              <TableCell ></TableCell>
              <TableCell ></TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

