import dirty from '../assets/happenings/grath.jpg'
import biomix from '../assets/happenings/biomix.jpeg'
import brokenDevices from '../assets/happenings/broken-devices.jpg'
import trashOcean from '../assets/happenings/trashicocean.jpg'
import pollutionAir from '../assets/happenings/polluitonair.jpg'
import warningHealth from '../assets/happenings/warningforhealthpeople.jpg'
import waterTrash from '../assets/happenings/water.jpg'
import changeClimat from '../assets/happenings/zmina-klimatu.jpg'

export interface happeningsDataIP {
    source: string,
    title: string,
    route: string
}

export const happeningsData: happeningsDataIP[] = [
    {
        source: changeClimat,
        title: 'Кліматичні зміни',
        route: '/happenings/0'
    },
    {
        source: biomix,
        title: 'Втрата Біорізноманіття',
        route: '/happenings/1'
    },
    {
        source: waterTrash,
        title: 'Забруднення Водних Ресурсів',
        route: '/happenings/2'
    },
    {
        source: pollutionAir,
        title: 'Забруднення Повітря',
        route: '/happenings/3'
    },
    {
        source: dirty,
        title: 'Отруєння ґрунту',
        route: '/happenings/4'
    },
    {
        source: trashOcean,
        title: 'Сміттєзабруднення Океанів',
        route: '/happenings/5'
    },
    {
        source: brokenDevices,
        title: 'Електронне Забруднення',
        route: '/happenings/6'
    },
    {
        source: warningHealth,
        title: "Загроза Здоров'ю Людей",
        route: '/happenings/7'
    }
]