
import React from 'react';

const SocialLinks: React.FC = () => {
  const socials = [
    {
      name: 'Facebook',
      icon: 'fa-brands fa-facebook-f',
      url: 'https://www.facebook.com/kayesahmmed00',
      brandColor: '#1877F2'
    },
    {
      name: 'Twitter',
      icon: 'fa-brands fa-twitter',
      url: 'https://twitter.com',
      brandColor: '#1DA1F2'
    },
    {
      name: 'Instagram',
      icon: 'fa-brands fa-instagram',
      url: 'https://instagram.com',
      brandColor: '#E4405F'
    }
  ];

  return (
    <div className="flex gap-4">
      {socials.map((social) => (
        <button
          key={social.name}
          onClick={() => window.open(social.url, '_blank')}
          className="group relative w-12 h-12 flex items-center justify-center rounded-2xl 
            bg-foreground/5 dark:bg-white/5 border border-foreground/10 dark:border-white/10
            transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl overflow-hidden"
          aria-label={social.name}
        >
          {/* Fill effect on hover */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ backgroundColor: social.brandColor }}
          />
          
          <i className={`${social.icon} text-lg relative z-10 transition-all duration-500 group-hover:text-white group-hover:scale-125`}></i>
          
          {/* Tooltip */}
          <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 rounded-lg bg-gray-900 text-white text-[10px] font-black tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl">
            {social.name}
          </span>
        </button>
      ))}
    </div>
  );
};

export default SocialLinks;
