import logging

LOG_DIR = '/logs'


class SkipStaticRequestsFilter(logging.Filter):
    # https://stackoverflow.com/questions/23833642/django-how-to-filter-out-get-static-and-media-messages-with-logging
    def filter(self, record):
        # print(record)
        if record.request.path.startswith('/static/') or record.request.path.startswith('/media/'):
            return 0
        return 1


LOGGINGDICT = {
    'version': 1,
    # 'disable_existing_loggers': True,
    'disable_existing_loggers': False,
    'filters': {
        'require_debug_false': {'()': 'django.utils.log.RequireDebugFalse', },
        'require_debug_true': {'()': 'django.utils.log.RequireDebugTrue', },
        # 'skip_static': {'()': 'SkipStaticRequestsFilter', },
    },
    'formatters': {
        'django.server': {
            '()': 'django.utils.log.ServerFormatter',
            'format': '[{server_time}] {message}',
            'style': '{',
        },
        'standard': {
            'format': "%(levelname)s [%(name)s::%(lineno)s] %(message)s",
            'datefmt': "%d/%b/%Y %H:%M:%S",
        },
    },
    'handlers': {
        'console2': {
            'level': 'INFO',
            'filters': ['require_debug_true'],
            'class': 'logging.StreamHandler',
            'formatter': 'standard',
        },
        'console': {
            'level': 'INFO',
            'filters': ['require_debug_true'],
            'class': 'logging.StreamHandler',
        },
        'django.server': {
            'level': 'INFO',
            'class': 'logging.StreamHandler',
            'formatter': 'django.server',
        },
        'mail_admins': {
            'level': 'ERROR',
            'filters': ['require_debug_false'],
            'class': 'django.utils.log.AdminEmailHandler'
        }
    },
    'loggers': {
        # MIQ
        'miq.analytics': {
            'handlers': ['console2'],
            'level': 'INFO',
            'propagate': True,
        },
        'miq.core': {
            'handlers': ['console2'],
            'level': 'INFO',
            'propagate': True,
        },
        'miq.honeypot': {
            'handlers': ['console2'],
            'level': 'INFO',
            'propagate': True,
        },
        'miq.staff': {
            'handlers': ['console2'],
            'level': 'INFO',
            'propagate': True,
        },

        # SHOPY

        'shopy.store': {
            'handlers': ['console2'],
            'level': 'INFO',
            'propagate': True,
        },
        'shopy.sales': {
            'handlers': ['console2'],
            'level': 'INFO',
            'propagate': True,
        },
        'shopy.shop': {
            'handlers': ['console2'],
            'level': 'INFO',
            'propagate': True,
        },

        # DJANGO

        'django': {
            'handlers': ['console', 'mail_admins'],
            'level': 'INFO',
        },
        'django.server': {
            'handlers': ['django.server'],
            'level': 'INFO',
            # 'filters': ['skip_static'],
            'propagate': False,
        },
    }
}
