export type Testimonial = {
  i18nContent: string
  author: string
  role: string // i.e 'CEO', Lead developer', etc...
  workplace: string
}

export const testimonials: Testimonial[] = [
  {
    i18nContent: 'testimonial_example_content',
    role: 'CEO',
    workplace: 'Pure Insights',
    author: 'Judith Black',
  },
]
