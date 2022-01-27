import { useContext } from 'react'
import PropTypes from 'prop-types'
import SimpleRulesContext from '../components/SimpleRulesContext'

const useRules = (entity) => {
  const { schema: rules } = useContext(SimpleRulesContext)

  if (!entity) {
    throw new Error('Empty entity in simple-rules useRules hook')
  }

  return rules[entity]
}

export default useRules

useRules.propTypes = {
  entity: PropTypes.string
}
