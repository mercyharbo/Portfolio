'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useCallback } from 'react'

interface Post {
  title: string
  brief: string
  slug: string
  coverImage: string
}

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<Post[] | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [currentPage, setCurrentPage] = useState<number>(0)

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

  const fetchData = useCallback(async () => {
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
    const post: Post[] = result.data.user.publication.posts
    setPosts(post)
    setLoading(false)
  }, [query, variables])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <div className='w-full'>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div
          className='grid w-full   3xl:grid-cols-4 2xl:grid-cols-3 xl:grid-cols-3 xl:content-center xl:place-items-center xl:gap-10 md:grid-cols-2
                  md:content-center md:place-items-center md:gap-10 sm:grid-cols-1 sm:content-center sm:gap-10 '
        >
          {posts?.slice(0, 4).map((blogPost) => {
            return (
              <Link
                key={blogPost.slug}
                href={`https://codewithmercy.hashnode.dev/${blogPost.slug}`}
                className='flex flex-col justify-start items-start dark:bg-white dark:text-black text-white bg-[#363636] rounded-lg shadow-2xl h-full '
              >
                <Image
                  src={blogPost.coverImage}
                  alt={blogPost.title}
                  width={500}
                  height={500}
                  className='w-full h-auto object-cover rounded-t-lg'
                />
                <div className='flex flex-col justify-start items-start gap-3 p-5 '>
                  <h1 className='text-xl '>{blogPost.title}</h1>
                  <p className=''>{blogPost.brief}</p>
                </div>
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Blog
