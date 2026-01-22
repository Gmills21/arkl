'use client';

import { Shield, Lock, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');

  return (
    <main className="min-h-screen relative overflow-hidden font-sans" style={{ fontFamily: 'Inter, Geist, sans-serif' }}>
      {/* Deep void radial gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-radial from-[#0a0f1c] via-emerald-900/40 to-[#0a0f1c]" />
      {/* Aurora Glow Behind Text */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-gradient-to-br from-emerald-400/30 via-cyan-400/20 to-transparent blur-3xl opacity-60 -z-10" />
      {/* Noise Overlay */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-20 mix-blend-soft-light noise-bg" />
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

          {/* Overline */}
          <div className="mb-2">
            <span className="text-xs tracking-widest text-emerald-400 uppercase font-semibold">PROFESSIONAL FIRM ACCESS ONLY</span>
          </div>
          {/* Main headline */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight px-4">
              Automate <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_0_8px_#34d399]">Private Credit</span> Compliance.
            </h2>
            <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
              The first agentic workflow engine for parsing loan tapes and answering LP diligence. SOC2 Ready.
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

          {/* Email form - Glassmorphism */}
          <div className="max-w-lg mx-auto">
            <form 
              action="https://formsubmit.co/graham@arkatos.com" 
              method="POST"
              className="space-y-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl shadow-lg p-6"
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
                  className="flex-1 px-3 py-2 bg-transparent border border-white/10 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-emerald-400/60 focus:border-transparent backdrop-blur-xl transition-all shadow-inner text-base"
                />
                <button
                  type="submit"
                  className="px-5 py-2 bg-gradient-to-r from-emerald-400 to-cyan-400 text-white font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400/60 shadow-lg hover:scale-[1.02] text-base"
                  style={{ boxShadow: '0 2px 12px 0 rgba(52, 211, 153, 0.15)' }}
                >
                  Request Institutional Access
                </button>
              </div>
              <p className="text-xs text-white/50 text-center sm:text-left tracking-wide">
                For professional investment firms and asset managers of all sizes.
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
                className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all"
              >
                <h3 className="text-white font-semibold mb-2 tracking-tight">{item.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
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
