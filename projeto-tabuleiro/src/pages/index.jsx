import { Inter } from 'next/font/google'
import Tabeulriro2 from '../../components/solucaoDoProfessor/Tabeulriro2'
import Tabuleiro from '../../components/Tabuleiro'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
     <>
     {/* <Tabeulriro2 /> */}
     <Tabuleiro />
     </>
  )
}
