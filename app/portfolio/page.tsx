"use client"

import { NavigationCondition, PortfolioAccordion } from '@/components/shared'
import Head from 'next/head'
import React from 'react'

const PortfolioPage = () => {
  return (
    <>
      <Head>
        <title>Portfolio Page</title>
        <meta name="description" content="Explore Adeola's portfolio, showcasing projects and achievements." />
      </Head>
      <section className='px-8 md:px-12 pt-8'>
        <div className=""> <NavigationCondition /></div>
        <PortfolioAccordion />
      </section>
    </>
  )
}

export default PortfolioPage
