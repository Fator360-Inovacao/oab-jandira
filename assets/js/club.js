const benefits = [
    {
        logo: 'assets/images/club/1parceirosrfabricadeoculos.png',
        title: 'SR Fábrica de Óculos',
        benefits: ['15% de desconto em pagamento a vista.', '10% de desconto em pagamento parcelado.'],
        conditions: ['Válido em todas as unidades SR.'],
        adress: 'Av. Conceição Sammartino, 33 - Centro - Jandira.',
        instagramLink: 'https://www.instagram.com/oticasr/',

    },
    {
        logo: 'assets/images/club/1parceirorecantodobebe.png',
        title: 'Recanto do Bebê',
        benefits: ['5% de desconto em produtos, exceto fraldas descartáveis.', 'A cada R$ 100,00 em compras, ganhe 1 carimbo no cartão fidelidade, completando 10 carimbos, recebe R$ 50,00 de desconto.'],
        conditions: 'A consultar.',
        adress: 'Av. Conceição Sammartino, 553 - Centro - Jandira.',
        instagramLink: 'https://www.instagram.com/recantodobebejandira/',

    },
    {
        logo: 'assets/images/club/1parceirorecantokids.png',
        title: 'Recanto Kids e Teens',
        benefits: ['5% de desconto em produtos, exceto fraldas descartáveis.', 'A cada R$ 100,00 em compras, ganhe 1 carimbo no cartão fidelidade, completando 10 carimbos, recebe R$ 50,00 de desconto.'],
        conditions: 'A consultar.',
        adress: 'Av. Conceição Sammartino, 553 - Centro - Jandira.',
        instagramLink: 'https://www.instagram.com/recantokidsteens/',

    },
    {
        logo: 'assets/images/club/2odontoprado.png',
        title: 'OdontoPrado - Consultório Odontológico',
        benefits: ['10% de desconto.'],
        conditions: ['Entre em contato para agendar: (11) 95377-0164'],
        adress: 'Rua Nicolau Maevisk, 33 – Jd. Sol Nascente – Jandira.',
        instagramLink: 'https://www.instagram.com/consultorio.odontoprado/',

    },
    {
        logo: 'assets/images/club/3hera parking.png',
        title: 'Hera Parking - Estacionamento',
        benefits: ['Até 30 minutos: R$ 4,00', 'Até 1 hora: R$ 5,00', 'Demais Horas: R$ 4,00'],
        conditions: 'A consultar.',
        adress: 'Av. dos Vessoni, 473 - Centro, Jandira.',
        instagramLink: 'https://www.instagram.com/estacionamento_hera_parking/',

    },
    {
        logo: 'assets/images/club/3vedere.png',
        title: 'Vedere - Clínica de Olhos',
        benefits: ['10% de desconto.'],
        conditions: 'A consultar.',
        adress: 'Av. Conceição Sammartino, 550 - Sala 39 - Centro - Jandira.',
        instagramLink: 'https://www.instagram.com/clinicavedere/',

    },
    {
        logo: 'assets/images/club/basebytelogo2.png ',
        title: 'BaseByte - Agência de Marketing Jurídico',
        benefits: ['10% de desconto em serviços de tecnologia e design.'],
        conditions: 'Agende no <a href="https://wa.me/5511937250894?text=Ol%C3%A1%2C%20venho%20do%20site%20da%20OAB%20Jandira%20e%20queria%20mais%20informa%C3%A7%C3%B5es%20sobre%20seus%20servi%C3%A7os." class="link" target="_blank">WhatsApp: (11) 93725-0894</a>',
        adress: '<a href="https://www.basebyte.com.br" class="link" target="_blank">www.basebyte.com.br</a>',
        instagramLink: 'https://www.instagram.com/basebyte.br/',

    },
    {
        logo: 'assets/images/club/formula-logo-h.svg',
        title: 'Fórmula Soluções Contábeis',
        benefits: ['10% de desconto em abertura de empresas.'],
        conditions: 'Agendar consulta em <a class="link" href="https://wa.me/5511985191951?text=Ol%C3%A1%2C%20venho%20do%20site%20da%20OAB%20Jandira%20e%20queria%20mais%20informa%C3%A7%C3%B5es%20sobre%20seus%20servi%C3%A7os." target="_blank">(11) 98519-1951</a>',
        adress: '<a href="https://www.formulascontabilidade.com" target="_blank" class="link">www.formulascontabeis.com</a>',
        instagramLink: 'https://www.instagram.com/formulascontabilidade',
    },
    {
        logo: 'assets/images/club/tml-logo-h.svg',
        title: 'TML Codes Desenvolvimento de Software',
        benefits: ['10% de desconto em projetos de tecnologia - Software e Infraestrutura em Nuvem.'],
        conditions: 'Solicite um orçamento em <a class="link" href="https://wa.me/5511984728948?text=Ol%C3%A1%21%20Venho%20do%20site%20da%20OAB%20Jandira%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento." target="_blank">(11) 98472-8948</a>',
        adress: '<a href="https://www.tmlcodes.com" target="_blank" class="link">www.tmlcodes.com</a>',
        instagramLink: 'https://www.instagram.com/tmlcodes',
    },
    {
        logo: 'assets/images/club/4Escola Sâo José.png ',
        title: 'Escola São José',
        benefits: ['Isenção da taxa de matrícula.', '25% de desconto nas mensalidades.', 'Período integral + R$ 500,00.'],
        conditions: 'A consultar.',
        adress: 'Av Conceição Sammartino, 501 - Centro - Jandira.',

    },
    {
        logo: 'assets/images/club/5barateira.png',
        title: 'Loja Barateira',
        benefits: ['5% de desconto.'],
        conditions: 'A consultar.',
        adress: 'Av. Conceição Sammartino, 473/483 - Centro - Jandira.',

    },
    {
        logo: 'assets/images/club/6samsclub.png',
        title: "Sam's Club",
        benefits: ['R$ 10,00 de desconto na primeira anuidade do cartão.'],
        conditions: 'Para ativação do desconto, entrar em contato com a promotora Rosa - Tel: (11) 98591-1974.<br>Válido em todos os clubes.',
        adress: 'Av. Tucunaré, 125 - Tamboré - Barueri.',

    },
    {
        logo: 'assets/images/club/7sidneia ribeiro.png',
        title: 'Biomédica Integrativa - Sidneia Ribeiro',
        benefits: ['15% de desconto para consulta.', '20% de desconto para terapia com 10 sessões.', '5% de desconto em produtos do consultório.'],
        conditions: ['A consultar.'],
        adress: 'Av. Andromeda, 885, Sala 119 – Edifício Brascan Open Mall – Alphaville – Barueri.',
        instagramLink: 'https://www.instagram.com/drasidneiaribeiro/',

    },
    {
        logo: 'assets/images/club/8gigante.png',
        title: 'Gigante Comunicação Visual',
        benefits: ['15% de desconto.'],
        conditions: 'A consultar.',
        adress: 'Estr. Dr. Cicero Borges de Morais, 311 - Vila Universal - Barueri',
        instagramLink: 'https://www.instagram.com/comunicacaogigante/',

    },
    {
        logo: 'assets/images/club/9lojãoreberto.png',
        title: 'Lojão Reberto',
        benefits: ['10% de desconto para pagamento à vista.', '5% de desconto para pagamento no cartão de crédito.'],
        conditions: 'A consultar.',
        adress: 'Av. Conceição Sammartino, 569 - Centro - Jandira',
        instagramLink: 'https://www.instagram.com/lojao_reberto/',

    },
    {
        logo: 'assets/images/club/10-biancarodrigues.png',
        title: 'Bianca Rodrigues - Psicóloga e Perita Judicial',
        benefits: ['20% de desconto.'],
        conditions: ['Entrar em contato por Whatsapp (11) 94303-0148.'],
        adress: 'Itapevi',
        instagramLink: 'https://www.instagram.com/bianca.rodrigues_psicologia/',

    },
    {
        logo: 'assets/images/club/11-carmania.png',
        title: 'CarMania - Estacionamento',
        benefits: ['Gratuidade na primeira hora para os carros que ficarem mais de 1h. Mediante apresentação do ticket da subseção de Itapevi.'],
        conditions: 'A consultar.',
        adress: 'Rua Joaquim Nunes, 82 - Centro - Itapevi',

    },
    {
        logo: 'assets/images/club/12-colegioalcance.png',
        title: 'Colégio Alcance',
        benefits: ['20% de desconto nas mensalidades.'],
        conditions: 'A consultar.',
        adress: 'Rua Orlando Higino de Moraes, 95 – Cidade da Saúde – Itapevi.',

    },
    {
        logo: 'assets/images/club/13-cantinhodaalegria.png',
        title: 'Cantinho da Alegria - Educação Infantil',
        benefits: ['Isenção da taxa de matrícula', '20% de desconto nas mensalidades.'],
        conditions: 'A consultar.',
        adress: 'Rua Brasilia de Abreu Alves, 75 - Jd. Nova Itapevi - Itapevi.',
        instagramLink: 'https://www.instagram.com/cantinhodaalegria.itapevi/',

    },
    {
        logo: 'assets/images/club/14-skilled.png',
        title: 'Skill Ed Idiomas',
        benefits: ['Até 25% de desconto no valor total do curso, variando de acordo com o curso e faixa etária.'],
        conditions: 'A consultar.',
        adress: 'Rod. Eng. Renê Benedito da Silva , 200 - Jd. Portela - Itapevi.',

    },
    {
        logo: 'assets/images/club/15-wizard.png',
        title: 'Wizard',
        benefits: ['15% de desconto no valor total do curso, exceto modalidade Class.'],
        conditions: 'A consultar.',
        adress: ['Av. Brasil, 170 - Jd. Rainha - Itapevi', 'Rua Isola Belli Leonardi, 36 - Vila Nova Itapevi - Itapevi.'],
    },
    {
        logo: 'assets/images/club/16-rede-cartorio-facil.png',
        title: 'Rede Cartório Fácil',
        benefits: ['20% de desconto.'],
        conditions: 'A consultar.',
        adress: 'Av. Vereador Benedito Francisco Chaves, 22 - Jardim Itapevi - Itapevi.',
        instagramLink: 'https://www.instagram.com/oticasr/',
    },
    {
        logo: 'assets/images/club/17-castelo da nina.png',
        title: 'Castelo da Nina',
        benefits: ['10% de desconto para pagamento em dinheiro ou PIX, nas compras acima a partir de R$ 150,00.'],
        conditions: 'A consultar.',
        adress: 'Rua Pedro S. Nogueira, 405 - Recreio Santa Rosa - Jandira.',
    }
];

const templateAccordion = ({
    logo,
    title,
    benefits,
    conditions,
    adress,
    instagramLink
}) => {
    return `
        <div class="d-flex justify-content-center">
            <div class="accordion">
                <button class="accordion-header" onclick="accordionClick(this)">
                    <div class="club-title-accordion"> 
                        <span class="title-club">
                            ${
                                (logo) 
                                ? `<img src="${logo}" height="60px" style="max-width: 260px;">`
                                : ''
                            }
                        </span>
                        <p class="club-body-title1">${title || ''}</p>
                    </div>
                                    
                    <i class="fa-solid fa-chevron-down arrow"></i>
                    
                </button>
                <div class="accordion-body">
                    <p class="mt-1">
                        <p class="club-body-title2">Benefícios</p>
                        
                        ${benefits.join('<br>') || ''}
                        <br>
                        <p class="club-body-title2">Condições</p>
                        
                        ${conditions || ''}
                        <br>
                        <p class="club-body-title2">Endereço</p>
                        
                        ${adress || ''}
                        <br>
                        <p class="club-body-title2">Redes Sociais</p>
                        
                        <a href="${instagramLink || ''}" target="_blank">
                            <img src="assets/icons/icon-Instagram.svg" width="20px">
                        </a>
                    </p>
                </div>    
            </div>
        </div>
    `;
}

document.getElementById('club').innerHTML = benefits
    .map(obj => templateAccordion(obj))
    .join('\n')
    ;


