require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors")

const app = express();

app.use(cors());
app.use(express.urlencoded({extended:true}));

const API_KEY =process.env.API_KEY;
async function fetchnews(url, res) {
    try {
        const response = await axios.get(url);
        if (response.data.totalResults > 0) {
            res.json({
                status: 200,
                success: true,
                message: "successfully fetched data",
                data: response.data,
            });
        } else{
            res.json({
                status: 200,
                success: true,
                message: "no more result to fetch data",
            })
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            success: false,
            message: "Error fetching data",
            error: error.message,
        });
    }
}

app.get('/all-news',(req,res)=>{
    let pageSize = parseInt(req.query.pageSize) || 40;
    let page = parseInt(req.query.page) || 1;

    let url = `https://newsapi.org/v2/everything?q=page=${page}&pageSize=${pageSize}&apiKey=${API_KEY}`

    fetchnews(url,res);
});

app.options("/top-headlines", cors());
app.get("/top-headlines", async (req, res) => {
    try {
        let pageSize = parseInt(req.query.pageSize) || 80;
        let page = parseInt(req.query.page) || 1;
        let category = req.query.category || "business";
        let url = `https://newsapi.org/v2/top-headlines?category=${category}&language=en&page=${page}&pageSize=${pageSize}&apiKey=${process.env.API_KEY}`;

        await fetchnews(url, res);
    } catch (error) {
        console.error("Error fetching top headlines:", error);
        res.status(500).json({
            status: 500,
            success: false,
            message: "Error fetching top headlines",
            error: error.message,
        });
    }
});

app.options("/country/:iso", cors());

app.get("/country/:iso", async (req, res) => {
    try {
        let pageSize = parseInt(req.query.pageSize) || 80;
        let page = parseInt(req.query.page) || 1;
        let country = req.params.iso; // Use req.params.iso to get the ISO parameter
        let url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.API_KEY}&page=${page}&pageSize=${pageSize}`;

        await fetchnews(url, res);
    } catch (error) {
        console.error("Error fetching news by country:", error);
        res.status(500).json({
            status: 500,
            success: false,
            message: "Error fetching news by country",
            error: error.message,
        });
    }
});


const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`app is running on ${PORT}`);
})
