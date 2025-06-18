import React, { useEffect } from 'react';

export default function App() {
  const handleSaveContact = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Allan Mujera
TEL;TYPE=CELL:+254702444552
EMAIL:allanmujera91@gmail.com
END:VCARD`;
    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Allan_Mujera.vcf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    window.print();
  };

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes dropBounce {
        0% { transform: translateY(-200px); opacity: 0; }
        60% { transform: translateY(30px); opacity: 1; }
        80% { transform: translateY(-10px); }
        100% { transform: translateY(0); }
      }

      .btn-outline:hover {
        color: gold !important;
        transform: scale(1.05);
      }

      .btn-solid:hover {
        background-color: gold !important;
        transform: scale(1.05);
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div style={{
      fontFamily: 'system-ui, Arial, sans-serif',
      maxWidth: 420,
      margin: '30px auto',
      padding: 20,
      backgroundColor: '#000',
      color: 'white',
      borderRadius: 30, // ⬅ smoother corners
      border: '4px solid gold',
      boxShadow: '0 0 35px gold',
      textAlign: 'center',
      animation: 'dropBounce 0.7s ease'
    }}>
      <h1 style={{
        color: 'red',
        fontSize: 20,
        textTransform: 'uppercase',
        margin: '0 0 0.5em 0',
        fontWeight: 'normal'
      }}>
        SMARTCARDLINK
      </h1>

      <div style={{
        width: '40%',
        margin: '1em auto',
        borderRadius: '50%',
        border: '3px solid gold',
        boxShadow: '0 0 15px gold',
        overflow: 'hidden'
      }}>
        <img
          src="https://i.postimg.cc/4yTGwYmX/Allan-Mujera-Up-Close.jpg"
          alt="Allan Mujera"
          style={{ width: '100%', display: 'block' }}
        />
      </div>

      <h2 style={{ fontSize: 34, margin: '0.2em 0' }}>Allan Mujera</h2>

      <div style={{
        fontSize: 22,
        fontWeight: 'bold',
        color: 'gold',
        textTransform: 'uppercase',
        marginBottom: '1em',
        lineHeight: 1.2
      }}>
        ENTREPRENEUR<br />FREELANCE GRAPHIC DESIGNER
      </div>

      <p style={{ fontSize: 20, marginBottom: '1em' }}>
        I design meaningful visuals that tell your brand’s story—from logos to marketing materials.
        Outside of design, I put a smile on faces and create lasting memories through bouquets and amazing gifts.
        Customization to your satisfaction.
      </p>

      <div style={{ fontSize: 18, fontWeight: 600, color: 'gold', marginBottom: 15 }}>
        +254 702 444 552<br />
        allanmujera91@gmail.com
      </div>

      {/* 2-COLUMN BUTTON LAYOUT */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 10,
        justifyItems: 'center',
        marginBottom: 20
      }}>
        <button onClick={() => window.location.href = 'tel:+254702444552'} className="btn-outline" style={btnOutline}>📞 Call</button>
        <button onClick={() => window.location.href = 'sms:+254702444552'} className="btn-outline" style={btnOutline}>💬 Message</button>
        <button onClick={() => window.open('https://wa.me/254702444552', '_blank')} className="btn-outline" style={btnOutline}>🟢 WhatsApp</button>
        <button onClick={() => window.location.href = 'mailto:allanmujera91@gmail.com'} className="btn-outline" style={btnOutline}>📧 Email</button>
        <button onClick={handleSaveContact} className="btn-solid" style={{ ...btnSolid, fontSize: 13 }}>💾 Save Contact</button>
        <button onClick={handlePrint} className="btn-solid" style={{ ...btnSolid, fontSize: 13 }}>🖨️ Print</button>
      </div>

      {/* SOCIAL MEDIA HANDLES */}
      <div style={{
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 15
      }}>
        LinkedIn <span style={{ color: 'white' }}>|</span> Instagram <span style={{ color: 'white' }}>|</span> X
      </div>

      {/* LINK + CREDITS */}
      <a href="http://smartcard.perfectparcelsstore.com" target="_blank" rel="noopener noreferrer" style={{ color: 'gold', fontWeight: 600 }}>
        http://smartcard.perfectparcelsstore.com
      </a>

      <p style={{ color: 'lightblue', fontSize: 12, marginTop: 10, marginBottom: 2 }}>Powered by</p>
      <p style={{ fontSize: 23, fontWeight: 'bold', margin: 0 }}>Perfect Parcels Store</p>
      <p style={{ fontSize: 12, margin: 0 }}>Nairobi, Kenya</p>
    </div>
  );
}

// Button Styles
const btnOutline = {
  fontSize: 14,
  width: 160,
  padding: '8px 12px',
  border: '2px solid white',
  background: 'transparent',
  color: 'white',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  textTransform: 'uppercase',
  borderRadius: 8
};

const btnSolid = {
  ...btnOutline,
  backgroundColor: 'white',
  color: 'black',
  border: 'none'
};
