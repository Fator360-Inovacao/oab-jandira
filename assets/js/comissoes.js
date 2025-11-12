const arrComissions = [
    {
        title: 'COMISSÃO DE PRERROGATIVAS',
        presidente: 'Dra. Tatiane Cristina Camargo Ferreira',
        emailPresidente: 'tccamargof@gmail.com',
        vicePresidente: null,
        membrosEfetivos: [
            'Dra. Sarah Cristina Duarte Fortis ',
            'Dr. Ricardo Benedicto Martins',
        ],
    },
    {
        title: 'COMISSÃO PERMANENTE DAS MULHERES ADVOGADAS',
        presidente: 'Dra. Beatriz De Almeida Neves ',
        emailPresidente: 'claudineia.adv@hotmail.com',
        vicePresidente: null,
        instagramLink: 'https://www.instagram.com/comissaomulheradvogadajandira/',
        membrosEfetivos: [
            'Dra. Barbara Jaqueline da Fonseca Valério ',
            'Dra. Isabela  de Almeida Dias ',
            'Dra. Marcela Paula Minjoni ',
            'Dra. Sarah Sanches Goudinho '
        ],
    },
    {
        title: 'COMISSÃO DE DIREITO EMPRESARIAL',
        presidente: 'Dr. Heraldo da Silva Azevedo Junior',
        emailPresidente: 'heraldodsaj@gmail.com',
        vicePresidente: null,
        instagramLink: 'https://www.instagram.com/direitoempresarial_oab.jandira/',
        membrosEfetivos: [
            'Dr. Marco Antonio Moreira ',
            'Dr. Jhonatan Rodrigues do Carmo'
        ],
    },
    {
        title: 'COMISSÃO DA ASSISTÊNCIA JUDICIÁRIA',
        presidente: 'Dr. Person De Sousa Lima  ',
        emailPresidente: 'renato.gomes@adv.oabsp.org.br',
        vicePresidente: 'Dra. Tatiane Cristina Camargo Ferreira',
        membrosEfetivos: [
            'Dr. Marcos Aurélio Santos ',
            'Dr. Valcir Moura Leal '
        ],
    },
    {
        title: 'COMISSÃO DE ESPORTE SAÚDE E LAZER',
        presidente: 'Dra. Cristiane Santos de Jesus',
        emailPresidente: 'cris_juris@hotmail.com',
        instagramLink: 'https://www.instagram.com/comissao_de_esportes_oabjandir/',
        membrosEfetivos: [
            'Dr. William dos Santos Ribeiro'
        ],
    },
    {
        title: 'COMISSÃO DE REGULARIZAÇÃO FUNDIÁRIA',
        presidente: 'Dr. William dos Santos  Ribeiro ',
        emailPresidente: 'heloizagalvao0820@gmail.com',
        vicePresidente: null,
        membrosEfetivos: [
            'Dra. Valeria Maia Meduneckas Tourinho ',
            'Dra. Vitória Beatriz Estrela Alves de Lima'
        ],
    },
    {
        title: 'COMISSÃO CRIMES CIBERNÉTICOS E SEGURANÇA DA INFORMAÇÃO',
        presidente: 'Dr. Alexandre Alves Neto',
        emailPresidente: 'alexandrealvesneto@gmail.com',
        instagramLink: 'https://www.instagram.com/oabcyber/',
        vicePresidente: null,
        membrosEfetivos: [
            null
        ],
    },
    {
        title: 'COMISSÃO DE DIREITO PENAL E PROCESSO PENAL',
        presidente: 'Dr. Valcir Moura Leal',
        emailPresidente: 'valcirmoura@adv.oabsp.org.br',
        vicePresidente: null,
        membrosEfetivos: [
            'Dr. Caio Julio Cesar Santos Simões de Almeida',
            'Dr. Elias Tavares de Lima',
            'Dr. Marcos Aurélio Santos'
        ],
    },
    {
        title: 'COMISSÃO DA JOVEM ADVOCACIA',
        presidente: 'Dra. Isabela  de Almeida Dias ',
        emailPresidente: 'fscopim@gmail.com',
        vicePresidente: null,
        instagramLink: 'https://www.instagram.com/jovem.adv.jandira/',
        membrosEfetivos: [
            'Dra. Gabriella Alves de Sant Ana  ',
            'Dra. Sarah Evangelista Justiniano ',
            'Dra. Sueila Silva Carvalho '
        ],
    },
    {
        title: 'COMISSÃO DE CULTURA E EVENTOS',
        presidente: 'Dra. Cristiane Santos de Jesus ',
        emailPresidente: 'carol2609@gmail.com',
        vicePresidente: 'Dr. William dos Santos  Ribeiro ',
        membrosEfetivos: [],
    },
    {
        title: 'COMISSÃO DE DIREITO DO TRABALHO',
        presidente: null,
        emailPresidente: 'leandro_haurios@hotmail.com',
        vicePresidente: null,
        membrosEfetivos: [
            'Dra. Sarah Sanches Goudinho',
            'Dra. Lucineide de Araujo Castilho'
        ],
    },
    {
        title: 'COMISSÃO DE DIREITOS HUMANOS',
        presidente: 'Dra. Isabela  de Almeida Dias ',
        emailPresidente: 'anderson.oliveiraadv22@gmail.com',
        instagramLink: 'https://www.instagram.com/com.direitoshumanosdejandira/',
        membrosEfetivos: [
            'Dra. Sarah Sanches Goudinho'
        ],
    },
    {
        title: 'COMISSÃO DE IGUALDADE RACIAL',
        presidente: 'Dra. Barbara Jaqueline da Fonseca Valério',
        emailPresidente: 'babijaqueline@hotmail.com',
        instagramLink: 'https://www.instagram.com/cirjandira/',
        vicePresidente: null,
        membrosEfetivos: [
           'Dra. Denise Lopes dos Santos  ',
           'Dra. Marcela Paula Minjoni ',
           'Dr. Norberto Gil Ribeiro ',
           'Dra. Sarah Evangelista Justiniano '
        ],
    },
    {
        title: 'COMISSÃO DE DIREITO DA PESSOA IDOSA',
        presidente: 'Dra. Luciane Sandra Cambuim',
        emailPresidente: 'dralucianescambuim@gmail.com',
        instagramLink: 'https://www.instagram.com/cdpi_oabjandira/',
        membrosEfetivos: [
            'Dra. Lilian Meire Cambuim Alves',
            'Dr. Elson Rochane Neves ',
            'Dra. Nathalia Loures Capelo '
        ],
    },
    {
        title: 'COMISSÃO DE DEFESA DOS ANIMAIS',
        presidente: 'Dra. Michelly Alves Bezerra  de Oliveira ',
        emailPresidente: 'tccamargof@gmail.com',
        vicePresidente: 'Dra. Sarah Evangelista Justiniano ',
        instagramLink: 'https://www.instagram.com/comissaodefesadosanimais/',
        membrosEfetivos: [
            'Dr. Edson Morais da Cunha ',
            'Dra. Nathalia Loures Capelo'
        ],
    },
    {
        title: 'COMISSÃO DA OAB VAI À ESCOLA',
        presidente: 'Dr. Samuel de Paula Oliveira ',
        emailPresidente: 'wanderreira@gmail.com',
        vicePresidente: 'Dr. Adalberto Alexandre Santos ',
        membrosEfetivos: [
            'Dra. Ayeska Lorena Lopes Pereira ',
            'Dra. Gabriella Alves de Sant Ana  ',
            'Dra. Lilian Meire Cambuim Alves ',
            'Dra. Luciane Sandra Cambuim ',
            'Dra. Marcela Paula Minjoni '
        ],
    },
    {
        title: 'COMISSÃO DE ÉTICA E DISCIPLINA',
        presidente: 'Dra. Leni Antonia da Silva Aguiar ',
        emailPresidente: 'carol2609@gmail.com',
        vicePresidente: null,
        membrosEfetivos: [
            'Dr.Elson Rochane Neves ',
            'Dra. Luciane Sandra Cambuim',
            'Dr. Ricardo Benedicto Martins ',
            'Dra. Tatiane Cristina Camargo Ferreira ',
            'Dr. William dos Santos  Ribeiro '
        ],
    },
    {
        title: 'COMISSÃO DE DIREITO PREVIDENCIÁRIO',
        presidente: 'Dra. Sueila Silva Carvalho ',
        emailPresidente: 'reisamuellima@gmail.com',
        vicePresidente: null,
        membrosEfetivos: [
            'Dr. Elias Tavares de Lima ',
            'Dra. Jaqueline Renata dos Santos de Oliveira ',
            'Dra. Iolanda Santana de França Lima'
        ],
    },
    {
        title: 'COMISSÃO DE DIREITO ELEITORAL',
        presidente: 'Dra. Claudinéia de Fátima da Silva ',
        emailPresidente: 'dr.branquinho@adv.oabsp.org.br',
        vicePresidente: null,
        membrosEfetivos: [],
    },
    {
        title: 'COMISSÃO DE DIREITO ADMINISTRATIVO',
        presidente: 'Dr. Ricardo Benedicto Martins - ',
        emailPresidente: 'natalaelegos@gmail.com',
        membrosEfetivos: [
            'Dr. Norberto Gil Ribeiro '
        ],
    },
    {
        title: 'COMISSÃO DE DIREITO TRIBUTÁRIO',
        presidente: 'Dra. Marluce Batista Matos ',
        emailPresidente: 'sp.oliveira@adv.oabsp.org.br',
        vicePresidente: null,
        membrosEfetivos: [
            'Dra. Ayeska Lorena Lopes Pereira ',
            'Dr. Elias Tavares de Lima '
        ],
    },
    {
        title: 'COMISSÃO DA AÇÃO SOCIAL INFÂNCIA E JUVENTUDE',
        presidente: 'Dr. João Batista Alves Pereira ',
        emailPresidente: 'adreiza@adv.oabsp.org.br',
        membrosEfetivos: [],
    },
    {
        title: 'COMISSÃO DE DIREITO CIVIL',
        presidente: 'Dr. João Batista Alves Pereira ',
        emailPresidente: 'ricardobmartins@adv.oabsp.org.br',
        membrosEfetivos: [
            'Dra. Vitória Beatriz Estrela Alves de Lima',
            'Dra. Lucineide de Araujo Castilho',
            'Dr. Jhonatan Rodrigues do Carmo'
        ],
    },
    {
        title: 'COMISSÃO DE TECNOLOGIA',
        presidente: 'Dr. Jhonatan Rodrigues do Carmo',
        membrosEfetivos: [],
    },
    {
        title: 'COMISSÃO DE DIREITO DE FAMÍLIA',
        presidente: 'Dra. Beatriz de Almeida Neves',
        emailPresidente: 'foger2409@gmail.com',
        vicePresidente: null,
        membrosEfetivos: [
            'Dra. João Batista Alves Pereira',
            'Dra. Lucineide de Araujo Castilho ',
            'Dra. Sueila Silva Carvalho '
        ],
    },
    {
        title: 'COMISSÃO DE DIREITO DA PESSOA NEURODIVERGENTE',
        presidente: 'Dra. Tatiane Cristina Camargo Ferreira',
        emailPresidente: 'tccamargof@gmail.com',
        vicePresidente: 'Dra. Nathalia Loures Capelo ',
        membrosEfetivos: [
            'Dra. Jaqueline Renata dos Santos de Oliveira ',
            'Dra. Norberto Gil Ribeiro '
        ],
    }
];

const templateAccordion = ({
    title,
    presidente,
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
                <p class="accordion-body-title">Presidente</p>
                <p class="mt-1">
                    ${presidente || ''}
                    <br>
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
                            <svg width="20" height="20" style="margin-top: 5px;" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<path class="navbar-svg" fill-rule="evenodd" clip-rule="evenodd" d="M11.5418 3.97674C7.45022 3.97674 4.04022 7.4022 4.04022 11.7442V31.2558C4.04022 35.5978 7.45022 39.0233 11.5418 39.0233H30.5217C34.6133 39.0233 38.0233 35.5978 38.0233 31.2558V11.7442C38.0233 7.4022 34.6133 3.97674 30.5217 3.97674H11.5418ZM0.0634766 11.7442C0.0634766 5.3102 5.15106 0 11.5418 0H30.5217C36.9124 0 42 5.3102 42 11.7442V31.2558C42 37.6898 36.9124 43 30.5217 43H11.5418C5.15106 43 0.0634766 37.6898 0.0634766 31.2558V11.7442Z" fill="#3739FE"/>
<path class="navbar-svg" fill-rule="evenodd" clip-rule="evenodd" d="M22.2313 15.1998C20.8958 15.0031 19.5324 15.2298 18.3355 15.8466C17.1388 16.4634 16.1709 17.4378 15.5671 18.6292C14.9635 19.8205 14.7538 21.1692 14.9669 22.4843C15.1799 23.7994 15.8054 25.0164 16.7568 25.9614C17.7084 26.9065 18.9376 27.5313 20.2705 27.7443C21.6034 27.9573 22.9695 27.7473 24.174 27.1451C25.3784 26.5431 26.3584 25.5804 26.9769 24.3964C27.5954 23.2126 27.8218 21.8665 27.6251 20.5489C27.4244 19.2049 26.7936 17.9585 25.8231 16.9947C24.8525 16.0306 23.5935 15.4004 22.2313 15.1998ZM16.5138 12.3117C18.4506 11.3135 20.6539 10.9478 22.8107 11.2655C25.0108 11.5895 27.0497 12.608 28.6255 14.1731C30.2015 15.7384 31.2306 17.7676 31.5582 19.9617C31.8794 22.1128 31.5093 24.3091 30.5017 26.2378C29.4942 28.1663 27.9015 29.7277 25.9522 30.7022C24.0032 31.6765 21.7956 32.0152 19.6428 31.6712C17.49 31.3271 15.4992 30.3173 13.9544 28.7829C12.4094 27.2484 11.3891 25.2671 11.0413 23.1203C10.6935 20.9733 11.0363 18.7726 12.0199 16.8316C13.0034 14.8909 14.5767 13.31 16.5138 12.3117Z" fill="#3739FE"/>
<path class="navbar-svg" fill-rule="evenodd" clip-rule="evenodd" d="M28.7141 9.4202C28.7141 8.17231 29.7257 7.16069 30.9736 7.16069H30.9956C32.2435 7.16069 33.2551 8.17231 33.2551 9.4202C33.2551 10.6681 32.2435 11.6797 30.9956 11.6797H30.9736C29.7257 11.6797 28.7141 10.6681 28.7141 9.4202Z" fill="#3739FE"/>
</svg>
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
