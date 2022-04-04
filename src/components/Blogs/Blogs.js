import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='max-w-screen-xl mx-auto border p-5 mt-5'>
                <h2 className='text-4xl font-bold mb-8'>What is context API?</h2>
                <p className='text-2xl'>context api is a react hook it solved many problem as props drilling. when we create a context api in app.js is working like global. when we call from any other components it we get so easily it is solved developer many problem and make life easier. when we write a context api need set it a variable and this variable we can use any where. but it need to sent to consumer like react every component available in app js. so we can wrap it as consumer. when we receive data as consumer need use another hook it call useContext and their can be function or array or object. </p>
            </div>
            <div className='max-w-screen-xl mx-auto border p-5 mt-5'>
                <h2 className='text-4xl font-bold mb-8'>What is Semantic Tag?</h2>
                <p className='text-2xl'> Semantic tag make better code read ability also help for search engine optimization. Semantic tag is basically specify which tag use for what Purpose. when markup language started their journey that time not was available Semantic tag that time developer use div tag and set it variety class or id and use theme as parent tag child tag as their need. when web become more popular mudcap made a change their code writing system they launched Semantic tag. and it help developer to develope a website like when write code for a section they use section tag and when need write blog use article tag header footer and many more. this is not only help a developer also help to seo. and when need recode any website and they're use Semantic tag so any developer can read code easily.</p>
            </div>
            <div className='max-w-screen-xl mx-auto border p-5 mt-5'>
                <h2 className='text-4xl font-bold mb-8'>What is Inline Block Element?</h2>
                <p className='text-2xl'> Every html tag has their own behavior some tag is block some are inline and some of them inline block. basically inline means which tag behavior is only take which amount width they need. and block element take whole area of their width. its means no tag can be sit there. like div is block element when write a code using div it will take whole area but img and p tag fully different then div or other block element but we can change their behavior it means we can set block behavior change inline and inline behavior can change to block or inline block. </p>
            </div>
        </div>
    );
};

export default Blogs;