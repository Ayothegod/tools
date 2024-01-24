import React from 'react'

export default function NewsletterInput() {
  return (
    <main className="text-white flex flex-col flex-1 gap-y-4">
        <p className="text-lg font-bold">Subscribe To Our Newsletter</p>
        <p className="text-xs text-secondary font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur fuga doloribus hic consectetur ..</p>
        <div className="w-full bg-white p-1 rounded-md flex gap-1">
            <input type="text" placeholder="Enter your email" className="w-full outline-none placeholder:text-sm p-2 text-black"/>
            <button className="bg-primary py-1 px-4 text-sm font-bold rounded-md hover:bg-orange-600">Subscribe</button>
        </div>
    </main>
  )
}
