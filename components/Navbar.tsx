'use client'

import { Bell, Settings, LogOut } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [isConnected, setIsConnected] = useState(false)

  const handleConnect = () => {
    setIsConnected(!isConnected)
  }

  return (
    <nav className="bg-dark-900 border-b border-dark-700 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-dark-100">Dashboard</h1>
        </div>

        {/* Right */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <button className="p-2 hover:bg-dark-800 rounded-lg transition-colors">
            <Bell className="w-5 h-5 text-dark-400" />
          </button>

          {/* Settings */}
          <button className="p-2 hover:bg-dark-800 rounded-lg transition-colors">
            <Settings className="w-5 h-5 text-dark-400" />
          </button>

          {/* Wallet Connect */}
          <button
            onClick={handleConnect}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
              isConnected
                ? 'bg-crypto-success/20 text-crypto-success'
                : 'bg-crypto-primary hover:bg-crypto-primary/90 text-white'
            }`}
          >
            {isConnected ? '0x1234...5678' : 'Connect Wallet'}
          </button>

          {/* Disconnect */}
          {isConnected && (
            <button
              onClick={handleConnect}
              className="p-2 hover:bg-dark-800 rounded-lg transition-colors"
            >
              <LogOut className="w-5 h-5 text-dark-400" />
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}
