import React from "react";

const TickerStrip = () => {
  const content = "EST. 2024 • HEAVYWEIGHT FABRICS • BUILT TO ENDURE • URBAN WESTERN • LIMITED DROPS • ";
  
  return (
    <div className="ticker-wrap border-y border-black/10">
      <div className="ticker-content">
        {[...Array(10)].map((_, i) => (
          <span key={i} className="text-black font-black uppercase tracking-widest text-sm py-1">
            {content}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TickerStrip;
