import './App.css'
import Navbar from './components/Navbar'
import Blog from './components/Blog'
import { useState } from 'react';
import BookMark from './components/BookMark';

const articles = [
  {id: 1, title: "How to get your first job as a self-taught programmer", image: "https://i.ibb.co.com/FYbXdwb/1.jpg", author: ['Mr. Raju', 'https://i.ibb.co.com/KVK8Lhh/boy1.png'], time: "Mar 14 (4 Days ago)", duration: 5, tags: ["#beginners", "#programming"]},
  {id: 2, title: "How to get your first job as a self-taught programmer", image: "https://i.ibb.co.com/j3RLTYt/2.png", author: ['Kaju Badam', 'https://i.ibb.co.com/2KJTHWf/boy2.jpg'], time: "Mar 14 (4 Days ago)", duration: 10, tags: ["#beginners", "#programming"]},
  {id: 3, title: "How to get your first job as a self-taught programmer", image: "https://i.ibb.co.com/SyzQp9g/3.png", author: ['Mrs Serata', 'https://i.ibb.co.com/gwfd0YL/girl1.jpg'], time: "Mar 14 (4 Days ago)", duration: 12, tags: ["#beginners", "#programming"]},
  {id: 4, title: "How to get your first job as a self-taught programmer", image: "https://i.ibb.co.com/9Hy1Kjj/4.jpg", author: ['Mina Mostofa', 'https://i.ibb.co.com/YZ3yYn7/girl2.jpg'], time: "Mar 14 (4 Days ago)", duration: 17, tags: ["#beginners", "#programming"]},
]



function App() {
  const [readTime, setReadTime] = useState(0);
  const [bookMarks, setBookMarks] = useState([]);

  const readTimeAdjust = (timeVal) => {
    setReadTime(readTime + timeVal);
  };

  const markBook = (id, title, status) => {
    if (status === false){
      setBookMarks([...bookMarks, {id: id, title: title}]);
    }
    else {
      setBookMarks([...bookMarks].filter(bookMark => bookMark.id !== id))
    }
  };

  return (
    <>
      <Navbar />
      <section className='w-11/12 mx-auto m-20 grid grid-cols-3 p-5 gap-5'>
        <div className='w-full col-span-2 grid gap-5'>
          {
            articles.map(article => <Blog key = {article.id} details = {article} readTimeAdjust = {readTimeAdjust} markBook = {markBook} />)
          }
        </div>
        <div className='flex flex-col gap-8'>
          <div className='bg-base/50 border-2 border-base-300 rounded-lg shadow-lg p-3 flex'>
            <h3 className='text-xl text-base-content'>Total Reading Time: {readTime}</h3>
          </div>
          <div className='bg-base-200 rounded-lg shadow-lg min-h-96'>
            {
              bookMarks.map(bMark => <BookMark key={bMark.id} details = {bMark} markBook = {markBook} />)
            }
          </div>
        </div>
      </section>
    </>
  )

  
}



export default App
