import React, { useState } from 'react'
import { SimpleRulesProvider } from 'simple-rule'
import List from './components/List'

const rulesSchema = {
  post: {
    show: ({ currentUser, record, roles }) => (
      !record.owner_id || record.owner_id === currentUser.id
    ),
    destroy: ({ currentUser, record, roles }) => (
      roles.admin(currentUser) && record.owner_id === currentUser.id
    ),
  },
}

const userRolesSchema = {
  admin: (currentUser) => currentUser.role === 'admin'
}

const App = () => {
  const [currentUser, setCurrentUser] = useState({ id: 1, role: 'admin' })

  return (
    <SimpleRulesProvider rulesSchema={rulesSchema} userRolesSchema={userRolesSchema} currentUser={currentUser}>
      <p>
        User id:
        <select
          value={currentUser.id}
          onChange={
            ({ target: { value } }) => {
              setCurrentUser((oldCurrentUser) => ({ ...oldCurrentUser, id: parseInt(value) }))
            }
          }
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
      </p>
      <p>
        User role:
        <select
          value={currentUser.role}
          onChange={
            ({ target: { value } }) => {
              setCurrentUser((oldCurrentUser) => ({ ...oldCurrentUser, role: value }))
            }
          }
        >
          <option value="admin">Admin</option>
          <option value="client">Client</option>
        </select>
      </p>
      <List />
    </SimpleRulesProvider>
  )
}

export default App
