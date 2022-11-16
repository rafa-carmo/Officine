import { Navigation, Pagination, A11y, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
// import { CaretLeft, CaretRight } from 'phosphor-react'
// import { useRef } from 'react'

interface SliderNewsProps {}

const news = [
  {
    source: {
      id: null,
      name: 'Tecmundo.com.br'
    },
    author: 'Wellington Arruda',
    title: 'Apple lança SOS de emergência via satélite no iPhone 14',
    description:
      'A Apple lançou nesta terça-feira (15) a ferramenta SOS de Emergência via satélite na linha iPhone 14. Disponível nos Estados Unidos e Canadá, a função é gratuita por dois anos a partir da data de compra e ativação de um novo smartphone da empresa. Em dezembro…',
    url: 'https://www.tecmundo.com.br/software/254389-apple-lanca-sos-emergencia-via-satelite-iphone-14.htm',
    urlToImage: 'https://tm.ibxk.com.br/2022/11/15/15103716435093.jpg',
    publishedAt: '2022-11-15T10:42:41Z',
    content:
      'A Applelançou nesta terça-feira (15) a ferramenta SOS de Emergência via satélite na linha iPhone 14. Disponível nos Estados Unidos e Canadá, a função é gratuita por dois anos a partir da data de comp… [+2525 chars]'
  },
  {
    source: {
      id: null,
      name: 'Olhardigital.com.br'
    },
    author: 'William Schendes',
    title: 'Apple é processada por violar a privacidade dos usuários',
    description:
      'A big tech é acusada de coletar os dados dos usuários mesmo com a opção de rastreamento de informações desligada\nO post Apple é processada por violar a privacidade dos usuários apareceu primeiro em Olhar Digital.',
    url: 'https://olhardigital.com.br/2022/11/14/seguranca/apple-e-processada-por-violar-a-privacidade-dos-usuarios/',
    urlToImage:
      'https://img.olhardigital.com.br/wp-content/uploads/2022/11/shutterstock_1921988555-1.jpg',
    publishedAt: '2022-11-15T00:00:00Z',
    content:
      'A Apple estÃ¡ sendo processada por coletar os dados de usuÃ¡rios de forma abusiva e sem o consentimento dos mesmos. A aÃ§Ã£o judicial veio apÃ³s um relatÃ³rio recente de pesquisadores independentes q… [+2806 chars]'
  },
  {
    source: {
      id: null,
      name: 'Publico.pt'
    },
    author: 'publico@publico.pt, publico@publico.pt',
    title: 'Quando é que o exercício começa a ser mau para a saúde?',
    description:
      'Neste Vitamina P, exploramos como começar a treinar para corridas de fundo. Siga o podcast Vitamina P no Spotify, Apple Podcasts ou outras aplicações para podcasts',
    url: 'https://www.publico.pt/2022/11/15/impar/noticia/exercicio-comeca-mau-saude-2027459',
    urlToImage:
      'https://imagens.publico.pt/imagens.aspx/1751035?tp=UH&db=IMAGENS&type=JPG&share=1&o=BarraFacebook_Impar.png',
    publishedAt: '2022-11-15T06:25:00Z',
    content:
      'Neste episódio do podcast Vitamina P, exploramos as consequências dos excessos nas dietas e no exercício para a saúde cardiovascular. O nosso convidado é Hélder Dores, coordenador de cardiologia clín… [+2278 chars]'
  },
  {
    source: {
      id: null,
      name: 'Publico.pt'
    },
    author: 'publico@publico.pt',
    title:
      'Steve Jobs adorava os seus Birkenstocks. Foram vendidos por 218 mil dólares',
    description:
      'A pequena fortuna paga pelo calçado ortopédico <i>vintage</i> vem numa altura em que a marca Birkenstocks, dos “sapatos feios” e da invenção de “cama para o pé”, voltou a ser uma das tendências.',
    url: 'https://www.publico.pt/2022/11/15/impar/noticia/steve-jobs-adorava-birkenstocks-vendidos-218-mil-dolares-2027801',
    urlToImage:
      'https://imagens.publico.pt/imagens.aspx/1751327?tp=UH&db=IMAGENS&type=JPG&share=1&o=BarraFacebook_Impar.png',
    publishedAt: '2022-11-15T15:00:46Z',
    content:
      'No que toca a moda, Steve Jobs, o falecido fundador da Apple, ficou conhecido pelo seu uniforme descontraído de camisolas pretas de gola alta, calças de ganga e sapatilhas. Mas o gigante da tecnologi… [+3703 chars]'
  },
  {
    source: {
      id: null,
      name: 'Publico.pt'
    },
    author: 'publico@publico.pt, publico@publico.pt',
    title:
      'Jorge Santos da Silva: “Portugal não é um país atraente para investimento em biotecnológias”',
    description:
      'O Fundador e CEO da MoonLake Immunotherapeutics critica a fiscalidade do país que torna pouco atrativo o investimento externo.',
    url: 'https://www.publico.pt/2022/11/15/ciencia/noticia/jorge-santos-silva-portugal-nao-pais-atraente-termos-investimento-biotecnologias-2027790',
    urlToImage:
      'https://imagens.publico.pt/imagens.aspx/1751258?tp=UH&db=IMAGENS&type=JPG&share=1&o=BarraFacebook_Podcasts.png',
    publishedAt: '2022-11-15T12:41:43Z',
    content:
      'Neste episódio do Podcast Cruzamento, André Correia e Daniel Guedelha conversam com Jorge Santos da Silva, Fundador e CEO da MoonLake Immunotherapeutics sobre biotech, investimentos e inovação e, sob… [+293 chars]'
  }
]

export function SliderNews({}: SliderNewsProps) {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y, Autoplay]}
      slidesPerView={1}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false
      }}
      pagination={{ clickable: true, dynamicBullets: true }}
      className="h-full mySwiper relative"
      loop={true}
    >
      {news.map((item) => (
        <SwiperSlide key={item.title}>
          <div className="w-full h-full flex flex-col items-start justify-end px-10 py-14 relative">
            <div className="z-20">
              <h3 className="mb-3 font-bold text-zinc-600/50 uppercase">
                {item.source.name}
              </h3>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <h3 className="font-bold line-clamp-1">{item.title}</h3>
              </a>
              <p className="text-sm line-clamp-2 pl-1 mt-2">
                {item.description}
              </p>
            </div>
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-zinc-200/20 z-10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.urlToImage}
                alt={item.title}
                className="opacity-20 w-full h-full"
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
      {/* 
      <div
        ref={navigationNextRef}
        className="absolute top-2 right-1 bg-white text-primary-300 hover:text-primary-500 transition-colors rounded-full z-10 cursor-pointer"
      >
        <CaretRight size={22} weight="bold" />
      </div>
      <div
        ref={navigationPrevRef}
        className="absolute top-2 right-10 bg-white text-primary-300 hover:text-primary-500 transition-colors rounded-full z-10 cursor-pointer"
      >
        <CaretLeft size={22} weight="bold" />
      </div> */}
    </Swiper>
  )
}
