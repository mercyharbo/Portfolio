import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

export default function BlogPosts() {
  const [posts, setPosts] = useState(null)
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)

  const variables = { page: currentPage }

  const query = `
  query GetUserArticles($page: Int!) {
      user(username: "codewithmercy") {
          publication {
              posts(page: $page) {
                  title
                  brief
                  slug
                  coverImage
              }
          }
      }
  }
`

  /**
   * This function fetches data from an API and sets the fetched data as posts, using useCallback and
   * useEffect hooks.
   */
  const fetchData = async () => {
    const data = await fetch('https://api.hashnode.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    })
    const result = await data.json()
    const post = result.data.user.publication.posts
    const newPosts = [...(posts || []), ...post]
    setPosts(newPosts)
    setTotalPages(result.data.user.publication.posts.length)
    setLoading(false)
  }

  const memoedFunction = useCallback(() => {
    return fetchData()
  }, [])

  useEffect(() => {
    memoedFunction()
  }, [])

  const handleLoadMore = () => {
    setCurrentPage(currentPage + 1)
  }

  return (
    <>
      <Head>
        <title>Code With Mercy - Frontend Developer | Blogs</title>
        <meta
          name='description'
          content='Welcome to my blog page. where I share my thought on web development, design, and my tech journey as a frontend developer 
          and a WordPress expert based in Nigeria. I love creating beautiful and functional website that meet the needs and expectations of my clients. '
        />
      </Head>

      <main className='flex flex-col justify-start items-start gap-8 xl:px-10 lg:px-10 md:px-10 sm:px-5 py-5 '>
        <h1 className='xl:text-5xl'>My blogs </h1>

        {loading && <div>Loading...</div>}

        <section className='grid 2xl:grid-cols-4 2xl:gap-10 lg:gap-8 lg:grid-cols-3 md:grid-cols-2 md:gap-8 sm:grid-cols-1 sm:gap-10'>
          {posts?.map((post) => (
            <Link
              href={`https://codewithmercy.hashnode.dev/${post.slug}`}
              target='_blank'
              key={post.title}
              className='flex flex-col justify-start items-start bg-white shadow-lg rounded-xl hover:shadow-[#6245d7]'
            >
              <Image
                src={
                  post.coverImage
                    ? post.coverImage
                    : 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
                }
                alt={post.title}
                width={400}
                height={400}
                quality={100}
                className='rounded-t-lg xl:h-[300px] w-full '
              />
              <div className='flex flex-col gap-4 p-4'>
                <h1 className='xl:text-2xl lg:text-xl md:text-lg sm:text-lg'>
                  {post.title}
                </h1>
                <p className=''>{post.brief}</p>
              </div>
            </Link>
          ))}
        </section>

        {currentPage < totalPages && (
          <button
            onClick={handleLoadMore}
            className='flex justify-center items-center w-[120px] h-[50px] rounded-lg bg-[#6245d7] text-white font-medium mx-auto '
          >
            Load More
          </button>
        )}
      </main>
    </>
  )
}
