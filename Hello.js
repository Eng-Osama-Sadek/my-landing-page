import React from 'react';

function App() {
  return (
    <div
      style={{
        backgroundColor: '#020617',
        color: 'white',
        minHeight: '100vh',
        fontFamily: 'sans-serif',
        overflowX: 'hidden',
      }}
    >
      {/* 🚀 Hero Section - واجهة مهندس محترف */}
      <header
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background:
            'radial-gradient(circle at center, #1e293b 0%, #020617 100%)',
          textAlign: 'center',
          padding: '0 20px',
        }}
      >
        <div
          style={{
            background: '#1e293b',
            color: '#38bdf8',
            padding: '5px 20px',
            borderRadius: '20px',
            fontSize: '0.8rem',
            fontWeight: 'bold',
            letterSpacing: '3px',
            marginBottom: '20px',
            border: '1px solid #38bdf8',
          }}
        >
          ELECTRICAL ENGINEER & AI SPECIALIST
        </div>

        <h1
          style={{
            fontSize: 'calc(3rem + 5vw)',
            fontWeight: '800',
            margin: 0,
            background: 'linear-gradient(to right, #38bdf8, #818cf8)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-3px',
          }}
        >
          OSAMA SADEK
        </h1>

        <p
          style={{
            fontSize: '1.2rem',
            color: '#94a3b8',
            maxWidth: '600px',
            margin: '25px auto',
            lineHeight: '1.6',
          }}
        >
          Bridging the gap between{' '}
          <span style={{ color: '#38bdf8' }}>Power Systems</span> and{' '}
          <span style={{ color: '#818cf8' }}>Deep Learning</span> to automate
          the future.
        </p>

        <div style={{ marginTop: '40px', display: 'flex', gap: '15px' }}>
          <button
            style={{
              padding: '15px 40px',
              borderRadius: '12px',
              border: 'none',
              background: '#38bdf8',
              color: '#020617',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '1rem',
            }}
          >
            View Portfolio
          </button>
          <button
            style={{
              padding: '15px 40px',
              borderRadius: '12px',
              border: '1px solid #38bdf8',
              background: 'transparent',
              color: '#38bdf8',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '1rem',
            }}
          >
            Contact
          </button>
        </div>
      </header>

      {/* 🛠 Expertise Grid - الخبرات */}
      <section
        style={{ padding: '100px 20px', maxWidth: '1200px', margin: '0 auto' }}
      >
        <h2
          style={{
            fontSize: '2.5rem',
            marginBottom: '60px',
            textAlign: 'center',
            color: '#f8fafc',
          }}
        >
          Technical Mastery
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
          }}
        >
          <div
            style={{
              background: '#0f172a',
              padding: '40px',
              borderRadius: '20px',
              border: '1px solid #1e293b',
            }}
          >
            <h3
              style={{
                color: '#fbbf24',
                fontSize: '1.5rem',
                marginBottom: '15px',
              }}
            >
              ⚡ Power Systems
            </h3>
            <p style={{ color: '#94a3b8', lineHeight: '1.7' }}>
              Specialized in high-voltage distribution networks, smart grids,
              and industrial automation control.
            </p>
          </div>

          <div
            style={{
              background: '#0f172a',
              padding: '40px',
              borderRadius: '20px',
              border: '1px solid #1e293b',
            }}
          >
            <h3
              style={{
                color: '#38bdf8',
                fontSize: '1.5rem',
                marginBottom: '15px',
              }}
            >
              🤖 AI & Machine Learning
            </h3>
            <p style={{ color: '#94a3b8', lineHeight: '1.7' }}>
              Implementing Python-based AI solutions for predictive maintenance
              and energy optimization.
            </p>
          </div>

          <div
            style={{
              background: '#0f172a',
              padding: '40px',
              borderRadius: '20px',
              border: '1px solid #1e293b',
            }}
          >
            <h3
              style={{
                color: '#818cf8',
                fontSize: '1.5rem',
                marginBottom: '15px',
              }}
            >
              💻 Embedded Control
            </h3>
            <p style={{ color: '#94a3b8', lineHeight: '1.7' }}>
              Developing robust firmware and software for PLC and
              microcontroller-based automation systems.
            </p>
          </div>
        </div>
      </section>

      {/* 📧 Footer */}
      <footer
        style={{
          padding: '60px 20px',
          textAlign: 'center',
          borderTop: '1px solid #1e293b',
          color: '#475569',
        }}
      >
        <p>© 2026 ENG. OSAMA SADEK | INNOVATING WITH PASSION</p>
      </footer>
    </div>
  );
}

export default App;
