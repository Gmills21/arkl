'use client';

import { Shield, Lock, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');

  return (
    <main className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 bg-gradient-radial from-slate-800/40 via-slate-900 to-slate-900" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl mx-auto text-center space-y-12">
          
          {/* Logo/Brand */}
          <div className="space-y-2">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm mb-6">
              <Shield className="w-8 h-8 text-slate-300" strokeWidth={1.5} />
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-100">
              Arkatos
            </h1>
          </div>

          {/* Main headline */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-100 leading-tight px-4">
              Automate Private Credit Due Diligence & Compliance
            </h2>
            <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              The AI engine for DDQs, loan tape parsing, and audit-ready risk defense.
            </p>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4" strokeWidth={2} />
              <span>SOC 2 Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" strokeWidth={2} />
              <span>Enterprise Grade</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" strokeWidth={2} />
              <span>Bank-Level Security</span>
            </div>
          </div>

          {/* Email form */}
          <div className="max-w-lg mx-auto">
            <form 
              action="https://formsubmit.co/graham@arkatos.com" 
              method="POST"
              className="space-y-4"
            >
              {/* Hidden inputs for FormSubmit configuration */}
              <input 
                type="hidden" 
                name="_next" 
                value={typeof window !== 'undefined' ? window.location.href : 'https://arkatos.com'} 
              />
              <input 
                type="hidden" 
                name="_subject" 
                value="New Arkatos Waitlist Lead" 
              />
              <input 
                type="hidden" 
                name="_captcha" 
                value="false" 
              />
              
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="institutional@firm.com"
                  className="flex-1 px-5 py-4 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent backdrop-blur-sm transition-all"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-slate-100 hover:bg-white text-slate-900 font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-900 shadow-lg hover:shadow-xl"
                >
                  Request Institutional Access
                </button>
              </div>
              
              <p className="text-xs text-slate-500 text-center sm:text-left">
                Institutional investors and asset managers only.
              </p>
            </form>
          </div>

          {/* Use cases */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto pt-8">
            {[
              { title: 'DDQ Automation', desc: 'Process due diligence questionnaires in minutes, not weeks' },
              { title: 'Loan Tape Parsing', desc: 'Extract and validate critical data from any loan tape format' },
              { title: 'Risk Defense', desc: 'Audit-ready documentation and compliance reporting' },
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-xl bg-slate-800/30 border border-slate-700/30 backdrop-blur-sm hover:bg-slate-800/40 transition-all"
              >
                <h3 className="text-slate-200 font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full py-6 text-center text-sm text-slate-600 border-t border-slate-800/50">
        <p>© 2026 Arkatos. All rights reserved.</p>
      </footer>
    </main>
  );
}
