
from miq.auth.serializers import ImageSerializer


class CoverMixin(object):
    image_serializer = ImageSerializer

    def get_cover_data(self, obj):
        if not obj.cover:
            return
        return self.image_serializer(obj.cover).data
