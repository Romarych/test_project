import React, { useEffect } from 'react'
import { compose } from 'redux'
import { getUsers, setGender } from '../../redux/users-reduser'
import { getCurrentPage, getUsersData, getPages, getGender } from '../../redux/users-selector'
import Users from './Users'
import { connect } from "react-redux"

const UsersContainer = ({pages, currentPage, getUsers, users, gender, setGender}) => {
  useEffect( () => {
      getUsers(currentPage)
  }, [currentPage, getUsers])

  const onPageChanged = (currentPage) => {
      getUsers(currentPage)
  }

  return <Users setGender={setGender} gender={gender} pages={pages} users={users} onPageChanged={onPageChanged} currentPage={currentPage} />
}

let mapStateToProps = (state) => {
    return {
        users: getUsersData(state),
        currentPage: getCurrentPage(state),
        pages: getPages(state),
        gender: getGender(state)
    }
}

export default compose(
    connect(mapStateToProps, {getUsers, setGender}),
)(UsersContainer)