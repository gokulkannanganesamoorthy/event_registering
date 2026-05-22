import { motion } from 'framer-motion';

export default function SmokeBackground() {
  return (
    <div className="fixed inset-0 z-[-10] overflow-hidden pointer-events-none bg-[#050508]">
      
      {/* 
        Heavy Wavy/Smoke blobs 
        Using existing float animations with heavy blur and low opacity to create a cozy, smoky atmosphere
      */}
      <div 
        className="absolute w-[60vw] h-[60vw] rounded-full bg-violet-900/10 blur-[120px] mix-blend-screen animate-float-a"
        style={{ top: '-10%', left: '-10%' }}
      />
      
      <div 
        className="absolute w-[70vw] h-[70vw] rounded-full bg-purple-900/10 blur-[150px] mix-blend-screen animate-float-b"
        style={{ bottom: '-20%', right: '-10%' }}
      />
      
      <div 
        className="absolute w-[50vw] h-[50vw] rounded-full bg-indigo-900/10 blur-[100px] mix-blend-screen animate-float-c"
        style={{ top: '30%', left: '40%' }}
      />

      <div 
        className="absolute w-[40vw] h-[40vw] rounded-full bg-fuchsia-900/10 blur-[100px] mix-blend-screen animate-float-a"
        style={{ bottom: '10%', left: '10%', animationDelay: '2s' }}
      />
      
      {/* Optional subtle noise overlay for texture */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />
    </div>
  );
}
