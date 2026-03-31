import React, { useState } from 'react'

const agentTypes = [
  {
    id: 'researcher',
    name: 'Research Agent',
    emoji: '🔬',
    description: 'Deep dives any topic, summarizes findings',
    status: 'active',
    task: 'Researching: "Self-Degree Framework"'
  },
  {
    id: 'coder',
    name: 'Code Agent',
    emoji: '⚡',
    description: 'Writes, reviews, and deploys code',
    status: 'active',
    task: 'Building: ClawChair landing page'
  },
  {
    id: 'writer',
    name: 'Content Agent',
    emoji: '✍️',
    description: 'Creates blog posts, emails, social content',
    status: 'idle',
    task: 'Idle'
  },
  {
    id: 'trader',
    name: 'Trading Agent',
    emoji: '📈',
    description: 'Analyzes markets, executes trades',
    status: 'active',
    task: 'Monitoring: BTC/USD'
  },
  {
    id: 'assistant',
    name: 'Personal Assistant',
    emoji: '🤖',
    description: 'Schedules, reminders, coordination',
    status: 'active',
    task: 'Next: Team standup in 15min'
  },
  {
    id: 'analyst',
    name: 'Data Analyst',
    emoji: '📊',
    description: 'Builds dashboards, generates reports',
    status: 'idle',
    task: 'Idle'
  }
]

export default function AIIntegration() {
  const [activeTab, setActiveTab] = useState('agents')
  const [selectedAgent, setSelectedAgent] = useState(null)

  return (
    <section id="ai" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-neon-purple font-orbitron text-sm tracking-widest mb-4 block">AI INTEGRATION</span>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-6">
            Your AI <span className="gradient-text">Army</span> Always Online
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Powered by OpenClaw. Multiple specialized agents work 24/7 on your behalf. Monitor, delegate, conquer.
          </p>
        </div>

        {/* Dashboard */}
        <div className="glass rounded-3xl border border-white/10 overflow-hidden">
          {/* Dashboard Header */}
          <div className="bg-white/5 px-6 py-4 flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                <span className="font-orbitron text-sm text-neon-cyan">SYSTEM ONLINE</span>
              </div>
              <div className="text-gray-500 text-sm">
                OpenClaw v2.1 • 6 Agents Active
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-xs text-gray-500">Total Tasks Today</div>
                <div className="font-orbitron text-neon-magenta">247</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-500">Efficiency</div>
                <div className="font-orbitron text-neon-cyan">94.2%</div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-white/10">
            <button
              onClick={() => setActiveTab('agents')}
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === 'agents' 
                  ? 'text-neon-cyan border-b-2 border-neon-cyan bg-neon-cyan/5' 
                  : 'text-gray-500 hover:text-white'
              }`}
            >
              Agent Control Center
            </button>
            <button
              onClick={() => setActiveTab('log')}
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === 'log' 
                  ? 'text-neon-cyan border-b-2 border-neon-cyan bg-neon-cyan/5' 
                  : 'text-gray-500 hover:text-white'
              }`}
            >
              Activity Log
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            {activeTab === 'agents' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {agentTypes.map((agent) => (
                  <div
                    key={agent.id}
                    onClick={() => setSelectedAgent(agent)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 ${
                      selectedAgent?.id === agent.id
                        ? 'border-neon-cyan bg-neon-cyan/10'
                        : 'border-white/10 hover:border-white/30 bg-white/5'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{agent.emoji}</span>
                        <div>
                          <h4 className="font-medium text-white">{agent.name}</h4>
                          <p className="text-xs text-gray-500">{agent.description}</p>
                        </div>
                      </div>
                      <div className={`px-2 py-1 rounded-full text-xs ${
                        agent.status === 'active' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-gray-500/20 text-gray-400'
                      }`}>
                        {agent.status}
                      </div>
                    </div>
                    <div className="text-xs text-gray-400 truncate">{agent.task}</div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'log' && (
              <div className="space-y-2 font-mono text-sm">
                {[
                  { time: '19:42:01', type: 'INFO', msg: 'Research Agent completed: Self-Degree Framework analysis' },
                  { time: '19:41:58', type: 'SUCCESS', msg: 'Code Agent deployed: ClawChair landing page v1.2' },
                  { time: '19:40:12', type: 'TRADE', msg: 'Trading Agent: BTC position +2.3% (target reached)' },
                  { time: '19:38:44', type: 'INFO', msg: 'Assistant scheduled: Team standup for 15:00 UTC' },
                  { time: '19:36:21', type: 'WARNING', msg: 'Data Analyst: Dataset update delayed (retrying...)' },
                  { time: '19:35:00', type: 'INFO', msg: 'Content Agent: Drafted 3 Twitter posts for review' },
                ].map((log, i) => (
                  <div key={i} className="flex gap-4 py-2 border-b border-white/5">
                    <span className="text-gray-500">{log.time}</span>
                    <span className={`${
                      log.type === 'SUCCESS' ? 'text-green-400' : 
                      log.type === 'WARNING' ? 'text-yellow-400' :
                      log.type === 'TRADE' ? 'text-neon-cyan' : 'text-gray-400'
                    }`}>[{log.type}]</span>
                    <span className="text-gray-300">{log.msg}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* OpenClaw Feature */}
        <div className="mt-12 glass rounded-2xl p-8 border border-neon-purple/30 text-center">
          <div className="text-4xl mb-4">🧠</div>
          <h3 className="font-orbitron text-2xl font-bold mb-4">
            Powered by <span className="text-neon-purple">OpenClaw</span>
          </h3>
          <p className="text-gray-400 max-w-xl mx-auto">
            The most advanced AI agent platform. Local models, infinite customization, 
            total privacy. Your agents, your rules.
          </p>
        </div>
      </div>
    </section>
  )
}
