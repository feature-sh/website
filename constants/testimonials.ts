import { faker } from '@faker-js/faker';

export type Testimonial = {
	i18nContent: string
	author: string
	role: string // i.e 'CEO', Lead developer', etc...
	workplace: string
	photo: string
}

export const testimonials: Testimonial[] = [
	{
		i18nContent: 'testimonial_example_content',
		role: 'CEO',
		workplace: 'Pure Insights',
		author: 'Judith Black',
		photo: 'https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80'
	},
]

export const genFakeTestimonials = (n: number = 5) => {
	return new Array(n).fill(null).map<Testimonial>(() => ({
		 author: `${faker.name.firstName()} ${faker.name.lastName()}`,
		 workplace: faker.company.companyName(),
		 role: faker.name.title(),
		 i18nContent: 'testimonial_example_content', // this one will never change
		 photo: faker.image.business()
	}))
}
