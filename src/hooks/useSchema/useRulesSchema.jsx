import { useCallback } from 'react'
import PropTypes from 'prop-types'

const useRulesSchema = (rulesSchema, rolesMap, currentUser) => {
  const ruleCheck = useCallback(
    (ruleLogic) => (record) =>
      ruleLogic({ record, currentUser, roles: rolesMap }),
    [currentUser, rolesMap]
  )

  const normalizeSchema = useCallback(
    (passedSchema) => {
      const normalizedSchema = {}

      Object.entries(passedSchema).forEach(([entityName, entitySchema]) => {
        const entityNormalizedSchema = {}

        Object.entries(entitySchema).forEach(([ruleName, ruleLogic]) => {
          if (ruleLogic instanceof Function) {
            entityNormalizedSchema[ruleName] = ruleCheck(ruleLogic)
          } else {
            throw new Error('Invalid rule format')
          }
        })

        normalizedSchema[entityName] = entityNormalizedSchema
      })

      return normalizedSchema
    },
    [ruleCheck]
  )
  return normalizeSchema(rulesSchema)
}

export default useRulesSchema

useRulesSchema.propTypes = {
  rulesSchema: PropTypes.object,
  rolesMap: PropTypes.object,
  currentUser: PropTypes.object
}
