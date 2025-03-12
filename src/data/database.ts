import type { Project } from "@/types";

export const db: Project[] = [
  {
    id: '1',
    name: 'Tienda de Guitarras',
    description: 'Tienda de Guitarras donde podrás agregar al carrito, editar la cantidad del articulo o eliminarlo. Además cuenta con LocalStorage para no perder los productos en el carrito.',
    technologies: ['React', 'TypeScript', 'LocalStorage'],
    links: ['https://github.com/AlejandroDev8/Guitar-LA-TS', 'https://guitar-la-ts.vercel.app/']
  },
  {
    id: '2',
    name: 'Calculador de propinas y consumo',
    description: 'Calculador de propinas y consumo, hecho con ReactJS, pero utilizando TypeScript, el cual puede ser utilizado para algún establecimiento de comida o bebida.',
    technologies: ['React', 'TypeScript'],
    links: ['https://github.com/AlejandroDev8/Tip-Calculator-TS', 'https://tip-calculator-ts.vercel.app/']
  },
  {
    id: '3',
    name: 'Registro para Veterinaria',
    description: 'Registro de citas para una veterinaria, donde se puede agregar, eliminar y editar citas. Además cuenta con LocalStorage para no perder los datos.',
    technologies: ['React', 'JavaScript', 'LocalStorage'],
    links: ['https://github.com/AlejandroDev8/Citas-Veterinaria', 'https://citas-registro-veterinaria.netlify.app/']
  }
]