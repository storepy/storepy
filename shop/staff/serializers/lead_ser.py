from rest_framework import serializers

from shop.models import Lead


class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lead
        read_only_fields = ('slug', 'created', 'updated')
        fields = (
            'name', 'number', 'email', 'ig_handle',
            *read_only_fields
        )
