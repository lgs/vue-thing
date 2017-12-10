# vue-thing

Demo application to create real-time Twitter search.

Frontend Demo: <https://sevilayha.github.io/vue-thing/>

Node API Demo: <https://wt-8a8bf3a2c952984defbd6bb48304b38e-0.run.webtask.io/vue-twitter-search?query=pokemon>

## Overview

### Node Serverless API (webtask.io)

Our Node API is responsible for authenticating to the Twitter API. It will also search Twitter and return the results.

We used Node to connect to the Twitter API because OAuth authentication was required.

<https://wt-8a8bf3a2c952984defbd6bb48304b38e-0.run.webtask.io/vue-twitter-search>

### Vue Frontend

Our Vue frontend is responsible for contacting our Node API with a search query.

It will display the tweet results.
