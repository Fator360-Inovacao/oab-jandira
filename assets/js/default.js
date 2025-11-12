// NAVBAR

const path = window.location.pathname;

const navbarHtml = `
    <nav 
        class="navbar navbar-expand-lg navbar-light" 
        style="width: 100%; border-bottom: 3px solid rgb(197, 26, 26);"
    >
        <div class="container-fluid">
            
            <a class="navbar-brand ms-md-5" href="index.html">
                <img src="assets/images/logoOab.svg" alt="OAB-jandira" class="logo-oab">
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
    
            
            <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
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
                            <li><a class="dropdown-item" href="direcao.html">Diretoria Executiva</a></li>
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
                        <a href="https://www.facebook.com/oabsaopaulo/?locale=pt_BR" class="nav-item svg" target="_blank">
                               <svg width="30" height="30" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<path class="navbar-svg" fill-rule="evenodd" clip-rule="evenodd" d="M11.6053 0C5.21454 0 0.126953 5.3102 0.126953 11.7442V31.2558C0.126953 37.6898 5.21454 43 11.6053 43H30.5852C36.9759 43 42.0635 37.6898 42.0635 31.2558V11.7442C42.0635 5.3102 36.9759 0 30.5852 0H11.6053ZM4.10369 11.7442C4.10369 7.4022 7.51369 3.97674 11.6053 3.97674H30.5852C34.6767 3.97674 38.0867 7.4022 38.0867 11.7442V31.2558C38.0867 35.5978 34.6767 39.0233 30.5852 39.0233H26.4127V26.0741H29.8412L32.127 20.3333H26.4127V17.1185C26.4127 16.3148 26.9841 15.7407 27.7841 15.7407H30.9841V10H26.4127C23.2127 10 20.6984 12.5259 20.6984 15.7407V20.3333H16.127V26.0741H20.6984V39.0233H11.6053C7.51369 39.0233 4.10369 35.5978 4.10369 31.2558V11.7442Z" fill="white"/>
</svg>

                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/oab.jandira/" class="nav-item svg ml-2" target="_black">
                            <svg width="30" height="30" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<path class="navbar-svg" fill-rule="evenodd" clip-rule="evenodd" d="M11.5418 3.97674C7.45022 3.97674 4.04022 7.4022 4.04022 11.7442V31.2558C4.04022 35.5978 7.45022 39.0233 11.5418 39.0233H30.5217C34.6133 39.0233 38.0233 35.5978 38.0233 31.2558V11.7442C38.0233 7.4022 34.6133 3.97674 30.5217 3.97674H11.5418ZM0.0634766 11.7442C0.0634766 5.3102 5.15106 0 11.5418 0H30.5217C36.9124 0 42 5.3102 42 11.7442V31.2558C42 37.6898 36.9124 43 30.5217 43H11.5418C5.15106 43 0.0634766 37.6898 0.0634766 31.2558V11.7442Z" fill="white"/>
<path class="navbar-svg" fill-rule="evenodd" clip-rule="evenodd" d="M22.2313 15.1998C20.8958 15.0031 19.5324 15.2298 18.3355 15.8466C17.1388 16.4634 16.1709 17.4378 15.5671 18.6292C14.9635 19.8205 14.7538 21.1692 14.9669 22.4843C15.1799 23.7994 15.8054 25.0164 16.7568 25.9614C17.7084 26.9065 18.9376 27.5313 20.2705 27.7443C21.6034 27.9573 22.9695 27.7473 24.174 27.1451C25.3784 26.5431 26.3584 25.5804 26.9769 24.3964C27.5954 23.2126 27.8218 21.8665 27.6251 20.5489C27.4244 19.2049 26.7936 17.9585 25.8231 16.9947C24.8525 16.0306 23.5935 15.4004 22.2313 15.1998ZM16.5138 12.3117C18.4506 11.3135 20.6539 10.9478 22.8107 11.2655C25.0108 11.5895 27.0497 12.608 28.6255 14.1731C30.2015 15.7384 31.2306 17.7676 31.5582 19.9617C31.8794 22.1128 31.5093 24.3091 30.5017 26.2378C29.4942 28.1663 27.9015 29.7277 25.9522 30.7022C24.0032 31.6765 21.7956 32.0152 19.6428 31.6712C17.49 31.3271 15.4992 30.3173 13.9544 28.7829C12.4094 27.2484 11.3891 25.2671 11.0413 23.1203C10.6935 20.9733 11.0363 18.7726 12.0199 16.8316C13.0034 14.8909 14.5767 13.31 16.5138 12.3117Z" fill="white"/>
<path class="navbar-svg" fill-rule="evenodd" clip-rule="evenodd" d="M28.7141 9.4202C28.7141 8.17231 29.7257 7.16069 30.9736 7.16069H30.9956C32.2435 7.16069 33.2551 8.17231 33.2551 9.4202C33.2551 10.6681 32.2435 11.6797 30.9956 11.6797H30.9736C29.7257 11.6797 28.7141 10.6681 28.7141 9.4202Z" fill="white"/>
</svg>

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
            <a href="contato.html" class="no-link-style" target="_blank">
                <p style="padding-top: 0.5em;">Fale com a <label
                        style="font-weight: bold;"> OAB Jandira</label> Tel.: <label style="font-weight: bold;">(11) 4789-0979</label>
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
            <p style="margin: 0; text-align: center; font-weight: bold; height: 28px; padding-top: 0.5em;">Desenvolvido por Fator 360 - Inovação Empresarial Ltda.</p>
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