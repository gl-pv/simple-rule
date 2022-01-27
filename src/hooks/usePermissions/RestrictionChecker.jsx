import PropTypes from 'prop-types'
import useRules from '../useRules'

const RestrictionChecker = ({ rule, record, entity, children }) => {
  const entityRules = useRules(entity)

  if (entityRules[rule](record)) {
    return children
  }

  return null
}

export default RestrictionChecker

RestrictionChecker.propTypes = {
  rule: PropTypes.string,
  entity: PropTypes.string,
  record: PropTypes.object,
  children: PropTypes.any
}
