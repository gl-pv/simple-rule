import useRules from '../useRules'

const RestrictionChecker = ({ rule, record, entity, children }) => {
  const entityRules = useRules(entity)

  if (entityRules[rule](record)) {
    return children
  }

  return null
}

export default RestrictionChecker
