"""empty message

Revision ID: 638576aed85e
Revises: 
Create Date: 2024-12-17 02:29:27.551043

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '638576aed85e'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    # op.drop_column('lista_de_ordenes', 'menu_day')
    # ### end Alembic commands ###
    pass


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    # op.add_column('lista_de_ordenes', sa.Column('menu_day', sa.VARCHAR(), autoincrement=False, nullable=False))
    # ### end Alembic commands ###
    pass
