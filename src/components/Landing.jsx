import SearchComponent from './searchComponent/SearchComponent'

export default function Landing() {
  return (
    <>
      <div>
        <div className="bg-[url('/Image/hero.jpg')]  flex justify-center bg-no-repeat bg-cover md:bg-center sm:bg-center">
          {/* <img className="w-full p-6" src="/public/Landing.jpg"></img> */}
          <div className=" mt-96 mb-24 md:text-[45px] text-4xl  text-white">
            <SearchComponent />
          </div>
        </div>
        <div className="flex flex-col items-center gap-10 border-t-4 divide-slate-200 p-4 sm:p-6 md:p-8 lg:p-10">
          <div className="flex flex-row flex-wrap justify-center gap-8">
            <div className="flex flex-col w-full md:w-[400px] border-2 gap-4">
              <img className="w-full md:w-[400px] h-[240px]" src="/Image/Tirane.jpg_.webp" alt="Tirane"></img>
              <h1 className="font-bold text-2xl grid place-content-center">Tirane</h1>
              <p className="p-3">
                Tirana is the capital and largest city of Albania. It is located in the centre of the country, enclosed
                by mountains and hills with Dajti rising to the east and a slight valley to the northwest overlooking
                the Adriatic Sea in the distance. Due to its location at the Plain of Tirana and the close proximity to
                the Mediterranean Sea, the city is particularly influenced by a Mediterranean seasonal climate. It is
                among the wettest and sunniest cities in Europe, with 2,544 hours of sun per year.
              </p>
              <button className="bg-[#1da1f2] text-white hover:bg-sky-700 w-20 h-10 rounded-lg ml-4 mb-4">
                <a href="https://en.wikipedia.org/wiki/Tirana">Explore</a>
              </button>
            </div>
            <div className="flex flex-col w-full md:w-[400px] border-2 gap-4">
              <img className="w-full md:w-[400px] h-[240px]" src="/Image/Korca.jpg" alt="Korca"></img>
              <h1 className="font-bold text-2xl grid place-content-center">Korca</h1>
              <p className="p-3">
                Korçë is the eighth most populous city of the Republic of Albania and the seat of Korçë County and Korçë
                Municipality. The total population is 75,994 (2011 census),[2] in a total area of 806 km2 .It stands on
                a plateau some 850 m (2,789 ft) above sea level, surrounded by the Morava Mountains. The area of the Old
                Bazaar, including Mirahori Mosque, is considered as the urban core of the city. Founded by the local
                Ottoman Albanian nobleman Ilias Bey Mirahori,
              </p>
              <button className="bg-[#1da1f2] text-white hover:bg-sky-700 w-20 h-10 rounded-lg ml-4 mb-4">
                <a href="https://en.wikipedia.org/wiki/Kor%C3%A7%C3%AB">Explore</a>
              </button>
            </div>
            <div className="flex flex-col w-full md:w-[400px] border-2 gap-4">
              <img className="w-full md:w-[400px] h-[240px]" src="/Image/gjirokaster.jpg" alt="Gjirokastra"></img>
              <h1 className="font-bold  text-2xl grid place-content-center">Gjirokastra</h1>
              <p className="p-3">
                Gjirokastër is a city in southern Albania and the seat of Gjirokastër County and Gjirokastër
                Municipality. It is located in a valley between the Gjerë mountains and the Drino, at 300 metres above
                sea level. Its old town is a UNESCO World Heritage Site, described as a rare example of a well-preserved
                Ottoman town, built by farmers of large estate. The city is overlooked by Gjirokastër Fortress, where
                the Gjirokastër National Folklore Festival is held every five years.
              </p>
              <button className="bg-[#1da1f2] text-white hover:bg-sky-700 w-20 h-10 rounded-lg  ml-4 mb-4">
                <a href="https://en.wikipedia.org/wiki/Gjirokast%C3%ABr">Explore</a>
              </button>
            </div>
            <div className="flex flex-col w-full md:w-[400px] border-2 gap-4">
              <img
                className="w-full md:w-[400px] h-[240px]"
                src="/Image/sarande-albaniatouristplaces.jpg"
                alt="Saranda"
              ></img>
              <h1 className="font-bold text-2xl grid place-content-center">Saranda</h1>
              <p className="p-3">
                Sarandë (Albanian: [saˈɾandə]; definite form: Saranda; Greek: Άγιοι Σαράντα, romanized: Ágioi Saránta)
                is a city in the Republic of Albania and seat of Sarandë Municipality. Geographically, the city is
                located on an open sea gulf of the Ionian Sea within the Mediterranean Sea. Stretching along the
                Albanian Ionian Sea Coast, Sarandë has a Mediterranean climate with over 300 sunny days a year.In
                ancient times, the city was known as Onchesmus or Onchesmos and was a port-town of Chaonia in ancient
                Epirus. It owes its modern name to
              </p>
              <button className="bg-[#1da1f2] text-white hover:bg-sky-700 w-20 h-10 rounded-lg  ml-4 mb-4  ">
                <a href="https://en.wikipedia.org/wiki/Sarand%C3%AB">Explore</a>
              </button>
            </div>
            <div className="flex flex-col w-full md:w-[400px] border-2 gap-4">
              <img className="w-full md:w-[400px] h-[240px]" src="/Image/vlora.jpg" alt="Vlora"></img>
              <h1 className="font-bold  text-2xl grid place-content-center">Vlora</h1>
              <p className="p-3">
                Vlorë (/ˈvlɔːrə/ VLOR-ə,[7][8] Albanian: [ˈvlɔɾə]; definite form: Vlora[c]) is the third most populous
                city of the Republic of Albania and seat of Vlorë County and Vlorë Municipality. Located in southwestern
                Albania, Vlorë sprawls on the Bay of Vlorë and is surrounded by the foothills of the Ceraunian Mountains
                along the Albanian Adriatic and Ionian Sea Coasts. It experiences a Mediterranean climate, which is
                affected by the Ceraunian Mountains and the proximity to the Mediterranean Sea.
              </p>
              <button className="bg-[#1da1f2] text-white hover:bg-sky-700 w-20 h-10 rounded-lg  ml-4 mb-4">
                <a href="https://en.wikipedia.org/wiki/Vlor%C3%AB">Explore</a>
              </button>
            </div>
            <div className="flex flex-col w-full md:w-[400px] border-2 gap-4">
              <img className="w-full md:w-[400px] h-[240px]" src="/Image/Shkoder.jpg" alt="Shkoder"></img>
              <h1 className="font-bold  text-2xl grid place-content-center">Shkoder</h1>
              <p className="p-3">
                Shkodër historically known as Scodra or Scutari, is the fifth-most-populous city of the Republic of
                Albania and the seat of Shkodër County and Shkodër Municipality. Shkodra has been continuously inhabited
                since the Early Bronze Age and it has roughly 2,200 years of recorded history. The city sprawls across
                the Plain of Mbishkodra between the southern part of Lake Shkodër and the foothills of the Albanian Alps
                on the banks of Buna, Drin and Kir.Due to its proximity to the Adriatic Sea, Shkodër is affected by a
                seasonal Mediterranean.
              </p>
              <button className="bg-[#1da1f2] text-white hover:bg-sky-700 w-20 h-10 rounded-lg  ml-4 mb-4">
                <a href="https://en.wikipedia.org/wiki/Shkod%C3%ABr">Explore</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
