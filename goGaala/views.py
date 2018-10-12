"""
Routes and views for the flask application.
"""

from datetime import datetime
from flask import render_template
from goGaala import app

@app.route('/')
@app.route('/home')
def home():
    """Renders the home page."""
    return render_template(
        'index.html',
        title='Home Page',
        year=datetime.now().year,
    )

@app.errorhandler(404)
def page_not_found(error):
    return render_template('index.html'), 404


@app.route('/contact')
def contact():
    """Renders the contact page."""
    return render_template(
        'contact.html',
        title='Contact',
        year=datetime.now().year,
        message='Your contact page.'
    )

@app.route('/products')
def products():
    """Renders the contact page."""
    return render_template(
        'products.html',
        title='Products',
        year=datetime.now().year,
        message='Your contact page.'
    )

@app.route('/team')
def about():
    """Renders the about page."""
    return render_template(
        'team.html',
        title='Team',
        year=datetime.now().year,
        message='Your application description page.'
    )
