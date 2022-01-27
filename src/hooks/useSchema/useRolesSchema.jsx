import { useCallback } from 'react'
import PropTypes from 'prop-types'

const useRolesSchema = (userRolesSchema, currentUser) => {
  const setRolesMap = useCallback(
    (passedSchema) => {
      const rolesMap = {}

      Object.entries(passedSchema).forEach(([roleName, roleCheckCondition]) => {
        rolesMap[roleName] = (actionOwner) => roleCheckCondition(actionOwner)
      })

      return rolesMap
    },
    [currentUser]
  )

  const rolesMap = setRolesMap(userRolesSchema)

  return rolesMap
}

export default useRolesSchema

useRolesSchema.propTypes = {
  userRolesSchema: PropTypes.object,
  currentUser: PropTypes.object
}
