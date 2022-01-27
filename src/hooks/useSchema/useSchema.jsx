import PropTypes from 'prop-types'
import useRolesSchema from './useRolesSchema'
import useRulesSchema from './useRulesSchema'

const useSchema = (rulesSchema, userRolesSchema, currentUser) => {
  const rolesMap = useRolesSchema(userRolesSchema, currentUser)
  const readyToUseSchema = useRulesSchema(rulesSchema, rolesMap, currentUser)

  return readyToUseSchema
}

export default useSchema

useSchema.propTypes = {
  rulesSchema: PropTypes.object,
  userRolesSchema: PropTypes.object,
  currentUser: PropTypes.object
}
