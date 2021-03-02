# Homecooked

## Overview
Homecooked allows users to see a massive variety of ingredients by inputting foods they have at home or cultural cuisines they would like to recreate. With more than 72% of local restaurants modifying their hours of service and employees; Homecooked serves to offer a covid-free dining experience by formulating diverse recipes that mimic foods served in local pre-pandemic restaurants. The recipe generator optimizes queries that are backed by a restful API. 
## Technical Challenges and Methods
The application offered many challenges. The first challenge was finding a compatible and maintained Rest API. Most Rest API's come with a variance of problems such as network maintenance, server disconnect, and monthly payments; fortunately, after many hours I selected an API server from TheMealDB.com. After finding an appropriate API, I had to research a way to limit my query selections by customizing parameters on the API's URL. The last challenge I faced was academic rather than technical. The project allowed me to investigate the relationship between React State and Props; I came to the self-defined conclusion that in React, the state and prop act as bridges of concurrent Data. 
## Design Logic
The design layer of this application was minimalistic. I wanted to create a google-like frontend layer; a design most people born in the internet age would recognize. Placing the input box (search tab) in the middle of the page permits a feeling of endless variety to the user.  Apart from the page-centered search tab, I wanted to include compartments rather than links on the results page. The compartments produced by Bootstrap would create a blog-type atmosphere catering to Home cook's trendy demographic.
### Home

![Screen Shot 2020-08-04 at 8 20 35 AM](https://media.git.generalassemb.ly/user/28284/files/d42edc00-d62b-11ea-83a6-95ff8ce9bd1e)

### Results

![Screen Shot 2020-08-04 at 8 21 20 AM](https://media.git.generalassemb.ly/user/28284/files/e4df5200-d62b-11ea-813f-cd17eaaa68b9)

## Features

- Deletion or edit of saved recipes   
- Carousel slides of recipe output 
- Query filter selections  for recipe origin  
- Image and title selection of selected recipe 
- Query results filled with complete ingredients. 
## Ongoing Intergrations 

- Token system allowing User sign in page.  
- Comment Box integration with Moment.js  


## API Strcuture

{
meals: [
{
strMeal: "Baked salmon with fennel & tomatoes",
strMealThumb: "https://www.themealdb.com/images/media/meals/1548772327.jpg",
idMeal: "52959"
},
