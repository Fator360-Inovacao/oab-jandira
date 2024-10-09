const path = window.location.pathname;

const navbarHtml = `
    <nav 
        class="navbar navbar-expand-lg navbar-dark" 
        style="width: 100%; border-bottom: 3px solid rgb(197, 26, 26); padding: 0 10%;">
        <div class="container-fluid">
            
            <a class="navbar-brand ms-5" href="#">
                <img src="assets/images/logo-OAB.png" alt="OAB-jandira" width="300">
            </a>
    
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
    
            
            <div class="collapse navbar-collapse justify-content-end me-4" id="navbarNav">
                <ul class="navbar-nav" style="color: #1e2b37; font-weight: 500 ;">
                    <li class="nav-item">
                        <a class="nav-link ${path.includes('index') && 'active'}" href="index.html">
                            Início
                        </a>
                    </li>
                    <li class="nav-item dropdown">
                        <a 
                            class="nav-link dropdown-toggle ${path.includes('institucional') && 'active'}" 
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
                            class="nav-link dropdown-toggle ${path.includes('consultas') && 'active'}" 
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
                        <a class="nav-link ${path.includes('contato') && 'active'}" href="contato.html">Contato</a>
                    </li>
                    <li>
                        <a href="#" class="nav-item">
                            <img style="width: 30px; margin-right: 20px; padding-top: 5px;" src="assets/icons/icon-facebook.svg" alt="Facebook">
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-item ml-2">
                            <img style="width: 30px; padding-top: 5px;" src="assets/icons/icon-instagram.svg" alt="Instagram">
                        </a>
                    </li>
                        
                </ul>
                                
            </div>
        </div>
    </nav>
`;

document.getElementById("navbar").innerHTML = navbarHtml;

const footer = `
    <footer class="footer text-center mt-3" style="width: 100%;">
        <div style="background-color: #cfc5c5; color: #1e2b37; font-weight: bold; height: 20px;">
            <p> © 2024 OAB Jandira | Todos os direitos reservados</p>
        </div>
        <div>
            <p style="margin: 0; text-align: center; font-weight: bold; height: 28px; padding-top: 0.5em;">Desenvolvido por Fator 360</p>
        </div>
    </footer>
`;

document.getElementById("footer").innerHTML = footer;