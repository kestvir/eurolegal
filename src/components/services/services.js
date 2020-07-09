
import React from "react"
import Title from "../title"
import styles from "./services.module.css"
import { useStaticQuery, graphql } from "gatsby"
import { GoLaw } from "react-icons/go"
import { RiMoneyEuroCircleLine } from "react-icons/ri"
import { FaBriefcase, FaCalculator } from "react-icons/fa"


export const query = graphql`
{
    allContentfulServices(sort: {fields: createdAt, order: ASC}) {
      nodes {
        title
        id
        serviceList {
          serviceList
        }
      }
    }
  }
`

const Services = () => {
    const
        {
            allContentfulServices: {
                nodes: firmServices
            }
        } = useStaticQuery(query)


    const setIcon = (serviceTitle) => {
        switch (serviceTitle) {
            case 'Legal':
                return <GoLaw className={styles.serviceIcon} />;
                break;
            case 'Tax':
                return <FaCalculator className={styles.serviceIcon} />
                break;
            case 'Financial':
                return <RiMoneyEuroCircleLine className={styles.serviceIcon} />;
                break;
            default:
                return <FaBriefcase className={styles.serviceIcon} />;
        }
    }

    return (
        <section className={`section ${styles.services}`} id="services-section">
            <Title title={"Services"} />
            <div className={`section-center ${styles.servicesCenter}`}>
                {firmServices.map(firmService => {
                    const { id, title, serviceList: { serviceList } } = firmService

                    return (
                        <article key={id} className={styles.service}>
                            {setIcon(title)}
                            <h4>{title}</h4>
                            <div className={styles.serviceUnderline}></div>
                            <p>{serviceList}</p>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}

export default Services