import Link from "next/link";

export default function Footer() {
    return (
        <>
            <footer className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900" href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2" className="w-30 h-30" viewBox="0 0 991 570">
                                <path
                                    d="M2235 5530c-185-15-340-48-550-120-149-51-371-159-490-238-477-318-782-818-890-1462-34-201-45-342-45-575 0-667 156-1365 472-2115 65-155 241-511 248-503 13 15 40 129 99 428 70 349 112 511 176 667 101 248 225 432 407 603 166 157 350 271 638 395 606 261 1002 596 1220 1029 198 393 206 840 22 1206-234 467-734 729-1307 685zm325-685c204-49 357-190 426-395 29-85 27-271-4-370-62-194-181-364-365-517-168-140-320-227-629-363-363-159-610-323-845-562-56-56-112-116-126-133-14-16-27-28-30-25-8 9-46 290-58 435-14 169-6 477 16 625 101 671 459 1101 1064 1275 192 55 397 66 551 30zM3653 3083l-53-4v-779h170v287l81 7c133 11 217 61 255 152 20 48 18 160-5 209-42 91-116 126-280 130-64 1-140 1-168-2zm268-161c41-45 41-118 1-163-23-26-36-31-88-36l-61-5-6 68c-9 92-9 159 1 168 4 4 34 6 66 4 51-4 63-9 87-36zM7568 2897c-26-8-55-20-65-27-49-37-77-69-101-115-25-46-27-59-27-170 0-113 2-123 28-171 49-88 129-122 261-111 53 4 169 37 184 51 3 3-5 27-16 53-23 54-22 53-123 27-39-10-77-14-93-10-35 9-76 49-76 74 0 16 10 21 58 26 69 8 166 52 204 92 75 81 60 211-32 263-48 27-140 35-202 18zm103-117c27-15 25-70-4-98-26-25-88-52-118-52-20 0-21 4-15 43 13 84 81 137 137 107zM8767 2900c-40-12-94-56-112-90-22-43-19-118 8-165 18-31 40-49 111-86 93-49 106-60 106-96 0-47-82-48-173-1-22 11-40 18-42 16-8-9-45-103-45-114 0-22 109-57 192-62 65-3 85-1 123 18 104 50 138 188 67 271-15 18-58 47-97 65-81 37-108 62-103 96 2 19 10 24 41 26 21 2 59-4 85-12 25-9 49-16 53-16 8 0 54 109 48 114-2 2-33 13-68 25-66 21-144 26-194 11zM9432 2897c-121-44-195-190-178-355 12-111 58-186 136-220 52-23 179-19 263 8 37 11 70 27 73 35 3 7-3 34-14 59l-20 44-62-19c-68-21-131-25-161-9-16 9-49 58-49 73 0 3 30 10 67 17 130 22 220 85 243 169 20 77-14 157-84 190-48 24-158 28-214 8zm132-123c23-22 20-48-10-83-25-30-88-55-123-49-17 3-17 7-6 53 21 80 96 123 139 79zM4553 2889c-66-12-110-37-153-86-54-62-75-128-73-233 2-135 43-219 126-259 77-38 169-22 232 39l30 29 24-45c27-50 30-51 114-15l45 19-27 54c-25 51-26 59-29 260-3 183-5 208-20 212-20 6-129 23-187 29-22 3-59 1-82-4zm122-239c-1-103-3-119-25-159-47-84-100-101-138-43-13 21-17 49-17 132 0 152 28 191 130 187l50-2v-115zM5356 2885c-21-7-54-28-72-46-19-18-35-31-38-28-2 2-11 19-20 37-23 45-37 48-101 21-42-17-54-27-49-38 43-97 47-126 52-329l4-203 77 3 76 3v175c0 189 4 208 58 258 27 26 81 32 100 13 8-8 14-79 17-229l5-217 78-3 78-3-3 238c-3 218-5 241-24 278-39 74-142 105-238 70zM6049 2887c-120-45-189-158-189-307 0-173 80-279 212-280 69 0 104 12 144 51l31 30 27-45 27-45 52 20c28 12 58 23 65 26 15 7 16 6-7 45-30 51-41 137-41 318v167l-57 12c-95 20-223 23-264 8zm145-113c13-5 16-24 16-108 0-121-11-165-52-211-35-41-75-46-104-14-16 18-19 37-19 139 0 105 2 122 21 147 34 46 91 65 138 47zM8140 2893c-8-4-34-14-58-24l-43-19 20-38c31-60 41-143 41-329v-173h160v178c0 159 2 180 20 210 25 41 61 55 106 43l33-9 15 51c30 104 30 104 4 111-73 19-159-2-196-49-12-16-24-26-25-24-2 2-14 21-26 42-23 38-26 39-51 30zM6650 2662c0-216 1-230 23-272 32-63 65-83 141-88 146-9 250 59 295 193 18 53 25 101 29 197 2 69 2 142-2 162l-7 36h-158l5-52c3-29 7-61 9-71 6-29-12-200-26-245-26-87-93-127-135-81-17 19-19 41-22 235l-3 214h-149v-228zM5522 1742c-94-34-163-106-197-207-23-67-31-238-15-317 24-124 92-210 191-243 66-22 194-22 261 1 71 23 147 99 179 179 21 54 24 76 24 210 0 147-1 151-31 215-58 123-132 170-274 177-66 3-97-1-138-15zm191-139c19-9 38-34 55-71 25-52 27-68 27-182 0-110-3-131-23-172-27-55-56-76-114-84-58-7-125 27-150 77-39 77-47 237-18 341 29 102 125 141 223 91zM3643 1743l-42-4 6-387c3-213 7-389 9-391s72-4 156-4c118-1 166 3 209 16 149 46 225 148 244 329 8 78-8 192-36 258-25 58-90 123-149 149-78 34-242 48-397 34zm297-156c78-38 110-108 110-242 0-180-61-255-207-258l-68-2-3 269-2 268 62-7c35-3 83-16 108-28zM4697 1743c-7-12-297-771-297-778 0-3 37-5 81-3l81 3 33 90 32 90 130 3 130 3 32-96 33-95h84c61 0 84 3 83 13 0 6-67 183-148 392l-147 380-61 3c-34 2-64-1-66-5zm97-325c16-51 31-101 33-110 5-16-3-18-72-18-57 0-76 3-73 13 3 6 20 56 37 110 18 53 36 97 40 97 3 0 19-42 35-92z"
                                    transform="matrix(.1 0 0 -.1 0 570)"
                                ></path>
                            </svg>
                        </a>
                        <p className="mt-2 text-sm text-gray-500">Certified Web 3.0 and Metaverse Developer: A Nationwide Program in Karachi, Lahore, Islamabad, and Peshawar</p>
                    </div>
                    <div className="flex-grow flex flex-wrap justify-center md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Important Links:</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-600 hover:text-blue-800" href="https://www.piaic.org/">Admission</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-blue-1200" href="https://www.panaverse.co/">Syllabus</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-blue-1200" href="https://www.facebook.com/groups/panaverse">Facebook</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-blue-1200" href="https://www.youtube.com/@panaverse/streams">YouTube</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-blue-1200" href="https://github.com/panaverse">GitHub</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-blue-1200" href="https://twitter.com/Panaverse_edu">Twitter</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Blogs</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link className="text-gray-600 hover:text-gray-800" href="https://content.techgig.com/hiring/top-5-metaverse-jobs-that-will-rule-the-future-of-tech-industry/articleshow/87581325.cms">1. Top 5 'Metaverse' jobs that will rule the future of tech industry</Link>
                                </li>
                                <li>
                                    <Link className="text-gray-600 hover:text-gray-800" href="https://web3.career/web3-salaries/blockchain-developer ">2. Blockchain Developer Salary - Jun 2022</Link>
                                </li>
                                <li>
                                    <Link className="text-gray-600 hover:text-gray-800" href="https://thedefiant.io/web3-soaring-salaries/">3. Web3 Salaries Soar to $750,000 for Rank-and-File Devs</Link>
                                </li>

                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Blogs</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link className="text-gray-600 hover:text-gray-800" href="https://newzoo.com/insights/trend-reports/newzoo-report-on-metaverse-blockchain-gaming-nft-2022">4. The Metaverse, Blockchain Gaming, and NFTs: Navigating the Internet’s Uncharted Waters</Link>
                                </li>
                                <li>
                                    <Link className="text-gray-600 hover:text-blue-1200" href="https://www.blockchain-council.org/metaverse/how-to-become-metaverse-developer/">5. How To Become Metaverse Developer: Scope, Skills, and Salary</Link>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-gray-500 text-sm text-center sm:text-left">© Panaverse —
                            <Link href="https://panaverse.co" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@Panaverse</Link>
                        </p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                            <a className="text-gray-500">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-500">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-500">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-500">
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                </svg>
                            </a>
                        </span>
                    </div>
                </div>
            </footer>
        </>
    );
}