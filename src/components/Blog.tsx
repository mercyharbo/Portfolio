'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

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
  const revealRefs = useRef<Array<HTMLElement>>([])

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
    try {
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

      if (!data.ok) {
        throw new Error(
          `Network response was not ok (${data.status} ${data.statusText})`
        )
      }

      const result = await data.json()
      const post: Post[] = result.data.user.publication.posts
      setPosts(post)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching data:', error)
      // Handle the error (e.g., show a user-friendly message)
    }
  }, [query, variables])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  useEffect(() => {
    revealRefs.current.forEach((el, index) => [
      gsap.fromTo(
        el,
        { y: -100, autoAlpha: 0 },
        {
          y: 0,
          duration: 1,
          ease: 'power2.out',
          autoAlpha: 1,
          stagger: 0.5,
          delay: 0.5,
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: 'top center',
            end: 'bottom center',
            toggleActions: 'play none none reverse',
          },
        }
      ),
    ])
  }, [revealRefs])

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el)
    }
  }

  return (
    <main id='blog' className='w-full'>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className='w-full 3xl:my-[3rem] xl:my-[3rem] xl:px-0 md:my-[3rem] md:px-10 sm:px-5 sm:my-[3rem] '>
          <div className='flex flex-col gap-5'>
            <h1
              ref={addToRefs}
              className='text-gradient xl:text-5xl md:text-4xl sm:text-3xl capitalize'
            >
              Blog
            </h1>
            <p ref={addToRefs}>
              I&apos;m actively working on improving my writing and blogging
              skills to share my journey. I aim to create content that can
              benefit newcomers and anyone seeking guidance, similar to the
              valuable resources I stumbled upon during my early days as a
              self-taught developer. Back then, I faced challenges due to
              limited physical resources and a lack of a strong tech community
              in my region.
            </p>
            <p ref={addToRefs}>
              This section highlights some of my blog posts on Hashnode. While
              they may not be flawless, I&apos;m dedicated to continuous
              improvement and plan to produce more content, just like many other
              tech enthusiasts out there.
            </p>
          </div>

          <div
            className='grid w-full py-10 3xl:grid-cols-4 2xl:grid-cols-3 xl:grid-cols-3 xl:content-center xl:place-items-center xl:gap-10 md:grid-cols-2
            md:content-center md:place-items-center md:gap-10 sm:grid-cols-1 sm:content-center sm:gap-10 '
          >
            {posts?.slice(0, 4).map((blogPost) => {
              return (
                <Link
                  key={blogPost.slug}
                  ref={addToRefs}
                  href={`https://codewithmercy.hashnode.dev/${blogPost.slug}`}
                  className='grid grid-cols-1 content-between place-items-center gap-2 dark:bg-white dark:text-black text-white bg-[#363636] rounded-lg shadow-2xl h-full '
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
        </div>
      )}
    </main>
  )
}

export default Blog
