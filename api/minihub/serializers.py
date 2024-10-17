from rest_framework import serializers

from minihub.models import Company


class CompanySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Company
        fields = [
            'name',
        ]
