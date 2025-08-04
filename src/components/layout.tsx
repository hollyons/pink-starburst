import * as React from "react"

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="font-paragraph bg-white text-gray-900 min-h-screen">
      {children}
    </div>
  )
}

export default Layout