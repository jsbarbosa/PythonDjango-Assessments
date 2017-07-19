import os
import random
from faker import Faker
from first_app.models import User

os.environ.setdefault('DJANGO_SETTINGS_MODULE','first_project.settings')

import django
django.setup()

fakegen = Faker()

def populate(N=5):
    '''
    Create N Entries of Dates Accessed
    '''

    for entry in range(N):
        # Create Fake Data for entry
        fake_first, fake_last = fakegen.name().split(' ')
        fake_email = fakegen.email()

        # Create new Webpage Entry
        User.objects.get_or_create(first_name=fake_first,
                last_name=fake_last, email=fake_email)[0]

        # Create Fake Access Record for that page
        # Could add more of these if you wanted...
        # accRec = AccessRecord.objects.get_or_create(name=webpg,date=fake_date)[0]


if __name__ == '__main__':
    print("Populating the databases...Please Wait")
    populate(20)
    print('Populating Complete')
