from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def __init__(self, name, email, password):
        self.name = name
        self.email = email
        self.password = password
        self.is_active = True

    def serialize(self):
        return {
            "id":self.id,
            "name":self.name,
            "email":self.email,
            "is_active":self.is_active
        }