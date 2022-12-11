import PropTypes from 'prop-types'
import useRules from '../useRules'

const RestrictionChecker = ({ action, record, entity, children }) => {
  const entityRules = useRules(entity)

  if (entityRules[action](record)) {
    return children
  }

  return null
}

export default RestrictionChecker

RestrictionChecker.propTypes = {
  action: PropTypes.string,
  entity: PropTypes.string,
  record: PropTypes.object,
  children: PropTypes.any
}
