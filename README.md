1. JSX is a syntax that lets us write HTML-like code inside JavaScript/React, making UI creation easier.

2. Props are data passed from a parent component to a child, while state is data managed and changed inside a component.

3. useState stores and updates dynamic data; in this project, I used it to store technologies and selected stack technologies.

4. useEffect runs code after a component renders; I used it to fetch the JSON technology data when the app loads.

5. A unique key helps React identify each item in a .map() list and update the UI efficiently.

6. Conditional rendering means showing different UI based on a condition; I used it to show the empty stack message when no technology is selected.

7. A parent sends data to a child through props, and a child can communicate back by calling a function passed from the parent as a prop.
