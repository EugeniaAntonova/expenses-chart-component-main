# Frontend Mentor - Expenses chart component solution

This is a solution to the [Expenses chart component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Continued development](#continued-development)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the bar chart and hover over the individual bars to see the correct amounts for each day
- See the current day’s bar highlighted in a different colour to the other bars
- View the optimal layout for the content depending on their device’s screen size
- See hover states for all interactive elements on the page
- **Bonus**: Use the JSON data file provided to dynamically size the bars on the chart


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

Markup was quite an easy taks, but it was not intuitive for me how the app was supposed to work. It is shown in the design, that after the different color bar, oter bars stand. Which meant to me, that the different color is used to distinguish the highest expence in the week. Meanwhile, it is said in description, that it must show the current day. How can i see expences, if those days did not come yet? So in this case, i have decided to use the different color for the highest bar, assuming that the last bar is the current day. 

Also, it was not obvious to me, how to count height of bars. So i started of with logic, taking the given height from the design as 3px per dollar (it was 2.88px, but i rounded it up). Then i thought - what will the interface look like, if user has one day the expences of 1000 dollars? the chart will become enormous! so there will be two options - if all bars turn out to be less than 200px - all of them count as 3px per dollar, if one or more of them are higher, then i take the maximum value as 200px, and count height for all the rest of them relative to what percentage they make out of the highest.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- vanilla JS

### Continued development

I am really struggling to make markup more semantic and i don`t always see roles of differen UI parts. I am working on it, class naming, BEM, more accurate css and better js.

## Author

- Linkedin - [Eugenia Antonova](https://www.linkedin.com/in/eugenia-antonova-7b4511276/)
- Instagram - [@gretchen.wolakiewicz](https://instagram.com/gretchen.wolakiewicz)
