import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div><figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <Image className="w-24 h-24 md:r rounded-full mx-auto" src="/zahid.jpg" alt="" width="384" height="512"/>
    <div className="pt-6 md:p-8 text-center space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
        That's great! Gardening is a wonderful hobby that can bring joy, relaxation, and a sense of accomplishment. It's also a great way to connect with nature and grow your own food. What specific aspects of gardening interest you the most? Are you looking to:

- Learn about different types of plants and flowers?
- Get tips on gardening techniques and best practices?
- Explore garden design and layout ideas?
- Understand how to care for specific plants or troubleshoot common issues?
- Learn about hydroponics, aeroponics, or other forms of indoor gardening?

Let me know, and I'll be happy to help you with your gardening interests!.
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          Miss Waresha
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          Staff Engineer, Algolia
        </div>
      </figcaption>
    </div>
  </figure>
  </div>
  )
}

export default page