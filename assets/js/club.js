const benefits = [
    {
        logo: '<img src="assets/icons/img-parceirosrfabricadeoculos.png" width="200px">',
        title: 'SR Fábrica de Óculos',
        benefits: [],
        conditions: [],
        instagramLink: ''
    }
];

const templateAccordion = ({
    logo,
    title,
    benefits,
    conditions,
    instagramLink
}) => {
    return `
        <div class="d-flex justify-content-center">
        <div class="accordion">
            <button class="accordion-header" onclick="accordionClick(this)">
                <span class="title-club">
                    ${logo || ''}
                </span>
                <i class="fa-solid fa-chevron-down arrow"></i>
            </button>

           
                </div>
                </div>
    `;
}

document.getElementById('club').innerHTML = benefits
    .map(obj => templateAccordion(obj))
    .join('\n')
    ;


    /*  <div class="accordion-body">
                <span class="accordion-body-title">${title || ''}</span>
                <p class="mt-1">
                    <span class="body-title">Benefícios</span>
                    <br>
                    ${benefits || ''}
                    <span class="body-title">Condições</span>
                    ${conditions || ''}
                    <br>
                    <span class="body-title">Contato/Redes Sociais</span>
                    <a href="${instagramLink || ''}" target="_blank">
                            <img src="assets/icons/icon-Instagram.svg" width="20px">
                        </a>
                </p>
                </div> */   