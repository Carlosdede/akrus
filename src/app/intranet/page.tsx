'use client'

import "./style.css";

export default function Page() {
    return (
          <main>
            <header className="header">
              <div className="logo">
                <img
                  src="/intranet/images/logo_akrus_branco_Prancheta 1.png"
                  alt="Logo"
                />
              </div>
              <nav className="nav-links">
                <ul>
                  <li><a href="/intranet">Home</a></li>
                  <li><a href="">Suporte</a></li>
                  <li><a href="/intranet/politicas">Políticas</a></li>
                  <li><a href="https://teams.microsoft.com/l/team/19%3AFDaFqDpMD2SFdY7Cbc3sffQVRb4OxGQs8NtGz3itloo1%40thread.tacv2/conversations?groupId=7d63b9f2-258f-4b95-aed8-6f49be10b56a&tenantId=00a7b357-a2ba-4b32-b04f-2fef849a08b4">Teams</a></li>
                </ul>
              </nav>
              <div className="hamburger" id="hamburger">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </div>
            </header>
            <div className="banner">
              <img
                src="/intranet/images/banner_site_1920x420px_home_intranet_akrus.jpg"
              />
            </div>
            <section className="cards">
              <div className="container">
                <div className="box">
                  <div className="box-title">
                    <h2>Mural de Avisos</h2>
                  </div>
                  <div className="carousel-container">
                    <div id="avisos-carousel" className="carousel">
                      <img src="/intranet/images/azul.jpg" alt="Aviso 1" />
                      <img src="/intranet/images/confraterniza.jpg" alt="Aviso 2" />
                      <img src="/intranet/images/cartinha.jpg" alt="Aviso 3" />
                    </div>
                    <button className="prev" data-carousel="avisos-carousel">❮</button>
                    <button className="next" data-carousel="avisos-carousel">❯</button>
                  </div>
                </div>
        
                <div className="box">
                  <div className="box-title">
                    <a href="/intranet/vagas"><h2>Vagas</h2></a>
                  </div>
                  <div className="carousel-container">
                    <a href="/intranet/vagas">
                      <div id="vagas-carousel" className="carousel">
                        <img src="/intranet/images/vaga1.jpg" alt="Vaga 1" />
                        <img src="/intranet/images/vaga2.jpg" alt="Vaga 2" />
                        <img src="/intranet/images/vaga3.jpg" alt="Vaga 3" />
                      </div>
                    </a>
                    <button className="prev" data-carousel="vagas-carousel">❮</button>
                    <button className="next" data-carousel="vagas-carousel">❯</button>
                  </div>
                </div>
              </div>
            </section>
            <section className="news">
              <div className="news-header-container">
                <a href="/intranet/noticias"
                  ><h1 className="news-header">Notícias</h1></a
                >
              </div>
              <div className="news-container">
        
                <div className="news-box large-box">
                  <div className="news-image">
                    <img
                      id="tampinhas"
                      src="/intranet/images/tampinhas.png"
                      alt="Imagem Principal"
                    />
                  </div>
                  <div className="news-text">
                    <a href="/intranet/noticias"
                      ><h2>Semeando Sorrisos - Tampinhas que Transformam</h2></a
                    >
                    <p>
                      Estamos animados para compartilhar nosso novo projeto. Junte-se a
                      nós nessa jornada de solidariedade!
                    </p>
                  </div>
                </div>
        
                <div className="news-column">
                  <div className="news-box small-box">
                    <div className="news-image">
                      <img src="/intranet/images/1729775540445.jpg" alt="Imagem 1" />
                    </div>
                    <div className="news-text">
                      <h3>Nós com elas 2023</h3>
                    </div>
                  </div>
                  <div className="news-box small-box">
                    <div className="news-image">
                      <img src="/intranet/images/1729775540564 (1).jpg" alt="Imagem 2" />
                    </div>
                    <div className="news-text">
                      <h3>Nós com elas 2023</h3>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="cursos">
              <div className="cursos-container">
                <div className="cursos-box left-box">
                  <div className="cursos-text">
                    <h2>Cursos</h2>
                  </div>
                  <a href="/intranet/cursos">
                    <div className="cursos-image">
                      <img
                        id="img1"
                        src="/intranet/images/Cursos.jpg"
                        alt="Imagem do Curso"
                      />
                    </div>
                  </a>
                </div>
        
                <div className="cursos-column">
                  <div className="cursos-box right-box">
                    <div className="cursos-text">
                      <h3>Biblioteca</h3>
                    </div>
                    <div className="cursos-image">
                      <a href="/intranet/bibliotecas">
                        <img
                          src="/intranet/images/IMG_Biblioteca_Banner.jpg"
                          alt="Imagem do Curso 2"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="cursos-box right-box">
                    <div className="cursos-text">
                      <h3>Iluminakrus</h3>
                    </div>
                    <div className="cursos-image">
                      <a href="/intranet/iluminakros">
                        <img
                          src="/intranet/images/IluminAkrus.jpg"
                          alt="Imagem do Curso 3"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        
            <section className="dates">
              <div className="dates-container">
                <div className="dates-box">
                  <div className="section aniversariantes">
                    <h2>Aniversariantes do Mês</h2>
                    <div className="dates-list">
                      <div className="date-item">
                        <p className="name">Carlos André</p>
                        <p className="date">21 de Outubro</p>
                      </div>
                      <div className="date-item">
                        <p className="name">Maria Silva</p>
                        <p className="date">15 de Outubro</p>
                      </div>
                    </div>
                  </div>
                  <div className="calendario">
                    <img src="/intranet/images/sl_051623_57880_66.jpg" />
                  </div>
                  <div className="section comemorativas">
                    <h2>Datas Comemorativas</h2>
                    <div className="dates-list">
                      <div className="date-item">
                        <p className="name">Dia das Crianças</p>
                        <p className="date">12 de Outubro</p>
                      </div>
                      <div className="date-item">
                        <p className="name">Proclamação da República</p>
                        <p className="date">15 de Novembro</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="empresas">
              <div className="empresas-container">
                <div className="empresas-box">
                  <h2>Empresas</h2>
                  <div className="empresas-carousel">
                    <img
                      src="/intranet/images/LOGO_B&M_02-01.jpg"
                      alt="Empresa 1"
                      className="empresa-logo slide"
                    />
                    <img
                      src="/intranet/images/logos_grupo-03.jpg"
                      alt="Empresa 2"
                      className="empresa-logo slide"
                    />
                    <img
                      src="/intranet/images/logos_grupo-04.jpg"
                      alt="Empresa 3"
                      className="empresa-logo slide"
                    />
                    <img
                      src="/intranet/images/logos_grupo-05.jpg"
                      alt="Empresa 4"
                      className="empresa-logo slide"
                    />
                    <img
                      src="/intranet/images/logos_grupo_Prancheta 1.jpg"
                      alt="Empresa 5"
                      className="empresa-logo slide"
                    />
                  </div>
                </div>
              </div>
            </section>
        
            <section className="fotos">
              <div className="fotos-container">
                <h2>Fotos e Vídeos</h2>
                <div className="media-grid">
                  <div className="media-item">
                    <img
                      src="/intranet/images/Sementes.jpg"
                      alt="Foto 1"
                      className="media-img"
                    />
                  </div>
                  <div className="media-item">
                    <img
                      src="/intranet/images/Novilhas.jpg"
                      alt="Foto 2"
                      className="media-img"
                    />
                  </div>
                  <div className="media-item">
                    <img
                      src="/intranet/images/Sementes001.jpg"
                      alt="Foto 3"
                      className="media-img"
                    />
                  </div>
                  <div className="media-item">
                    <video className="media-video" controls>
                      <source src="video1.mp4" type="video/mp4" />
                      Seu navegador não suporta a tag de vídeo.
                    </video>
                  </div>
                  <div className="media-item">
                    <video className="media-video" controls>
                      <source src="video2.mp4" type="video/mp4" />
                      Seu navegador não suporta a tag de vídeo.
                    </video>
                  </div>
                </div>
              </div>
            </section>
            <footer>
              <div className="footer">
                <img
                  id="logofooter"
                  src="/intranet/images/logo_akrus_branco_Prancheta 1.png"
                />
                <img id="empresas" src="/intranet/images/assinatura_akrus[1].png" />
              </div>
            </footer>
          </main>
    )
}