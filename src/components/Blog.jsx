import'./Blog.css'
function Blog() {
    const  posts  = [
        {title: 'Learning React', 
            ImageUrl:'/images/5Untitled.jpg',
             content: 'React is a powerful JavaScript library for building user interfaces',
              author: 'John Doe',
               Date:'18/06/2024'
            },


        {title: 'Getting Started with Vite', 
            ImageUrl:'/images/Untitled.jpg',
            content: 'Vite makes development fast and simple',
             author: 'Jane Smith', 
             Date:'21/6/2024'
            },


            {title: 'Getting Started with Vite', 
                ImageUrl:'/images/Untitled.jpg 6.jpg',
                content: 'Vite makes development fast and simple',
                 author: 'jaden Smith', 
                 Date:'26/6/2024'
                },

                
    ]
    return (
        <div  className='card'>
         <h1>Blog Posts</h1>
         {posts.map((post, index) => (
            <div key={index} className='blog'>
                <div  className='post'>
                    <img src={ post.ImageUrl}alt={ post.title}/>
                <h2>{post.title}</h2>
                <p >{post.content}</p>
                </div>
                <p><b>{post.author}</b></p>
                <p><b>{post.Date}</b></p>
            </div>
         ))}
        </div>
       );
}
export default Blog;