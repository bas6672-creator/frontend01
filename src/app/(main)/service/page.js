import React from 'react'
import Herosectionservice from '@/components/herosectionservice'
import Cardsectionservice from '@/components/Cardsectionservice'
import Footersection from '@/components/Footersection'

export default function Home() {
  return (
    <div>
    <Herosectionservice />
    <Cardsectionservice />
    <Footersection />
    </div>
  )
}