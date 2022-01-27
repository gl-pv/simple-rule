import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import RestrictionChecker from './RestrictionChecker'

const usePermissions = (entity) => {
  if (!entity) {
    throw new Error('Empty entity in simple-rules usePermissions hook')
  }

  const RestrictionCheckWrapper = useCallback(
    ({ rule, record, children }) => (
      <RestrictionChecker
        rule={rule}
        record={record}
        children={children}
        entity={entity}
      />
    ),
    [entity]
  )

  return RestrictionCheckWrapper
}

export default usePermissions

usePermissions.propTypes = {
  entity: PropTypes.string
}
