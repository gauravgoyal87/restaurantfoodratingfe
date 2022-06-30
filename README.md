# Greasy Spoon

An app where you can keep track of and rate restaurants you've been to and the dishes you've eaten.

## Wire frame and images

![1e988d41-7811-4a0f-9e16-4f6d0eb9ca15](https://user-images.githubusercontent.com/103523822/176737198-8ad66826-28f2-41b5-b556-1faa0bc8bf0c.png)

![0-2](https://user-images.githubusercontent.com/103523822/176737259-a3fb2e61-5563-4bd5-b593-295e4eda461e.jpg)

## Technologies used

1. React.js
2. CSS
3. Figma
4. Axios

## Installation instructions:

deployment link here

## User stories

- As a user, I want to overview information of a restaurant.
- As a user, I want to update menu with its review.
- As a user, I want to able to delete a restaurant.
- As a user, I want to write a comment about the menu.
- As a user, I want to upload my picture of my meal.

# Code Snippet

Form Handlers for adding a food:

`

const [form, setForm] = useState({
    image: "",
    dish: "",
    comment: "",
    rating: "",
    restaurantName: restName,
  });

  const handleImage = (e) => {
    setForm({
      image: e.target.value,
      dish: form.dish,
      comment: form.comment,
      rating: form.rating,
      restaurantName: restName,
    });
  };

  const handleDish = (e) => {
    setForm({
      image: form.image,
      dish: e.target.value,
      comment: form.comment,
      rating: form.rating,
      restaurantName: restName,
    });
  };

  const handleComment = (e) => {
    setForm({
      image: form.image,
      dish: form.dish,
      comment: e.target.value,
      rating: form.rating,
      restaurantName: restName,
    });
  };

  const handleRating = (e) => {
    setForm({
      image: form.image,
      dish: form.dish,
      comment: form.comment,
      rating: e.target.value,
      restaurantName: restName,
    });
  };

  const handleSubmit = () => {
    axios.post("http://localhost:4040/api/food", form).then((res) => {
      console.log(res.data);
    });
  };
  
`

## Unsolved problems

Deployment
Refresh issues?


## Resources & credits

