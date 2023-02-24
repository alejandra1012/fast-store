import { useState } from 'react'
import { List as UIList } from '@faststore/ui'
import Link from 'src/components/ui/Link'
import Accordion, { AccordionItem } from 'src/components/ui/Accordion'

import styles from './footer.module.scss'

const links = [
  {
    title: 'ACERCA DE LINIO',
    items: [
      {
        href: '/',
        name: '¿Quienes Somos?',
      },
      {
        href: '/',
        name: 'Responsabilidad Social',
      },
      {
        href: '/',
        name: 'Términos de Uso',
      },
      {
        href: '/',
        name: 'Protección de Propiedad Intelectual',
      },
      {
        href: '/',
        name: 'Ventas Corporativas',
      },
      {
        href: '/',
        name: 'Programas de Lealtad',
      },
      {
        href: '/',
        name: 'Vuélvete un Afiliado',
      },
      {
        href: '/',
        name: 'Directorio',
      },
      {
        href: '/',
        name: 'Login',
      },
      {
        href: '/',
        name: 'Beneficios',
      },
      {
        href: '/',
        name: 'Trabaje con nosotros',
      },
      {
        href: '/',
        name: 'Canal de integridad',
      },
      {
        href: '/',
        name: 'Grupo Falabella',
      },
      {
        href: '/',
        name: 'Developers',
      },
      {
        href: '/',
        name: 'Notificaciones Judiciales',
      },
    ],
  },
  {
    title: 'SERVICIO AL CLIENTE',
    items: [
      {
        href: '/',
        name: 'Bases Legales Promocionales',
      },
      {
        href: '/',
        name: 'Preguntas Frecuentes',
      },
      {
        href: '/',
        name: 'Aplicar mi garantía',
      },
      {
        href: '/',
        name: 'Estado de mi recoleccíon',
      },
      {
        href: '/',
        name: 'Autorización para el Tratamiento de Datos Personales',
      },
      {
        href: '/',
        name: 'Política de Tratamiento de Datos',
      },
      {
        href: '/',
        name: 'Terminos y Condiciones',
      },
      {
        href: '/',
        name: 'Política de venta de productos internacionales',
      },
      {
        href: '/',
        name: 'Peticiones, quejas o reclamos',
      },
      {
        href: '/',
        name: 'www.sic.gov.co',
      },
      {
        href: '/',
        name: '¿Como cuidamos tus datos? ',
      },
    ],
  },
  {
    title: 'LINIO LATINOAMÉRICA',
    items: [
      {
        href: '/',
        name: 'Colombia',
      },
      {
        href: '/',
        name: 'Mexico',
      },
      {
        href: '/',
        name: 'Chile',
      },
      {
        href: '/',
        name: 'Perú',
      },
    ],
  },
  {
    title: 'NOVEDADES',
    items: [
      {
        href: '/',
        name: 'CyberLunes',
      },
      {
        href: '/',
        name: 'iPhone',
      },
      {
        href: '/',
        name: 'Solo Hoy Ofertas',
      },
      {
        href: '/',
        name: 'Despensa, vinos y gourmet',
      },
    ],
  },
]

type LinkItem = {
  href: string
  name: string
}

interface LinksListProps {
  items: LinkItem[]
  index?: number
}

function LinksList({ items, index }: LinksListProps) {
  return (
    <UIList data-fs-footerLinks={index}>
      {items.map((item) => (
        <li key={item.name}>
          <Link variant="footer" href={item.href}>
            {item.name}
          </Link>
        </li>
      ))}
    </UIList>
  )
}

function FooterLinks() {
  const [indicesExpanded, setIndicesExpanded] = useState<Set<number>>(
    new Set([])
  )

  const onChange = (index: number) => {
    if (indicesExpanded.has(index)) {
      indicesExpanded.delete(index)
      setIndicesExpanded(new Set(indicesExpanded))
    } else {
      setIndicesExpanded(new Set(indicesExpanded.add(index)))
    }
  }

  return (
    <section className={styles.fsFooter} data-fs-footer-links>
      <div className="display-mobile">
        <Accordion expandedIndices={indicesExpanded} onChange={onChange}>
          {links.map((section, index) => (
            <AccordionItem
              key={section.title}
              isExpanded={indicesExpanded.has(index)}
              buttonLabel={section.title}
            >
              <LinksList items={section.items} />
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="hidden-mobile">
        <nav data-fs-footer-links-columns>
          {links.map((section, index) => (
            <div key={section.title}>
              <p data-fs-footer-title>{section.title}</p>
              <LinksList items={section.items} index={index} />
            </div>
          ))}
        </nav>
      </div>
    </section>
  )
}

export default FooterLinks
