import { useContext } from 'react'
import SimpleRulesContext from '../components/SimpleRulesContext'

const useRules = (entity) => {
  const rules = useContext(SimpleRulesContext)

  if (!entity) {
    throw new Error('Empty entity in simple-rules useRules hook')
  }

  return rules[entity]
}

export default useRules
