import React from 'react'

import MenubarButton from './MenubarButton'
import { SECTION_TYPES } from '../../../constants/sectionTypes'
import ListObject from './ListObject'


function Menubar({
  listItems = SECTION_TYPES
}) {
  // pass props
  return (
    < >
     {/* iterate */}
    <div className='menuBar'>
     {ListObject(SECTION_TYPES,MenubarButton)}
    </div>
    </>
  )
}

export default Menubar