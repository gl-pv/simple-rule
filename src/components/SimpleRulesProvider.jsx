import React from 'react'
import SimpleRulesContext from './SimpleRulesContext'
import useSchema from '../hooks/useSchema'

const SimpleRules = ({
  rulesSchema,
  userRolesSchema,
  currentUser,
  children
}) => {
  const readyToUseSchema = useSchema(rulesSchema, userRolesSchema, currentUser)

  return (
    <SimpleRulesContext.Provider value={readyToUseSchema}>
      {children}
    </SimpleRulesContext.Provider>
  )
}

export default SimpleRules
