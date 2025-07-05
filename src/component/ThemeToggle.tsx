import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])


  
  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="px-3 py-1 border rounded text-sm"
    >
        
      {isDark ? '☀️ Light' : '🌙 Dark'}
    </button>
  )
}