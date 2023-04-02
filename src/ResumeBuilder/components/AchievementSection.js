import React from 'react'

function AchievementSection({List}) {
    const id=List.id;
  return (
    <>
    <p className="content-title" id={id}>
        {List.achievementsField}
    </p>
                
      
    </>
  )
}

export default AchievementSection