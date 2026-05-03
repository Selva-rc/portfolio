import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, Clock, Code2 } from 'lucide-react';

const languageColors = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Python: '#3572A5',
  Java: '#b07219',
  'C++': '#f34b7d',
  React: '#61dafb',
  Vue: '#41b883',
  PHP: '#4F5D95',
  Ruby: '#701516',
  Go: '#00ADD8',
  Swift: '#F05138',
  Kotlin: '#A97BFF',
  Rust: '#dea584',
  Dart: '#00B4AB',
  C: '#555555',
  'C#': '#178600',
};

const getLanguageColor = (langName) => {
  return languageColors[langName] || '#8b5cf6'; // fallback to accent color
};

const WakaTimeStats = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Using a CORS proxy because WakaTime's public API doesn't send CORS headers
        const response = await fetch('https://corsproxy.io/?https://wakatime.com/api/v1/users/@selvarc/stats');
        const data = await response.json();
        if (data && data.data) {
          setStats(data.data);
        }
      } catch (error) {
        console.error('Error fetching WakaTime stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading || !stats) {
    return (
      <div className="w-full h-32 flex items-center justify-center border border-white/10 rounded-2xl bg-white/5 animate-pulse mt-8">
        <Activity className="text-accent animate-spin" />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="glass p-6 md:p-8 rounded-2xl flex flex-col md:flex-row gap-8 items-center justify-between border-white/5 hover:border-accent/30 transition-colors duration-300 mt-8 w-full relative overflow-hidden group"
    >
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <Code2 size={120} />
      </div>

      <div className="flex flex-col relative z-10 w-full md:w-1/3">
        <div className="flex items-center gap-2 mb-2">
          <Activity className="text-accent" size={20} />
          <h4 className="text-xl font-bold font-heading text-white">Live Coding Stats</h4>
        </div>
        <p className="text-sm text-gray-400 mb-4">Powered by WakaTime</p>
        
        <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
          <Clock className="text-accent" size={24} />
          <div>
            <div className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Time Coded</div>
            <div className="text-xl font-bold text-white">{stats.human_readable_total || '0 mins'}</div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-2/3 relative z-10 flex flex-col gap-4">
        <h5 className="text-sm text-gray-500 uppercase font-bold tracking-wider">Top Languages</h5>
        <div className="space-y-4">
          {stats.languages?.slice(0, 3).map((lang, index) => {
            const color = getLanguageColor(lang.name);
            return (
            <div key={lang.name} className="flex flex-col gap-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
                  {lang.name}
                </span>
                <span className="text-gray-400">{lang.text} ({lang.percent}%)</span>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${lang.percent}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                  className="h-full rounded-full"
                  style={{ backgroundColor: color }}
                />
              </div>
            </div>
          )})}

          {(!stats.languages || stats.languages.length === 0) && (
            <div className="text-sm text-gray-500">Not enough data to display languages yet.</div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default WakaTimeStats;
