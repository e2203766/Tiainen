import { Button, Paper, Typography } from '@mui/material';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import './Banner.css'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { HashLink } from 'react-router-hash-link';

const Banner = () => {

    function Item(props) {
        return (
            <Paper>
                <div className='banner-container'>
                    <img src={props.item.img} alt="" />
                    <div className='banner-text tracking-in-expand'>
                        <Typography component="h4" variant="h5">
                            {props.item.name}
                        </Typography>
                        <Typography component="p">
                            {props.item.description}
                        </Typography>

                        <HashLink smooth to="/appointment#appointment" className='text-style'>
                            <Button sx={{ mt: 2 }} variant="contained" className="CheckButton">
                                Connect with us
                                <AddCircleIcon />
                            </Button>
                        </HashLink>
                    </div>
                </div>

            </Paper>
        )
    }
    const items = [
        {
            name: "You are just one click away from our beautiful life",
            description: "Probably the most random thing you have ever seen!",
            img: "https://forbes.ua/static/storage/originals/3/f1/f622c4f4d14e530b8eecd9f165351f13.jpg"
        },
        {
            name: "Be yourself, be happy",
            description: "Get our support from our team experts and lead a happy life",
            img: "https://prompthero.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaWt5TWpVNU1qRm1NQzFpWW1RMUxUUTNNV1V0WWpObU9DMWlNR0ZtTkRjeE5USmlNekFHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6ImJsb2JfaWQifX0=--a1e1f5c41b66dbb107c0bdcaddade966ee00f43c/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBPZ2wzWldKd09oUnlaWE5wZW1WZmRHOWZiR2x0YVhSYkIya0NBQWd3T2dwellYWmxjbnNKT2hOemRXSnpZVzF3YkdWZmJXOWtaVWtpQjI5dUJqb0dSVlE2Q25OMGNtbHdWRG9PYVc1MFpYSnNZV05sVkRvTWNYVmhiR2wwZVdsZiIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--935666d13f63ed5aca9daa2416340e3a90b6014e/prompthero-prompt-8cec09182dd.png"
        },
        {
            name: "Get some idea",
            description: "Contact us",
            img: "https://forbes.ua/static/storage/originals/4/e5/1f8e3478f4c2abfaa6daed4d55fb6e54.jpg"
        },
        {
            name: "Get some idea",
            description: "Contact us",
            img: "https://ms.detector.media/doc/images/news/30064/i75_ArticleImage_30064.webp"
        },
        {
            name: "Get some idea",
            description: "Contact us",
            img: "https://dia.dp.gov.ua/wp-content/uploads/2023/07/Ukraine-Finland.jpg"
        }
    ]
    return (
        <div>
            <Carousel>
                {
                    items.map((item, i) => <Item key={i} item={item} />)
                }
            </Carousel>
        </div>
    );
};

export default Banner;