import React from "react";

import ViewAuthorComponent from "./author-screen.component";
import AddAuthor from "./add-author-screen.component";
import ViewBooks from "./book-screen";
import AddBook from "./addBook-screen";

interface Author {
  _id: {
    $oid: string;
  };
  name: string;
  id: string;
  photo: string;
  biography: string;
  tags: string[];
  __v?: number; // Make __v optional
}

interface Book {
  _id: string;
  isbn: string;
  id: string;
  title: string;
  author: string;
  pages: string;
  rating: string;
  votes: string;
  description: string;
  tags: string[];
  series: string;
  seriesIndex: string;
  cover: string;
  reviews: any[];
  price: number;
  authorId: string;
}

let authorsList = [
  {
    _id: {
      $oid: "6137a9f246364a98d9e4ac25",
    },
    name: "Mohan Das Karmchand Mahatma Gandhi",
    id: "mahatma-gandhi",
    photo:
      "https://pbs.twimg.com/profile_images/185517358/mahatmagandhi_400x400.jpg",
    biography:
      "Mohandas Karamchand 'Mahatma' Gandhi (2 October 1869 – 30 January 1948), venerated as the Mahatma[a], was an Indian lawyer,[3] anti-colonial nationalist[4] and political ethicist[5] who employed nonviolent resistance to lead the successful campaign for India's independence from British rule[6] and in turn inspired movements for civil rights and freedom across the world. The honorific Mahātmā (Sanskrit: \"great-souled\", \"venerable\"), first applied to him in 1914 in South Africa, is now used throughout the world.[7][8]        Born and raised in a Hindu family in coastal Gujarat, Gandhi trained in law at the Inner Temple, London, and was called to the bar at age 22 in June 1891. After two uncertain years in India, where he was unable to start a successful law practice, he moved to South Africa in 1893 to represent an Indian merchant in a lawsuit. He went on to live in South Africa for 21 years. It was in South Africa that Gandhi raised a family and first employed nonviolent resistance in a campaign for civil rights. In 1915, aged 45, he returned to India. He set about organising peasants, farmers, and urban labourers to protest against excessive land-tax and discrimination. Assuming leadership of the Indian National Congress in 1921, Gandhi led nationwide campaigns for easing poverty, expanding women's rights, building religious and ethnic amity, ending untouchability, and above all for achieving swaraj or self-rule.[9]",
    tags: ["india", "freedom fighter", "social reformer"],
  },
  {
    _id: {
      $oid: "6137a9f246364a98d9e4ac26",
    },
    name: "Vivek Dutta Mishra",
    id: "vivek-dutta-mishra",
    photo:
      "https://pbs.twimg.com/profile_images/1393255566928015360/i9qVt4oI_400x400.jpg",
    biography:
      "Vivek, by profession, is a Software Technology Enabler—a self-professed title. In this role, he enables the software companies to develop better software designs, build robust architecture, and most importantly, make effective software professionals. With over two decades of experience as a speaker, influencer and educator, his impressive clientele includes the likes of TCS, Mercedes, GE, Mindtree, CISCO, HP, JPMorgan, BNP Paribas, Honeywell, L&T, Walmart, Siemens, Capgemini … But long before associating with software technology, he has been passionate about Indian history and epics and did an extensive study on the subject. Armed with a firm conviction about the superiority of ancient pre-historic literature, over history, he has scripted and directed stage shows such as Ramlila to show various perspectives of the great epic. This series and its inspiration come both from the frustration of the systematic condemnation of our superior Indian culture and a sense of duty to stand it.",
    tags: ["fiction", "english", "hindi", "indian epic", "mythology"],
  },
  {
    _id: {
      $oid: "6137a9f246364a98d9e4ac27",
    },
    name: "Ramdhari Singh Dinkar",
    id: "ramdhari-singh-dinkar",
    photo:
      "https://pbs.twimg.com/profile_images/1269658848777785345/2bY35KV0_400x400.jpg",
    biography:
      'Ramdhari Singh "Dinkar" (23 September 1908 – 24 April 1974), known by his nom de plume Dinkar, was an Indian Hindi poet essayist, patriot and academic,[1] who is considered one of the most important modern Hindi poets. He remerged as a poet of rebellion as a consequence of his nationalist poetry written in the days before Indian independence. His poetry exuded veer rasa,[definition needed] and he has been hailed as a Rashtrakavi (\'national poet\') on account of his inspiring patriotic compositions.[2] He was a regular poet of Hindi Kavi sammelan and is hailed to be as popular and connected to poetry lovers for Hindi speakers as Pushkin for Russians.[3] Dinkar initially supported the revolutionary movement during the Indian independence struggle, but later became a Gandhian. However, he used to call himself a "Bad Gandhian" because he supported the feelings of indignation and revenge among the youth.[4] In Kurukshetra, he accepted that war is destructive but argued that it is necessary for the protection of freedom. He was close to prominent nationalists of the time such as Rajendra Prasad, Anugrah Narayan Sinha, Sri Krishna Sinha, Rambriksh Benipuri and Braj Kishore Prasad.',
    tags: ["poet", "hindi"],
  },
  {
    _id: {
      $oid: "6137a9f246364a98d9e4ac28",
    },
    name: "Jeffrey Archer",
    id: "jeffrey-archer",
    photo:
      "https://pbs.twimg.com/profile_images/3751745623/11bd5e198e1f0f7de40ffdf08f556293_400x400.jpeg",
    biography:
      "Jeffrey Howard Archer, Baron Archer of Weston-super-Mare (born 15 April 1940)[1] is an English novelist, former politician, convicted perjurer, and peer of the realm. Before becoming an author, Archer was a Member of Parliament (1969–1974), but did not seek re-election after a financial scandal that left him almost bankrupt.[2] He revived his fortunes as a best-selling novelist; his books have sold more than 320 million copies worldwide.[3]\nArcher became deputy chairman of the Conservative Party (1985–86), before resigning after a newspaper accused him of paying money to a prostitute. In 1987, he won a court case and was awarded large damages because of this claim.[4] He was made a life peer in 1992 and subsequently became Conservative candidate to be the first elected Mayor of London. He had to resign his candidacy in 1999 after it emerged that he had lied in his 1987 libel case. He was imprisoned (2001–2003) for perjury and perverting the course of justice, ending his elected political career.[3]",
    tags: ["english", "best-seller"],
  },
  {
    _id: {
      $oid: "6137a9f246364a98d9e4ac29",
    },
    name: "John Grisham",
    id: "john-grisham",
    photo:
      "https://pbs.twimg.com/profile_images/1603812525270876163/qnx5yt5o_400x400.jpg",
    biography:
      "John Ray Grisham Jr. ( born February 8, 1955) is an American novelist and attorney, best known for his popular legal thrillers. His books have been translated into 42 languages and published worldwide.Grisham graduated from Mississippi State University and received a J.D. degree from the University of Mississippi School of Law in 1981. He practiced criminal law for about a decade and served in the Mississippi House of Representatives from January 1984 to September 1990.[4] His first novel, A Time to Kill, was published in June 1989, four years after he began writing it. According to the Academy of Achievement his books have sold 300 million copies and he has written 28 consecutive number one bestsellers.[5] A Galaxy British Book Awards winner, Grisham is one of only three authors to sell two million copies on a first printing, the other two being Tom Clancy[6] and J. K. Rowling.[7] Grisham's first bestseller, The Firm, sold more than seven million copies.[2] The book was adapted into a 1993 feature film of the same name, starring Tom Cruise, and a 2012 TV series which continues the story ten years after the events of the film and novel.[8] Eight of his other novels have also been adapted into films: The Chamber, The Client, A Painted House, The Pelican Brief, The Rainmaker, The Runaway Jury, Skipping Christmas, and A Time to Kill.[9] Grisham's latest book (his 42nd published novel), A Time for Mercy, is his third story involving the characters established in A Time to Kill and further follows the story of Jake Brigance, a Mississippi small town lawyer representing a minor accused of murder.[10]",
    tags: ["english", "best-seller", "legal"],
  },
  {
    _id: {
      $oid: "6137a9f246364a98d9e4ac2a",
    },
    name: "Alexandre Dumas",
    id: "alexendre-dumas",
    photo:
      "https://cdn.vocabulary.com/units/h3ekjthk/author.jpg?width=400&v=176fc5c134d",
    biography:
      "Alexandre Dumas (born Dumas Davy de la Pailleterie ([dymɑ davi də la pajət(ə)ʁi]), 24 July 1802 – 5 December 1870),[1][2] also known as Alexandre Dumas père (where père is French for 'father', to distinguish him from his son Alexandre Dumas fils), was a French writer. His works have been translated into many languages and he is one of the most widely read French authors. Many of his historical novels of high adventure were originally published as serials, including The Count of Monte Cristo, The Three Musketeers, Twenty Years After and The Vicomte of Bragelonne: Ten Years Later. His novels have been adapted since the early twentieth century into nearly 200 films.Prolific in several genres, Dumas began his career by writing plays, which were successfully produced from the first. He also wrote numerous magazine articles and travel books; his published works totalled 100,000 pages.[3] In the 1840s, Dumas founded the Théâtre Historique in Paris.",
    tags: ["english", "best-seller", "classic", "french"],
  },
  {
    _id: {
      $oid: "6137a9f246364a98d9e4ac2b",
    },
    name: "JK Rowling",
    id: "jk-rowling",
    photo:
      "https://cdn.vocabulary.com/units/zqj6yx5p/author.jpg?width=400&v=16df50c7e63",
    biography:
      'Joanne Rowling CH, OBE, HonFRSE, FRCPE, FRSL (/ˈroʊlɪŋ/ ROH-ling;[1] born 31 July 1965), better known by her pen name J. K. Rowling, is a British author, philanthropist, film producer, television producer, and screenwriter. She is best known for writing the Harry Potter fantasy series, which has won multiple awards and sold more than 500 million copies,[2][3] becoming the best-selling book series in history.[4] The books are the basis of a popular film series, over which Rowling had overall approval on the scripts[5] and was a producer on the final films.[6] She also writes crime fiction under the pen name Robert Galbraith. Born in Yate, Gloucestershire, Rowling was working as a researcher and bilingual secretary for Amnesty International in 1990 when she conceived the idea for the Harry Potter series while on a delayed train from Manchester to London.[7] The seven-year period that followed saw the death of her mother, birth of her first child, divorce from her first husband, and relative poverty until the first novel in the series, Harry Potter and the Philosopher\'s Stone, was published in 1997. There were six sequels, of which the last was released in 2007. Since then, Rowling has written several books for adult readers: The Casual Vacancy (2012) and—under the pseudonym Robert Galbraith—the crime fiction Cormoran Strike series.[8] In 2020, her "political fairytale" for children, The Ickabog, was released in instalments in an online version.[9] Rowling has lived a "rags to riches" life in which she progressed from living on benefits to being named the world\'s first billionaire author by Forbes.[10] Rowling disputed the assertion, saying she was not a billionaire.[11] Forbes reported that she lost her billionaire status after giving away much of her earnings to charity.[12] Her UK sales total in excess of £238 million, making her the best-selling living author in Britain.[13] The 2021 Sunday Times Rich List estimated Rowling\'s fortune at £820 million, ranking her as the 196th richest person in the UK.[14] Time named her a runner-up for its 2007 Person of the Year, noting the social, moral, and political inspiration she has given her fans.[15] Rowling was appointed a member of the Order of the Companions of Honour (CH) in the 2017 Birthday Honours for services to literature and philanthropy. In October 2010, she was named the "Most Influential Woman in Britain" by leading magazine editors.[16] Rowling has supported multiple charities, including Comic Relief, One Parent Families, and Multiple Sclerosis Society of Great Britain, as well as launching her own charity, Lumos. Since late 2019, Rowling has publicly voiced her opinions on transgender people and related civil rights. These views have led to controversy.',
    tags: ["english", "best-seller", "classic"],
  },
  {
    _id: {
      $oid: "6142fcdd09968627841b097c",
    },
    name: "Agatha Christie",
    id: "agatha-christie",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Agatha_Christie.png/330px-Agatha_Christie.png",
    biography:
      "Dame Agatha Mary Clarissa Christie, Lady Mallowan, DBE (née Miller; 15 September 1890 – 12 January 1976) was an English writer known for her 66 detective novels and 14 short story collections, particularly those revolving around fictional detectives Hercule Poirot and Miss Marple. She also wrote the world's longest-running play, The Mousetrap, which was performed in the West End from 1952 to 2020, as well as six novels under the pseudonym Mary Westmacott. In 1971, she was made a Dame (DBE) for her contributions to literature. Guinness World Records lists Christie as the best-selling fiction writer of all time, her novels having sold more than two billion copies.Christie was born into a wealthy upper-middle-class family in Torquay, Devon, and was largely home-schooled. She was initially an unsuccessful writer with six consecutive rejections, but this changed in 1920 when The Mysterious Affair at Styles, featuring detective Hercule Poirot, was published. Her first husband was Archibald Christie; they married in 1914 and had one child before divorcing in 1928. During both World Wars, she served in hospital dispensaries, acquiring a thorough knowledge of the poisons which featured in many of her novels, short stories, and plays. Following her marriage to archaeologist Max Mallowan in 1930, she spent several months each year on digs in the Middle East and used her first-hand knowledge of his profession in her fiction.",
    tags: ["fiction", "suspence", "hercule piorot"],
    __v: 0,
  },
  {
    _id: {
      $oid: "61ba3fb423d4b12704384946",
    },
    name: "Chetan Bhagat",
    id: "chetan-bhagat",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Chetan_Bhagat.jpg/330px-Chetan_Bhagat.jpg",
    biography:
      "Chetan Bhagat[1] (born 22 April 1974)[2] is an Indian author and columnist. He was included in Time magazine's list of World's 100 Most Influential People in 2010.[3][4]\nBhagat graduated in mechanical engineering at IIT Delhi and completed a PGP at IIM Ahmedabad.[5] He started his career as an investment banker but left it after a few years to pursue writing. He has written ten novels and three non-fiction books. His first novel, Five Point Someone, was published in 2004. His novels have been listed as bestsellers.[where?]Five of Chetan Bhagat's novels have been adapted into Bollywood films like Hello in 2008 (based on One Night @ the Call Center), 3 Idiots in 2009 (based on Five Point Someone), Kai Po Che! in 2013 (based on The 3 Mistakes of My Life); 2 States in 2014 (based on his novel of the same name) and Half Girlfriend in 2017 (based on his novel of the same name). Bhagat has also written the scripts for Bollywood films like Kick in 2014 and adapted his stories for the movies Kai Po Che! and Half Girlfriend.[6] Bhagat won the Filmfare Award for Best Screenplay for Kai Po Che! at the 59th Filmfare Awards in 2014.[7] He is also often found in controversies at twitter.[8] His latest novel 400 Days which is based on a missing child and forbidden love was released on 8 October 2021.[9]",
    tags: ["fiction", "indian", "young-adult"],
    __v: 0,
  },
  {
    _id: {
      $oid: "61ba404c23d4b12704384947",
    },
    name: "Dan Brown",
    id: "dan-brown",
    photo:
      "https://en.wikipedia.org/wiki/Dan_Brown#/media/File:Dan_Brown_bookjacket_cropped.jpg",
    biography:
      "Daniel Gerhard Brown (born June 22, 1964) is an American author best known for his thriller novels, including the Robert Langdon novels Angels & Demons (2000), The Da Vinci Code (2003), The Lost Symbol (2009), Inferno (2013), and Origin (2017). His novels are treasure hunts which usually take place over a period of 24 hours.[3] They feature recurring themes of cryptography, art, and conspiracy theories. His books have been translated into 57 languages and, as of 2012, have sold over 200 million copies. Three of them, Angels & Demons, The Da Vinci Code, and Inferno, have been adapted into films.",
    tags: ["fiction", "bible", "symbols", "thriller", "mythology"],
    __v: 0,
  },
  {
    _id: {
      $oid: "61ba418423d4b12704384948",
    },
    name: "Keigo Higashino",
    id: "keigo-higashino",
    photo:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1289592746i/117366._UX200_CR0,33,200,200_.jpg",
    biography:
      "Keigo Higashino (Japanese: 東野 圭吾, Hepburn: Higashino Keigo, born February 4, 1958) is a Japanese author chiefly known for his mystery novels. He served as the 13th President of Mystery Writers of Japan from 2009 to 2013. Higashino has won major Japanese awards for his books, almost twenty of which have been turned into films and TV series",
    tags: ["fiction", "japnese", "suspense", "thriller", "best-seller"],
    __v: 0,
  },
  {
    _id: {
      $oid: "61ba425b23d4b12704384949",
    },
    name: "Charles Dickens",
    id: "charles-dickens",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Dickens_Gurney_head.jpg/300px-Dickens_Gurney_head.jpg",
    biography:
      "Charles John Huffam Dickens FRSA was an English writer and social critic. He created some of the world's best-known fictional characters and is regarded by many as the greatest novelist of the Victorian era.",
    tags: ["fiction", "classic", "victorin-era"],
    __v: 0,
  },
];

let booksList = [
  {
    _id: "61ba4417591ee9186390a4f0",
    isbn: "9781393495574",
    id: "the-accursed-god",
    title: "The Accursed God",
    author: "Vivek Dutta Mishra",
    pages: "380",
    rating: "4.9",
    votes: "49",
    description:
      "THE LOST EPIC \n\n  The story of the epic battle of Kurukshetra has been told and retold for ages. Millennia of dust, fables, imaginations — and the epic itself is lost. What remained is the story of a family feud and ambition of Kauravas and Pandavas. But why, then, was this an epic war? Why entire Aryavart plunged into this first real world-war? Why the echo of this ancient war still resonates after all those centuries? Rediscover the lost epic whose origin lies in the birth of the Kurukshetra that had tasted its first blood over a hundred years before the final Mahabharata war. Discover the complete saga of Mahabharata which goes far and beyond just Kauravas and Pandavas and their ambitions.  ",
    tags: ["epic", "indian", "mahabharata", "bhishma", "history"],
    series: "The Lost Epic",
    seriesIndex: "1",
    cover: "https://m.media-amazon.com/images/I/41-KqB1-cqL._SY346_.jpg",
    reviews: [
      {
        name: "Vidhya",
        title: "Great Book of Epic Readers",
        details: "Great Epic fiction based on Mahabharata. Must read",
        rating: 5,
        _id: "61ba4b79ed970f8bb2d31435",
      },
      {
        name: "Akash",
        title: "A completely new take",
        details: "I know Mahabharata. But this is still amazing to read",
        rating: 4,
        _id: "61ba4b79ed970f8bb2d31436",
      },
      {
        name: "Saroj",
        title: "A Prequel to Mahabharata",
        details:
          "If you think you know Mahabharata, Think again. Imagine a Mahabharata without Kaurava and Pandava",
        rating: 5,
        _id: "61ba4b79ed970f8bb2d31437",
      },
    ],
    price: 179,
    authorId: "vivek-dutta-mishra",
  },
  {
    _id: "61ba4417591ee9186390a4f1",
    isbn: "1408855658",
    id: "harry-potter-and-the-philosopher's-stone",
    title: "Harry Potter and the Philosopher's Stone ",
    author: "JK Rowling",
    pages: "384",
    rating: "4.7",
    votes: "8518",
    description:
      "Turning the envelope over, his hand trembling, Harry saw a purple wax seal bearing a coat of arms; a lion, an eagle, a badger and a snake surrounding a large letter 'H'.\n\nHarry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin!\nHaving now become classics of our time, the Harry Potter ebooks never fail to bring comfort and escapism to readers of all ages. With its message of hope, belonging and the enduring power of truth and love, the story of the Boy Who Lived continues to delight generations of new readers.",
    tags: ["harry potter", "fiction", "fantasy", "best-seller"],
    series: "Harry Potter",
    seriesIndex: "2",
    cover: "https://m.media-amazon.com/images/I/51UoqRAxwEL.jpg",
    price: 500,
    reviews: [],
    authorId: "jk-rowling",
  },
  {
    _id: "61ba4417591ee9186390a4f3",
    isbn: "9781408855706",
    id: "harry-potter-and-the-half-blood-prince",
    title: "Harry Potter and the Half Blood Prince",
    author: "JK Rowling",
    pages: "560",
    rating: "4.7",
    votes: "5651",
    description: "",
    tags: ["harry potter", "fiction", "fantasy", "best-seller"],
    series: "Harry Potter",
    seriesIndex: "6",
    cover:
      "https://cdn01.sapnaonline.com/product_media/9781408855706/md_9781408855706.jpg",
    price: 413,
    authorId: "jk-rowling",
    reviews: [],
  },
  {
    _id: "61ba4417591ee9186390a4f7",
    isbn: "9781509808694",
    id: "kane-and-abel",
    title: "Kane and Abel",
    author: "Jeffrey Archer",
    pages: "560",
    rating: "4.7",
    votes: "2367",
    description:
      "They had only one thing in common . . .   William Lowell Kane and Abel Rosnovski: one the son of a Boston millionaire, the other of a penniless Polish immigrant. Two men born on the same day, on opposite sides of the world, their paths destined to cross in the ruthless struggle to build a fortune.   A memorable story, spanning sixty years, of two powerful men linked by an all-consuming hatred, brought together by fate to save – and finally destroy – each other.  ‘The ultimate novel of sibling rivalry’ Dan Brown",
    tags: ["fiction", "classic", "chronology", "english"],
    series: "",
    seriesIndex: "",
    cover: "https://images-na.ssl-images-amazon.com/images/I/81Y8QLPFFlL.jpg",
    price: 135,
    authorId: "jeffrey-archer",
    reviews: [],
  },
  {
    _id: "61ba4417591ee9186390a4f9",
    isbn: "8129135728",
    id: "half-girl-friend",
    title: "Half Girl Friend",
    author: "Chetan Bhagat",
    pages: "280",
    rating: "3.2",
    votes: "8300",
    description:
      'Half Girlfriend is an Indian English coming of age, young adult romance novel by Indian author Chetan Bhagat.[1] The novel, set in rural Bihar, New Delhi, Patna, and New York, is the story of a Bihari boy in quest of winning over the girl he loves.[2][3] This is Bhagat\'s sixth novel which was released on 1 October 2014[4] by Rupa Publications. The novel has also been published in Hindi[5] and Gujarati[6] versions as well.  Dedicated to "non English-types", as Chetan Bhagat wrote, the book divulges the sentiments and linguistic struggles of a backward rural Bhojpuri-laced Hindi-speaking boy from Bihar as he enrolls himself at the prestigious English-medium St. Stephen’s College, New Delhi, and falls in love with a "high class English-speaking rich Delhi girl" schooled at Modern School, New Delhi. The girl does not admit the relationship but agrees to be his "half girlfriend".[7] Chetan Bhagat commented, "Half-Girlfriend, to me, is a unique Indian phenomenon, where boys and girls are not clear about their relationship status with each other. A boy may think he is more than friends with the girl, but the girl is still not his girlfriend. Hence, I thought we needed a term like \'Half girlfriend\'. Because, in India, that is what most men get."[7]',
    tags: ["fiction", "indian", "young adult", "college", "romance"],
    series: "",
    seriesIndex: "",
    cover: "https://images-na.ssl-images-amazon.com/images/I/712HEn9SNwL.jpg",
    price: 242,
    authorId: "chetan-bhagat",
    reviews: [],
  },
  {
    _id: "61ba4417591ee9186390a4fa",
    isbn: "1408894742",
    id: "harry-potter-and-the-deathly-hallows",
    title: "Harry Potter and the Deathly Hallows",
    author: "JK Rowling",
    pages: "640",
    rating: "4.7",
    votes: "7262",
    description:
      "Harry Potter and the Deathly Hallows is a fantasy novel written by British author J. K. Rowling and the seventh and final novel of the Harry Potter series. It was released on 21 July 2007 in the United Kingdom by Bloomsbury Publishing, in the United States by Scholastic, and in Canada by Raincoast Books. The novel chronicles the events directly following Harry Potter and the Half-Blood Prince (2005) and the final confrontation between the wizards Harry Potter and Lord Voldemort.",
    tags: ["harry potter", "fiction", "fantasy", "best-seller"],
    series: "Harry Potter",
    seriesIndex: "7",
    cover: "https://images-na.ssl-images-amazon.com/images/I/811t1pfIZXL.jpg",
    price: 221,
    authorId: "jk-rowling",
    reviews: [],
  },
  {
    _id: "61ba4417591ee9186390a4fb",
    title: "Rashmirathi",
    isbn: "555555555",
    id: "rashmirathi",
    author: "Ramdhari Singh Dinkar",
    price: 101,
    tags: ["fiction", "indian-epic", "mahabharata", "poetry", "hindi"],
    cover:
      "https://rukminim1.flixcart.com/image/416/416/kcf4lu80/regionalbooks/h/s/w/rashmirathi-jnanpith-award-winner-1972-hindi-original-imaftjbmp73rjcfb.jpeg?q=70",
    reviews: [],
    rating: 3.3,
    authorId: "ramdhari-singh-dinkar",
  },
  {
    _id: "61ba4417591ee9186390a4fc",
    title: "Kurukshetra",
    isbn: "666666666",
    id: "kurukshetra",
    author: "Ramdhari Singh Dinkar",
    price: 250,
    tags: ["fiction", "indian-epic", "mahabharata", "poetry", "hindi"],
    cover:
      "https://images-eu.ssl-images-amazon.com/images/I/51rZ7I5lG8L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    reviews: [],
    rating: 3,
    authorId: "ramdhari-singh-dinkar",
  },
  {
    _id: "61ba4417591ee9186390a4fd",
    title: "Malice",
    isbn: "0349141061",
    id: "malice",
    author: "Keigo Higashino",
    price: 298,
    description:
      "Acclaimed bestselling novelist Kunihiko Hidaka is found brutally murdered in his home on the night before he's planning to leave Japan and relocate to Vancouver. His body is found in his office, in a locked room, within his locked house, by his wife and his best friend, both of whom have rock solid alibis. Or so it seemsPolice Detective Kyochiro Kaga recognizes Hidaka's best friend. Years ago when they were both teachers, they were colleagues at the same high school. Kaga went on to join the police force while Osamu Nonoguchi left to become a full-time writer, though with not nearly the success of his friend Hidaka. But Kaga thinks something is a little bit off with Nonoguchi's statement and investigates further, ultimately executing a search warrant on Nonoguchi's apartment. There he finds evidence that shows that the two writers' relationship was very different than the two claimed. Nonoguchi confesses to the murder, but that's only the beginning of the story. In a brilliantly realized tale of cat and mouse, the detective and the writer battle over the truth of the past and how events that led to the murder really unfolded. Which one of the two writers was ultimately guilty of malice?",
    tags: [],
    cover:
      "https://images-na.ssl-images-amazon.com/images/I/41FwqEu6AxL._SX309_BO1,204,203,200_.jpg",
    reviews: [],
    rating: 4.6,
    authorId: "keigo-higashino",
  },
  {
    _id: "61ba4417591ee9186390a4fe",
    title: "The Devotion Of Suspect X",
    isbn: "0349138737",
    id: "the-devotion-of-suspect-x",
    author: "Keigo Higashino",
    price: 180,
    description:
      "Yasuko Hanaoka accidentally kills her ex-husband, when circumstances rose to an unendurable level of ghastly behaviour from him. What follows is an elongated and witty brain-game between the investigator and her accomplice, Ishigami, who aided Yasuko in covering up the murder. The Devotion Of Suspect X is the story about an ingenious plotter, and clever Dr Manabu Yukawa, who helps in solving the case.\n\nYasuko Hanaoka works in a restaurant. She is divorced, and is a single mother to Misato. Her ex-husband, Togashi, was an abusive man, stalking and extorting money from her. With similar intentions, he showed up at Yasuko’s home, this time threatening to kill her and her daughter if she refused to lend him money. What started from denial, reached to a heated argument, and within a short span of time, turned to a nasty fight. In the spur of the moment, Yasuko killed Togashi. Hearing the commotion in their apartment, Tetsuya Ishigami came into the picture. Ishigami was a middle-aged, single math teacher, who evidently had a growing affection for Yasuko. He offered not only to help her dispose of the corpse, but also to devise a logical plan to cover up the entire incident.\n\nLater, the body was recovered from where it was disposed of. The principal investigator, Kusanagi, was certain of Yasuko’s involvement with the murder but was unable to find sufficient evidence. For a better insight, he summoned the assistance of the ingenious physicist, Dr Manabu Yukawa. Yukawa was a schoolfriend of Ishigami, and he suspected Ishigami. As the story progresses, there are more interesting twists and turns, keeping the readers thrilled and speculating.\n\nThe Devotion Of Suspect X was published by Abacus in 2012, and available is in paperback.\n\nKey Features:\n\nIt was also adapted into motion pictures in South Korea and Japan.",
    tags: [],
    cover:
      "https://images-na.ssl-images-amazon.com/images/I/51JBj367QwL._SX310_BO1,204,203,200_.jpg",
    reviews: [],
    rating: 4.1,
    authorId: "keigo-higashino",
  },
  {
    _id: "61ba4417591ee9186390a4ff",
    title: "A Tale of Two Cities ",
    isbn: "B09FDLR46V",
    id: "a-tale-of-two-cities",
    author: " Charles Dickens",
    price: 150,
    description:
      "A Tale of Two Cities (1859) is a historical novel by Charles Dickens, set in London and Paris before and during the French Revolution. The novel tells the story of the French Doctor Manette, his 18-year-long imprisonment in the Bastille in Paris and his release to live in London with his daughter Lucie, whom he had never met. The story is set against the conditions that led up to the French Revolution and the Reign of Terror.",
    tags: [],
    cover: "https://m.media-amazon.com/images/I/51HG8XU0QhL.jpg",
    reviews: [],
    rating: 4.9,
    authorId: "charles-dickens",
  },
  {
    _id: "61ba4417591ee9186390a500",
    title: "The Lost Symbol",
    isbn: "0552161233",
    id: "the-lost-symbol",
    author: "Dan Brown",
    price: 317,
    description:
      "‘Impossible to put down . . . Another mind-blowing Robert Langdon story’ New York Times\n\nA mysterious invitation brings Robert Langdon to Washington DC.\n\nThere, he is presented with a sequence of bloody clues which he must unravel if he is to prevent a terrible plan.\n\nBut all is not as it seems in this dangerous city – an ancient organisation will reassert its power once more. The only man standing in its way - Robert Langdon.",
    tags: [],
    cover:
      "https://images-na.ssl-images-amazon.com/images/I/51Zutc5AWcL._SX319_BO1,204,203,200_.jpg",
    reviews: [],
    rating: 3.6,
    authorId: "dan-brown",
  },
  {
    _id: "61bc58e8b521dbf73e6c0c96",
    title: "Angels and Demons",
    isbn: "11111",
    author: "Dan Brown",
    price: 100,
    description: "",
    tags: [],
    cover: "",
    authorId: "dan-brown",
    reviews: [],
    __v: 0,
    id: "angels-and-demons",
  },
  {
    _id: "6245782c2d4aba13215c32f1",
    title: "Kane and Abel",
    isbn: "1509808698",
    id: "kane-and-abel",
    author: "Jeffrey Archer",
    price: 292,
    description:
      "Jeffrey Archer's Kane and Abel was a global phenomenon when it was first released, selling over one million copies in its first week of sale, and it has captivated readers worldwide ever since. They had only one thing in common . . . William Lowell Kane and Abel Rosnovski, one the son of a Boston millionaire, the other a penniless Polish immigrant ? two men born on the same day on opposite sides of the world, their paths destined to cross in the ruthless struggle to build a fortune.Kane and Abel is the marvellous story, spanning sixty years, of two powerful men linked by an all-consuming hatred, brought together by fate to save . . . and finally destroy . . . each other. Jeffrey Archer's international bestseller is followed by the enthralling sequel, The Prodigal Daughter.",
    tags: [],
    cover:
      "https://images-eu.ssl-images-amazon.com/images/I/51Io01xRjsL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    reviews: [],
    __v: 0,
  },
  {
    _id: {
      $oid: "62bebb750839c4dd0bc1d25d",
    },
    title: "Fantastic Beasts and Where to Find Them",
    isbn: "1408880717",
    author: "JK Rowling",
    price: 250,
    description:
      "A brand new edition of this essential companion to the Harry Potter stories, with a new foreword from J.K. Rowling, an irresistible new jacket by Jonny Duddle and line illustrations by Tomislav Tomic. an approved textbook at Hogwarts School of Witchcraft and Wizardry since publication, Newt Scamander’s masterpiece has entertained wizarding families through the generations. Fantastic Beasts and Where to Find Them is an indispensable introduction to the magical beasts of the Wizarding World. in this comprehensively updated edition, eagle-eyed readers will spot a number of new beasts and an intriguing new author’s note. Scamander’s years of travel and research have created a tome of unparalleled importance. Some of the beasts will be familiar to readers of the Harry Potter books - the Hippogriff, the Basilisk, the Hungarian Horntail.. Others will surprise even the most ardent amateur Magizoologist. Dip in to discover the curious habits of magical beasts across five continents.‘No wizarding household is complete without a copy’ - Albus Dumbledore A Children’s Bookshelf Selection: Each month our editor’s pick the best books for children and young adults by age to be a part of the children’s bookshelf. These are editorial recommendations made by our team of experts. Our monthly reading list includes a mix of bestsellers and top new releases and evergreen books that will help enhance a child’s reading life.",
    tags: [],
    cover:
      "https://images-na.ssl-images-amazon.com/images/I/514S0rIdxeL._SX333_BO1,204,203,200_.jpg",
    authorId: "jk-rowling",
    reviews: [],
    __v: 0,
  },
  {
    _id: {
      $oid: "62bee2400f933272ade1c681",
    },
    title: "Chamber",
    isbn: "939393939393",
    author: "jk-rowling",
    price: 200,
    description:
      "book 2 of the famous Harry Potter series and the description should be big enough",
    tags: [],
    cover: "cover.jpg",
    authorId: "jk-rowling",
    reviews: [],
    __v: 0,
  },
];

interface ViewManageScreen {
  showView: string;
}

export const BookScreenManager = ({ showView }: ViewManageScreen) => {
  const [authors, setAuthors] = React.useState(authorsList);
  const handleAddAuthor = (newAuthor: Author) => {
    setAuthors([...authors, newAuthor]);
  };

  const [books, setBooks] = React.useState(booksList);
  const handleBooks = (newBook: Book) => {
    setBooks([...books, newBook]);
  };

  let viewObj: { [key: string]: JSX.Element } = {
    "view-authors": <ViewAuthorComponent authorList={authors} />,
    "add-authors": <AddAuthor onAddAuthor={handleAddAuthor} />,
    "view-books": <ViewBooks bookList={booksList} />,
    "add-books": <AddBook onAddBook={handleBooks} />,
  };

  if (viewObj[showView]) {
    return <>{viewObj[showView]}</>;
  } else {
    return <div>Component not found</div>; // Fallback UI
  }
};

