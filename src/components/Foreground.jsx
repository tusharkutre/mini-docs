import React from 'react'
import Cards from './Cards'
import {useRef} from 'react'

const Foreground = ({isDarkMode}) => {

  const ref = useRef(null);

  const data = [
    // item 1
    {
      id: 1,
      filesize: "1.5MB",
      description:
        "Tusharkutre resume 2024",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "bg-blue-500" },
    },
    // item 2
    {
      id: 2,
      filesize: "500KB",
      description:
        "This is a PDF file",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "bg-green-600" },
    },
    // item 3
    {
      id: 3,
      filesize: "3.5MB",
      description:
        "This is a text file",
      close: false,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "bg-sky-600" },
    },
  ];

  return (
    <>
            {/* dynamic conditional rendering */}
            <div ref={ref} className="fixed top-20 left-0 w-full h-full z-[3] flex gap-5 flex-wrap p-5">
          {data.map((item) => (
            <>
            {/* <Document key={result.id} data={result} /> */}
            <Cards key={item.id} data={item} isDarkMode={isDarkMode} reference={ref}/>
            </>
          ))}
        </div>
    </>
  )
}

export default Foreground