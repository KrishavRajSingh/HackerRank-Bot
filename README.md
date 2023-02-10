# HackerRank-Bot

This script uses the Puppeteer library to automate a login process to the HackerRank website and solve two sample algorithm questions. It launches a web browser and opens a new tab to go to Google's website. Then, it types "HackerRank login" in the search bar and clicks on the first result.

It then enters the email and password provided in the code and logs in to the HackerRank website. It clicks on the "Algorithms" section and then on the "Warmup" subcategory. The script then waits for 3 seconds, finds the buttons for the algorithm questions and logs the number of questions.

For each question, the script calls the questionSolver function, which clicks on the question and the code editor. It then waits for the "Input" checkbox to appear and clicks on it. The function then types in the answer to the question and clicks on the "Run Code" button.

Please note that this code is only a sample and might not work as expected as it only covers a limited functionality. To make it functional, you might need to modify the code and add error handling mechanisms.
