import os
import sys
from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship, declarative_base
from sqlalchemy import create_engine
from eralchemy2 import render_er

Base = declarative_base()

class User(Base): 
    __tablename__ = 'user'
    id = Column(Integer, primary_key=True) #id: primary key que identifica a cada usuario de manera única
    name = Column(String(250), nullable=False)
    last_name = Column (String(250), nullable = False)
    username = Column(String(50), unique=True)
    email = Column(String(100), nullable=False, unique=True) # El email siempre es único
    password = Column(String(250), nullable=False)

class Planet(Base):
    __tablename__ = 'planet'
    id = Column(Integer, primary_key=True)  
    name = Column(String(200), nullable=False)
    population = Column(Integer)
    description = Column(String(250))  
    weather = Column(String(50), nullable=False)
    url = Column(String(200))

class Character(Base):
    __tablename__ = 'character'
    id = Column(Integer, primary_key=True)
    name = Column(String(100), nullable=False)
    age = Column(Integer, nullable=True)
    gender = Column (String(25))
    eyes_color = Column (String (25))
    skin_color = Column (String (25))

class Favorite(Base):  
    __tablename__ = 'favorite'
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('user.id')) 
    user = relationship('User') # Relación uno a muchos con Favorite

    planet_id = Column(Integer, ForeignKey('planet.id'), nullable=True)
    planet = relationship('Planet') #Relación uno a muchos con Favorite

    character_id = Column(Integer, ForeignKey('character.id'), nullable=True)
    character = relationship('Character') # Relación uno a muchos con Favorite

## Draw from SQLAlchemy base
render_er(Base, 'diagram.png')


# Tablas =User, Planet, Character
# Columnas = ropiedades de cada tabla

