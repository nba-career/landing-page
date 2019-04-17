# NBA Career Longevity Predictor

Are you tired of guessing which players are going to make a lasting impact in the NBA? Guess no more! This application will allow you to search current players and give you data that will give you insight into whether or not you should invest in this player for the long haul.

This site serves as a marketing page for the main React application that will feature various players and attempt to predict the longevity of that player using existing data sets. Here's the [link](https://nbacareerlength.netlify.com/) to the site.

The home page of this site describes the project to potential users and provides a way for users to login into the React application if they are interested in testing the features of this product. There is also an about page that lists all of the team members of this project.

I designed both the home page and about page for this site and I also chose the font stack, colors and images for the site. The site is mobile responsive and also includes breakpoints for tablet sizes as well. The LESS preprocessor was used to style the site and manage variables for colors and media queries. I also researched and integrated the [Animate on Scroll library](https://github.com/michalsnik/aos) to provide different animations and transitions when the user scrolls down the page. 

I used an array of objects to populate the navigation menu so that I wouldn't need to repeat the content on the home page and the about page.

I created a Class constructor and used an array of objects to populate the team data (titles, names, and images). 

On the about page, I created a modal component using JavaScript to display the biographies of each team member. If a new team member is added or removed from this project, the component will work without breaking.

