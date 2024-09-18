import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Rate, Button, Input, message } from 'antd';
import CheckAvailable from './Check-available';
import './Product.css';
import { useNavigate } from 'react-router-dom';

const SingleItem = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [name, setName] = useState('');
    const [feedback, setFeedback] = useState('');
    const [rating, setRating] = useState(0);
    const [feedbacks, setFeedbacks] = useState([]); 
    const navigate = useNavigate();

   
    const goToProducts = () => {
        navigate('/products');
    };

    
    useEffect(() => {
        const fetchProduct = async () => {
            const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
            const allProducts = [...storedProducts];

            const foundProduct = allProducts.find(prod => prod.id.toString() === id);

            if (foundProduct) {
                setProduct(foundProduct);
            } else {
                try {
                    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                    const apiProduct = await response.json();
                    setProduct({
                        id: apiProduct.id,
                        imgSrc: apiProduct.image,
                        title: apiProduct.title,
                        price: apiProduct.price,
                        details: apiProduct.description,
                        items: apiProduct.rating.count
                    });
                } catch (error) {
                    console.error('Error fetching product:', error);
                }
            }
        };

        
        const loadFeedbacks = () => {
            const storedFeedbacks = JSON.parse(localStorage.getItem(`feedbacks_${id}`)) || [];
            setFeedbacks(storedFeedbacks);

            
            const storedRatings = JSON.parse(localStorage.getItem('ratings')) || {};
            if (storedRatings[id]) {
                setRating(storedRatings[id]);
            }
        };

        fetchProduct();
        loadFeedbacks();
    }, [id]);

    
    const handleSubmitFeedback = () => {
        if (!name || !feedback) {
            message.error('Please enter your name and feedback');
            return;
        }

        const newFeedback = { name, feedback, rating };
        const updatedFeedbacks = [...feedbacks, newFeedback];

        
        setFeedbacks(updatedFeedbacks);
        localStorage.setItem(`feedbacks_${id}`, JSON.stringify(updatedFeedbacks)); 

        const storedRatings = JSON.parse(localStorage.getItem('ratings')) || {};
        storedRatings[id] = rating;
        localStorage.setItem('ratings', JSON.stringify(storedRatings));

        setName('');
        setFeedback('');
        setRating(5);

        message.success('Feedback submitted successfully');
    };

    if (!product) return <div>Loading...</div>;

    const { imgSrc, title, price, details, items } = product;

    return (
        <div className='singleItemPage'>
            <div className='singleItemHeader'>
                <div className='backButton'>
                    <Button onClick={goToProducts}>Back</Button>
                </div>
            </div>
            <div className='singleItem'>
                <div className='singleItemImgContainer'>
                    <img src={imgSrc} alt={title} />
                </div>
                <div className='singleItemPropertiesContainer'>
                    <h3>{title}</h3>
                    <Rate disabled value={rating} />
                    <p id='price'>{price} $</p>
                    <p id='check'><CheckAvailable items={items} /></p>
                    <p className='singleProductDetails'>{details}</p>
                </div>
            </div>

            <div className='feedbackContainer'>
                <h3>Leave Feedback</h3>
                <Input 
                    placeholder="Your Name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    style={{ marginBottom: '10px' }}
                />
                <Input.TextArea 
                    placeholder="Your Feedback" 
                    value={feedback} 
                    onChange={(e) => setFeedback(e.target.value)} 
                    rows={4} 
                    style={{ marginBottom: '10px' }}
                />
                <div>
                    <Rate 
                        onChange={setRating} 
                        value={rating} 
                    />
                </div>
                <Button type="primary" onClick={handleSubmitFeedback} style={{ marginTop: '10px' }}>
                    Submit Feedback
                </Button>

                <div className='submittedFeedbacks' style={{ marginTop: '20px' }}>
                    <h3>Customer Feedback</h3>
                    {feedbacks.length > 0 ? (
                        feedbacks.map((fb, index) => (
                            <div key={index} className='singleFeedback'>
                                <p><strong>{fb.name}</strong> (Rating: {fb.rating} stars)</p>
                                <p>{fb.feedback}</p>
                                <hr />
                            </div>
                        ))
                    ) : (
                        <p>No feedback yet. Be the first to leave feedback!</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SingleItem;
