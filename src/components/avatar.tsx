import Image from 'next/image'

export default function DecorativeAvatar() {
  return (
    <div className='relative w-[350px] h-[350px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px]'>
      {/* Background shape */}
      <div className='absolute inset-0 bg-primary/20 rounded-full'></div>

      {/* Decorative crosses */}
      <div className='absolute -top-2 -right-2'>
        <span className='text-3xl font-bold text-black/70 dark:text-white'>
          ++
        </span>
        <span className='text-3xl font-bold text-black/70 dark:text-white ml-1'>
          ++
        </span>
      </div>

      {/* Decorative slashes */}
      <div className='absolute -bottom-4 -left-4'>
        <div className='flex gap-[2px] rotate-[30deg]'>
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className='w-[3px] h-10 bg-black/70 dark:bg-white'
            ></div>
          ))}
        </div>
      </div>

      {/* Image container with offset */}
      <div className='absolute inset-4 overflow-hidden'>
        <div className='relative w-full h-full'>
          <div className='absolute inset-0 border-[2px] border-black/10 dark:border-gray-600 rounded-[40%] overflow-hidden'>
            <Image
              src='/avatar1.JPEG'
              alt='Profile avatar'
              fill
              className='object-cover object-top'
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}
