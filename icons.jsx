// Shared SVG icons for iSATPrep.

const Check = ({color="#0F1E3D"}) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 8.5L6.5 12L13 4.5" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const NoCheck = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M4 8H12" stroke="#9CA3AF" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

const ArrowRight = ({size=16, color="currentColor"}) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <path d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Plus = ({size=14}) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
    <path d="M7 2V12M2 7H12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

const PlayIcon = ({size=32, color="currentColor"}) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <path d="M11 7L24 16L11 25V7Z" fill={color}/>
  </svg>
);

Object.assign(window, { Check, NoCheck, ArrowRight, Plus, PlayIcon });
