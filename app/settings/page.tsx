'use client'

import { Moon, Sun, Bell, Lock } from 'lucide-react'
import { useState } from 'react'

export default function Settings() {
  const [darkMode, setDarkMode] = useState(true)
  const [notifications, setNotifications] = useState(true)
  const [twoFactor, setTwoFactor] = useState(false)

  return (
    <div className="space-y-6 max-w-2xl">
      <h1 className="text-3xl font-bold text-dark-100">Settings</h1>

      {/* Display Settings */}
      <div className="card">
        <h2 className="text-xl font-bold text-dark-100 mb-6">Display</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-dark-900/50 rounded-lg">
            <div className="flex items-center space-x-3">
              {darkMode ? (
                <Moon className="w-5 h-5 text-crypto-primary" />
              ) : (
                <Sun className="w-5 h-5 text-crypto-warning" />
              )}
              <div>
                <p className="font-semibold text-dark-100">Dark Mode</p>
                <p className="text-sm text-dark-400">Use dark theme for the interface</p>
              </div>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`relative w-12 h-6 rounded-full transition-colors ${
                darkMode ? 'bg-crypto-primary' : 'bg-dark-600'
              }`}
            >
              <div
                className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                  darkMode ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="card">
        <h2 className="text-xl font-bold text-dark-100 mb-6">Notifications</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-dark-900/50 rounded-lg">
            <div className="flex items-center space-x-3">
              <Bell className="w-5 h-5 text-crypto-primary" />
              <div>
                <p className="font-semibold text-dark-100">Price Alerts</p>
                <p className="text-sm text-dark-400">Get notified when prices change</p>
              </div>
            </div>
            <button
              onClick={() => setNotifications(!notifications)}
              className={`relative w-12 h-6 rounded-full transition-colors ${
                notifications ? 'bg-crypto-primary' : 'bg-dark-600'
              }`}
            >
              <div
                className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                  notifications ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between p-4 bg-dark-900/50 rounded-lg">
            <div className="flex items-center space-x-3">
              <Bell className="w-5 h-5 text-crypto-primary" />
              <div>
                <p className="font-semibold text-dark-100">Transaction Alerts</p>
                <p className="text-sm text-dark-400">Notify on incoming/outgoing transactions</p>
              </div>
            </div>
            <button className="relative w-12 h-6 rounded-full bg-crypto-primary">
              <div className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full" />
            </button>
          </div>
        </div>
      </div>

      {/* Security Settings */}
      <div className="card">
        <h2 className="text-xl font-bold text-dark-100 mb-6">Security</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-dark-900/50 rounded-lg">
            <div className="flex items-center space-x-3">
              <Lock className="w-5 h-5 text-crypto-primary" />
              <div>
                <p className="font-semibold text-dark-100">Two-Factor Authentication</p>
                <p className="text-sm text-dark-400">Add extra security to your account</p>
              </div>
            </div>
            <button
              onClick={() => setTwoFactor(!twoFactor)}
              className={`relative w-12 h-6 rounded-full transition-colors ${
                twoFactor ? 'bg-crypto-primary' : 'bg-dark-600'
              }`}
            >
              <div
                className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                  twoFactor ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          <button className="w-full btn-secondary">Change Password</button>
          <button className="w-full btn-secondary">View Connected Apps</button>
        </div>
      </div>

      {/* Wallet Settings */}
      <div className="card">
        <h2 className="text-xl font-bold text-dark-100 mb-6">Wallet</h2>
        <div className="space-y-4">
          <div className="p-4 bg-dark-900/50 rounded-lg">
            <p className="text-sm text-dark-400 mb-2">Connected Wallet</p>
            <p className="font-mono text-dark-100">0x1234567890abcdef1234567890abcdef12345678</p>
          </div>
          <button className="w-full btn-secondary">Disconnect Wallet</button>
          <button className="w-full btn-secondary">Add Another Wallet</button>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="card border border-crypto-danger/50">
        <h2 className="text-xl font-bold text-crypto-danger mb-6">Danger Zone</h2>
        <button className="w-full px-4 py-2 rounded-lg bg-crypto-danger/20 hover:bg-crypto-danger/30 text-crypto-danger font-semibold transition-colors">
          Delete Account
        </button>
      </div>
    </div>
  )
}
