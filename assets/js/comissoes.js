const arrComissions = [
    {
        title: 'COMISSÃO DE PRERROGATIVAS',
        presidente: 'Dra. Tatiane Cristina Camargo Ferreira',
        emailPresidente: 'tccamargof@gmail.com',
        vicePresidente: 'Dra. Fabiana Morais Alves',
        membrosEfetivos: [
            'Dr. Giulio Henrique Garcia Fontes Gatti',
            'Dr. Ricardo Benedicto Martins',
            'Nathalia Loures Capelo'
        ],
    },
    {
        title: 'COMISSÃO PERMANENTE DAS MULHERES ADVOGADAS',
        presidente: 'Dra. Claudinéia de Fátima da Silva',
        emailPresidente: 'claudineia.adv@hotmail.com',
        vicePresidente: 'Dra. Lurdete Vendrame',
        instagramLink: 'https://www.instagram.com/comissaomulheradvogadajandira/',
        membrosEfetivos: [
            'Dra. Adreiza Farias de Oliveira',
            'Dra. Adriana Barreira de Araújo',
            'Dra. Carolina Gonçalves',
            'Dra. Caroline Ingrid de Lima Gregório',
            'Dra. Cristiane Santos de Jesus',
            'Dra. Fernanda Scopim',
            'Dra. Flávia Lima da Silva Laurenti',
            'Dra. Heloiza Galvão',
            'Dra. Joingle Oliveira Lima',
            'Dra. Juliana dos Santos Menezes',
            'Dra. Luísa Fernanda de Lima',
            'Dra. Marcela Paula Minjoni',
            'Dra. Michelly Alves Bezerra de Oliveira',
            'Dra. Sarah Cristina Duarte Fortis',
            'Dra. Stefany Priscila de Araújo',
            'Dra. Tatiane Cristina Camargo Ferreira',
            'Dra. Verônica de Souza Domingos Verga'
        ],
    },
    {
        title: 'COMISSÃO DE DIREITO EMPRESARIAL',
        presidente: 'Dr. Heraldo da Silva Azevedo Junior',
        emailPresidente: 'heraldodsaj@gmail.com',
        vicePresidente: 'Dr. Marcos Antonio Picoli',
        instagramLink: 'https://www.instagram.com/direitoempresarial_oab.jandira/',
        membrosEfetivos: [
            'Dr. Giovani Roberto Zitelli',
            'Dr. Alexandre Alves Neto',
            'Dr. Jhonatan Rodrigues do Carmo'
        ],
    },
    {
        title: 'COMISSÃO DA ASSISTÊNCIA JUDICIÁRIA',
        presidente: 'Dr. Renato Pereira Gomes',
        emailPresidente: 'renatogomes4@gmail.com',
        vicePresidente: 'Dr. Adriano Borges Nogueira',
        membrosEfetivos: [],
    },
    {
        title: 'COMISSÃO DE ESPORTE SAÚDE E LAZER',
        presidente: 'Dra. Cristiane Santos de Jesus',
        emailPresidente: 'cris_juris@hotmail.com',
        instagramLink: 'https://www.instagram.com/comissao_de_esportes_oabjandir/',
        membrosEfetivos: [
            'Dr. Anderson Oliveira da Silva',
            'Dra. Jaqueline de Souza Silva',
            'Dr. Samuel Lima da Silva',
            'Dr. William dos Santos Ribeiro',
            'Dra. Jessica de Lima Santos'
        ],
    },
    {
        title: 'COMISSÃO DE REGULARIZAÇÃO FUNDIÁRIA',
        presidente: 'Dra. Heloiza Galvão',
        emailPresidente: 'heloizagalvao0820@gmail.com',
        vicePresidente: 'Dra. Luciana de Araújo Blum',
        membrosEfetivos: [
            'Dra. Priscila Aparecida Foger',
            'Dr. Bruno Aparecido da Silva'
        ],
    },
    {
        title: 'COMISSÃO CRIMES CIBERNÉTICOS E SEGURANÇA DA INFORMAÇÃO',
        presidente: 'Dr. Alexandre Alves Neto',
        emailPresidente: 'alexandrealvesneto@gmail.com',
        instagramLink: 'https://www.instagram.com/oabcyber/',
        vicePresidente: 'Dr. Heraldo da Silva Azevedo Junior',
        membrosEfetivos: [
            'Dra. Lilian Meire Cambuim Alves'
        ],
    },
    {
        title: 'COMISSÃO DE ORATÓRIA E CERIMONIAL',
        presidente: 'Dra. Marcela de Paula Minjoni',
        emailPresidente: 'marcelapaula@adv.oabsp.org.br',
        membrosEfetivos: [
            'Dr. Giovani Roberto Zitelli'
        ],
    },
    {
        title: 'COMISSÃO PENAL E DIREITO PENAL',
        presidente: 'Dr. Valcir Moura Leal',
        emailPresidente: 'valcirmoura@adv.oabsp.org.br',
        vicePresidente: 'Dra. Michelly Alves Bezerra de Oliveira',
        membrosEfetivos: [
            'Dra. Caroline Ingrid de Lima Gregório',
            'Dr. Anderson Oliveira da Silva',
            'Dra. Sarah Cristina Duarte Fortis',
            'Dra. Tatiane Cristina Camargo Ferreira',
            'Dra. Priscila da Silva'
        ],
    },
    {
        title: 'COMISSÃO DA JOVEM ADVOCACIA',
        presidente: 'Dra. Fernanda Scopim',
        emailPresidente: 'fscopim@gmail.com',
        vicePresidente: 'Dr. Anderson Oliveira da Silva',
        instagramLink: 'https://www.instagram.com/jovem.adv.jandira/',
        membrosEfetivos: [
            'Dra. Caroline Ingrid de Lima Gregório',
            'Dra. Daniele Aparecida dos Santos Silva',
            'Dra. Denise Lopes dos Santos',
            'Dr. Kauê Teixeira Ventura Monteiro',
            'Dra. Sarah Cristina Duarte Fortis',
            'Dra. Sara Raiane de Souza Alves Barbosa',
            'Dra. Priscila da Silva',
        ],
    },
    {
        title: 'COMISSÃO DE CULTURA E EVENTOS',
        presidente: 'Dra. Carolina Gonçalves',
        emailPresidente: 'carol2609@gmail.com',
        membrosEfetivos: [],
    },
    {
        title: 'COMISSÃO DE DIREITO DO TRABALHO',
        presidente: 'Dr. Leandro Aparecido da Silva',
        emailPresidente: 'leandro_haurios@hotmail.com',
        vicePresidente: 'Dr. José Carlos Poletto Junior',
        membrosEfetivos: [
            'Dr. Natanael Conceição dos Santos',
            'Dra. Barbara Jaqueline da Fonseca Valério',
            'Dra. Karoline de Lima Silva',
            'Dra. Lucineide de Araujo Castilho'
        ],
    },
    {
        title: 'COMISSÃO DE DIREITOS HUMANOS',
        presidente: 'Dra. Tzvetana Inês Loureiro Tzankova',
        emailPresidente: 'tzvetanamorais@gmail.com',
        instagramLink: 'https://www.instagram.com/com.direitoshumanosdejandira/',
        vicePresidente: 'Dr. Anderson Oliveira da Silva',
        membrosEfetivos: [
            'Dra. Tatiane Cristina Camargo Ferreira'
        ],
    },
    {
        title: 'COMISSÃO DE IGUALDADE RACIAL',
        presidente: 'Dra. Barbara Jaqueline da Fonseca Valério',
        emailPresidente: 'babijaqueline@hotmail.com',
        instagramLink: 'https://www.instagram.com/cirjandira/',
        vicePresidente: 'Dra. Sarah Evangelista Justiniano',
        membrosEfetivos: [
            'Dra. Denise Lopes dos Santos'
        ],
    },
    {
        title: 'COMISSÃO DE DIREITO DA PESSOA IDOSA',
        presidente: 'Dra. Luciane Sandra Cambuim',
        emailPresidente: 'dralucianescambuim@gmail.com',
        instagramLink: 'https://www.instagram.com/cdpi_oabjandira/',
        membrosEfetivos: [
            'Dra. Lilian Meire Cambuim Alves'
        ],
    },
    {
        title: 'COMISSÃO DE DEFESA DOS ANIMAIS',
        presidente: 'Dra. Tatiane Cristina Camargo Ferreira',
        emailPresidente: 'tccamargof@gmail.com',
        vicePresidente: 'Dra. Michelly Alves Bezerra de Oliveira',
        instagramLink: 'https://www.instagram.com/comissaodefesadosanimais/',
        membrosEfetivos: [
            'Dr. Carlos Henrique Paulino',
            'Dra. Sarah Evangelista Justiniano',
            'Nathalia Loures Capelo'
        ],
    },
    {
        title: 'COMISSÃO DA OAB VAI À ESCOLA',
        presidente: 'Dr. Anderson Ferreira',
        emailPresidente: 'wanderreira@gmail.com',
        vicePresidente: 'Dra. Denise Lopes dos Santos',
        membrosEfetivos: [
            'Dr. Adalberto Alexandre Santos',
            'Dr. Edemar dos Santos Silva Filho',
            'Dra. Helena Cristina Caldeira Trindade Estevão'
        ],
    },
    {
        title: 'COMISSÃO DE ÉTICA E DISCIPLINA',
        presidente: 'Dra. Carolina Gonçalves',
        emailPresidente: 'carol2609@gmail.com',
        vicePresidente: 'Dr. Ricardo Benedicto Martins',
        membrosEfetivos: [],
    },
    {
        title: 'COMISSÃO DE DIREITO PREVIDENCIÁRIO',
        presidente: 'Dr. Samuel Lima da Silva',
        emailPresidente: 'reisamuellima@gmail.com',
        vicePresidente: 'Dra. Michelly Alves Bezerra de Oliveira',
        membrosEfetivos: [
            'Dra. Sarah Cristina Duarte Fortis',
            'Dra. Magna de Lima Galvão',
            'Dra. Iolanda Santana de França Lima'
        ],
    },
    {
        title: 'COMISSÃO DE DIREITO ELEITORAL',
        presidente: 'Dr. Geizon Branquinho do Nascimento',
        emailPresidente: 'dr.branquinho@adv.oabsp.org.br',
        vicePresidente: 'Dra. Claudinéia de Fátima da Silva',
        membrosEfetivos: [],
    },
    {
        title: 'COMISSÃO DE DIREITO ADMINISTRATIVO',
        presidente: 'Dr. Natanael Conceição dos Santos',
        emailPresidente: 'natalaelegos@gmail.com',
        membrosEfetivos: [
            'Dr. Jhonatan Rodrigues do Carmo'
        ],
    },
    {
        title: 'COMISSÃO DE DIREITO AMBIENTAL',
        presidente: 'Dr. Luiz Carlos de Souza Filho',
        emailPresidente: 'luizscopim@adv.oabsp.org.br',
        vicePresidente: 'Dra. Lúcia Simões de Almeida Morais',
        membrosEfetivos: [],
    },
    {
        title: 'COMISSÃO DE DIREITO TRIBUTÁRIO',
        presidente: 'Dr. Samuel de Paula Oliveira',
        emailPresidente: 'sp.oliveira@adv.oabsp.org.br',
        vicePresidente: 'Dra. Adreiza Farias de Oliveira',
        membrosEfetivos: [
            'Dra. Marluce Batista Matos',
            'Dr. Jhonatan Rodrigues do Carmo',
            'Dra. Jherelle Aparecida Marques'
        ],
    },
    {
        title: 'COMISSÃO DA AÇÃO SOCIAL INFÂNCIA E JUVENTUDE',
        presidente: 'Dra. Adreiza Farias de Oliveira',
        emailPresidente: 'adreiza@adv.oabsp.org.br',
        membrosEfetivos: [],
    },
    {
        title: 'COMISSÃO DE DIREITO CIVIL',
        presidente: 'Dr. Ricardo Benedicto Martins',
        emailPresidente: 'ricardobmartins@adv.oabsp.org.br',
        membrosEfetivos: [
            'Dr. Kauê Teixeira Ventura Monteiro',
            'Dr. Giovani Roberto Zitelli',
            'Dra. Jherelle Aparecida Marques',
            'Dra. Lucineide de Araujo Castilho',
            'Dr. Jhonatan Rodrigues do Carmo'
        ],
    },
    {
        title: 'COMISSÃO DE SEGURANÇA PÚBLICA',
        presidente: 'Dr. Elias Tavares de Lima',
        emailPresidente: 'elieli@outlook.com',
        membrosEfetivos: [],
    },
    {
        title: 'COMISSÃO DE TECNOLOGIA',
        presidente: 'Dr. Kauê Teixeira Ventura Monteiro',
        emailPresidente: 'kaueventura.adv@gmail.com',
        vicePresidente: 'Dr. Jhonatan Rodrigues do Carmo',
        membrosEfetivos: [],
    },
    {
        title: 'COMISSÃO DE HELPDESK',
        presidente: 'Dra. Elaine Carvalho de Aquino',
        emailPresidente: 'draelaineaquino@gmail.com',
        vicePresidente: 'Dr. Renato Pereira Gomes',
        membrosEfetivos: [],
    },
    {
        title: 'COMISSÃO DE DIREITO DE FAMÍLIA',
        presidente: 'Dra. Priscila Aparecida Foger',
        emailPresidente: 'foger2409@gmail.com',
        vicePresidente: 'Dra. Luciana de Araújo Blum',
        membrosEfetivos: [
            'Dra. Jherelle Aparecida Marques'
        ],
    },
    {
        title: 'COMISSÃO DE DIREITO DA PESSOA NEURODIVERGENTE',
        presidente: 'Dra. Tatiane Cristina Camargo Ferreira',
        emailPresidente: 'tccamargof@gmail.com',
        membrosEfetivos: [],
    }
];

const templateAccordion = ({
    title,
    presidente,
    emailPresidente,
    vicePresidente,
    instagramLink,
    membrosEfetivos
}) => {
    return `
        <div class="accordion mx-auto">
            <button class="accordion-header" onclick="accordionClick(this)">
                <span class="title-comissoes">
                    ${title || ''}
                </span>
                <i class="fa-solid fa-chevron-down arrow"></i>
            </button>

            <div class="accordion-body">
                <span class="accordion-body-title">Presidente</span>
                <p class="mt-1">
                    ${presidente || ''}
                    <br>
                    E-mail: ${emailPresidente || ''}
                </p>

                ${vicePresidente
            ? `
                        <span class="accordion-body-title2">Vice Presidente</span>
                        
                        <p>${vicePresidente || ''}</p>
                    `
            : ''
        }
                
                ${instagramLink
            ? `
                        <span class="accordion-body-title2">Redes Sociais</span><br>
                        
                        <a href="${instagramLink || ''}" target="_blank">
                            <img src="assets/icons/icon-Instagram.svg" width="20px">
                        </a>
                    `
            : ''
        }
                
                ${(membrosEfetivos && membrosEfetivos.length > 0)
            ? `
                        <div class="mt-3">
                            <span class="accordion-body-title2">Membros Efetivos</span>
                        </div>
                        
                        
                        <p class="p-body">
                            ${membrosEfetivos.join('<br>')}
                        </p>
                    `
            : ''
        }
            </div>
        </div>
    `;
}

document.getElementById('comissoes').innerHTML = arrComissions
    .map(obj => templateAccordion(obj))
    .join('\n')
    ;
