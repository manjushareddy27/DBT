import pytest
from rest_framework import status
from rest_framework.test import APIClient
from rest_framework.reverse import reverse

from minihub.factories import (
    CompanyFactory,
)


@pytest.mark.django_db
def test_company_list():
    CompanyFactory.create(name='Acme, Inc.')
    client = APIClient()
    response = client.get(reverse('company-list'))

    assert response.status_code == status.HTTP_200_OK

    data = response.data
    assert len(data) == 1
    assert data[0]['name'] == 'Acme, Inc.'
