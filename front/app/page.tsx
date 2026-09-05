import Link from "@/node_modules/next/link";


export default function Home() {
  return (
    <>
    {/* Estilos embutidos para teste rápido (ou você pode mover para o seu globals.css) */}
    <style dangerouslySetInnerHTML={{ __html: `
      :root {
          --primary-blue: #0056b3;
          --primary-dark: #003366;
          --primary-light: #e6f0fa;
          --accent-blue: #00a8cc;
          --text-main: #333333;
          --text-muted: #666666;
          --bg-color: #f9fbff;
          --white: #ffffff;
          --transition: all 0.3s ease;
      }

      * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
      }

      body {
          font-family: 'Inter', sans-serif;
          background-color: var(--bg-color);
          color: var(--text-main);
          line-height: 1.6;
      }

      a {
          text-decoration: none;
          color: inherit;
      }

      header {
          background-color: var(--white);
          box-shadow: 0 2px 10px rgba(0, 86, 179, 0.05);
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
      }

      .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1.2rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
      }

      .logo {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--primary-dark);
          display: flex;
          align-items: center;
          gap: 0.5rem;
      }

      .logo span {
          color: var(--accent-blue);
      }

      .nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
          align-items: center;
      }

      .nav-links a:not(.btn-login) {
          color: var(--text-muted);
          font-weight: 600;
          transition: var(--transition);
      }

      .nav-links a:not(.btn-login):hover {
          color: var(--primary-blue);
      }

      .btn-login {
          background-color: var(--primary-blue);
          color: var(--white);
          padding: 0.6rem 1.5rem;
          border-radius: 50px;
          font-weight: 600;
          transition: var(--transition);
          box-shadow: 0 4px 12px rgba(0, 86, 179, 0.2);
      }

      .btn-login:hover {
          background-color: var(--primary-dark);
          transform: translateY(-2px);
      }

      .hero {
          padding: 10rem 2rem 6rem;
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
      }

      .hero-content h1 {
          font-size: 3.2rem;
          line-height: 1.2;
          color: var(--primary-dark);
          margin-bottom: 1.5rem;
      }

      .hero-content h1 span {
          color: var(--accent-blue);
      }

      .hero-content p {
          font-size: 1.1rem;
          color: var(--text-muted);
          margin-bottom: 2.5rem;
      }

      .hero-buttons {
          display: flex;
          gap: 1rem;
      }

      .btn-primary {
          background-color: var(--primary-blue);
          color: var(--white);
          padding: 0.9rem 2rem;
          border-radius: 8px;
          font-weight: 700;
          transition: var(--transition);
      }

      .btn-primary:hover {
          background-color: var(--primary-dark);
      }

      .hero-card {
          background: linear-gradient(135deg, var(--primary-blue), var(--primary-dark));
          border-radius: 20px;
          padding: 3rem;
          color: var(--white);
          box-shadow: 0 20px 40px rgba(0, 51, 102, 0.2);
          position: relative;
          overflow: hidden;
      }

      .hero-card h3 {
          font-size: 1.8rem;
          margin-bottom: 1rem;
      }

      .hero-card p {
          opacity: 0.9;
      }

      .about {
          background-color: var(--white);
          padding: 6rem 2rem;
      }

      .about-container {
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
      }

      .about h2 {
          font-size: 2.5rem;
          color: var(--primary-dark);
          margin-bottom: 1.5rem;
      }

      .about p {
          font-size: 1.15rem;
          color: var(--text-muted);
          line-height: 1.8;
          margin-bottom: 3rem;
      }

      .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          text-align: left;
          margin-top: 3rem;
      }

      .feature-box {
          background-color: var(--primary-light);
          padding: 2rem;
          border-radius: 12px;
          transition: var(--transition);
      }

      .feature-box:hover {
          transform: translateY(-5px);
      }

      .feature-box h4 {
          color: var(--primary-dark);
          margin-bottom: 0.8rem;
          font-size: 1.2rem;
      }

      .feature-box p {
          font-size: 0.95rem;
          margin-bottom: 0;
      }

      footer {
          background-color: var(--primary-dark);
          color: var(--white);
          text-align: center;
          padding: 2rem;
          font-size: 0.9rem;
      }

      @media (max-width: 768px) {
          .hero {
              grid-template-columns: 1fr;
              text-align: center;
              padding-top: 8rem;
          }
          .hero-buttons {
              justify-content: center;
          }
          .nav-links {
              display: none;
          }
          .hero-content h1 {
              font-size: 2.5rem;
          }
      }
    `}} />

    {/* Cabeçalho */}
    <header>
      <div className="nav-container">
        <a href="#" className="logo">🎓 Aulunao <span>2026</span></a>
        <ul className="nav-links">
          <li><a href="#sobre">Nossa História</a></li>
          <li><a href="#recursos">Recursos</a></li>
          <li>
            
            <Link href="/login" className="btn-login">Entrar</Link>
          </li>

          
          
        </ul>
      </div>
    </header>

    {/* Seção Hero */}
    <main>
      <section className="hero">
        <div className="hero-content">
          <h1>Controle inteligente para alunos da <span>graduação Senac</span></h1>
          <p>Facilidade incomparável de cadastro, controle avançado de perfil de usuário e gestão otimizada de acessos acadêmicos em um só lugar.</p>
          <div className="hero-buttons">
            <a href="#sobre" className="btn-primary">Conhecer o Projeto</a>
          </div>
        </div>
        <div className="hero-card">
          <h3>Aulunao 2026</h3>
          <p>Desenvolvido sob medida para otimizar a rotina acadêmica, trazendo segurança, agilidade e autonomia para a graduação.</p>
        </div>
      </section>

      {/* Seção Nossa História */}
      <section className="about" id="sobre">
        <div className="about-container">
          <h2>Nossa História</h2>
          <p>O <strong>Aulunao</strong> nasceu como um projeto focado no controle de usuários dedicados a alunos da graduação do Senac. Ele foi idealizado e construído tendo em mente a máxima facilidade de cadastro, um rigoroso controle de perfil de usuário e uma gestão de acessos simplificada e segura.</p>
          
          <div className="features-grid" id="recursos">
            <div className="feature-box">
              <h4>Fácil Cadastro</h4>
              <p>Processo de onboarding intuitivo e rápido para novos alunos ingressantes.</p>
            </div>
            <div className="feature-box">
              <h4>Controle de Perfil</h4>
              <p>Gestão centralizada de dados acadêmicos e preferências do usuário.</p>
            </div>
            <div className="feature-box">
              <h4>Gestão de Acessos</h4>
              <p>Controle dinâmico e seguro voltado ao ecossistema da graduação Senac.</p>
            </div>
          </div>
        </div>
      </section>
    </main>

    {/* Rodapé */}
    <footer>
      <p>&copy; 2026 Aulunao. Todos os direitos reservados. Projeto Acadêmico Graduação Senac.</p>
    </footer>
  </>
  );
}
