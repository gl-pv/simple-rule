import { useCallback } from 'react'

const useSchema = (rulesSchema, userRolesSchema, currentUser) => {
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
    [currentUser]
  )

  const normalizedSchema = normalizeSchema(rulesSchema)

  return normalizedSchema
}

export default useSchema
