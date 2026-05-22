import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      login(email, password);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20 relative">
      <div className="orb orb-violet absolute w-[500px] h-[500px] top-[10%] left-[-10%] opacity-20" />
      <div className="orb orb-purple absolute w-[400px] h-[400px] bottom-[10%] right-[-5%] opacity-20" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md glass-dark rounded-[2rem] p-8 sm:p-10 shadow-gv relative z-10"
      >
        <div className="text-center mb-8">
          <h1 className="font-heading text-white text-4xl mb-2">Welcome Back</h1>
          <p className="text-white/50 font-sub text-sm">Discover what's happening around you.</p>
        </div>

        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-sub text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-[10px] uppercase tracking-[0.2em] text-white/50 mb-2 ml-1 font-sub">Email</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-dark bg-[#0a0810]" 
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-[10px] uppercase tracking-[0.2em] text-white/50 mb-2 ml-1 font-sub">Password</label>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-dark bg-[#0a0810]" 
              placeholder="••••••••"
            />
          </div>
          
          <button type="submit" className="btn-primary w-full py-4 mt-4 tracking-widest text-sm uppercase">
            Sign In
          </button>
        </form>

        <p className="text-center text-white/40 font-sub text-sm mt-8">
          Don't have an account?{' '}
          <Link to="/signup" className="text-violet-light hover:text-white transition-colors">
            Create one
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
