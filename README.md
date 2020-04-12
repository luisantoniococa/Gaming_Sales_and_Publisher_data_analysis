# Gaming_Sales_and_Publisher_data_analysis
We are using data of game sales and a list of stock tikers to find the relationship between each other.

Data sets:

https://www.kaggle.com/gregorut/videogamesales
https://data.world/zacharius/project3/workspace/file?filename=Video_Game_Sales_as_of_Jan_2017.csv
https://data.world/craigkelly/steam-game-data
https://toolbox.google.com/datasetsearch/search?query=video%20game%20revenue&docid=Xm4rmlTtOZVxZPk2AAAAAA%3D%3D
https://www.wallstreetsurvivor.com/find-stocks/interest/games-stocks/
https://www.investorideas.com/GIS/Stock_List.asp

Project Name: Video Game Sales 
Project Members:  
Luis Coca 
Daniel Ruch 
Christina Clements 
 
For this project we found a data set on Kaggle detailing video games ranked by sales on Kaggle, specifically: https://www.kaggle.com/gregorut/videogamesales. This data included the platform and publisher as well as sales for varying continents. We also found a website which was a  gaming industry stocks directory, specifically: https://www.investorideas.com/GIS/Stock_List.asp.  
We first tried to web scrape the investor page and sort out the stock ticker within a p tag of a specific class listed when we inspected the page, however, upon trying to split out the information we needed, we found the structure of the data was inconsistent, sometimes having more data than we wanted and therefore providing dirty data. We then ran the csv from the kaggle website through Pandas to just pull out the publisher, put this into a new csv which we could use to query the information we needed and finish scraping the investor web page.  
We next scraped all of the publisher name data as well as the stock ticker information from the investor page and built a data frame on Jupyter Notebook, listing the publisher name and the ticker. We then converted that into a csv. As we looked to use sql to sort this investor csv into publisher and stock ticker, we discovered we needed to separate out the publisher name from the stock exchange from the stock ticker. The stock ticker could be separated by the colon delineator, however, since the publisher name sometimes includes commas, and the delineator between the publisher and the stock exchange is also a comma, this would be too complicated to sort out within the time allotted.  
We found a third source listing out the publisher names and the stock tickers, specifically: https://datahub.io/core/nyse-other-listings. With this data set, we were able to extract a cleaner data set. Foregoing the Investors page, we used this datahub and combined the publisher names and stock tickers with our edited kaggle data set which used the game name, game platform, year of sales, publisher, and sales for North America. 
Our final schemata is as follows: 
 
create table video_game ( 
 vg_id SERIAL PRIMARY KEY, 
name varchar, 
platform varchar, 
year int, 
 pub_id int, 
sales float, 
CONSTRAINT vg_pub_fk FOREIGN KEY (pub_id) 
REFERENCES publisher (publisher_id) 
);create table publisher ( 
 publisher_id SERIAL PRIMARY KEY, 
 publisher_name varchar, 
ticker varchar). 
We can further clean this data as desired for our future group projects. 
# Machine Learning Regression Analysis

The slides for the machine learning section of this project can be find in the link below

https://docs.google.com/presentation/d/1W2BlJyfLL7RiZf6Fm4X1u9NhNIjAnqDd9qg9sSgx6nY/edit?usp=sharing
