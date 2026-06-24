
export default function NewsArticle() {
    return (
        <article className="border-2 bg-[#0d0d0d] border-[#252525] rounded-[34px] p-6 m-4">
            <div className="mb-3">
                <time className="text-xs text-[#a1a1a1] font-bold">
                </time>
            </div>

            <h2 className="mb-2 text-[20px] font-semibold text-white">
                
            </h2>

            <p className="font-medium text-[#a1a1a1] line-clamp-2 mb-4">
               
            </p>

            <div className="flex items-center justify-between">
                <span className="rounded-md bg-[#bf7aef]/15 px-2 py-0.5 text-[14px] font-semibold text-[#bf7aef] border-2 border-[#bf7aef]/15">
                  
                </span>

                <a
                   
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg
                        className="w-10 h-10 text-[#a1a1a1] border-t-2 border-b border-[#515151a6] bg-[#151515] rounded-full p-2 cursor-pointer"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                    </svg>
                </a>
            </div>
        </article>
    );
}