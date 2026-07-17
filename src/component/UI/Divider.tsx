import React from 'react'

const Divider = () => {
  return (
     <div className="flex items-center gap-4 mb-12 my-8">
    <div className="flex-1 h-px bg-line" />
    <div className="flex gap-1.5">
      <span className="w-1.5 h-1.5 rounded-full bg-muted" />
      <span className="w-1.5 h-1.5 rounded-full bg-muted/60" />
      <span className="w-1.5 h-1.5 rounded-full bg-muted/30" />
    </div>
    <div className="flex-1 h-px bg-line" />
  </div>
  )
}

export default Divider