import firstLogo from '../assets/1434834.png'
import secondLogo from '../assets/5133640.png'
import thirdLogo from '../assets/4337649.png'

interface propositionIP {
    source: string
    text: string
    alt: string
    nameOfClass: string
}

const firstText = 'Понад тисячі компаній, які не байдужі та допомогають навколошноьму середовищу не загрязнатись до великих мастшабів'
const secondText = 'Якщо довкілля буде дуже сильно забруднено і знищено, загине і сама людина'
const thirdText = 'Тому люди так старанно намагаються щодня знайти спосіб вирішення проблеми у вигляді забруднення'

export const morePropistions: propositionIP[] = [
    {
        source: secondLogo,
        text: firstText,
        alt: 'firstIconPollution',
        nameOfClass: 'home-propositions-card-icon planet'
    },
    {
        source: firstLogo,
        text: secondText,
        alt: 'secondIconPollution',
        nameOfClass: 'home-propositions-card-icon'
    },
    {
        source: thirdLogo,
        text: thirdText,
        alt: 'thirdIconPollution',
        nameOfClass: 'home-propositions-card-icon '
    }
]