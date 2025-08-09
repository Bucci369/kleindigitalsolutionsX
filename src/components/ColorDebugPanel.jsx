import { useState, useEffect, useRef } from 'react'

// Farb-Debug Panel: Live-Anpassung von Primary & Accent ohne Rebuild
export default function ColorDebugPanel() {
  const defaultPrimary = {
    50: '#f2f9f5', 100: '#e3f2ea', 200: '#c6e5d3', 300: '#a3d4b9', 400: '#7cc29c',
    500: '#58ac81', 600: '#3d8d66', 700: '#2f6f52', 800: '#245541', 900: '#1a3c2d'
  }
  const defaultAccent = { main: '#d4a574', light: '#e8c4a3', dark: '#b8956a' }

  const [open, setOpen] = useState(false)
  const [primary, setPrimary] = useState(defaultPrimary)
  const [accent, setAccent] = useState(defaultAccent)
  const styleRef = useRef(null)

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('color-debug-theme'))
      if (saved?.primary && saved?.accent) {
        setPrimary(p => ({ ...p, ...saved.primary }))
        setAccent(a => ({ ...a, ...saved.accent }))
      }
    } catch {}
  }, [])

  const applyStyles = (p = primary, a = accent) => {
    const makeRules = () => {
      const lines = []
      lines.push(':root {')
      lines.push(`  --color-accent: ${a.main};`)
      lines.push(`  --color-accent-light: ${a.light};`)
      lines.push(`  --color-accent-dark: ${a.dark};`)
      lines.push('}')
      lines.push(`.text-accent { color: var(--color-accent) !important; }`)
      Object.entries(p).forEach(([k,val]) => {
        lines.push(`.text-primary-${k} { color: ${val} !important; }`)
        lines.push(`.bg-primary-${k} { background-color: ${val} !important; }`)
        lines.push(`.border-primary-${k} { border-color: ${val} !important; }`)
        lines.push(`.from-primary-${k} { --tw-gradient-from: ${val} !important; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(255,255,255,0)); }`)
        lines.push(`.to-primary-${k} { --tw-gradient-to: ${val} !important; }`)
      })
      lines.push(`.from-accent-500 { --tw-gradient-from: ${a.main} !important; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(255,255,255,0)); }`)
      lines.push(`.to-accent-500 { --tw-gradient-to: ${a.main} !important; }`)
      return lines.join('\n')
    }
    if (!styleRef.current) {
      styleRef.current = document.getElementById('color-debug-overrides')
      if (!styleRef.current) {
        styleRef.current = document.createElement('style')
        styleRef.current.id = 'color-debug-overrides'
        document.head.appendChild(styleRef.current)
      }
    }
    styleRef.current.textContent = makeRules()
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      applyStyles()
      localStorage.setItem('color-debug-theme', JSON.stringify({ primary, accent }))
    }
  }, [primary, accent])

  const updatePrimary = (shade, val) => setPrimary(prev => ({ ...prev, [shade]: val }))
  const updateAccent = (key, val) => setAccent(prev => ({ ...prev, [key]: val }))
  const reset = () => { setPrimary(defaultPrimary); setAccent(defaultAccent) }
  const exportJSON = () => { navigator.clipboard.writeText(JSON.stringify({ primary, accent }, null, 2)); alert('Theme JSON kopiert!') }

  return (
    <>
      <button
        onClick={() => setOpen(o => !o)}
        className="fixed bottom-4 right-4 z-[9999] px-3 py-2 rounded-md text-xs font-medium bg-neutral-900 text-white shadow-lg hover:bg-neutral-800 transition"
      >{open ? 'Farben ×' : '🎨 Farben'}</button>
      {open && (
        <div className="fixed bottom-16 right-4 z-[9999] w-80 max-h-[80vh] overflow-y-auto bg-white/95 backdrop-blur-sm border border-neutral-200 shadow-2xl rounded-lg p-4 text-xs space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold tracking-wide text-neutral-700">Color Debug Panel</h3>
            <div className="flex gap-2">
              <button onClick={reset} className="px-2 py-1 bg-neutral-100 rounded hover:bg-neutral-200">Reset</button>
              <button onClick={exportJSON} className="px-2 py-1 bg-neutral-900 text-white rounded hover:bg-neutral-800">Export</button>
            </div>
          </div>
          <section>
            <h4 className="font-semibold mb-2 text-neutral-600">Accent</h4>
            <div className="space-y-2">
              {['main','light','dark'].map(key => (
                <div key={key} className="flex items-center justify-between gap-2">
                  <label className="w-16 capitalize">{key}</label>
                  <input type="color" className="h-8 w-16 cursor-pointer" value={accent[key]} onChange={e => updateAccent(key, e.target.value)} />
                  <input type="text" value={accent[key]} onChange={e => updateAccent(key, e.target.value)} className="flex-1 bg-neutral-50 border border-neutral-200 rounded px-2 py-1" />
                </div>
              ))}
            </div>
          </section>
          <section>
            <h4 className="font-semibold mb-2 mt-4 text-neutral-600">Primary Shades</h4>
            <div className="space-y-2">
              {Object.keys(primary).map(shade => (
                <div key={shade} className="flex items-center justify-between gap-2">
                  <label className="w-10">{shade}</label>
                  <input type="color" className="h-8 w-16 cursor-pointer" value={primary[shade]} onChange={e => updatePrimary(shade, e.target.value)} />
                  <input type="text" value={primary[shade]} onChange={e => updatePrimary(shade, e.target.value)} className="flex-1 bg-neutral-50 border border-neutral-200 rounded px-2 py-1 font-mono" />
                </div>
              ))}
            </div>
          </section>
          <section className="pt-4 border-t border-neutral-200">
            <h4 className="font-semibold mb-2 text-neutral-600">Hinweise</h4>
            <ul className="list-disc pl-5 space-y-1 text-neutral-500 leading-snug">
              <li>Änderungen wirken sofort (CSS Overrides).</li>
              <li>Persistenz via localStorage.</li>
              <li>Export kopiert JSON.</li>
            </ul>
          </section>
        </div>
      )}
    </>
  )
}
