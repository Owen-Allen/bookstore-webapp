import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import Card from '@/components/Card'
import SortSelector from '@/components/SortSelector'

import { Roboto_Mono } from 'next/font/google'

const roboto = Roboto_Mono({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const MAX_RESULTS_PER_PAGE = 28

export interface Book {
  title: string,
  isbn: string,
  author: string,
  genre: string,
  price: number,
  stock: number,
  pub_cut: number
}

export default function Browse() {
  const router = useRouter()
  const [allBooks, setAllBooks] = useState<Book[]>([])
  const [displayBooks, setDisplayBooks] = useState<Book[]>([])
  const [allGenres, setAllGenres] = useState(["All"])

  const [sortBy, setSortBy] = useState("title")
  const [page, setPage] = useState(1)

  const [searchFilter, setSearchFilter] = useState("")
  const [genreFilter, setGenresFilter] = useState("All")
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(1000)

  async function getAllBooks() {
    try {
      const response = await fetch('/api/books')
      if (!response.ok) throw response.statusText
      setAllBooks(await response.json())
    } catch (err) {
      console.log("CAUGHT ERROR")
      alert("hello?")
      console.log(err)
      setAllBooks([])
    }
  }

  async function getAllGenres() {
    try {
      const response = await fetch('/api/genres')
      console.log(response.ok)
      if (!response.ok) throw response.statusText
      let genres = await response.json()
      setAllGenres(genres)
    } catch (err) {
      console.log("CAUGHT ERROR")
      console.log(err)
      setAllGenres(["All"])
    }
  }

  useEffect(() => {
    getAllBooks()
    getAllGenres()
  }, [])

  // wait should this be useCallback
  useEffect(() => {
    const filterParameters = () => {
      console.log("filtering...")
      let books = allBooks
      if (searchFilter) {
        books = books.filter(
          book => book.title.toLowerCase().includes(searchFilter.toLowerCase()) || book.author.toLowerCase().includes(searchFilter.toLowerCase()))
      }
      if (genreFilter !== "All") {
        books = books.filter(book => book.genre == genreFilter)
      }
      if (minPrice) {
        books = books.filter(book => book.price >= minPrice)
      }
      if (maxPrice) {
        books = books.filter(book => book.price <= maxPrice)
      }
      setDisplayBooks(books)
    }
    filterParameters() // solution to react-hooks/exhaustive-deps https://stackoverflow.com/questions/55840294/how-to-fix-missing-dependency-warning-when-using-useeffect-react-hook
  }, [minPrice, maxPrice, searchFilter, genreFilter, allBooks])

  return (
    <div className="min-h-screen h-fit overflow-auto bg-yellow-50">
      <main
        className={`flex flex-col p-16 bg-yellow-50`}>
        <div className="flex justify-center sm:flex-none sm:justify-start">
          <h1 id="browse" className={`${roboto.className} text-black text-6xl p-8 -mt-8 mb-2`}>
            Browse
          </h1>
        </div>

        <div className="flex">
          <aside id="sidebar" className="shadow-lg overflow-hidden sticky top-0 flex h-min pb-4 justify-center rounded bg-orange-300 sm:border md:border lg:border border-lime-900 w-0 sm:w-96 md:w-96 lg:w-96">
            <div className="flex p-8 flex-col w-5/8">
              <form className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label className="block text-black text-md font-bold mb-2" htmlFor="booksearch">
                      Find a Book
                    </label>
                    <input onChange={e => setSearchFilter(e.target.value)} className="text-lime-800 appearance-none bg-yellow-50 block w-full lime-900 border border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none" id="bookquery" type="booksearch" />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block text-black text-md font-bold mb-2" htmlFor="minprice">
                      Min Price
                    </label>
                    <input onChange={e => setMinPrice(+e.target.value)} className="appearance-none bg-yellow-50 block w-full text-black border border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none" id="minprice" />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label className="block text-black text-md font-bold mb-2" htmlFor="maxprice">
                      Max Price
                    </label>
                    <input onChange={(e) => setMaxPrice(+e.target.value)} className="appearance-none bg-yellow-50 block w-full text-black border border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none" id="maxprice" />
                  </div>
                </div>

                <label className="block text-black text-md font-bold mb-2" htmlFor="genre"> Select a genre </label>
                <select onChange={e => { setGenresFilter(e.target.value) }} id="genre" className="appearance-none bg-yellow-50 block w-full text-black border border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none">
                  <option key="All" value="All">All</option>
                  {
                    allGenres.map((genre) => <option key={genre} value={genre}>{genre}</option>)
                  }
                </select>
              </form>
            </div>
          </aside>

          {/* BOOK ROWS */}
          <div id="content" className="w-full"> {/* h-screen allows footer to have sticky behaviour up the page */}
            <div className="flex justify-center">  {/* Align center */}
              <div className="flex w-full flex-col px-12">  {/* Align vertically */}
                <div className="flex w-full justify-center sm:justify-end">
                  <SortSelector onSelectChange={setSortBy} />
                </div>
                <div className="flex flex-wrap justify-between bg-yellow-50 pb-12 h-max  gap-4"> {/* removed justify-around*  */}
                  {/* Book Icons */}
                  {displayBooks.length &&
                    displayBooks.sort((book1: Book, book2: Book) => {
                      if (sortBy === "title") {
                        if (book1.title > book2.title) {
                          return 1
                        } else {
                          return -1
                        }
                      } else if (sortBy === "author") {
                        if (book1.author > book2.author) {
                          return 1
                        } else {
                          return -1
                        }
                      } else if (sortBy === "low-high") {
                        return book1.price - book2.price
                      } else if (sortBy === "high-low") {
                        return book2.price - book1.price
                      }
                      return 1
                    }
                    ).slice((page - 1) * MAX_RESULTS_PER_PAGE, page * MAX_RESULTS_PER_PAGE).map((book) =>
                      <Card key={`card_${book.isbn}`} book={book}></Card>)}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`flex flex-row justify-center text-gray-800 gap-12`}>
          {page > 1 &&
            <button className="hover:text-black"
              onClick={() => {
                setPage(page - 1);
                router.push('#browse')
              }}>
              previous page
            </button>}
          {allBooks.length - (page * MAX_RESULTS_PER_PAGE) > 0 &&
            <button className="hover:text-black"
              onClick={() => {
                setPage(page + 1);
                router.push('#browse')
              }}>
              next page
            </button>}
          {/* cannot hit next page if there are no more results to show, 
            ex: suppose the search provides 31 results, 28 are on the page, thus 31 - (1 * 28) = 3 > 0, so we have more results to show
            62 - (28 * 2) = 6 > 0 (more results to show)
            29 - (28 * 2) = -27 < (no more results to show, so no next page button)
            */}
        </div>
      </main>
    </div>
  );
}


