"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS
from utils import APIException, generate_sitemap
from admin import setup_admin
from models import db, User, Planet, Favorite, People
#from models import Person

app = Flask(__name__)
app.url_map.strict_slashes = False

db_url = os.getenv("DATABASE_URL")
if db_url is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = db_url.replace("postgres://", "postgresql://")
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

MIGRATE = Migrate(app, db)
db.init_app(app)
CORS(app)
setup_admin(app)

# Handle/serialize errors like a JSON object
@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# generate sitemap with all your endpoints
@app.route('/')
def sitemap():
    return generate_sitemap(app)

@app.route('/user', methods=['GET'])
def handle_hello():
    users=User.query.all()
    if users ==  []:
        return jsonify({"msg":"Users doesn't exist"}),404
    response_body = [item.serialize() for item in users]

    return jsonify(response_body), 200
# this only runs if `$ python src/app.py` is executed

@app.route('/user/<int:user_id>', methods=['GET'])
def get_user_id(user_id):
    user=User.query.filter_by(id=user_id).first()
    if user is None:
        return jsonify({"msg":"Users doesn't exist"}),404
    return jsonify(user.serialize()),200

@app.route('/people', methods=['GET'])
def get_people():
    characters=People.query.all()
    if characters ==  []:
        return jsonify({"msg":"Characters doesn't exist"}),404
    response_body = [item.serialize() for item in characters]

    return jsonify(response_body), 200

@app.route('/people/<int:people_id>', methods=['GET'])
def get_people_id(people_id):
    character=People.query.filter_by(id=people_id).first()
    if character is None:
        return jsonify({"msg":"Characters doesn't exist"}),404
    return jsonify(character.serialize()),200

@app.route('/planet', methods=['GET'])
def get_planets():
    planets=Planet.query.all()
    if planets ==  []:
        return jsonify({"msg":"Planets doesn't exist"}),404
    response_body = [item.serialize() for item in planets]

    return jsonify(response_body), 200

@app.route('/planet/<int:planet_id>', methods=['GET'])
def get_planet_id(planet_id):
    planet=Planet.query.filter_by(id=planet_id).first()
    if planet is None:
        return jsonify({"msg":"Planets doesn't exist"}),404
    return jsonify(planet.serialize()),200

@app.route('/favorite', methods=['GET'])
def get_favorite():
    favorites=Favorite.query.all()
    if favorites ==  []:
        return jsonify({"msg":" Favorites doesn't exist"}),404
    response_body = [item.serialize() for item in favorites]

    return jsonify(response_body), 200

@app.route('/favorite/<int:favorite_id>', methods=['GET'])
def get_favorite_id(favorite_id):
    fav=Favorite.query.filter_by(id=favorite_id).first()
    if fav is None:
        return jsonify({"msg":"No existe el fav"}),404
    return jsonify(fav.serialize()),200

@app.route('/favorite/planet/<int:planet_id>', methods=['POST'])
def post_favorite_planet(planet_id):
    body = request.json
    email = body.get("email")
    user = User.query.filter_by(email=email).one_or_none()
    if user == None:
        return jsonify({"msg":"User doesn't exist"}),404
   
    thePlanet = Planet.query.get(planet_id)
    if thePlanet == None:
        return jsonify({"msg":"Planet doesn't exist"}),404
    
    new_favorite = Favorite()
    new_favorite.user = user
    new_favorite.planet = thePlanet
    db.session.add(new_favorite)
    db.session.commit()
   

    return jsonify(new_favorite.serialize()), 200

@app.route('/favorite/people/<int:people_id>', methods=['POST'])
def post_favorite_people(people_id):
    body = request.json
    email = body.get("email")
    user = User.query.filter_by(email=email).one_or_none()
    if user == None:
        return jsonify({"msg":"User doesn't exist"}),404
   
    people = People.query.get(people_id)
    if people == None:
        return jsonify({"msg":"Character doesn't exist"}),404
    
    new_favorite = Favorite()
    new_favorite.user = user
    new_favorite.people = people
    db.session.add(new_favorite)
    db.session.commit()
   
    return jsonify(new_favorite.serialize()), 200

@app.route('/favorite/planet/<int:planet_id>', methods=['DELETE'])
def delete_favorite_planet(planet_id):
    body = request.json
    email = body.get("email")
    user = User.query.filter_by(email=email).one_or_none()
    if user == None:
        return jsonify({"msg":"User doesn't exist"}),404
   
    thePlanet = Planet.query.get(planet_id)
    if thePlanet == None:
        return jsonify({"msg":"Planet doesn't exist"}),404
    
    favorite_delete = Favorite.query.filter_by(user_id=user.id,planet_id=thePlanet.id).first()
    if favorite_delete == None:
        return jsonify({"msg":"Favorite doesn't exist"}),404
    db.session.delete(favorite_delete)
    db.session.commit()
   

    return jsonify({"msg":"Delete"}), 200

@app.route('/favorite/people/<int:people_id>', methods=['DELETE'])
def delete_favorite_people(people_id):
    body = request.json
    email = body.get("email")
    user = User.query.filter_by(email=email).one_or_none()
    if user == None:
        return jsonify({"msg":"User doesn't exist"}),404
   
    people = People.query.get(people_id)
    if people == None:
        return jsonify({"msg":"Character doesn't exist"}),404
    
    favorite_delete = Favorite.query.filter_by(user_id=user.id,people_id=people.id).first()
    if favorite_delete == None:
        return jsonify({"msg":"Favorite doesn't"}),404
    db.session.delete(favorite_delete)
    db.session.commit()
   

    return jsonify({"msg":"Delete"}), 200

   
   









if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3000))
    app.run(host='0.0.0.0', port=PORT, debug=False)
