# http-protocol
A demonstration to make a strong depth understanding in HTTP

# [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview#:~:text=HTTP%20is%20a,scripts%2C%20and%20more.) has a great description of HTTP protocol

## we use http to fetch resources 

an example fo resources would be:
1. html, css, js and assets files like images and more.
2. json *JavaScript Son* 

But they all share something in common, they all originally a text. That's why we call it **Hyper Text Transform Protocol**

## First, we create new npm package:
```
npm init
```
### In our entry point `index.js` (create the file if it doesn't exist).

*NodeJs comes with a build in [`http` module]('https://nodejs.org/api/http.html#:~:text=The%20HTTP%20interfaces%20in%20Node.js%20are%20designed%20to%20support%20many%20features%20of%20the%20protocol%20which%20have%20been%20traditionally%20difficult%20to%20use.%20In%20particular%2C%20large%2C%20possibly%20chunk%2Dencoded%2C%20messages.%20The%20interface%20is%20careful%20to%20never%20buffer%20entire%20requests%20or%20responses%2C%20so%20the%20user%20is%20able%20to%20stream%20data.')*

### Let's import the http module in the first line of out entry point script
```
const http = require('http')
```

*Now we have an access to the http interface through our `http` variable*

### Now, we can call `createServer` method to create our http server
```
let server = http.createServer((req, res) => {
    
})
```

*By calling `createServer` method our callback function will be executed every time our server receives a request from a clinet*
We will followup on req and res parameters.

#### If you don't know what are callback functions, please refer to this [article](https://www.freecodecamp.org/news/javascript-callback-functions-what-are-callbacks-in-js-and-how-to-use-them/)

### It's important to know that our server won't work yet, as we need to tell it to listen to a unique port
```
server.listen(6200, () => {
    console.log('Server is running over http://localhost:6200')
})
```

### It's time to run the server, as we suppose to get `Server is running over http://localhost:6200` in the consol


# Now let's the fun to begin!

## Make the required modifications in order to achieve the following
1. ~~Return `html` resource for route `/` and for `GET` | 3 points  |  completed by jo~~
2. Return `img` resource for route `/random` and for `GET` | 3 points
3. Return `json` resource *from csv file db source* | 6 points 
4. Return `json` resource *from sql db source* | 12 points

### The rules of the game:
1. We have only 4 tasks, which means the first 4 learners to submit a solution for tasks win
2. The leaner that submitted a valid solution acquire an amount of points based on the complexity of the task
3. Submitting a solution should and only be submitted through creating pull-request
4. A valid pull-request title should be in the following format: `task-emailAddress-firstName-lastName`

Maybe you wounder now how to create *pull-request*, so let's create an scenario example:

[Refer to this link if you have no idea how to about the process of creating a pull-request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)


