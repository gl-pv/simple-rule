import React, { useCallback } from 'react'
import RestrictionChecker from './RestrictionChecker'

const usePermissions = (entity) => {
  if (!entity) {
    throw new Error('Empty entity in simple-rules usePermissions hook')
  }

  const RestrictionWrapper = useCallback(
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

  return RestrictionWrapper
}

export default usePermissions
