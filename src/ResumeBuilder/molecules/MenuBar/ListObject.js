import React from 'react'
import { renderListObject } from './listObject.helper'

function ListObject(List,WrapperComponent) {
  return (
  <>
  {renderListObject(List,WrapperComponent)}
  </>
  )
}

export default ListObject