import React from 'react'
import PropTypes from 'prop-types'
import SimpleRulesContext from './SimpleRulesContext'
import useSchema from '../hooks/useSchema/useSchema'

const SimpleRules = ({
  rulesSchema,
  userRolesSchema,
  currentUser,
  children
}) => {
  const readyToUseSchema = useSchema(rulesSchema, userRolesSchema, currentUser)

  return (
    <SimpleRulesContext.Provider
      value={{
        schema: readyToUseSchema
      }}
    >
      {children}
    </SimpleRulesContext.Provider>
  )
}

export default SimpleRules

SimpleRules.propTypes = {
  rulesSchema: PropTypes.object,
  userRolesSchema: PropTypes.object,
  currentUser: PropTypes.object,
  children: PropTypes.any
}
