import  useResizeWindow  from '../hooks/useResizeWindow';
import Cards from '../components/Cards';
import Button from '../components/Button';

export default function Gallery() {
    const isMobile = useResizeWindow();
    
    return (
       <main className='gallery'>
            <svg className='gallery__svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5594B5" fill-opacity="1" d="M0,96L48,122.7C96,149,192,203,288,229.3C384,256,480,256,576,224C672,192,768,128,864,90.7C960,53,1056,43,1152,64C1248,85,1344,139,1392,165.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
            <div className="flex-gallery">
                <div className="gallery__container">
                   {
                    [{ img: 'https://images.dog.ceo/breeds/borzoi/n02090622_10281.jpg?w=164&fit=crop&auto=format'}, 
                    { img: 'https://images.dog.ceo/breeds/borzoi/n02090622_6094.jpg?w=164&fit=crop&auto=format'}, 
                    { img: 'https://images.dog.ceo/breeds/bullterrier-staffordshire/20200820_131119.jpg?w=164&fit=crop&auto=format'},
                    { img: 'https://images.dog.ceo/breeds/bullterrier-staffordshire/n02093256_11569.jpg?w=164&fit=crop&auto=format'}, 
                    { img: 'https://images.dog.ceo/breeds/bullterrier-staffordshire/n02093256_1505.jpg?w=164&fit=crop&auto=format'}, 
                    { img: 'https://images.dog.ceo/breeds/clumber/n02101556_2362.jpg?w=164&fit=crop&auto=format'},
                    { img: 'https://images.dog.ceo/breeds/rottweiler/n02106550_10481.jpg?w=164&fit=crop&auto=format'}, 
                    { img: 'https://images.dog.ceo/breeds/retriever-chesapeake/n02099849_2375.jpg?w=164&fit=crop&auto=format'}, 
                    { img: 'https://images.dog.ceo/breeds/retriever-chesapeake/n02099849_2416.jpg?w=164&fit=crop&auto=format'},
                    { img: 'https://images.dog.ceo/breeds/pug/n02110958_13812.jpg?w=164&fit=crop&auto=format'}
                    ].slice(0, isMobile ? 4 : 10 ).map((i, index) => (
                        <Cards img={i.img} key={index}/>
                    ))
                   }
                </div>
                <nav className='gallery__nav'>
                    <Button class='btn btn-secondary' text='home' link='/'/>
                </nav>
            </div>
       </main>
    )
};
