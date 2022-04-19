import { faker } from '@faker-js/faker'

export type Testimonial = {
  i18nContent: string
  author: string
  role: string // i.e 'CEO', Lead developer', etc...
  workplace: string
  photo: string
}

const peoplePics = [
  '/product_lead_cofounder_flexteam.jpeg',
  '/ceo_hackerhouse.jpg',
  '/Yassine_adlive.jpg',
  '/Julien-CEO-Ato.png',
]

export const testimonials: Testimonial[] = [
  {
    i18nContent: 'testimonial_example_content_1',
    role: 'Co-Founder & Product Lead',
    workplace: 'Flexteam',
    author: 'Hulin Simon',
    photo:
      '/product_lead_cofounder_flexteam.jpeg',
  },
  {
    i18nContent: 'testimonial_example_content_2',
    role: 'CEO',
    workplace: 'Hackhouse',
    author: 'Boumny Stéphane',
    photo:
      '/ceo_hackerhouse.jpg',
  },
  {
    i18nContent: 'testimonial_example_content_3',
    role: 'Header Bidding Expert',
    workplace: 'Adlive',
    author: 'Adissa Yassine',
    photo:
      '/Yassine_adlive.jpg',
  },
  {
    i18nContent: 'testimonial_example_content_4',
    role: 'CEO',
    workplace: 'Ato',
    author: 'Béranger Julien',
    photo:
      '/Julien-CEO-Ato.png',
  },
]

export const genFakeTestimonials = (n: number = 5) => {
  return new Array(n).fill(null).map<Testimonial>((_, i) => ({
    author: `${faker.name.firstName()} ${faker.name.lastName()}`,
    workplace: faker.company.companyName(),
    role: faker.name.title(),
    i18nContent: 'testimonial_example_content', // this one will never change
    photo: peoplePics[i % peoplePics.length],
  }))
}
