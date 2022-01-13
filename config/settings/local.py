import os
import environ
from pathlib import Path

from miq.config import *

env = environ.Env(
    DEBUG=(bool, False),
    SECRET_KEY=(str, 'my-secret-key-goes-here'),
    DB_NAME=(str, ''),
    DB_USER=(str, ''),
    DB_PWD=(str, ''),

    GH_DB_NAME=(str, 'localhost'),
    GH_DB_USER=(str, 'postgres'),
    GH_DB_PWD=(str, 'postgres'),
    GH_DB_HOST=(str, '127.0.0.1'),
    GH_DB_PORT=(str, '5432'),
)

environ.Env.read_env()

BASE_DIR = Path(__file__).resolve().parent.parent.parent

CLIENT_DIR = BASE_DIR / 'client'
TEMPLATES_DIR = BASE_DIR / 'templates'
BUILD_DIR = CLIENT_DIR / 'build'

SECRET_KEY = env('SECRET_KEY')

DEBUG = env('DEBUG')

CORS_ORIGIN = 'http://192.168.1.243:3000'

CSRF_COOKIE_NAME = 'csrftoken'
CSRF_HEADER_NAME = 'HTTP_X_CSRFTOKEN'

# if true, browsers may ensure that the cookie is only sent with an HTTPS connection
CSRF_COOKIE_SECURE = False

CSRF_TRUSTED_ORIGINS = []
if CORS_ORIGIN:
    CSRF_TRUSTED_ORIGINS.append(CORS_ORIGIN)

ADMINS = [('Michael', 'michaelgainyo@gmail.com'), ]
# CORS_ORIGIN = 'http://127.0.0.1:3000'

ALLOWED_HOSTS = ['*']

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django.contrib.humanize',

    #
    'django.contrib.sites',
    'django.contrib.sitemaps',

    # VENDORS
    'rest_framework',

    # CORE
    'miq.apps.MiqConfig',
    'shop.apps.ShopConfig',
]

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': env('DB_NAME'),
        'USER': env('DB_USER'),
        'PASSWORD': env('DB_PWD'),
        'HOST': '',
        'PORT': '',
    }
}


"""
# MIDDLEWARE
"""

DJANGO_MIDDLEWARES = (
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
)


MIDDLEWARE = (

    # CORS
    'miq.middleware.CORSMiddleware',
    #
    *DJANGO_MIDDLEWARES,
    #
    'miq.middleware.SiteMiddleware',
    'shop.middleware.StoreMiddleware',
)

ROOT_URLCONF = 'config.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [TEMPLATES_DIR],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'config.wsgi.application'


AUTH_PASSWORD_VALIDATORS = [
    {'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator', },
    {'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator', },
    {'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator', },
    {'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator', },
]

"""
# AUTHENTICATION
"""


"""
# REST FRAMEWORK
"""

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.SessionAuthentication',
    ],

    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticated',  # Set for all views
    ],

    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 16,
}


"""
# SITE
"""

SITE_ID = 1

"""
# API
"""

API_VERSION = 1
API_PATH = f'api/v{API_VERSION}'

"""
# LANG & LOCATION
"""

USE_TZ = True
USE_L10N = True
USE_I18N = True
TIME_ZONE = 'America/New_York'
LANGUAGE_CODE = 'en-us'


"""
# AUTO FIELD
"""

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

"""
# MEDIA & STATIC
"""

STATIC_URL = '/static/'
STATICFILES_DIRS = [BUILD_DIR / 'static', ]
STATIC_ROOT = BASE_DIR / 'static'

MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'

DATA_UPLOAD_MAX_MEMORY_SIZE = 2621440


"""
# Testing with github actions
"""

if os.environ.get('GITHUB_WORKFLOW'):
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql',
            'NAME': env('GH_DB_NAME'),
            'USER': env('GH_DB_USER'),
            'PASSWORD': env('GH_DB_PWD'),
            'HOST': env('GH_DB_HOST'),
            'PORT': env('GH_DB_PORT'),
        }
    }
