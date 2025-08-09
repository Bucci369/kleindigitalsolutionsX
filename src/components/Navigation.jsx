import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './ui/navigation-menu'

export default function Navigation({ onNavigate, currentPage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavigation = (page) => {
    onNavigate(page)
    setIsMenuOpen(false)
  }

  const handleScrollTo = (elementId) => {
    if (currentPage !== 'home') {
      onNavigate('home')
      setTimeout(() => {
        document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const servicesData = [
    {
      title: "Einzelberatung",
      description: "Individuelle Ernährungsberatung",
      action: () => handleNavigation('einzelberatung')
    },
    {
      title: "Personal Coaching",
      description: "Intensive 1:1 Betreuung",
      action: () => handleNavigation('coaching')
    },
    {
      title: "Gruppenberatung",
      description: "Gemeinsam lernen",
      action: () => handleNavigation('gruppenberatung')
    },
    {
      title: "BIA-Körperanalyse",
      description: "Körperzusammensetzung",
      action: () => handleNavigation('bia-messung')
    }
  ]

  const resourcesData = [
    {
      title: "Rezepte",
      description: "Gesunde Rezeptideen",
      action: () => handleNavigation('recipes')
    },
    {
      title: "Blog",
      description: "Artikel zu Sporternährung",
      action: () => handleNavigation('blog')
    },
    {
      title: "Podcast",
      description: "Ernährungstipps",
      action: () => handleNavigation('podcast')
    },
    {
      title: "FAQ",
      description: "Häufige Fragen",
      action: () => handleNavigation('faq')
    }
  ]

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-black/55 backdrop-blur-md border-b border-white/10"
    >
      <nav className="w-full">
  <div className="flex items-center h-14 md:h-14 w-full px-0">
          {/* Logo (flush left) */}
          <div className="flex-shrink-0">
            <button
              onClick={() => handleNavigation('home')}
              className="block focus:outline-none focus:ring-2 focus:ring-white/40 rounded-sm pl-4 md:pl-5"
            >
              <span className="font-display text-xl font-medium text-white tracking-tight">Anna Müller</span>
            </button>
          </div>

          {/* Desktop Navigation (flush right) */}
          <div className="hidden lg:flex lg:items-center space-x-8 ml-auto pr-4 md:pr-5">
            <NavigationMenu>
              <NavigationMenuList>
                
                {/* Services Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="nav-link bg-transparent text-white/80 hover:text-white font-medium">
                    Leistungen
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-80 gap-1 p-4 bg-white border border-neutral-200 shadow-elegant">
                      {servicesData.map((service) => (
                        <NavigationMenuLink key={service.title} asChild>
                          <button
                            className="group select-none p-3 leading-none no-underline outline-none transition-colors hover:bg-neutral-50 text-left w-full"
                            onClick={service.action}
                          >
                            <div className="text-sm font-medium text-neutral-900">{service.title}</div>
                            <p className="text-xs text-neutral-500 mt-1">
                              {service.description}
                            </p>
                          </button>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Resources Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="nav-link bg-transparent text-white/80 hover:text-white font-medium">
                    Ressourcen
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-80 gap-1 p-4 bg-white border border-neutral-200 shadow-elegant">
                      {resourcesData.map((resource) => (
                        <NavigationMenuLink key={resource.title} asChild>
                          <button
                            className="group select-none p-3 leading-none no-underline outline-none transition-colors hover:bg-neutral-50 text-left w-full"
                            onClick={resource.action}
                          >
                            <div className="text-sm font-medium text-neutral-900">{resource.title}</div>
                            <p className="text-xs text-neutral-500 mt-1">
                              {resource.description}
                            </p>
                          </button>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Single Links */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <button 
                      onClick={() => handleScrollTo('about')} 
                      className="nav-link text-white/80 hover:text-white"
                    >
                      Über mich
                    </button>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <button 
                      onClick={() => handleScrollTo('testimonials')} 
                      className="nav-link text-white/80 hover:text-white"
                    >
                      Bewertungen
                    </button>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Removed Animationen menu item */}

              </NavigationMenuList>
            </NavigationMenu>

          </div>

          {/* Mobile menu button (far right) */}
      <div className="lg:hidden ml-auto pr-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="p-2 text-white/80 hover:text-white transition-colors duration-200"
              aria-label={isMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
            >
              <span className="sr-only">Menü</span>
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
  </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            className="lg:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="py-4 space-y-1 bg-neutral-950/95 backdrop-blur-md border-t border-white/10">
              
              {/* Services Section */}
              <div className="py-2">
                <div className="text-sm font-medium text-white px-3 py-2 tracking-wide uppercase">Leistungen</div>
                {servicesData.map((service) => (
                  <button
                    key={service.title}
                    onClick={service.action}
                    className="block px-3 py-2 text-sm text-white/80 hover:text-white transition-colors w-full text-left"
                  >
                    <div className="font-medium text-white">{service.title}</div>
                    <div className="text-xs text-white/60">{service.description}</div>
                  </button>
                ))}
              </div>

              {/* Resources Section */}
              <div className="py-2 border-t border-white/10">
                <div className="text-sm font-medium text-white px-3 py-2 tracking-wide uppercase">Ressourcen</div>
                {resourcesData.map((resource) => (
                  <button
                    key={resource.title}
                    onClick={resource.action}
                    className="block px-3 py-2 text-sm text-white/80 hover:text-white transition-colors w-full text-left"
                  >
                    <div className="font-medium text-white">{resource.title}</div>
                    <div className="text-xs text-white/60">{resource.description}</div>
                  </button>
                ))}
              </div>

              {/* Other Links */}
        <div className="border-t border-white/10 pt-2">
                <button 
                  onClick={() => handleScrollTo('about')} 
          className="block px-3 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors w-full text-left"
                >
                  Über mich
                </button>
                <button 
                  onClick={() => handleScrollTo('testimonials')} 
          className="block px-3 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors w-full text-left"
                >
                  Bewertungen
                </button>
              </div>

            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}