// NAVBAR

const path = window.location.pathname;

const navbarHtml = `
    <nav 
        class="navbar navbar-expand-lg navbar-light" 
        style="width: 100%; border-bottom: 3px solid rgb(197, 26, 26);"
    >
        <div class="container-fluid">
            
            <a class="navbar-brand ms-md-5" href="index.html">
                <img src="assets/images/logo-OAB.png" alt="OAB-jandira" class="logo-oab">
            </a>
    
            
            <button 
                class="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarNav" 
                aria-controls="navbarNav" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
    
            
            <div class="collapse navbar-collapse justify-content-end me-4" id="navbarNav">
                <ul class="navbar-nav" style="color: #1e2b37; font-weight: 500 ;">
                    <li class="nav-item">
                        <a class="nav-link ${(path.includes('index') || path == '/') ? 'active' : ''}" href="index.html">
                            Início
                        </a>
                    </li>
                    <li class="nav-item dropdown">
                        <a 
                            class="nav-link dropdown-toggle ${path.includes('institucional') ? 'active' : ''}" 
                            href="#"
                            role="button" 
                            data-bs-toggle="dropdown" 
                            aria-expanded="false"
                        >Institucional</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="dirExecutiva.html">Diretoria Executiva</a></li>
                            <li><a class="dropdown-item" href="comissoes.html">Comissões</a></li>
                            <li><a class="dropdown-item" href="club.html">Clube de Benefícios</a></li>
                            <li><a class="dropdown-item" href="https://www.caasp.org.br/" target="_blank">CAASP</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a 
                            class="nav-link dropdown-toggle ${path.includes('consultas') ? 'active' : ''}" 
                            href="#"
                            role="button" 
                            data-bs-toggle="dropdown" 
                            aria-expanded="false"
                        >Consultas</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="https://www2.oabsp.org.br/asp/consultaInscritos/consultaHome.asp" target="_blank">Consulta de Inscritos OAB/SP</a></li>
                            <li><a class="dropdown-item" href="https://www.oabsp.org.br/servicos#modal=24-03-14-1158-tabela-de-honorarios%5b%21%5d0" target="_blank">Tabela de Honorários</a></li>
                        </ul>
                    </li>
                    <li class="nav-item me-3">
                        <a class="nav-link ${path.includes('contato') ? 'active' : ''}" href="contato.html">Contato</a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/oabsaopaulo/?locale=pt_BR" class="nav-item" target="_blank">
                            <img style="width: 30px; margin-right: 20px; padding-top: 5px;" src="assets/icons/icon-Facebook.svg" alt="Facebook">
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/oab.jandira/" class="nav-item ml-2" target="_black">
                            <img style="width: 30px; padding-top: 5px;" src="assets/icons/icon-Instagram.svg" alt="Instagram">
                        </a>
                    </li>
                        
                </ul>
                                
            </div>
        </div>
    </nav>
`;

document.getElementById("navbar").innerHTML = navbarHtml;

// HEADER

const header = `
    <div class="header">
        <marquee scrollamount="1" scrolldelay="20" truespeed="20">
            <a href="https://www2.oabsp.org.br/asp/dotnet/LoginSite/LoginMain.aspx" class="no-link-style" target="_blank">
                <p style="padding-top: 0.5em;">Atualize seus dados cadastrais e participe das <label
                        style="font-weight: bold;"> Eleições Online</label> da <label style="font-weight: bold;">OAB SP</label>
                </p>
            </a>
        </marquee>
    </div>
`;

document.getElementById("header").innerHTML = header;

// FOOTER

const footer = `
    <footer class="footer text-center mt-3" style="width: 100%;">
        <div style="background-color: #DCDCDC; color: #1e2b37; font-weight: bold; height: 20px;">
            <p> © 2024 OAB Jandira | Todos os direitos reservados</p>
        </div>
        <div>
            <p style="margin: 0; text-align: center; font-weight: bold; height: 28px; padding-top: 0.5em;">Desenvolvido por Fator 360</p>
        </div>
    </footer>
`;

document.getElementById("footer").innerHTML = footer;


// ACCORDION

const accordionClick = (element) =>{
    const body = element.parentElement.querySelector('.accordion-body');
    body.classList.toggle('active');
    body.classList.toggle('mt-0');
}

// ACESSO RÁPIDO
const fastAccess = `
    <div class="main-content align-content-center my-5">
        <h4 class="text-center mb-3" style="font-weight: bold;">Acesso Rápido</h4>

        <div class="col-8 align-items-center align-content-center mx-auto">

            <div class="row mt-md-2">
                <div class="col-md-6 mt-4 mt-md-2">
                    <a href="contato.html" class="no-link-style">
                        <div class="d-flex flex-row align-content-center align-items-center icons-fast-access">

                            <img src="assets/icons/icon-Fale-com-oabjandira.svg " alt="" width="100px"
                                height="100px" class="rounded-4 p-2" />

                            <p class="ms-2" style="margin: 0;">
                                <b>Fale com a OAB Jandira</b>
                                <br>
                                Entre em contato conosco.
                            </p>

                        </div>
                    </a>
                </div>

                <div class="col-md-6 mt-4 mt-md-2">
                    <a href="https://www.oabsp.org.br/servicos#modal=24-03-14-1158-tabela-de-honorarios%5b%21%5d0"
                        target="_blank" class="no-link-style">
                        <div class="d-flex flex-row align-content-center align-items-center icons-fast-access">

                            <img src="assets/icons/icon-Tabela-de-honorarios.svg" alt="" width="100px"
                                height="100px" class="rounded-4 p-2" />

                            <p class="ms-2" style="margin: 0;">
                                <b>Tabela de Honorários</b>
                                <br>
                                Consulte os valores indicados por serviço.
                            </p>

                        </div>
                    </a>
                </div>

            </div>

            <div class="row mt-md-2">
                <div class="col-md-6 mt-4 mt-md-2 align-content-center">
                    <a href="https://www.caasp.org.br/" target="_blank" class="no-link-style">
                        <div class="d-flex flex-row  align-items-center icons-fast-access">

                            <img src="assets/icons/icon-Caasp.svg" alt="" width="100px" height="100px"
                                class="rounded-4 p-2" />

                            <p class="ms-2" style="margin: 0;">
                                <b>CAASP</b>
                                <br>
                                Caixa de Assistência <br>dos Advogados de São Paulo.
                            </p>

                        </div>
                    </a>
                </div>

                <div class="col-md-6 mt-4 mt-md-2 align-content-center">
                    <a href="club.html" class="no-link-style">

                        <div class="d-flex flex-row align-items-center icons-fast-access">

                            <img src="assets/icons/icon-Clube-de-beneficios.svg" alt="" width="100px" height="100px"
                                class="rounded-4 p-2" />

                            <p class="ms-2" style="margin: 0;">
                                <b>Clube de Benefícios</b>
                                <br>
                                Consulte os benefícios disponíveis para os membros da OAB Jandira.
                            </p>

                        </div>
                    </a>
                </div>

            </div>
        </div>
    </div>
`;

document.getElementById("fastAccess").innerHTML = fastAccess;