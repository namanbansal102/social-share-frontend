from flask import Flask,render_template
app=Flask(__name__)
print("Running Flask app")
@app.route('/')
def returnIndex():
    print("Running Index Page")
    return render_template('index.html')
@app.route('/index.html')
def returnIndexPage():
    print("Running Index Page")
    return render_template('index.html')
@app.route('/polling.html')
def returnPoll():
    print("Getting poll Page ")
    return render_template('polling.html')
@app.route('/about.html')
def returnAbout():
    print("Running About page")
    return render_template('about.html')
@app.route('/contact_us.html')
def returnContact():
    print("Running Contact Us page")
    return render_template('contact_us.html')
@app.route('/mentor.html')
def returnMentor():
    print("Running Mentor page")
    return render_template('mentor.html')
@app.route('/favourites.html')
def returnFavour():
    print("Running Favourites page")
    return render_template('favourites.html')
@app.route('/login.html')
def returnLogin():
    print("Running Login page")
    return render_template('login.html')


app.run(debug=True)