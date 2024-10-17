from django.db import models

class Company(models.Model):
    name = models.TextField(max_length=255)


class Contact(models.Model):
    first_name = models.TextField(max_length=255)
    last_name = models.TextField(max_length=255)
    company = models.ForeignKey(
        Company,
        on_delete=models.CASCADE,
    )


class Interaction(models.Model):
    date = models.DateTimeField()
    name = models.TextField(max_length=255)
    contacts = models.ManyToManyField(Contact)
