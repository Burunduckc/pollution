export interface organisationIP {
    link: string,
    text: string,
    nameOfOrganistaon: string
}

export const companiesData: organisationIP[] = [
  {
    link: "https://www.eea.europa.eu/en",
    text: "Європейське агентство з навколишнього середовища (EEA) є агентством Європейського Союзу (ЄС), яке надає незалежну інформацію про навколишнє середовище",
    nameOfOrganistaon: "European Environment Agency",
  },
  {
    link: 'https://gggi.org',
    text: 'Global Green Growth Institute (GGGI) — це міжурядова міжнародна організація розвитку зі штаб-квартирою в Сеулі, Південна Корея.',
    nameOfOrganistaon: 'Global Green Growth Institute'
  },
  {
    link: 'https://www.ipcc.ch/',
    text: 'Міжурядова група експертів зі зміни клімату (IPCC) — міжурядовий орган ООН',
    nameOfOrganistaon: 'Intergovernmental Panel on Climate Change'
  },
  {
    nameOfOrganistaon: 'United Nations Environment Programme',
    link: 'https://www.unep.org',
    text: 'Програма Організації Об’єднаних Націй з навколишнього середовища (ЮНЕП) відповідає за координацію реагування на екологічні проблеми в системі ООН.'
  },
  {
    nameOfOrganistaon: 'International Union for Conservation of Nature',
    link: 'https://www.iucn.org',
    text: 'Міжнародний союз охорони природи (IUCN) — міжнародна організація, яка працює в галузі охорони природи та раціонального використання природних ресурсів.'
  }
];
