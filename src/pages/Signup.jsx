import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      signup(name, email, password);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20 relative">
      <div className="orb orb-violet absolute w-[500px] h-[500px] top-[10%] right-[-10%] opacity-20" />
      <div className="orb orb-gold absolute w-[400px] h-[400px] bottom-[10%] left-[-5%] opacity-10" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md glass-dark rounded-[2rem] p-8 sm:p-10 shadow-gv relative z-10"
      >
        <div className="text-center mb-8">
          <h1 className="font-heading text-white text-4xl mb-2">Join EventSphere</h1>
          <p className="text-white/50 font-sub text-sm">Your journey to extraordinary moments starts here.</p>
        </div>

        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-sub text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-[10px] uppercase tracking-[0.2em] text-white/50 mb-2 ml-1 font-sub">Full Name</label>
            <input 
              type="text" 
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input-dark bg-[#0a0810]" 
              placeholder="Aryan Kapoor"
            />
          </div>
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
            Create Account
          </button>
        </form>

        <p className="text-center text-white/40 font-sub text-sm mt-8">
          Already have an account?{' '}
          <Link to="/login" className="text-violet-light hover:text-white transition-colors">
            Sign In
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
