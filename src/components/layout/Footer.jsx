import { User } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="w-full py-8 border-t border-white/10 bg-background/80 backdrop-blur-sm z-40 relative">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-2xl font-heading font-bold tracking-tighter text-white">
            S<span className="text-accent">.</span>S
          </span>
          <p className="text-sm text-gray-400 mt-2 font-medium">
            Designed & Built by Selvarasan S
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://github.com/Selva-rc" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-accent transition-all hover:scale-110 flex items-center justify-center">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD0UlEQVR4nO2aSWsVQRCAv4iiAcUVFMxBhRgVjfuuBwVxQT158KjiLijqQU+ieBC3aHD3JP4JDZoIblEEF7y6m4P7gnE3iRT0g8djxnT1TPc8YT4oCC8ztfTMdFdXNeTk5OTk5PhmBLAeOAU0Ao+BD8AvI/L3I/O/k8A6oIb/nHFAHdACdDjKS+AwMJb/hApgCdCcIOg4uQksNjbKkinAHQ+Bl8ptYBJlRCVwDGgLEHxBxFY90CPr4GuABwEDL5V7QHVWwU8F3mUYfEFkBZkVOviFwLcyCL4gX4EFoYKfBrSWQdCl8i3Em1ADfCyDYOPkvc85odJiwmsC9gANwI8UA/sOXDS6L3Vy7V1fq8NxC0dXFl0/ENgFvE4Q+CtgK9C7SO8yi/uO+khy2iwMD4+4ty9w3iH4c0CfCH3VFvf+ASakFXyFIsMrflKlbAZOAyuA8cBg81mJVJnfVphr5No4+lr60pxW2rxE8dS64p+uCn9kuU5Ms8JgP/zTW+HPjTS2tB0KkX2/b4YofapNYqxOaWw5/pmr9OlgEmMtCkPtaX1znTDH2LL163mSrK9DIfsJx2Glb07Z4XrlKHcnHJLpvVD4t9bFyCmFgTWER/OATrgYaLJULjl/L8LTU7HfkP2DmqeWyi+QHQ2WPkoZXs17S+UHyI5Dlj6+dVH+01K57NayYrviM1Xzy1L5Nsp/AORhqvlUhuu/6ycghVNvk2Aj2XHF5yTYZKn8N9Cf8Awwtm18vOxi4KylcpF9hOeAwj9J6tSsURYtRxOOWmXRdZWLkdEKA4X9gJS5fFNl2uYa30a6GnuiNNRiGie+mAg8U/okk7kz9UpjhTW3LuXymOg6oshNikXuc2a8g8GCfDYVXnkjujjYlnumA2eMLlc/EpXEhFsRSj+a0rU0S75YOCH7itXYs1axF/mXXCcFlkYobjdLXxfTDHlpcapDUzCpjBl4rSxKYwAqTABRBnYXfSpxm6d2U13WMs50eFyDl3J+akyOaY1J0IPMNRtjHJF01fd+v1T+mBUjVepjjO0oumZvRMV2ZwKbmxwHQFYhL4XI+xHGHpb04CabNFWc2JBwnzDf8dyQtwJtdcy5IM0Mr2GSMvi3IQ5NzTK5f+mymHi9jWCi8ojMDAIxzxxMKnZAkpUtJS3ybglfR9sBaDUts6DMNq9c1Mrw1DQufiacjW0G4A0wk4wYZnFuyOcAyIQ3lIzpYXp1bQEHoM10fUO24zpFzuRcCzAAtz1vuRNRYfLv6x4G4Gqg9ntqjDGfxqgEOkaZ0nfIcpsXXOsBOTk5OTk5+OMvJumzTKKLQPIAAAAASUVORK5CYII=" alt="github" className="w-5 h-5 invert opacity-70 group-hover:opacity-100 transition-opacity" />
          </a>
          <a href="https://linkedin.com/in/selvarasans" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-accent transition-all hover:scale-110">
            <User size={20} />
          </a>
          <a href="mailto:selva200513@gmail.com" className="text-gray-400 hover:text-accent transition-all hover:scale-110 flex items-center justify-center">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACu0lEQVR4nO2UT2jTYByG48F5c4ieFcdogqaVNkmXuJ7KDkILrcPN4y4y2KFnPYjebMCbc4JXT85Bq0IPWm1zsLVoFZFdNjfULV93kVHBuZJoP/lmo1lNmj/9K3wvvLfw6/skDyUIHBwcHBwcXcoez7ECRd0pkmSlQJI7BZIsFT2eaaLH+SHR06pEl5Q8vaPkvRU1T9+GWeqo9XiSXC1SFDToUnlkZLjbw2GWGVYkekmVvPCf5umVlhB7b954vNa1EkUx3Rqv5LyMKnnXDMf/7bw5AEluWQCg1gDPJTo9HvBcQpG8NYvxUMnTwByAouo2ACAQOCjz3MPPodCRdod/CQYPA4G7j25ajf8N4K2bHrMzXgNoQHzaHA/ybscDngkAgfug3bMDgNoxgEYVIHCXIUEccDK+IrCzgOdq+lv9AnCklF4Z0NS2AeYnZt65BbCjVLMywAXAq+zYa1OA4yKAk3OLap4+U3MD0EopI2WAA4DvOd/uzUy4Gk3HYUsA1MDVt/BeKP7TJcA+pVopA2wCrD8L1C49ikA03hYA6skbG/DKhWt1o79WO2MaEOuodp9XDcZnnozD8+nYn/G2AbROzi3WpdO+XTcATqvqhn/L+RQxM7FvuCsATak0G97qFcDmc/+2Xpm2ATSlkpHEClKqmwAvnvIfm5XpCIDW2ZmF90Dgql0AqC48Di+3Gt4RANSK4D8BePZlp8bLAvdmg/eP2hnfEQD0bJlhDso8K8oC15ZSMs/dXT03egjd7CmAFnCWiQGe3Xb+1tmv8hh7UX+rLwAoTpXSlCGa0jcAJ0rplRkoACuljJQZSAAjpcyUGVgAFKSJLLC3UM2UGWgAN4liABEDtJUoBkgCMPAAqbhsDiDK4qADRNKxpOmBU9eXh/YgLL5EPwAiqTiIpuLi1IOpoW79Pg4ODg4O8d/lF8QKnDLBCDeUAAAAAElFTkSuQmCC" alt="gmail-new" className="w-5 h-5 invert opacity-70 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
        
        <p className="text-xs text-gray-500 font-mono">
          &copy; {new Date().getFullYear()} Selvarasan S. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
